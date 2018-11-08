
import React, { Component } from 'react';
import Board from 'react-trello';
import "./dashboard.css";

const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Unassigned',
        label: '2/2',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
        ]
      },
      {
        id: 'lane2',
        title: 'Assigned',
        label: '0/0',
        cards: []
      },
      {
        id: 'lane3',
        title: 'Completed',
        label: '0/0',
        cards: []
      }
    ]
};
 
  const styled = {
      background: 'none',
      width: '100vw',
     
  };

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1> Chores to Do </h1>
            <Board data={data} draggable style={styled} />
            </div>
        );
    }
}

export default Dashboard;