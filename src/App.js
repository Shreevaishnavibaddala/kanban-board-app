import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  // Initial ticket data
  const [tickets, setTickets] = useState([
    { id: 'CAM-1', title: 'Update User Profile Page UI', group: 'Todo', status: 'Feature Request', priority: 'Low' },
    { id: 'CAM-2', title: 'Implement Email Notification System', group: 'Todo', status: 'Feature Request', priority: 'Medium' },
    { id: 'CAM-3', title: 'Optimize Database Queries for Performance', group: 'In Progress', status: 'Feature Request', priority: 'High' },
    { id: 'CAM-4', title: 'Add Multi-Language Support', group: 'Todo', status: 'Feature Request', priority: 'Low' },
    { id: 'CAM-5', title: 'Add Multi-Language Support - Enable multi-language support...', group: 'Todo', status: 'Feature Request', priority: 'Low' },
    { id: 'CAM-6', title: 'Enhance Search Functionality', group: 'Done', status: 'Feature Request', priority: 'Low' },
    { id: 'CAM-7', title: 'Integrate Third-Party Payment Gateway', group: 'Done', status: 'Feature Request', priority: 'High' },
    { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', group: 'Todo', status: 'Feature Request', priority: 'Medium' },
    { id: 'CAM-9', title: 'Implement Role-Based Access Control (RBAC)', group: 'Done', status: 'Feature Request', priority: 'High' },
    { id: 'CAM-10', title: 'Upgrade Server Infrastructure', group: 'Done', status: 'Feature Request', priority: 'Medium' },
    { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', group: 'Done', status: 'Feature Request', priority: 'High' },
  ]);

  return (
    <div className="App">
    
      <KanbanBoard tickets={tickets} />
    </div>
  );
}

export default App;
