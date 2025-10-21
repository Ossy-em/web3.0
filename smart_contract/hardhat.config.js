require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.28",
  networks: {
    holesky: {
      url: "https://ethereum-holesky-rpc.publicnode.com",
      accounts: ["53038b591322310751c5aa80727a7f662d16aeaae147b695ac6a484a4d8f86c5"]
    }
  },
};