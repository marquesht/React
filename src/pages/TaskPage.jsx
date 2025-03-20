import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-300 p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-white rounded-md absolute left-0 top-0 bottom-0 hover:bg-slate-400"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-blue-950 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="p-2 bg-slate-200 rounded-md shadow">
          <h2 className="text-2xl font-bold text-slate-500">{title}</h2>
          <p className="text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
