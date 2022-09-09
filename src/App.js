import React from 'react'
import "./App.css"
import {originals,action,trending,horror} from './urls'
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import Card from './Components/Cards/Cards';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Card  urls= {originals} title='Netflix Originals'   />
     <Card  urls= {action}  title='Action' isSmall />
     <Card  urls= {trending}  title='Trending' isSmall />
     <Card  urls= {horror} title='Horrer' isSmall />
    </div>
  );
}

export default App;
