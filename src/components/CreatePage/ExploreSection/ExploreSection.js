import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import './ExploreSection.css';

// Use forwardRef to pass the ref from parent to child component
const ExploreSection = forwardRef(({ onSelectHaiku, selected }, ref) => {
  const [items, setItems] = useState([]);

  const selectedRow = selected;

  // Define a function to fetch data that can be called by parent
  const fetchData = () => {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  // Expose the fetchData method to the parent via the ref
  useImperativeHandle(ref, () => ({
    fetchData,
  }));

  useEffect(() => {
    fetchData(); // Initial data load
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
                className={`Row ${selectedRow === item.id ? 'Selected' : ''}`}
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
});

export default ExploreSection;
