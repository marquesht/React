import { useState } from "react";

function AddTasks({ onAddTaskSubmite }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border-slate-300 outline-slate-600 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa "
        className="border-slate-300 outline-slate-600 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button
        onClick={() => onAddTaskSubmite(title, description)}
        className="bg-slate-400 text-white p-3 rounded-md"
      >
        Adicionar tarefa
      </button>
    </div>
  );
}

export default AddTasks;
