import React from 'react';
import './App.css';
import Header from './components/Header';
import AllPosts from './pages/AllPosts';


import { Switch , Route , BrowserRouter as Router } from 'react-router-dom';


const App = () => {

let dataCont;
const handleTransfer = (data) =>{
  return dataCont = data;
}
console.log(dataCont)

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route 
            exact 
            path='/'
            component={AllPosts}
          />
          {/* <Route path='/addform' component={AddNewPost}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
