# code-splat
### gist.github.com for the enterprise

A gist-like solution that incorporates features for private development communities. Perfect for businesses with multiple developers / teams. Share code containing intellectual property with your coworkers. Configure for Active Directory integration. Control visibility. Comment and collaborate. Celebrate your victory over entropy. Okay, maybe not that last one.

Check out the official [site][] for more info.

### Getting Started

1. clone this repo
2. make sure you have grunt-cli: `npm install -g grunt-cli` if not
3. make sure you have supervisor: `npm install -g supervisor` if not
4. install dependencies: `npm install`

### Development

* Test (single run): `npm test` OR `grunt test`
* Test (watch and auto-run): `grunt watch:tests`
* Lint (watch and auto-run): `grunt watch:lint`
* Run (watch and restart): `npm run debug`

**Note**: code-splat uses [debug][] to log activity. Turn this on with `DEBUG=code-splat:*`.

Example of a debug run with all code-splat logic set to log activity:

```bash
DEBUG=code-splat:* npm run debug
```

Same example, with only the root app logic (Express config and startup) set to log activity:

```bash
DEBUG=code-splat:app npm run debug
```

Each component uses a different moniker. Check the top of source files to find out what moniker is used by what component. Example from `src/routes.es`:

```js
"use strict";

const debug = require("debug")("code-splat:routes");
const express = require("express");

/*...*/
```

In this example, `routes` is the moniker used. Turning on debug output for this component only is simply:

```bash
DEBUG=code-splat:routes npm run debug
```

Express also uses debug, so for some fantastically verbose output, just do:

```bash
DEBUG=* npm run debug
```

[debug]: https://www.npmjs.com/package/debug
[site]: http://johnbatte.me/code-splat
