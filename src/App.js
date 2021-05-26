import React from 'react';
import SplashScreen from './pages/SplashScreen'
import { BrowserRouter,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/home" exact component = {SplashScreen} />
        </div>
      </BrowserRouter>
    </div>
  );
}
