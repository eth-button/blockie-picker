import Blockie from "lib-blockies";
import Address from "lib-address";

export function generateAddress() {
  const address = new Address();
  const blockie = new Blockie(address.address);

  return {
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

export function generateWallet(address, password) {
  console.log(JSON.stringify(address.generateWallet(password)));
}
