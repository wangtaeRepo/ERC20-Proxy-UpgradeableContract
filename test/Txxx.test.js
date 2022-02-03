// test/Txxx.test.js

const { ethers } = require('hardhat');



describe('MyToken', function () {
  it('deploys', async function () {

        let private_key =
  "0xaf8dcdcd69a52a3ea65e190d94cb16f04e4bab54d685b3408e59507686c5cdfb"
let send_token_amount = "1"
let to_address = "0xdA78f940C1F9C358cde33d0344a1f097B95f5b6a"
let send_address = "0x85dd2814562EA17B2ba2f382bd3cd8478430b4c2"
let gas_limit = "0x100000"
let wallet = new ethers.Wallet(private_key)
let walletSigner = wallet.connect(global.ethersProvider)
let contract_address = "0xe1489f32462E2B462964D3666f7847816Edcc98e"

    function send_token(
      contract_address,
      send_token_amount,
      to_address,
      send_account,
      private_key
    ) {
      let wallet = new ethers.Wallet(private_key)
      let walletSigner = wallet.connect(global.ethersProvider)
    
      global.ethersProvider.getGasPrice().then((currentGasPrice) => {
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
            nonce: global.ethersProvider.getTransactionCount(
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
    
    
    
    
    
    
    // A Signer from a private key

    // var provider = new ethers.providers.getDefaultProvider('https://speedy-nodes-nyc.moralis.io/e052005be92912b53f5620be/eth/ropsten');
    // var address  = '0xe1489f32462E2B462964D3666f7847816Edcc98e';
    // let privateKey = '0xaf8dcdcd69a52a3ea65e190d94cb16f04e4bab54d685b3408e59507686c5cdfb';
    // let wallet = new ethers.Wallet(privateKey, provider);
    // var abi = [{"inputs":[{"internalType":"address","name":"_logic","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"stateMutability":"payable","type":"receive"}];
    
    // var contract = new ethers.Contract(address,abi,wallet);

    // // var sendPromise =await contract.transferOwnership('0xB633FA14EbE4b627C01a72B30C95d1ce206c8f6e');
    // var sendPromise =await contract.transfer('0xB633FA14EbE4b627C01a72B30C95d1ce206c8f6e', 1000);

    // sendPromise.then(function(transaction){
    //   console.log(transaction);
    // });

//     let private_key =
//   "41559d28e936dc92104ff30691519693fc753ffbee6251a611b9aa1878f12a4d"
// let send_token_amount = "1"
// let to_address = "0x4c10D2734Fb76D3236E522509181CC3Ba8DE0e80"
// let send_address = "0xda27a282B5B6c5229699891CfA6b900A716539E6"
// let gas_limit = "0x100000"
// let wallet = new ethers.Wallet(private_key)
// let walletSigner = wallet.connect(window.ethersProvider)
// let contract_address = ""
// window.ethersProvider = new ethers.providers.InfuraProvider("ropsten")

// send_token(
//   contract_address,
//   send_token_amount,
//   to_address,
//   send_address,
//   private_key
// // // )
// let private_key =
//   "af8dcdcd69a52a3ea65e190d94cb16f04e4bab54d685b3408e59507686c5cdfb"
// let send_token_amount = "1"
// let to_address = "0xB633FA14EbE4b627C01a72B30C95d1ce206c8f6e"
// let send_address = "0x85dd2814562EA17B2ba2f382bd3cd8478430b4c2"
// let gas_limit = "0x100000"
// let wallet = new ethers.Wallet(private_key)
// let walletSigner = wallet.connect(window.ethersProvider)
// let contract_address = "0xe1489f32462E2B462964D3666f7847816Edcc98e"
// window.ethersProvider = new ethers.providers.getDefaultProvider('https://speedy-nodes-nyc.moralis.io/e052005be92912b53f5620be/eth/ropsten');


// function send_token(
//   contract_address,
//   send_token_amount,
//   to_address,
//   send_account,
//   private_key
// ) {
//   // let private_key =
//   // "af8dcdcd69a52a3ea65e190d94cb16f04e4bab54d685b3408e59507686c5cdfb"
//   // let to_address = "0xB633FA14EbE4b627C01a72B30C95d1ce206c8f6e"
//   // let send_account = "0x85dd2814562EA17B2ba2f382bd3cd8478430b4c2"
//   // let gas_limit = "0x100000"
//   // let send_token_amount = "1000"
//   // let walletSigner = wallet.connect(window.ethersProvider)
//   // window.ethersProvider = new ethers.providers.getDefaultProvider('https://speedy-nodes-nyc.moralis.io/e052005be92912b53f5620be/eth/ropsten');
//   // let contract_address = "0xe1489f32462E2B462964D3666f7847816Edcc98e"

//   let wallet = new ethers.Wallet(private_key)
//   let walletSigner = wallet.connect(window.ethersProvider)

//   window.ethersProvider.getGasPrice().then((currentGasPrice) => {
//     let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
//     console.log(`gas_price: ${gas_price}`)

//     if (contract_address) {
//       // general token send
//       let contract = new ethers.Contract(
//         contract_address,
//         send_abi,
//         walletSigner
//       )

//       // How many tokens?
//       let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18)
//       console.log(`numberOfTokens: ${numberOfTokens}`)

//       // Send tokens
//       contract.transfer(to_address, numberOfTokens).then((transferResult) => {
//         console.dir(transferResult)
//         alert("sent token")
//       })
//     } // ether send
//     else {
//       const tx = {
//         from: send_account,
//         to: to_address,
//         value: ethers.utils.parseEther(send_token_amount),
//         nonce: window.ethersProvider.getTransactionCount(
//           send_account,
//           "latest"
//         ),
//         gasLimit: ethers.utils.hexlify(gas_limit), // 100000
//         gasPrice: gas_price,
//       }
//       console.dir(tx)
//       try {
//         walletSigner.sendTransaction(tx).then((transaction) => {
//           console.dir(transaction)
//           alert("Send finished!")
//         })
//       } catch (error) {
//         alert("failed to send!!")
//       }
//     }
//   })
// }
// global.provider = new ethers.providers.getDefaultProvider('https://speedy-nodes-nyc.moralis.io/e052005be92912b53f5620be/eth/ropsten');
 
// let wallet = new ethers.Wallet("0xaf8dcdcd69a52a3ea65e190d94cb16f04e4bab54d685b3408e59507686c5cdfb")
// let walletSigner = wallet.connect(global.ethersProvider)
// global.ethersProvider.getGasPrice() // gasPrice


// const tx = {
//   from: "0x85dd2814562EA17B2ba2f382bd3cd8478430b4c2",
//   to: "0xdA78f940C1F9C358cde33d0344a1f097B95f5b6a",
//   value: ethers.utils.parseEther("1"),
//   nonce: global.ethersProvider.getTransactionCount("0x85dd2814562EA17B2ba2f382bd3cd8478430b4c2", "latest"),
//   gasLimit: ethers.utils.hexlify(gas_limit), // 100000
//   gasPrice: gas_price,
// }

// walletSigner.sendTransaction(tx).then((transaction) => {
//   console.dir(transaction)
//   alert("Send finished!")
// })

// let private_key =
//   "0xaf8dcdcd69a52a3ea65e190d94cb16f04e4bab54d685b3408e59507686c5cdfb"
// let send_token_amount = "1"
// let to_address = "0xdA78f940C1F9C358cde33d0344a1f097B95f5b6a"
// let send_address = "0x85dd2814562EA17B2ba2f382bd3cd8478430b4c2"
// let gas_limit = "0x100000"
// let wallet = new ethers.Wallet(private_key)
// let walletSigner = wallet.connect(global.ethersProvider)
// let contract_address = ""
// global.provider = new ethers.providers.getDefaultProvider('https://speedy-nodes-nyc.moralis.io/e052005be92912b53f5620be/eth/ropsten');

// send_token(
//   contract_address,
//   send_token_amount,
//   to_address,
//   send_address,
//   private_key
// )





  });
});



