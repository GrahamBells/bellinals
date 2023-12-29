'use strict';

var bellcore = module.exports;

// module information
bellcore.version = 'v' + require('./package.json').version;
bellcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bellcore found. ' +
      'Please make sure to require bellcore and check that submodules do' +
      ' not also include their own bellcore dependency.';
    throw new Error(message);
  }
};
bellcore.versionGuard(global._bellcore);
global._bellcore = bellcore.version;

// crypto
bellcore.crypto = {};
bellcore.crypto.BN = require('./lib/crypto/bn');
bellcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
bellcore.crypto.Hash = require('./lib/crypto/hash');
bellcore.crypto.Random = require('./lib/crypto/random');
bellcore.crypto.Point = require('./lib/crypto/point');
bellcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
bellcore.encoding = {};
bellcore.encoding.Base58 = require('./lib/encoding/base58');
bellcore.encoding.Base58Check = require('./lib/encoding/base58check');
bellcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
bellcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
bellcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
bellcore.util = {};
bellcore.util.buffer = require('./lib/util/buffer');
bellcore.util.js = require('./lib/util/js');
bellcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
bellcore.errors = require('./lib/errors');

// main bitcoin library
bellcore.Address = require('./lib/address');
bellcore.Block = require('./lib/block');
bellcore.MerkleBlock = require('./lib/block/merkleblock');
bellcore.BlockHeader = require('./lib/block/blockheader');
bellcore.HDPrivateKey = require('./lib/hdprivatekey.js');
bellcore.HDPublicKey = require('./lib/hdpublickey.js');
bellcore.Networks = require('./lib/networks');
bellcore.Opcode = require('./lib/opcode');
bellcore.PrivateKey = require('./lib/privatekey');
bellcore.PublicKey = require('./lib/publickey');
bellcore.Script = require('./lib/script');
bellcore.Transaction = require('./lib/transaction');
bellcore.URI = require('./lib/uri');
bellcore.Unit = require('./lib/unit');

// dependencies, subject to change
bellcore.deps = {};
bellcore.deps.bnjs = require('bn.js');
bellcore.deps.bs58 = require('bs58');
bellcore.deps.Buffer = Buffer;
bellcore.deps.elliptic = require('elliptic');
bellcore.deps.scryptsy = require('scryptsy');
bellcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
bellcore._HDKeyCache = require('./lib/hdkeycache');
bellcore.Transaction.sighash = require('./lib/transaction/sighash');
