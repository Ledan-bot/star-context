import React from 'react';
import ColorList from './components/ColorList.jsx'
import ColorForm from './components/ColorForm.jsx'


function App() {
  return (
    <div >
      <header >
        <h1>Simple star Form</h1>
      </header>
      <main>
        <ColorForm />
        <ColorList />
      </main>
    </div>
  );
}

export default App;
