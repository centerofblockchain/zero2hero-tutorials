require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    bnbtestnet: {
      url: "https://indulgent-newest-leaf.bsc-testnet.discover.quiknode.pro/8a8483b20d028a2b4ca603f1f86a6f1d702a6624/",
      accounts: [
        "29da73a34ce96361b379663b3320816a49b0f81c09d31f97590dddbdc70fff77",
      ],
    },
  },
  etherscan: {
    apiKey: "Z6H2Q2ND5VCIDXIBETK9RDDRGYR4Z73VKX", // Your Etherscan API key
  },
};
