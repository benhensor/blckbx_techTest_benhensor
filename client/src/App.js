import React, { useState, useEffect } from 'react';
import './App.css';


// Main App component

// Here useEffect is deployed to fetch data from the API and set it to state on load.
// The call is checked for a valid response.
// If the response is not valid, a loading message is displayed.
// The loading message is displayed until the response is valid.
// If the response is valid, the data is mapped to the page in the form of a paragraph element.
// The class name of the paragraph element is set by the getClass function.
// The getClass function checks the value of the number and returns a class name based on the value.
// The class name is then used to style the paragraph element.



function App() {

  // Log to check React is working
  console.log("React App Launched - Hello World!")


  // Set up state for data from API
  const [ data, setData ] = useState([{}])


  // The simplest solution seemed to suggest using useEffect to make the API call 
  // when the component mounts. I could have implemented a button to make the call
  // but this option works well for this use-case.


  // Fetch data from API
  useEffect(() => {
      const fetchData = async () => {
        try {
          // Asynchronous fetch request to API
          const response = await fetch("http://localhost:5000/fizzbuzz")
          // Convert response to JSON
          const data = await response.json()
          // Set data to state
          setData(data)
          // Log data to console to check it is working
          console.log("API Response", data)
        } catch (error) {
          // Log any errors
          console.error("Error fething data:", error)
        }
      }

      // Call fetchData function
      fetchData()

  }, [])


  // As I was approaching the styling of the page, I thought it would be interesting 
  // to have the option of styling each element of the fizzbuzz result differently.


  // Function to set class name of paragraph element
  function getClass(number) {

    if (number === "Fizz") {
      return "fizzStyle";
    }
    if (number === "Buzz") {
      return "buzzStyle";
    }
    if (number === "FizzBuzz") {
      return "fizzBuzzStyle";
    }
    return "numberStyle";
  }


  // Return the page
  // I have opted to dynamically map the data results using the map() method.
  // This is a good code-efficient solution as it allows for the entirety of 
  // the data to be displayed whilst reducing the need to hard-code everything.

  // On a more-or-less purely aesthetic level, I have added headings with some links
  // just for fun. I think it makes the page more interesting to view.



  return (
    <main className="App">
      <section>

      <article id="header">
      <h1><a href="https://blckbx.co.uk/" rel="noreferrer" target="_blank">BLCK <span>BX</span></a></h1>
        <p><span>Technical Test</span></p>
      </article>
      <article id="subheader">
      <h2>Full Stack Developer - </h2>
      <h3><a href="https://benhensordev.netlify.app/" rel="noreferrer" target="_blank">ben hensor</a></h3>
      </article>
      <hr />

      <div>

        {( typeof data.result === 'undefined' ) ? (
            <p>Loading...</p>
        ) : (
            data.result.map((number, i) => (
                <p key={i} className={getClass(number)}>
                  {number}
                </p>
            ))
        )}

      </div>

        </section>
    </main>
  );
}

export default App;
