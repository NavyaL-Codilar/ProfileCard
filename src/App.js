import React, { useState } from 'react';
import Pagination from './PAGINATION/Pagination';
import Profile from './PROFILECARD/ProfileCard';

function App() {
  const [state, setstate] = useState(1);
  return (
    <div className="mainApp">
      <Profile state={state} />
      <Pagination setstate={setstate} state={state} />
    </div>
  );
}

export default App;