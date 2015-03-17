/** @jsx React.DOM */

var React = require('react');
var lifeCycle = require('./cslife');
var spassword = require('spassword');

var PropTypes = React.PropTypes;

var Password = React.createClass({
  // mixins: [lifeCycle],

  protoTypes: {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    classname: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    autocomplete: PropTypes.bool,
    autocapitalize: PropTypes.bool,
    minlength: PropTypes.number,
    maxlength: PropTypes.number
  },

  getDefaultProps: function () {
    return {
      type: 'text',
      autocomplete: false,
      autocapitalize: false,
      classname:'',
      placeholder:'hello world'
    };
  },

  getInitialState: function () {
    return {};
  },

  renderSpassword: function (id) {
    this.spwd = new spassword(id).on("complete", function(value){
      console.log('spassword = ', value);
    }).render();
  },

  render: function () {
    var props = this.props;
    
    if(props.type === "spassword") {
      this.renderSpassword(props.id);
    }
    return (
      <input type={props.type} id={props.id} name={props.name} className={props.classname} placeholder={props.placeholder}  />
    );
  }
});
module.exports = Password;
