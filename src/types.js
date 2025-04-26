// Task type definitions
export const Task = {
  id: '',
  title: '',
  description: '',
  status: 'pending',
  priority: 'low',
  dueDate: ''
};

export const TaskStatus = Task.status;
export const TaskPriority = Task.priority;

// Safety Incident type definitions
export const SafetyIncident = {
  id: 0,
  title: '',
  description: '',
  severity: 'Low',
  reported_at: '',
  isExpanded: false
};

export const IncidentSeverity = SafetyIncident.severity; 