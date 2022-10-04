import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import CreateForm from './components/CreateNew'
import Detail from './components/Detail';

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
    </>
  );
}

export default App;