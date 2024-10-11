import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [teamName, setTeamName] = useState('');

  const text1 = '¡Bienvenidos a la Gynkana!';
  const text2 = 'Prepárate para la aventura y consigue todas las letras para ganar.';

  useEffect(() => {
    const fullText = `${text1} ${text2}`;
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsCompleted(true);
      }
    }, 100); // Adjust the speed here

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name submitted:', teamName);
    navigate('/register');
  };

  return (
    <div className='welcome-screen'>
      <div className='typewriter'>
        <div>
          <h1>{displayText.slice(0, text1.length)}</h1>
          <p>{displayText.slice(text1.length + 1)}</p>
        </div>
      </div>

      <div className='submitDiv'>
        {isCompleted && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Enter your name"
              required
            />
            <button type="submit" className='botonInicio' onClick={handleSubmit}>Comenzar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WelcomeScreen;