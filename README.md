# trezor-react-pinpad

React component for displaying a pinpad for the Trezor hardware wallet.

For more information about what this is, see: http://doc.satoshilabs.com/trezor-user/enteringyourpin.html

## API

```js
var TrezorPinpad = require('trezor-react-pinpad')

// The trezorDone() callback has one parameter, the pin code text.
<TrezorPin onChange={this.trezorDone} />
```

Perhaps you also want to wrap this component into a modal window. Use one of your favourite modal libraries for that.

For an example usage see `example.html`. In order to use it, browserify `example.js` first by:

```
browserify -t [ babelify --presets [ react ] ] example.js &> example.build.js
```

## Acknowledgement

The sample CSS provided is inspired by http://codepen.io/Elliotsmith/pen/AwKLk

## License

  MIT license.

  Copyright (C) 2016 Alex Beregszaszi
