const apikeys = require("./apikeys");

const getCabalApiEndpoint = (subdomain) =>
  `https://${subdomain}.backbonecabal.net/v3/${apikeys.backbonecabal}`;

module.exports = {
  baseUrl: "/",

  nodes: {
    mainnet: getCabalApiEndpoint("mainnet"),
    ropsten: getCabalApiEndpoint("ropsten"),
    rinkeby: getCabalApiEndpoint("rinkeby"),
    kovan: getCabalApiEndpoint("kovan"),
    goerli: getCabalApiEndpoint("goerli"),
  },

  etherscanAPI: {
    mainnet: "api",
    ropsten: "api-ropsten",
    rinkeby: "api-rinkeby",
    kovan: "api-kovan",
    goerli: "api-goerli",
  },
};
