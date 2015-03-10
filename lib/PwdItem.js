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

  componentWillReceiveProps: function (props) {
   
  },

  render: function () {
    var props = this.props;
    console.log('props', props.visibility);
   

    showornot = this.state.visibility === true ? "visible" : "hidden"; 

    var bStyle = {
      visibility: showornot
    };

    return (
      <i><b style={bStyle}></b></i>
    );
  }
});

module.exports = PwdItem;
