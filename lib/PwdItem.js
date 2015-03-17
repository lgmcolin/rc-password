/** @jsx React.DOM */

var React = require('react');
require('./spassword.css');

var PropTypes = React.PropTypes;

var PwdItem = React.createClass({
  getInitialState: function () {
    return {
      visibility: false
    }
  },

  render: function () {    
    var bStyle = {
      visibility: this.props.visibility === true ? "visible" : "hidden"
    };

    return (
      <i><b style={bStyle}></b></i>
    );
  }
});

module.exports = PwdItem;
