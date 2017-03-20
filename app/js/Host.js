var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('./IndexPage.js');
var Login = require('./LoginPage.js');
var HomePage = require('./HomePage.js');
var Roles = require('./Roles.js');
var Rules = require('./Rules.js');
var Users = require('./Users.js');
var Wells = require('./Wells.js');

var pathname = window.location.pathname;

var names = [Login, HomePage, Roles, Rules, Users, Wells];

names.map(function (name) {
  if (('/' + name.displayName).toUpperCase() === pathname.toUpperCase()) {
    if (pathname == '/login') {
      ReactDOM.render(React.createElement(name, null), document.getElementById('PageContent'));
    } else{
      ReactDOM.render(React.createElement(Index, null), document.getElementById('PageContent'));
      ReactDOM.render(React.createElement(name, null), document.getElementById('content'));
    }
  }
})
