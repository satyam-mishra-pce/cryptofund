// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./ConversionRates.sol";

contract CryptoFund {
	using ConversionRates for uint;

	struct User {
		string name;
		address userAddress;
	}

	struct Proposal {
		User proposer;
		uint projectIdx;
		uint amountProposed;
		bool isSuppliedBack;
		uint amountSupplied;
		uint bonusSupplied;
	}

	struct ProjectMetadata {
		User createdBy;
		string pitch;
		uint askAmount;
		uint interestRate;
		string[] assetLinks;
		uint durationInDays;
	}

	struct ProjectData {
		uint likeCount;
		uint proposalCount;
		uint totalFunded;
	}

	struct ProjectStatus {
		bool isAskFulfilled;
		bool isProjectCompleted;
		bool isAcceptingProposals;
		uint suppliedBackAmount;
	}

	struct Project {
		ProjectMetadata metadata;
		ProjectData data;
		ProjectStatus status;
		address[] proposers;
	}

	mapping(address => User) public addressToUser;
	Project[] projects;
	mapping(uint => mapping(address => Proposal)) public projectToProposal;

	mapping(address => uint[]) public addressToProjectIdx;
	mapping(address => Proposal[]) public userToProposals;

	uint public projectCount = 0;

	modifier userExists() {
		require(
			bytes(addressToUser[msg.sender].name).length > 0,
			"User does not exist"
		);
		_;
	}

	modifier projectExists(uint projectIdx) {
		require(projectCount > projectIdx, "Project does not exist");
		_;
	}

	function updateUser(string memory name) public {
		addressToUser[msg.sender] = User({
			name: name,
			userAddress: msg.sender
		});
	}

	function createProject(
		string memory pitch,
		uint askAmount,
		uint interestRate,
		string[] memory assetLinks,
		uint durationInDays
	) public userExists {
		ProjectMetadata memory metadata = ProjectMetadata({
			createdBy: addressToUser[msg.sender],
			pitch: pitch,
			askAmount: askAmount,
			interestRate: interestRate,
			assetLinks: assetLinks,
			durationInDays: durationInDays
		});
		ProjectStatus memory status = ProjectStatus({
			isAskFulfilled: false,
			isProjectCompleted: false,
			isAcceptingProposals: true,
			suppliedBackAmount: 0
		});
		ProjectData memory data = ProjectData({
			likeCount: 0,
			proposalCount: 0,
			totalFunded: 0
		});
		address[] memory proposers;
		Project memory newProject = Project({
			metadata: metadata,
			status: status,
			data: data,
			proposers: proposers
		});
		projects.push(newProject);
		addressToProjectIdx[msg.sender].push(projectCount);
		projectCount++;
	}

	function createProposal(
		uint projectIdx
	) public payable userExists projectExists(projectIdx) {
		Project storage project = projects[projectIdx];

		require(
			project.status.isAcceptingProposals,
			"Project is not accepting proposals"
		);
		require(!project.status.isAskFulfilled, "Ask amount already fulfilled");
		require(msg.value > 0, "Proposal amount must be greater than 0");

		// Check if user has already proposed
		require(
			projectToProposal[projectIdx][msg.sender].amountProposed > 0,
			"User has already proposed"
		);

		uint usdValue = msg.value.weiToUsd();
		require(
			usdValue <= (project.metadata.askAmount - project.data.totalFunded),
			"Proposed amount exceeds remaining ask amount"
		);

		Proposal memory newProposal = Proposal({
			proposer: addressToUser[msg.sender],
			projectIdx: projectIdx,
			amountProposed: msg.value,
			isSuppliedBack: false,
			amountSupplied: 0,
			bonusSupplied: 0
		});

		project.proposers.push(msg.sender);
		projectToProposal[projectIdx][msg.sender] = newProposal;
		userToProposals[msg.sender].push(newProposal);
		project.data.totalFunded += usdValue;

		if (project.data.totalFunded >= project.metadata.askAmount) {
			project.status.isAskFulfilled = true;
			project.status.isAcceptingProposals = false;
		}

		project.data.proposalCount++;
	}

	function claimFunds(uint projectIdx) public projectExists(projectIdx) {
		Project storage project = projects[projectIdx];
		require(
			project.metadata.createdBy.userAddress == msg.sender,
			"Only project creator can claim funds"
		);
		require(project.status.isAskFulfilled, "Funding goal not reached yet");
		require(
			!project.status.isProjectCompleted,
			"Project already completed"
		);

		uint amountToTransfer = project.data.totalFunded.weiToUsd();
		payable(msg.sender).transfer(amountToTransfer);

		project.status.isProjectCompleted = true;
		project.status.suppliedBackAmount = 0; // Initialize to zero
	}

	function supplyFundsBack(
		uint projectIdx
	) public payable projectExists(projectIdx) {
		Project storage project = projects[projectIdx];
		require(project.status.isAskFulfilled, "Funding goal not reached yet");
		require(project.status.isProjectCompleted, "Project not yet completed");

		uint repaymentAmount = project.metadata.askAmount +
			((project.metadata.askAmount *
				project.metadata.interestRate *
				(project.metadata.durationInDays / 30)) / 100);
		uint ethValue = repaymentAmount.weiToUsd();
		require(msg.value >= ethValue, "Insufficient repayment amount");

		// Calculate total bonus pool based on project ask and duration
		uint totalBonus = (project.metadata.askAmount *
			project.metadata.interestRate *
			project.metadata.durationInDays) / (100 * 30); // Interest rate as a percentage

		for (uint i = 0; i < project.proposers.length; i++) {
			address proposerAddress = project.proposers[i];
			Proposal storage proposal = projectToProposal[projectIdx][
				proposerAddress
			];
			uint userBonus = (proposal.amountProposed * totalBonus) /
				project.metadata.askAmount; // Proportional bonus based on investment

			proposal.isSuppliedBack = true;
			proposal.amountSupplied = proposal.amountProposed; // Update for clarity
			proposal.bonusSupplied = userBonus;

			// Send payout directly to proposer (including bonus)
			payable(proposerAddress).transfer(
				proposal.amountProposed + userBonus
			);
		}

		project.status.isProjectCompleted = true;
		project.status.suppliedBackAmount = msg.value; // Record the supplied back amount
	}

	function getUserData(
		address userAddress
	) public view returns (User memory) {
		return addressToUser[userAddress];
	}

	function getUserProjects(
		address userAddress
	) public view returns (uint[] memory) {
		return addressToProjectIdx[userAddress];
	}

	function getProjectFeed() public view returns (Project[] memory) {
		return projects;
	}

	function getProject(uint projectIdx) public view returns (Project memory) {
		return projects[projectIdx];
	}

	function getUserProposals(
		address userAddress
	) public view returns (Proposal[] memory) {
		return userToProposals[userAddress];
	}
}
