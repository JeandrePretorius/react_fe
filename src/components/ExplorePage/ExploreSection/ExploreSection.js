import React from 'react';
import './ExploreSection.css';

const ExploreSection = () => {
  //Dummy data
  const items = [
    { 
        id: 70, 
        title: "Annual Financial Report", 
        description: "Year’s end draws closer,\nNumbers weave stories untold,\nBalance found in books." 
    },
    { 
        id: 69, 
        title: "Marketing Campaign Results", 
        description: "Ads fly through the air,\nData whispers in the wind,\nSuccess finds its way." 
    },
    { 
        id: 68, 
        title: "Product Launch Timeline", 
        description: "Time flows like a stream,\nNew ideas set to bloom soon,\nLaunch day beckons near." 
    },
    { 
        id: 67, 
        title: "Team Performance Review", 
        description: "Together we rise,\nEfforts measured by the stars,\nThe team’s light shines bright." 
    },
    { 
        id: 66, 
        title: "Customer Satisfaction Survey", 
        description: "Voices all around,\nGratitude and silent sighs,\nA heart’s truth revealed." 
    }
];


  const handleRowClick = (id) => {
    console.log(`Clicked row with id: ${id}`);
    // Add your click handler logic here
  };

  return (
    <div className="ExploreSection">
      <div className='Title'>My Notes</div>
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
