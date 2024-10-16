import React, { useEffect, useState } from 'react';
import './ExploreSection.css';


const ExploreSection = () => {
  const [items, setItems] = useState([]);

  // Fetch the notes data from Rails API
  useEffect(() => {
    fetch('http://localhost:3000/notes')  // Replace with the actual URL if necessary
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
 
  const handleRowClick = (id) => {
  
    console.log(`Clicked row with id: ${id}`);
    // Add your click handler logic here
  };

  return (
    <div className="ExploreSection">
      <div className='Title'>My Haiku's</div>
      <div className="Card">
        <div className="CardContent">
          <div className="flex flex-col space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleRowClick(item.id)}
                className="Row"
              >
                <div className="RowBorder"></div>
                <div>
                  <h3 className="RowTitle">{item.title}</h3>
                  <p className="RowDescription">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
