import React from 'react';
import './Ticket.css';

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span>{ticket.id}</span>
      </div>
      <h3>{ticket.title}</h3>
      <div className="ticket-footer">
        <span className="ticket-status">{ticket.status}</span>
        <span className="ticket-priority">{ticket.priority}</span>
      </div>
    </div>
  );
};

export default Ticket;
