import { useState } from "react";
import Checkbox from "./Checkbox";

function App() {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="App">
      <Checkbox 
        id="checkbox" 
        label="I agree to the terms and conditions." 
        value={checked} 
        onChange={onChange} 
      />      
    </div>
  );
}

export default App;
