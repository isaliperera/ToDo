import {useState} from 'react';

interface Props{
    onAdd: (title: string) => void;
}

export default function TaskForm({onAdd}: Props) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
                className="flex-1 p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Task
            </button>
        </form>
    );
}