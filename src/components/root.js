var React = require('react');
var logger = require('bragi-browser');
var Root = React.createClass({

  render: function () {
    return (
      <div>
        <h1>Hello World!!!</h1>

        <p>
          Please input your name here:
          <input onChange={this.handleChange}
            value={this.state.name}
          />
        </p>

        <p>Hello, {this.state.name}</p>
      </div>
    );
  },

  getInitialState: function () {
    logger.log("Root:getInitialState", "called...");
    return {
      name: ''
    };
  },

  handleChange: function (e) {
    var newName = e.target.value();
    this.setState({
      name: newName
    });
  }

});

module.exports = Root;
