import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyComponent from './Components/MyComponent';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0);

  // Logs count changes
  useEffect(() => {
    console.log(`count changed to: ${count}`);
  }, [count]);

  // Tick every second
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Tick");
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log("clean-up");
  //   };
  // }, []);

  return (
    <>
      <MyComponent />
      <Dashboard/>
      <div>
        <p>Count is: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}

export default App;
