import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import { play, exit } from './timelines'
import Nav from './Nav'
import About from './views/About'
import Projects from './views/Projects'

class App extends Component {
  render() {
    const { projects, about } = this.props.data

    return (
      <BrowserRouter basename='/dev'>
        <div className="grid app">
          <Route render={({ location, ...props }) => {
            const { pathname, key } = location
            const isInit = props.history.action === 'POP'

            return (
              <>
                <Nav location={pathname}/>
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => { if (!isInit) {play(pathname, node, appears)} }}
                    onExit={(node, appears) => exit(node, appears)}
                    timeout={{enter: 5000, exit: 5000}}
                    >
                    <Switch location={location}>
                      <Route exact path="/" render={() => <Projects data={projects} />}/>
                      <Route path="/about" render={() => <About data={about} />} />
                    </Switch>
                  </Transition>
                </TransitionGroup>
              </>
            )
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}

  export default App;
