// /*global contract, config, it, assert*/

const SimpleDemo = require('Embark/contracts/SimpleDemo');
const ethers = require('ethers');

let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  deployment: {
    accounts: [
      { mnemonic: "spirit helmet trim rabbit little obtain air minimum ancient child island stuff" }
      // you can configure custom accounts with a custom balance
      // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
    ]
  },
  contracts: {
    "SimpleDemo": {
      args: [100]
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("SimpleDemo", function () {
  this.timeout(0);

  it("contract has been deployed.", async function () {
    let addressOfContract = SimpleDemo.options.address;
    console.log(addressOfContract);
    assert.ok(addressOfContract.length > 0);
  });


  it("Big Numbers.", async function () {
    const BNweb = web3.utils.BN;
    const BNethers = ethers.utils.bigNumberify;

    let num1 = new BNweb(1234).toString();
    let num2 = new BNethers(1234).toString();
// "1234"
    assert.ok(num1 == num2);


    let num3 = new BNweb('1234').add(new BNweb('1')).toString();
    let num4 = new  BNethers('1234').add(new BNethers('1')).toString();

// "1235"
    assert.ok(num3 == num4);

    let num5 = new BNweb('0xea').toString();
    let num6 = new BNethers('0xea').toString();

// "234"
    assert.ok(num5 == num6);
  });


  it("Sign Message.", async function () {
    let addressOfContract = SimpleDemo.options.address;
    console.log(addressOfContract);
    assert.ok(addressOfContract.length > 0);
  });



  // it("set storage value", async function () {
  //   await SimpleStorage.methods.set(150).send();
  //   let result = await SimpleStorage.methods.get().call();
  //   assert.strictEqual(parseInt(result, 10), 150);
  // });

  // it("should have account with balance", async function() {
  //   let balance = await web3.eth.getBalance(accounts[0]);
  //   assert.ok(parseInt(balance, 10) > 0);
  // });
});

