import React from 'react';
import SplashScreen from './pages/SplashScreen'
import { BrowserRouter,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';

export default function App() {
  const [signedIn, setSign] = React.useState(false);
  const [currentUser,setUser] = React.useState(null);
  const hooks = {
    setSign,
    setUser
  }
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/home" 
          render={!signedIn?
              (props) => (
              <SplashScreen {...props} hooks={hooks} />
            ):
            (props) => (
              <Dashboard {...props} hooks={hooks} currentUser={currentUser} />
            )
          }
        />
        </div>
      </BrowserRouter>
    </div>
  );
}
