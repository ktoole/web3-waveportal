// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address[] peopleWhoWaved;

    constructor() {
        console.log("Yo, yo, yo, I am a contract and I am smart. I'm made out of ones and zeros and I love making art!");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function recordWaver(address waver) public {
        peopleWhoWaved.push(waver);
        console.log("Recorded this waver -> (%s)", waver);
    }

    

}