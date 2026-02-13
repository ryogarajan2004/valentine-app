import { useState } from "react";
import "./App.css";

function App() {
  const messages = [
    "Will you be my Valentine? ❤️",
    "Are you sure? 😢",
    "Think again 🥺",
    "Please...? 💔",
    "Last chance 😭"
  ];

  const [stage, setStage] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noStyle, setNoStyle] = useState({});

  const handleNo = () => {
    setStage((prev) => (prev < messages.length - 1 ? prev + 1 : prev));

    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;

    setNoStyle({
      transform: `translate(${randomX}px, ${randomY}px)`
    });
  };

  const handleYes = () => {
    setAccepted(true);
  };

  return (
    <div className="container">
      {!accepted ? (
        <>
          <h1>{messages[stage]}</h1>
          <div className="buttons">
            <button className="yes" onClick={handleYes}>
              Yes 💖
            </button>
            <button
              className="no"
              style={noStyle}
              onClick={handleNo}
            >
              No 😅
            </button>
          </div>
        </>
      ) : (
        <h1>Yayyy! You are my Valentine! 💕🎉</h1>
      )}
    </div>
  );
}

export default App;
