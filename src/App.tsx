import {useState} from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export interface Task {
  id: number;
  title: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask = {id: Date.now(), title};
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks}/>
    </div>  
  );
}

export default App;