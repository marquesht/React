import { ChevronRight, ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-3 rounded-md w-full text-left ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-3 rounded-md">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onTaskDelete(task.id)}
            className="bg-slate-400 text-white p-3 rounded-md"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
