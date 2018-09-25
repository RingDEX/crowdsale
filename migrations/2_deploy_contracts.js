var RingDEXToken = artifacts.require("./RingDEXToken.sol");

module.exports = function(deployer) {
  deployer.deploy(RingDEXToken);
};
