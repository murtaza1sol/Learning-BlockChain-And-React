// https://eth-goerli.g.alchemy.com/v2/PSqat7GRKxL6rnQw4IE1kZmmpdJuSmDf

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/PSqat7GRKxL6rnQw4IE1kZmmpdJuSmDf',
      accounts : ['3b1e2ea1796a59513253ac1139443539fdc9165a48b026da65187b3289f35487'] //private key with which the amount of gas has been deducted from the metamask account
    }
  }
}