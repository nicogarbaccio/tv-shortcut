import React from 'react';
import Main from './Main';
import NavBar from './NavBar';
import Recommendations from './Recommendations';
import Reviews from './Reviews';

function App() {
  return (
    <div>
      <NavBar />
      {/* Switch  */}
      <Main />
      <Recommendations />
      <Reviews />
    </div>
  );
}

export default App;
