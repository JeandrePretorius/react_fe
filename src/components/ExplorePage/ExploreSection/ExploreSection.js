import React from 'react';
import './ExploreSection.css';

const ExploreSection = () => {
  const items = [
    { id: 70, title: "Annual Financial Report", description: "Complete overview of company financials for FY 2023" },
    { id: 69, title: "Marketing Campaign Results", description: "Q2 digital marketing performance analysis" },
    { id: 68, title: "Product Launch Timeline", description: "Detailed schedule for new product release" },
    { id: 67, title: "Team Performance Review", description: "Department productivity metrics and KPIs" },
    { id: 66, title: "Customer Satisfaction Survey", description: "Results from recent NPS and satisfaction study" }
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
