var React = require('react');
var ReactDOM = require('react-dom');
require('../scss/LoginPage.scss');

var Login = React.createClass({
  userLogin: function(event) {
    window.location.href="/homePage";
  },

  render: function() {
    return (
      <div>
        <div className="loginCenterDiv">
          <div className="topLogo"></div>
          <div className="inputUserNameDiv">
            <input placeholder="USER" className="inputUserName"/>
          </div>
          <div className="inputPasswordDiv">
            <input placeholder="PASSWORD" className="inputPassword"/>
          </div>
          <input type="button" className="loginBtn" value="LOGIN" onClick={this.userLogin}/>
        </div>
        <div className="buttomLogo"></div>
      </div>
    );
  }
});

module.exports = Login;
//ReactDOM.render(<LoginPage/>, document.getElementById('loginBack'));
