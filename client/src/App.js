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
      <section>

      <article>
      <h1><a href="https://blckbx.co.uk/" rel="noreferrer" target="_blank">BLCK <span>BX</span></a></h1>
        <p><span>Technical Test</span></p>
      </article>
      <article>
      <h2>Full Stack Developer - </h2>
      <h3><a href="https://benhensordev.netlify.app/" rel="noreferrer" target="_blank">Ben Hensor</a></h3>
      </article>

        {( typeof data.result === 'undefined' ) ? (
            <p>Loading...</p>
        ) : (
            data.result.map((number, i) => (
                <p key={i}>
                  {number}
                </p>
            ))
        )}

        </section>
    </main>
  );
}

export default App;
