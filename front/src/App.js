import './App.scss';
import { Card } from './components/card/Card';
import React,  {useEffect, useState} from 'react'
import { AppRouter } from './router/AppRouter';
import { UserContext } from './context/UserContext';

function App() {
  //let products= [];

  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  

  return (
    <>
    <main className={darkMode ? 'dark-mode': 'ligth-mode'}>
      <UserContext.Provider value= {{user, setUser}}>
        <AppRouter/>
      </UserContext.Provider>
      {/* <Card title='Iphone 12 64Gb' price='3.000.000' location='Buenos Aires' image='http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg'></Card>
      <Card title='Iphone 13 64Gb' price='3.000.000' location='Buenos Aires' image='http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg'></Card> */}
    </main>
    </>
  )
}

export default App;
