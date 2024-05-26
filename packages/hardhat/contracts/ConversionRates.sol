// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import { AggregatorV3Interface } from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

library ConversionRates {
	function getEthValue() internal view returns (int, uint8) {
		AggregatorV3Interface priceFeed = AggregatorV3Interface(
			0x694AA1769357215DE4FAC081bf1f309aDC325306
		);
		(, int answer, , , ) = priceFeed.latestRoundData();
		return (answer, priceFeed.decimals());
	}

	function weiToUsd(uint amountInWei) internal view returns (uint) {
		(int usd, uint8 decimals) = getEthValue();
		return (amountInWei * uint(usd)) / (10 ** (decimals + 18)); // 1 eth = 10e18 wei
	}
}
