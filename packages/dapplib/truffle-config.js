require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift remember magic hospital hover castle olympic stumble'; 
let testAccounts = [
"0xb453645b014d1c675f056394090441cb847cda962e9fdeaee5dfd27c923d1a47",
"0x12e5bf0477f98876b45e4cd7795f8590cdf73872a53430874e8131659a34371d",
"0xda2af01ed92d1e8236c0dc48eaf47ac0086e8ada471dbcc306033bc6abc2fb53",
"0xda705732b3aed15addbc6f1379a9b3c431d94ad74f851c17482b6489376ab107",
"0xee6944d471af6b3b46097617c38afd1ea983e9a3bf37967dcff072aa5ad102dd",
"0x6686aa2ce4e628c1f34024f13a00a91d2effa5e9863b98b7c02c885af9b47689",
"0xc0d43512caf8a7fbd082fa78e1ddacf7bc9f672d89019a42cb139e33e7b8fcc6",
"0xadf7d741bc178efc7dca31c3bc82266c564dbf257b24dcd5fd7aee67d96f67d0",
"0xfac321240a57dcb8487eecd810f3039747aeea157d451c9012ea6682a803f43b",
"0xed72f2dee219ecadd5abfe1888918a25d646c42e8bccefa69fa9fbe69fe16e2c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
