import React from 'react'
import NavBar from "./component/NavBar/NavBar";
import Banner from './component/Banner/Banner';
import './App.css'
import NewRelease from './component/New Release/NewRelease';
import { action, documentary, horror, original, romance } from './component/constants/Url';

function App() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <NewRelease url={original} title='Netflix Original'/>
        <NewRelease url={action} title='Action Movies' isSmall={true} />
        <NewRelease url={documentary} title='Documentaries' isSmall={true} />
        <NewRelease url={romance} title='Romance Movies' isSmall={true} />
    </div>
  )
}

export default App