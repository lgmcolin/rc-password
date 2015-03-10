# Demo

---

## Normal usage

<div id='container'>container</div>
<div id='container1'>container1</div>

````javascript
/** @jsx React.DOM */

var React = require('react');
var ReactPassword = require('../');
var Spassword = require('../lib/Spassword');

React.render(<ReactPassword id="test" name="test"></ReactPassword>, document.getElementById('container'));

var onCompleteHandle = function (val) {
  console.log('input complete,value = ',val);
}

var inCompleteHandle = function (val) {
  console.log('un complete = ',val); 
}

var onFocusHandle = function() {
  console.log('on focus'); 
}

React.render(<Spassword id="test" onFocus={onFocusHandle} onComplete={onCompleteHandle} inComplete={inCompleteHandle} name="test"></Spassword>, document.getElementById('container1'));

````  