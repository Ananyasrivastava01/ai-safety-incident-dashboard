# AI Safety Incident Dashboard

A React-based dashboard for tracking and managing AI safety incidents and tasks. This application provides a user-friendly interface for reporting, viewing, and managing safety incidents in AI systems.

## Features

- **Safety Incident Management**
  - Report new safety incidents
  - View incident details
  - Filter incidents by severity
  - Sort incidents by date
  - Expand/collapse incident details

- **Task Management**
  - Track tasks with different statuses
  - Filter tasks by status and priority
  - Update task status
  - View task details and due dates
  - Delete tasks with a single click

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ananyasrivastava01/ai-safety-incident-dashboard.git
cd ai-safety-incident-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── SafetyIncidentList.jsx
│   └── TaskList.jsx
├── styles/
│   ├── SafetyIncidentList.css
│   └── TaskList.css
├── types.js
├── mockData.js
├── App.js
└── index.jsx
```

## Usage

### Reporting a New Incident

1. Click the "Report New Incident" button
2. Fill in the incident details:
   - Title
   - Description
   - Severity level
3. Click "Submit Incident"

### Managing Tasks

1. Use the filters to view tasks by:
   - Status (Pending, In Progress, Completed)
   - Priority (Low, Medium, High)
2. Update task status using the dropdown in each task card
3. Delete a task by clicking the × button in the top-right corner of the task card

## Technologies Used

- React
- JavaScript
- CSS
- HTML

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
