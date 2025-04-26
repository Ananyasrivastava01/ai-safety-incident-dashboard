import { Task } from './types';
import { SafetyIncident } from './types';

export const mockTasks = [
  {
    id: 1,
    title: "Review AI Model Performance",
    description: "Analyze and document the performance metrics of the latest AI model iteration",
    status: "pending",
    priority: "high",
    dueDate: "2024-03-20"
  },
  {
    id: 2,
    title: "Update Safety Protocols",
    description: "Revise and update the AI safety protocols based on recent incidents",
    status: "in-progress",
    priority: "medium",
    dueDate: "2024-03-25"
  },
  {
    id: 3,
    title: "Conduct Bias Audit",
    description: "Perform a comprehensive audit of the AI system for potential biases",
    status: "pending",
    priority: "high",
    dueDate: "2024-04-01"
  }
];

export const mockIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in content recommendations, potentially reinforcing societal biases and limiting exposure to diverse perspectives.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information during emergency response simulation, highlighting potential risks in critical decision-making scenarios.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata during conversation, requiring review of data handling protocols.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  }
]; 