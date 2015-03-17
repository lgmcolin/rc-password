/** @jsx React.DOM */

var React = require('react');
var PwdItem = require('./PwdItem')
var joinClasses = require('./utils/joinClasses');

require('./spassword.css');

var PropTypes = React.PropTypes;

var Spassword = React.createClass({
  getInitialState: function () {
    return {
      _length: 6,
      password: '',
      pwdlen: 0,
      activeClass: ''
    };
  },

  mockData: function (length) {
    var data = [];
    for(var i = 0; i < length; i++) {
      data.push(i);
    }
    return data;
  },

  eventBeginHandler: function () {
    var len = this.state.password.length;
    this.refs.theInput.getDOMNode().focus();
    this.refs.theInput.getDOMNode().setSelectionRange(len, len);
  },

  handleInputChange: function(e) {
    var pwd = e.target.value;
    var len = pwd.length;
    var bCompleted = false;
    this.props.inComplete && this.props.inComplete(pwd);

    if(len === this.state._length) {
      bCompleted = true;
      this.props.onComplete && this.props.onComplete(pwd);
    } else {
      if (bCompleted) {
        bCompleted = false;
        this.props.inComplete && this.props.inComplete(pwd);
      }
    }

    if(len <= this.state._length) {
      this.setState({ password: pwd });
      this.setState({ pwdlen: len});
    }
  },

  handleInputFocus: function() {
    this.setState({
      activeClass: 'active'
    });
  },

  handleInputBlur: function() {
    this.setState({
      activeClass: ''
    });
  },

  render: function () {
    var _length = parseInt(this.props.length, 10) || this.state._length;
    var pwdlen = this.state.pwdlen;

    var itemList = this.mockData(_length).map(function(num) {
      var visbibility = num < pwdlen ? true : false;
      return (
        <PwdItem ref={'item' + num} visibility={visbibility}></PwdItem>
      );
    });

    var defaultClass = this.props.defaultClass || 'spassword';
    var activeClass = this.state.activeClass;

    var domClass = {
       className: joinClasses(defaultClass, activeClass),
       ref: "spassword",
       tabIndex: "0",
       onFocus: this.eventBeginHandler
    };

    return (
      <div className="spwd">
        <div {...domClass}>
            {itemList}
        </div>
        <input type="password" ref="theInput" onChange={this.handleInputChange}  onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} value={this.state.password} className="spassword" pattern="\d*" minLength="6" maxLength="6" />
      </div>
    );
  }
});

module.exports = Spassword;
