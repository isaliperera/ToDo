import type {Task} from '../App';

interface Props {
    tasks: Task[];
}   

export default function TaskList({tasks}: Props) {
    return (
        <ul className="space-y-2">
            {tasks.map(task => (
                <li key={task.id} className="p-2 bg-white rounded shadow">
                    {task.title}
                </li>
            ))}
        </ul>
    );
}