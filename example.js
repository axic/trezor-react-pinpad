var React = require('react')
var ReactDOM = require('react-dom')
var TrezorPinpad = require('./trezorpin.js')

var Trezor = React.createClass({
  trezorDone: function (value) {
    alert('PIN received: ' + value)
  },

  render: function () {
    return <TrezorPinpad onChange={this.trezorDone} />
  }
})

ReactDOM.render(
  <Trezor/>,
  document.getElementById('app')
)
