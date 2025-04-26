import React, { useState } from 'react';
import { SafetyIncident, IncidentSeverity } from '../types';
import '../styles/SafetyIncidentList.css';

const SafetyIncidentList = () => {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filterSeverity, setFilterSeverity] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showForm, setShowForm] = useState(false);
  const [newIncident, setNewIncident] = useState({
    title: '',
    description: '',
    severity: 'Low'
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!newIncident.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!newIncident.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'severity') {
      setNewIncident(prev => ({ ...prev, [name]: value }));
    } else {
      setNewIncident(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const newIncidentData = {
      ...newIncident,
      id: Math.max(...incidents.map(i => i.id)) + 1,
      reported_at: new Date().toISOString(),
      isExpanded: false
    };

    setIncidents([newIncidentData, ...incidents]);
    setNewIncident({ title: '', description: '', severity: 'Low' });
    setErrors({});
    setShowForm(false);
  };

  const toggleIncidentDetails = (id) => {
    setIncidents(incidents.map(incident => 
      incident.id === id 
        ? { ...incident, isExpanded: !incident.isExpanded }
        : incident
    ));
  };

  const filteredIncidents = incidents.filter(incident => 
    filterSeverity === 'All' ? true : incident.severity === filterSeverity
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="incident-dashboard">
      <div className="controls">
        <div className="filters">
          <select 
            value={filterSeverity} 
            onChange={(e) => setFilterSeverity(e.target.value)}
          >
            <option value="All">All Severities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <button 
          className="new-incident-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Report New Incident'}
        </button>
      </div>

      {showForm && (
        <form className="incident-form" onSubmit={handleSubmit}>
          <h3>Report New Incident</h3>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newIncident.title}
              onChange={handleInputChange}
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newIncident.description}
              onChange={handleInputChange}
              className={errors.description ? 'error' : ''}
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="severity">Severity</label>
            <select
              id="severity"
              name="severity"
              value={newIncident.severity}
              onChange={handleInputChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button type="submit">Submit Incident</button>
        </form>
      )}

      <div className="incidents-list">
        {sortedIncidents.map(incident => (
          <div key={incident.id} className={`incident-card ${incident.severity.toLowerCase()}`}>
            <div className="incident-header">
              <h3>{incident.title}</h3>
              <span className="severity-badge">{incident.severity}</span>
            </div>
            <div className="incident-meta">
              <span className="date">
                Reported: {new Date(incident.reported_at).toLocaleDateString()}
              </span>
              <button 
                className="view-details-btn"
                onClick={() => toggleIncidentDetails(incident.id)}
              >
                {incident.isExpanded ? 'Hide Details' : 'View Details'}
              </button>
            </div>
            {incident.isExpanded && (
              <div className="incident-description">
                <p>{incident.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyIncidentList; 