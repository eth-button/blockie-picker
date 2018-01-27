var UglifyJSPlugin = require("uglifyjs-webpack-plugin");
var fs = require("fs");

var package = fs.readFileSync("package.json", "utf-8");
package = JSON.parse(package);

module.exports = {
  entry: "./index.js",
  output: {
    library: "blockiePicker",
    filename: "dist/" + package.name + ".js"
  },
  plugins: [new UglifyJSPlugin()]
};
