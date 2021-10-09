
import './App.css';
import User from './component/User';

import Contact from './component/Contact';
import About from './component/About';

function App() {
  return (
    <div className="App">
     <h1>App Component</h1>
      <hr />
      <About />
      <User  />
      <Contact />
    </div>
  );
}

export default App;
