import React, { useEffect, useState } from 'react';
import './ExploreSection.css';

const ExploreSection = ({ onSelectHaiku }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRowClick = (id) => {
    fetch('http://localhost:3000/notes/' + id)
      .then(response => response.json())
      .then(data => {
        onSelectHaiku(data); // Pass the selected haiku to parent component
      })
      .catch(error => console.error('Error fetching data:', error));
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
