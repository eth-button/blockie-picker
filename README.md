# blockie-picker

This is a simple static site that generates a set of Ethereum addresses and displays their associated "blockies" identicons.

Only two dependencies:

* [`ethereumjs-util`](https://github.com/ethereumjs/ethereumjs-util)
* [`lib-blockies`](https://github.com/eth-button/lib-blockies)
* [`lib-address`](https://github.com/eth-button/lib-address)

## Usage

* Clone the repository:
  * `git clone https://github.com/eth-button/blockie-picker.git`
* Enter the directory:
  * `cd blockie-picker`
* Install dependencies:
  * `npm install`
* Start the server:
  * `npm run dev`
* Open your browser to `http://localhost:8080`

```
git clone https://github.com/eth-button/blockie-picker.git
cd blockie-picker
npm install
npm run dev
```

Hover over an identicon to see the full (square) icon.  Click on an identicon to see the address, public key, and private key associated with it.

Also available on [github pages](https://eth-button.github.io/blockie-picker/)
