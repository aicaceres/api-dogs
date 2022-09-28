import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import CreateForm from './components/CreateArticle'
import ArticleDetail from './components/ArticleDetail';

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
        <Route exact path='/detail'>
            <ArticleDetail/>
        </Route>
    </>
  );
}

export default App;