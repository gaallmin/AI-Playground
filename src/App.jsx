// src/App.jsx
import React from 'react';
import LandingPage from './components/LandingPage'; // Main page component

function App() {
  return (
    <> {/* Fragment used to avoid extra DOM node */}
      <LandingPage />
    </>
  );
}

export default App;
