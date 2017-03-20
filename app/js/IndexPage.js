var React = require('react');
var ReactDOM = require('react-dom');
require('../scss/IndexPage.scss');
var HomePage = require('./HomePage.js');
var Roles = require('./Roles.js');
var Rules = require('./Rules.js');
var Users = require('./Users.js');
var Wells = require('./Wells.js');

$('.headBread div').click(function() {
    $(this).css({"background": "linear-gradient(135deg, transparent 0.5em, #ffffff 0)", "color":"#77b81a"});
    $('.headBread div').not(this).css({"background": "linear-gradient(135deg, transparent 0.5em, #7dc2c5 0)", "color":"#1d7377"});

    if (this.className == "homePage") {
      ReactDOM.render(<HomePage/>, document.getElementById('content'));
    }

    if (this.className == "roles") {
      ReactDOM.render(<Roles/>, document.getElementById('content'));
    }

    if (this.className == "rules") {
      ReactDOM.render(<Rules/>, document.getElementById('content'));
    }

    if (this.className == "users") {
      ReactDOM.render(<Users/>, document.getElementById('content'));
    }

    if (this.className == "wells") {
      ReactDOM.render(<Wells/>, document.getElementById('content'));
    }
});

var Index = React.createClass({
  render: function() {
    return (
      <div className="back">
          <div className="userInfo">
              <label className="productLogo"></label>
              <label className="userName">Tommy</label>
              <label className="userLogo"></label>
          </div>

          <div className="body">
            <div className="headBread">
                <div className="homePage">HOMEPAGE</div>
                <div className="users">USERS</div>
                <div className="roles">ROLES</div>
                <div className="rules">RULES</div>
                <div className="wells">WELLS</div>
            </div>
            <div id="content">

            </div>
          </div>
      </div>
    );
  }
});

module.exports = Index;
