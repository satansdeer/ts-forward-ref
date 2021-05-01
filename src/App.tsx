import { useEffect, useRef } from 'react';
import './App.css';
import { Button } from './Button';
import { ButtonSimplified } from './ButtonSimplified';

function App() {
  const buttonRef = useRef(null)
  const buttonSimplifiedRef = useRef(null)

  useEffect(() => {
    console.log("Button element", buttonRef.current)
    console.log("ButtonSimplified element", buttonSimplifiedRef.current)
  }, [])

  return (
    <div className="App">
      <Button ref={buttonRef}/>
      <ButtonSimplified text="Example Button" ref={buttonSimplifiedRef}/>
    </div>
  );
}

export default App;
