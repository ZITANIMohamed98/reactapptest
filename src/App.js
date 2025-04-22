import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`/api/nothingtrigger?name=App%20Service%20Dev%20Team`); // Fetch data from the API endpoint
        const contentType = response.headers.get('Content-Type');

        let result;
        if (contentType && contentType.includes('application/json')) {
          result = await response.json(); // Parse as JSON
        } else {
          result = await response.text(); // Parse as plain text
        }

        setData(JSON.stringify(result)); // Store the result as a string
      } catch (error) {
        console.error('Error fetching data:', error);
        setData('Error fetching data');
      }
    })();
  }, []); // Dependency array ensures this runs only once
   //component that displays the data with nice content
   
  return <div>
    <h1>Data from API</h1>
    <p>the API wanted to say to you:</p> 
    {data}
    </div>;
}

export default App;