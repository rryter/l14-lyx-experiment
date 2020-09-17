const SmartVault = artifacts.require("SmartVault");

module.exports = function (deployer) {
  deployer.deploy(SmartVault);
};
