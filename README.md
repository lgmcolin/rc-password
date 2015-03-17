# rc-password [![spm version](http://spmjs.io/badge/react-password)](http://spmjs.io/package/react-password)
![image](https://t.alipayobjects.com/images/T1QKBfXdhpXXXXXXXX.png)
---
## Install
```
$ spm install rc-password --save
```
## Usage
```js
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
```
