var React = require('react');

var TrezorPinpad = React.createClass({
  getInitialState: function () {
    return { pin: [] };
  },

  addNumber: function (event) {
    // a bit superflous, but what can we do
    this.setState({ pin: this.state.pin.concat([ event.target.name ]) });
  },

  clearPin: function (event) {
    this.setState({ pin: [] });
  },

  submitPin: function (event) {
    this.props.onChange(this.state.pin.join(''));
  },

  render: function () {
    return (<form action="" method="" className="trezorpin" autoComplete="off">
      <p>Look at the Trezor for number positions.</p>
      <input className="trezorpin-result" type="password" value={this.state.pin.join('')} disabled />
      <input type="button" className="trezorpin-button" name="7" value="" onClick={this.addNumber} />
      <input type="button" className="trezorpin-button" name="8" value="" onClick={this.addNumber} />
      <input type="button" className="trezorpin-button" name="9" value="" onClick={this.addNumber} />
      <br/>
      <input type="button" className="trezorpin-button" name="4" value="" onClick={this.addNumber} />
      <input type="button" className="trezorpin-button" name="5" value="" onClick={this.addNumber} />
      <input type="button" className="trezorpin-button" name="6" value="" onClick={this.addNumber} />
      <br/>
      <input type="button" className="trezorpin-button" name="1" value="" onClick={this.addNumber} />
      <input type="button" className="trezorpin-button" name="2" value="" onClick={this.addNumber} />
      <input type="button" className="trezorpin-button" name="3" value="" onClick={this.addNumber} />
      <br/>
      <input type="button" className="trezorpin-button clear" value="clear" onClick={this.clearPin} />
      <input type="button" className="trezorpin-button empty" />
      <input type="button" className="trezorpin-button enter" value="enter" onClick={this.submitPin} />
      <br/>
      <p>Lost? Check the <a href="http://doc.satoshilabs.com/trezor-user/enteringyourpin.html">Trezor user manual</a>.</p>
    </form>);
  }
});

module.exports = TrezorPinpad;
