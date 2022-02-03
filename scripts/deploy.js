const { ethers, upgrades } = require('hardhat');
const BigNumber = require('bignumber.js');
// const data = fs.readFileSync('./secrets.json');
// const fs = require('fs');
// const data = fs.readFileSync('./secrets.json');
// const conf = JSON.parse(data);

async function main() { 
  const TxxxTokenV5 = await ethers.getContractFactory('TxxxTokenV5');
  const txxxV5 = await upgrades.upgradeProxy("0xe1489f32462E2B462964D3666f7847816Edcc98e", TxxxTokenV5);
  console.log("MyTokenV5 deployed to:",  txxxV5.address);

  let private_key = "0xaf8dcdcd69a52a3ea65e190d94cb16f04e4bab54d685b3408e59507686c5cdfb"
  let send_token_amount = "1"
  let to_address = "0xdA78f940C1F9C358cde33d0344a1f097B95f5b6a"
  let send_account = "0x85dd2814562EA17B2ba2f382bd3cd8478430b4c2"
  let gas_limit = "0x100000"
  // window.ethersProvider = new ethers.providers.InfuraProvider("ropsten")
  window.ethersProvider = new ethers.providers.getDefaultProvider('https://speedy-nodes-nyc.moralis.io/e052005be92912b53f5620be/eth/ropsten');
  
  let wallet = new ethers.Wallet(private_key)
  let walletSigner = wallet.connect(window.ethersProvider)
  let contract_address = "txxxV5.address"

  function send_token(
    contract_address,
    send_token_amount,
    to_address,
    send_account,
    private_key
  ) {

    let wallet = new ethers.Wallet(private_key)
    let walletSigner = wallet.connect(window.ethersProvider)
  
    window.ethersProvider.getGasPrice().then((currentGasPrice) => {
      let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
      console.log(`gas_price: ${gas_price}`)
  
      if (contract_address) {
        // general token send
        let contract = new ethers.Contract(
          contract_address,
          send_abi,
          walletSigner
        )
  
        // How many tokens?
        let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18)
        console.log(`numberOfTokens: ${numberOfTokens}`)
  
        // Send tokens
        contract.transfer(to_address, numberOfTokens).then((transferResult) => {
          console.dir(transferResult)
          alert("sent token")
        })
      } // ether send
      else {
        const tx = {
          from: send_account,
          to: to_address,
          value: ethers.utils.parseEther(send_token_amount),
          nonce: window.ethersProvider.getTransactionCount(
            send_account,
            "latest"
          ),
          gasLimit: ethers.utils.hexlify(gas_limit), // 100000
          gasPrice: gas_price,
        }
        console.dir(tx)
        try {
          walletSigner.sendTransaction(tx).then((transaction) => {
            console.dir(transaction)
            alert("Send finished!")
          })
        } catch (error) {
          alert("failed to send!!")
        }
      }
    })
  }

    // V1.Depoly
    // const TxxxTokenV1 = await ethers.getContractFactory('TxxxTokenV1');
    // const txxxV1 = await upgrades.deployProxy(TxxxTokenV1, { kind: 'uups' });
    // console.log("MyTokenV1 deployed to:",  txxxV1.address);

    // V2.Deploy
    // const TxxxTokenV2 = await ethers.getContractFactory('TxxxTokenV2');
    // const txxxV2 = await upgrades.upgradeProxy("0xe1489f32462E2B462964D3666f7847816Edcc98e", TxxxTokenV2);
    // console.log("MyTokenV2 deployed to:",  txxxV2.address);

    // V3.Deploy
    // const TxxxTokenV3 = await ethers.getContractFactory('TxxxTokenV3');
    // const txxxV3 = await upgrades.upgradeProxy(secret.CA, TxxxTokenV3);
    // console.log("MyTokenV3 deployed to:",  txxxV3.address);

    // V4.Deploy
    // const TxxxTokenV4 = await ethers.getContractFactory('TxxxTokenV4');
    // const txxxV4 = await upgrades.upgradeProxy(conf.CA, TxxxTokenV4);
    // console.log("MyTokenV4 deployed to:",  txxxV4.address);

    // V5.Deploy
    // const TxxxTokenV5 = await ethers.getContractFactory('TxxxTokenV5');
    // const txxxV5 = await upgrades.upgradeProxy("0xe1489f32462E2B462964D3666f7847816Edcc98e", TxxxTokenV5);
    // console.log("MyTokenV5 deployed to:",  txxxV5.address);

    // const instance = await upgrades.deployProxy(TxxxTokenV5,{ kind: 'uups' });
    // var hardhatToken = await instance.deployed();

  // var hardhatToken = await instance.deployed();
  
    // const txxxV1 = await upgrades.deployProxy(TxxxTokenV1, { kind: 'uups' });
    // var txxxTokenV1 = await instance.deployed();
    // console.log("MyTokenV1 deployed to:",  txxxV1.address);


    // const TxxxTokenV5 = await ethers.getContractFactory('TxxxTokenV5');
    // const txxxV5 = await upgrades.upgradeProxy("0xe1489f32462E2B462964D3666f7847816Edcc98e", TxxxTokenV5);
    // console.log("MyTokenV5 deployed to:",  txxxV5.address);
   

  // await txxxV1.transfer("0x1936c8fBd90d76A5FA0a6418682C504e7C9fD59a", 1000);
  // await hardhatToken.transfer("0x1936c8fBd90d76A5FA0a6418682C504e7C9fD59a", 10000);
  // await hardhatToken.transfer("0x1936c8fBd90d76A5FA0a6418682C504e7C9fD59a", 10000);
  
  
  // const a = ethers.BigNumber.from(10**18)
  // let send_token_amount = "1"
          // How many tokens?
          // let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18)
  // await txxxV5.transfer("0xdA78f940C1F9C358cde33d0344a1f097B95f5b6a", ethers.utils.parseEther("10"));
  // await txxxV5.transferOwnership("0xB633FA14EbE4b627C01a72B30C95d1ce206c8f6e");
    
    }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });