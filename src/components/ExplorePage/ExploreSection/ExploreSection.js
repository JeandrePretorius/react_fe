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
    },
    { 
      id: 65, 
      title: "Quarterly Earnings Call", 
      description: "Voices over wires,\nProfits rise, futures align,\nMarkets hold their breath." 
    },
    { 
      id: 64, 
      title: "Website Redesign Plan", 
      description: "New paint on old walls,\nDesign flows like gentle streams,\nUser paths now clear." 
    },
    { 
      id: 63, 
      title: "Social Media Strategy", 
      description: "Likes and follows fly,\nContent ripples through the web,\nBrands whisper and shout." 
    },
    { 
      id: 62, 
      title: "Customer Support Insights", 
      description: "Calls echo through halls,\nSolutions calm stormy seas,\nService wins hearts back." 
    },
    { 
      id: 61, 
      title: "Budget Allocation Review", 
      description: "Coins carefully stacked,\nFunds shift with each new demand,\nBalance finds its place." 
    },
    { 
      id: 60, 
      title: "Employee Feedback Report", 
      description: "Silent voices speak,\nOpinions in quiet streams,\nChange blooms from within." 
    },
    { 
      id: 59, 
      title: "Sales Growth Analysis", 
      description: "Numbers rise like tides,\nGraphs tell stories of the climb,\nGrowth whispers softly." 
    },
    { 
      id: 58, 
      title: "Competitor Landscape Study", 
      description: "Shadows in the field,\nRivals shift like autumn winds,\nBattles fought unseen." 
    },
    { 
      id: 57, 
      title: "Technology Upgrade Plan", 
      description: "Circuits hum with life,\nNew wires dance beneath the screen,\nFuture built on code." 
    },
    { 
      id: 56, 
      title: "Supply Chain Efficiency", 
      description: "Goods flow through the air,\nBridges form where none existed,\nEfficiency reigns." 
    },
    { 
      id: 55, 
      title: "Risk Assessment Report", 
      description: "Dark clouds gather fast,\nBut within lies a clear path,\nSafely we proceed." 
    },
    { 
      id: 54, 
      title: "New Partnership Proposal", 
      description: "Hands reach across seas,\nNew alliances take root,\nTogether we grow." 
    },
    { 
      id: 53, 
      title: "Internal Audit Summary", 
      description: "Eyes upon the books,\nTruths hidden beneath numbers,\nTransparency wins." 
    },
    { 
      id: 52, 
      title: "Market Expansion Plan", 
      description: "New lands call our name,\nHorizons stretch far and wide,\nMarkets wait in peace." 
    },
    { 
      id: 51, 
      title: "Innovation Roadmap", 
      description: "Ideas sprout like seeds,\nNew paths carved through endless fields,\nThe future takes shape." 
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
