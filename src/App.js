import React,{useState}  from 'react'

const App = () => {
  const [name, setName] = useState("");

  
  const inputEvent = (event)=> {
    console.log(event.target.value);
    setName(event.target.value);
    
  }
  return(
    <>
  <h1>Hello {name} </h1>
  <input type="text" placeholder="Enter Your Name"
  onChange={inputEvent} />
  <button>Click me</button>
  </>
  )
}
export default App;
