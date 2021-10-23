require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain uncover heavy private flat spatial'; 
let testAccounts = [
"0xf1384c513497bbdc5aa52e2775f0327aa1bb6d9f20cc02994631ab2b1fb68784",
"0xdf34df840abbad3d75f87cc927f366793d88473b78e7f9f7a4c34883f2c1aa8f",
"0x0bd6dc3f00e92de01cb4c21d1b654bb21e362491297be10cc463f228d9eb174e",
"0xfa9f4cd3181f76a6c698d346cb12aa25b4dd81cfd5b6775a2967ecb210f1f94f",
"0x4a6c9293c299f551a7a5bcf64f1fe86ab4ba39f8b6612c2f9f84b72003449ec4",
"0x18fbc08ee2768c7f26250aa92367c2292b7d3dfe412997795c861f8c62807e09",
"0xbe8f4a5c5847cb030a3b5a2b4f07ba5e3bc5a18fbda3a2f37d746aa36407cafc",
"0xcd095872d9dc8b910de7e8fa92a98402540750385baf23a47944fda0b905ecd3",
"0xabd554bcdfed35fcfbaf05a5e7a20b6e54c78e72e8c1dab577ae7a50f9ec8913",
"0x44a18ddf79f37d508dd81d0768d54555815bd55c30f33cacb98012e50c7e1bcc"
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
            version: '^0.8.0'
        }
    }
};

