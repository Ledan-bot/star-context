import React, {useState} from 'react';
import ColorList from './components/ColorList.jsx'
import colorData from './assets/color_data.json'
import './App.css';

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple star Form</h1>
      </header>
      <main>
        <ColorList
          colors={colors}
          onRateColor={(id, rating) => {
            const newColors = colors.map(color =>
              color.id=== id ? {...color, rating} : color
            );
            setColors(newColors)
          }}
          onRemoveColor={id => {
            const newColors = colors.filter(color => color.id !== id);
            setColors(newColors)
          }}
        />
      </main>
    </div>
  );
}

export default App;
