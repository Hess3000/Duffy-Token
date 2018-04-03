var DuffyToken = artifacts.require("./DuffyToken.sol");

contract('DuffyToken', function(accounts) {

	it('sets the total supply upon deployment', function() {
		return DuffyToken.deployed().then(function(instance) {
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(), 1000000, 'sets total supply to 1,000,000')
		})
	});
})