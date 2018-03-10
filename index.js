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
  const wallet = JSON.stringify(address.generateWallet(password), null, 2);
  console.log(wallet); // eslint-disable-line no-console
}
