import React, { useState } from 'react';
import Homepage from './Homepage/homepage';

function App() {
    const [showAvatar, setShowAvatar] = useState(false);

    return (
        <div
          style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100vw',
          }}
        >
          <div>
            <Homepage />
            {showAvatar && (
                <div 
                    style={{ 
                        position: 'fixed', 
                        right: '10px',
                        bottom: '10px',
                        backgroundColor: 'lightgreen',
                    }}
                >
                    <img src="https://via.placeholder.com/150" alt="avatar" />
                    <p>Hi! How can I help you today?</p>
                    <button onClick={() => setShowAvatar(false)}>Close</button>
                </div>
            )}
          </div>
            {!showAvatar && (
                <button 
                    style={{ 
                        position: 'fixed', 
                        right: '10px',
                        bottom: '10px',
                        backgroundColor: 'lightgreen',
                    }}
                    onClick={() => setShowAvatar(true)}
                >
                    Need help?
                </button>
            )}
        </div>
    );
}

export default App;