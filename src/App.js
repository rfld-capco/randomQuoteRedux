import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./redux/actions/quote_actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        quote: "",
        author: ""
      }
    };
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }
  newQuote() {
    //this.setState ({
    // quote: this.props.generateRandomQuote();
    //});
    this.props.randomQuote();
    console.log(this.props.quote);
  }

  render() {
    return (
      <div id="quote-box" className="container">
        <div className="row">
          <div id="text">
            <p>{this.state.quote.quote}</p>
          </div>
        </div>
        <div className="row">
          <div id="author">
            <p>{this.state.quote.author}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3">
            <a id="tweet-quote" href="twitter.com/intent/tweet">
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
          <div className="col-xs-3">
            <a href="twitter.com/intent/tweet">
              <i class="fab fa-tumblr-square"></i>
            </a>
          </div>
          <div id="new-quote" className="col-xs-6">
            <button onClick={this.newQuote}>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quote: state.quotes };
};

export default App = connect(mapStateToProps, actions)(App);
