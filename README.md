## API Service Backend

```bash
    npm install
```

Then create `apikeys.js` next to `package.json` and copy/paste following content there

    module.exports = {
        backbonecabal: 'CABAL-API-KEY',
        etherscan: 'ETHERSCAN-API-KEY'
    };

and enter your YCabal and Etherscan API keys in corresponding properties.

```bash
    npm start
```

Application will be launched on http://localhost:3000.
