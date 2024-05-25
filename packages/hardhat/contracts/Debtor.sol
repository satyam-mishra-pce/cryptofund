// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Debtor {
	struct Project {
		address payable owner;
		uint256 amountNeeded;
		uint256 totalInterest;
		uint256 payoutTime;
		uint256 amountCollected;
		bool isFunded;
	}

	struct Bid {
		address payable bidder;
		uint256 amount;
		bool isPaid;
	}

	uint256 public projectCounter;
	mapping(uint256 => Project) public projects;
	mapping(uint256 => Bid[]) public projectBids;

	event ProjectListed(
		uint256 projectId,
		address owner,
		uint256 amountNeeded,
		uint256 totalInterest,
		uint256 payoutTime
	);
	event BidPlaced(uint256 projectId, address bidder, uint256 amount);
	event Payout(uint256 projectId, address bidder, uint256 amount);

	function listProject(
		uint256 _amountNeeded,
		uint256 _totalInterest,
		uint256 _payoutTime
	) external {
		require(_amountNeeded > 0, "Amount needed should be greater than zero");
		require(
			_totalInterest > 0,
			"Total interest should be greater than zero"
		);
		require(
			_payoutTime > block.timestamp,
			"Payout time should be in the future"
		);

		projectCounter++;
		projects[projectCounter] = Project({
			owner: payable(msg.sender),
			amountNeeded: _amountNeeded,
			totalInterest: _totalInterest,
			payoutTime: _payoutTime,
			amountCollected: 0,
			isFunded: false
		});

		emit ProjectListed(
			projectCounter,
			msg.sender,
			_amountNeeded,
			_totalInterest,
			_payoutTime
		);
	}

	function placeBid(uint256 _projectId) external payable {
		Project storage project = projects[_projectId];
		require(msg.value > 0, "Bid amount should be greater than zero");
		require(
			project.amountCollected + msg.value <= project.amountNeeded,
			"Bid exceeds amount needed"
		);
		require(!project.isFunded, "Project is already funded");

		projectBids[_projectId].push(
			Bid({
				bidder: payable(msg.sender),
				amount: msg.value,
				isPaid: false
			})
		);

		project.amountCollected += msg.value;

		if (project.amountCollected == project.amountNeeded) {
			project.isFunded = true;
		}

		emit BidPlaced(_projectId, msg.sender, msg.value);
	}

	function payout(uint256 _projectId) external {
		Project storage project = projects[_projectId];
		require(
			block.timestamp >= project.payoutTime,
			"Payout time has not been reached"
		);
		require(project.isFunded, "Project is not fully funded");

		uint256 totalAmountToDistribute = project.amountCollected +
			project.totalInterest;
		uint256 totalBidAmount = project.amountCollected;

		for (uint256 i = 0; i < projectBids[_projectId].length; i++) {
			Bid storage bid = projectBids[_projectId][i];
			if (!bid.isPaid) {
				uint256 payoutAmount = (bid.amount * totalAmountToDistribute) /
					totalBidAmount;
				bid.bidder.transfer(payoutAmount);
				bid.isPaid = true;
				emit Payout(_projectId, bid.bidder, payoutAmount);
			}
		}
	}
}
