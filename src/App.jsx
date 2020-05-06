import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Pages/Nav/Nav'
import Loading from './Pages/Loading/Loading'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Work from './Pages/Work/Work'
import Contact from './Pages/Contact/Contact'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ isLoading: false })
      }.bind(this),
      3000
    )
  }

  render() {
    let { isLoading } = this.state

    return (
      <div>
        {isLoading ? (
          <>
            <Router>
              <Nav />
              <Loading />
            </Router>
          </>
        ) : (
          <Router>
            <Nav />
            <Switch>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/Work">
                <Work />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        )}
      </div>
    )
  }
}

export default App
