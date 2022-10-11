import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import CreateForm from './components/CreateNew'
import Detail from './components/Detail';
import NotFound404 from './components/NotFound404'

function App() {
  return (
    <>
        <Route exact path='/'>
            <Landing />
        </Route>
        <Route exact path='/breeds'>
            <Home/>
        </Route>
        <Route exact path='/newBreed'>
            <CreateForm/>
        </Route>
        <Route exact path='/detail/:id'>
            <Detail/>
          </Route>
        <Route path='*' component={NotFound404} />
    </>
  );
}

export default App;