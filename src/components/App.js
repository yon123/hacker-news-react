import React from "react";
import User from "./User";
import Nav from "./Nav";
import Comments from "./Comments";
import TopStories from "./TopStories";
import NewStories from "./NewStories";
import { ThemeProvider } from "./theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light"
      }));
    }
  };
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className="App">
            <div className={this.state.theme}>
              <Nav />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={TopStories} />
                  <Route path="/new" component={NewStories} />
                  <Route path="/user" component={User} />
                  <Route path="/comments/" component={Comments} />
                </Switch>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
