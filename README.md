# 2miners.js

Made with [![axios](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/2miners.js/axios)](https://www.npmjs.com/package/axios)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/2miners.js.svg)](https://github.com/LockBlock-dev/2miners.js/stargazers)

2miners.js is a Node.js module that allows you to easily interact with the 2miners API.

• Promise based

• Performant

• 100% coverage of the 2miners API


## Installation

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

With GitHub :

• Download the project or clone it

• Go to the 2miners.js folder and do `npm install`

• Require the [index.js](/index.js)

With NPM :

• Download the project

• Do `npm install 2miners.js`

• Require the library


## Documentation

See the [API documentation](/API.md).


## Example usage

### Using the library

```js
const { Client } = require("2miners.js")

const client = new Client("pool") //example : ETH or solo-ETH

client.stats().then(data => {
    console.log(data)
})

//OR

const myFunc = async () => {
    const data = await client.stats()
    console.log(data)
}

myFunc()
```

The library is async, be sure to use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax) or [.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)


## Credits

[2miners API](https://apidoc.2miners.com/)


## Copyright

See the [license](/LICENSE)