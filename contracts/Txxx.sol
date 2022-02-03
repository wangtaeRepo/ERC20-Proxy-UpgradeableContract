// contract/MyTokenV1.sol

// SPDX-License-Identifier: none
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract TxxxTokenV1 is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {
  function initialize() initializer public {
    __ERC20_init("tx0x1119", "txxx");
    __Ownable_init();

    _mint(msg.sender, 10000000 * 10 ** decimals());
  }

  function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}

contract TxxxTokenV2 is TxxxTokenV1 {
  uint fee;

  function version() pure public returns (string memory) {
    return "v2!";
  }
}

contract TxxxTokenV3 is TxxxTokenV1 {
  uint fee;
  string tax;

  function version() pure public returns (string memory) {
    return "v3!";
  }
}

contract TxxxTokenV4 is TxxxTokenV1 {
  uint fee;
  string tax;
  string config;

  function version() pure public returns (string memory) {
    return "v4!";
  }
}

contract TxxxTokenV5 is TxxxTokenV1 {
    uint fee;
  string tax;
  string config;
  string a;
  
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }  
    function version() pure public returns (string memory) {
    return "v5!";
  }

}