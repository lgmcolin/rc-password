/** @jsx React.DOM */

var React = require('react');
var PwdItem = require('./PwdItem')
var cloneWithProps = require('./utils/cloneWithProps');

require('./spassword.css');

var PropTypes = React.PropTypes;

var Spassword = React.createClass({
  getInitialState: function () {
    return {
      _length: 6,
      password: ''
    };
  },

  repeat: function (string, times) {
    return new Array(times + 1).join(string);
  },

  eventBeginHandler: function () {
    console.log('hehl');
    //focus the input 
    var len = this.state.password.length;
    // console.log('password lenght = ',len);
    this.refs.theInput.getDOMNode().focus();
    this.refs.theInput.getDOMNode().setSelectionRange(len, len);

  },

  handleInputChange: function(e) {
    var pwd = e.target.value;
    var len = pwd.length;
    var bCompleted = false;

    if(len === this.state._length) {
      bCompleted = true;
      this.props.onComplete && this.props.onComplete(pwd);
    } else {
      if (bCompleted) {
        bCompleted = false;
        this.props.inComplete && this.props.inComplete(pwd);
      }
    }
    console.log('input password = ', pwd);
    // modify state 
    this.setState({ password: pwd });
    // set b visibility
    var _length = this.state._length;
    var children = this.refs.spassword.props.children;

    React.Children.map(children, function(c) {
      var num = c.props.item;
      var newprops = {};
      if(num < _length) {
        newprops.visibility = true;
      } else {
        newprops.visibility = false;
      }
      return cloneWithProps(c, newprops);
    });

  },

  handleInputFocus: function() {
    //add class
    // ME._mo.addClass("active");
    // handle onfocus event
  },

  handleInputBlur: function() {
    //remove class
    //ME._mo.removeClass("active");
    // handle blur event 
  },

  render: function () {
    var props = this.props;
    // var length = parseInt(props.length, 10) || this.state._length;
    // this.state._mo = this.repeat('<i><b></b></i>', length);  dangerouslySetInnerHTML={{__html: this.state._mo}}

    return (
      <div className="spwd">
        <div className="spassword" ref="spassword" tabIndex="0" onFocus={this.eventBeginHandler} >
            <PwdItem item={0}></PwdItem>
            <PwdItem item={1}></PwdItem>
            <PwdItem item={2}></PwdItem>
            <PwdItem item={3}></PwdItem>
            <PwdItem item={4}></PwdItem>
            <PwdItem item={5}></PwdItem>
        </div>
        <input type="password" ref="theInput" onChange={this.handleInputChange} onKeyup={this.handleInputChange} onPaste={this.handleInputChange} onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} value={this.state.password} className="spassword" pattern="\d*" minlength="6" maxlength="6" />
      </div>
    );
  }
});

module.exports = Spassword;
