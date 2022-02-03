let secret = require('./secrets.json');

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  networks: {
    ropsten: {
      // url: secret.url,
      url: "https://speedy-nodes-nyc.moralis.io/e052005be92912b53f5620be/eth/ropsten",
      // accounts: [secret.key]
      accounts: ["0xaf8dcdcd69a52a3ea65e190d94cb16f04e4bab54d685b3408e59507686c5cdfb"]
    }
  }
};
