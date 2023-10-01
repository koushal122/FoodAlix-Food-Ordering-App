import './App.css';
import Header from './Components/Header/header';
import Body from './Components/Body/body';
import { Outlet } from 'react-router-dom';
import UserContext from './Components/Utils/Contexts';
import { useState } from 'react';
import { Provider } from 'react-redux';
import Store from './Components/Utils/store';

function App() {
  const [user, setUser] = useState(
    {
      name: "john",
      email: "newEmail@gamil.com"
    });
  return (
    <div className="App">
      <Provider store={Store}>
      <UserContext.Provider 
      value={ { 
          user: user,
          setUser:setUser
        }
       }>
        <Header />
        <Outlet />
      </UserContext.Provider>
      </Provider>

    </div>
  );
}

export default App;
