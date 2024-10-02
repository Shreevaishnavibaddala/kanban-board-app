import React, { useState, useEffect } from 'react';
import '../styles/KanbanBoard.css';
import urgentIcon from '../assets/urgent-icon.jpg';
import highIcon from '../assets/High Priority.jpg';
import mediumIcon from '../assets/Medium Priority.jpg';
import lowIcon from '../assets/Low Priority.jpg';
import nopriorityIcon from '../assets/No-priority.jpg';

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');
  const [displayOptions, setDisplayOptions] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = () => {
    const sampleTickets = [
      { id: 'CAM-1', title: 'Update User Profile Page UI', status: 'Todo', priority: 3, user: 'Abhideep Maity' },
      { id: 'CAM-2', title: 'Implement Email Notification System', status: 'Todo', priority: 1, user: 'Akanksha' },
      { id: 'CAM-3', title: 'Optimize Database Queries for Performance', status: 'In Progress', priority: 2, user: 'Abhideep Maity' },
      { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', status: 'Done', priority: 4, user: 'Anoop' },
      { id: 'CAM-4', title: 'Fix Minor Bugs', status: 'Canceled', priority: 0, user: 'Akanksha' },
      { id: 'CAM-5', title: 'Add Multi-Language Support', status: 'Todo', priority: 0, user: 'Abhideep Maity' },
      { id: 'CAM-6', title: 'Integrate Third-Party Payment Gateway', status: 'Todo', priority: 1, user: 'Akanksha' },
      { id: 'CAM-7', title: 'Enhance Search Functionality', status: 'In Progress', priority: 2, user: 'Anoop' },
      { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', status: 'Done', priority: 3, user: 'Akanksha' },
      { id: 'CAM-9', title: 'Upgrade Server Infrastructure', status: 'Todo', priority: 3, user: 'Abhideep Maity' },
    ];
    setTickets(sampleTickets);
  };

  const groupTickets = () => {
    if (groupingOption === 'status') {
      return groupByStatus();
    } else if (groupingOption === 'user') {
      return groupByUser();
    } else if (groupingOption === 'priority') {
      return groupByPriority();
    }
  };

  const groupByStatus = () => {
    const statusGroups = {};
    tickets.forEach(ticket => {
      if (!statusGroups[ticket.status]) {
        statusGroups[ticket.status] = [];
      }
      statusGroups[ticket.status].push(ticket);
    });
    return statusGroups;
  };

  const groupByUser = () => {
    const userGroups = {};
    tickets.forEach(ticket => {
      if (!userGroups[ticket.user]) {
        userGroups[ticket.user] = [];
      }
      userGroups[ticket.user].push(ticket);
    });
    return userGroups;
  };

  const groupByPriority = () => {
    const priorityGroups = {
      'Urgent': [],
      'High': [],
      'Medium': [],
      'Low': [],
      'No priority': []
    };

    tickets.forEach(ticket => {
      const priorityLabel = getPriorityLabel(ticket.priority);
      if (priorityGroups[priorityLabel]) {
        priorityGroups[priorityLabel].push(ticket);
      }
    });

    return priorityGroups;
  };

  const sortTickets = (tickets) => {
    return [...tickets].sort((a, b) => {
      if (sortingOption === 'priority') {
        return b.priority - a.priority;
      } else if (sortingOption === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const renderGroupedTickets = () => {
    const grouped = groupTickets();

    return Object.entries(grouped).map(([groupKey, ticketsInGroup]) => {
      if (Array.isArray(ticketsInGroup) && ticketsInGroup.length > 0) {
        const sortedTickets = sortTickets(ticketsInGroup);
        return (
          <div key={groupKey} className="kanban-column">
            <h3>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {groupKey === 'Done' ? (
                  <>
                    <span className="solid-blue-tick"></span>
                    Done ({sortedTickets.length})
                  </>
                ) : groupKey === 'Todo' ? (
                  <>
                    <span className="hollow-gray-circle"></span>
                    Todo ({sortedTickets.length})
                  </>
                ) : groupKey === 'In Progress' ? (
                  <>
                    <span className="hollow-orange-circle">
                      <span className="half-circle"></span>
                    </span>
                    In Progress ({sortedTickets.length})
                  </>
                ) : groupKey === 'Canceled' ? (
                  <>
                    <span className="solid-gray-circle">
                      <span className="cross"></span>
                    </span>
                    Canceled ({sortedTickets.length})
                  </>
                ) : groupKey === 'Urgent' ? (
                  <>
                    <img src={urgentIcon} alt="Urgent Icon" className="urgent-icon" />
                    Urgent ({sortedTickets.length})
                  </>
                ) : groupKey === 'High' ? (
                  <>
                    <img src={highIcon} alt="High Icon" className="urgent-icon" />
                    High ({sortedTickets.length})
                  </>
                ) : groupKey === 'Medium' ? (
                  <>
                    <img src={mediumIcon} alt="Medium Icon" className="urgent-icon" />
                    Medium ({sortedTickets.length})
                  </>
                ) : groupKey === 'Low' ? (
                  <>
                    <img src={lowIcon} alt="Low Icon" className="urgent-icon" />
                    Low ({sortedTickets.length})
                  </>
                ) : groupKey === 'No priority' ? (
                  <>
                    <img src={nopriorityIcon} alt="No priority Icon" className="urgent-icon" />
                    No priority ({sortedTickets.length})
                  </>
                ) :(
                  `${groupKey} (${sortedTickets.length})`
                )}
                <span className="header-icons" style={{ color: 'gray' }}>
                  <span className="plus-symbol">+</span>
                  <span className="ellipsis">...</span>
                </span>
              </span>
            </h3>
            {sortedTickets.map(ticket => (
              <div key={ticket.id} className="kanban-ticket">
                <div className="ticket-header">
                  <span className="ticket-id">{ticket.id}</span>
                  <img src="path/to/your/image.jpg" alt="Ticket Icon" className="ticket-icon" />
                </div>
                <h4>
                  {ticket.status === 'Done' && groupingOption !== 'status' && (
                    <span className="solid-blue-tick"></span>
                  )}
                  {ticket.status === 'Todo' && groupingOption !== 'status' && (
                    <span className="hollow-gray-circle"></span>
                  )}
                  {ticket.status === 'In Progress' && groupingOption !== 'status' && (
                    <span className="hollow-orange-circle">
                      <span className="half-circle"></span>
                    </span>
                  )}
                  {ticket.status === 'Canceled' && groupingOption !== 'status' && (
                    <span className="solid-gray-circle">
                      <span className="cross"></span>
                    </span>
                  )}
                  {ticket.title}
                </h4>
                <div className="feature-request">
                  <span className="solid-circle"></span>
                  <span>Feature Request</span>
                </div>
              </div>
            ))}
          </div>
        );
      }
      return null;
    });
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 4:
        return 'Urgent';
      case 3:
        return 'High';
      case 2:
        return 'Medium';
      case 1:
        return 'Low';
      case 0:
        return 'No priority';
      default:
        return 'Unknown';
    }
  };

  return (
    <div>
      <div className="options-panel">
        <button
          className="display-button"
          onClick={() => setDisplayOptions(!displayOptions)}
        >
          Display
        </button>

        {displayOptions && (
          <div className="options">
            <div className="grouping-options">
              <label>Grouping:</label>
              <select value={groupingOption} onChange={(e) => setGroupingOption(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="sorting-options">
              <label>Ordering:</label>
              <select value={sortingOption} onChange={(e) => setSortingOption(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <div className="kanban-board">
        {renderGroupedTickets()}
      </div>
    </div>
  );
}

export default KanbanBoard;
