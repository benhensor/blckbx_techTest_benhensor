import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  console.log("Hello World!")

  const [ data, setData ] = useState([{}])


  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/fizzbuzz")
          const data = await response.json()
          setData(data)
          console.log(data)
        } catch (error) {
          console.error("Error fething data:", error)
        }
      }

      fetchData()

  }, [])


  return (
    <main className="App">

        {( typeof data.result === 'undefined' ) ? (
            <p>Loading...</p>
        ) : (
            data.result.map((number, i) => (
                <p key={i}>
                  {number}
                </p>
            ))
        )}
      
    </main>
  );
}

export default App;
