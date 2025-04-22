import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const response = await fetch(`/api/nothingtrigger?name=Mohammed`);
      const jsonResponse = await response.json();
      setData(JSON.stringify(jsonResponse));
    })();
  });

  return <div>{data}</div>;
}

export default App;