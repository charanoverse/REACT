// Details.jsx
import React, { useState } from 'react';

function Details() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = (msg) => {
    alert("Message from Details: " + msg);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Details Page</h2>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Info" : "Show Info"}
      </button>

      {/* Conditional Rendering */}
      {showMessage && (
        <div style={{ marginTop: '20px', border: '1px solid gray', padding: '10px' }}>
          <p>This message is conditionally rendered!</p>
          <button onClick={() => handleButtonClick("Hello from inside Details")}>
            Trigger Alert
          </button>
        </div>
      )}
    </div>
  );
}

export default Details;
