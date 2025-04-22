import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/nothingtrigger`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;