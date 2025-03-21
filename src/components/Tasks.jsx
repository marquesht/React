import {
  Check,
  CheckIcon,
  ChevronRight,
  ChevronRightIcon,
  Trash2Icon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { use } from "react";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-3 rounded-md w-full flex items-center gap-2 text-left ${
              task.isCompleted && "text-lime-500 line-through"
            }`}
          >
            {task.isCompleted && <Check size={18} strokeWidth={2.0} />}
            {task.title}
          </button>
          <Button onClick={(e) => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <button
            className={
              "bg-slate-400 text-white p-3 rounded-md hover:bg-red-400"
            }
            onClick={() => onTaskDelete(task.id)}
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
