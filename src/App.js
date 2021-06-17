import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Footer from './Components/Footer'
import ItemPage from './pages/ItemPage'
import SingleItem from './pages/SingleItem'
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Items' component={ItemPage} />
        <Route exact path='/Items/:model' component={SingleItem} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
