/**
 * Task model
 * 
 * This interface defines how a task should look in our system.
 * Using interfaces helps TypeScript catch errors early and makes
 * the code self-documented.
 */
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
