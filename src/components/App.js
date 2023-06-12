
import React, { useEffect, useState } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (response.ok) {
          const data = await response.json();
          setDogImage(data.message);
          setIsLoading(false);
        } else {
          throw new Error('Failed to fetch dog image');
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
