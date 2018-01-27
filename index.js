import Blockie from "lib-blockies";
import {
  isValidPrivate,
  privateToPublic,
  publicToAddress,
  bufferToHex
} from "ethereumjs-util";
import { randomBytes } from "crypto";

export function generatePrivateKey() {
  let privateKey;
  do {
    privateKey = randomBytes(32);
  } while (!isValidPrivate(privateKey));

  return privateKey;
}

export function generateAddress() {
  const privateKey = generatePrivateKey();
  const publicKey = privateToPublic(privateKey);
  const address = bufferToHex(publicToAddress(publicKey));
  const blockie = new Blockie(address);

  return {
    privateKey: bufferToHex(privateKey),
    publicKey: bufferToHex(publicKey),
    address,
    blockie
  };
}

export function makeBlocks(quantity) {
  const blocks = [];
  for (let i = 0; i < quantity; i++) {
    blocks.push(generateAddress());
  }
  return blocks;
}

export function generateWallet(privateKey) {
  console.log(privateKey);
}
