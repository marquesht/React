import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddTasks({ onAddTaskSubmite }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></Input>
      <Button
        onClick={() => {
          // verifica se os campos estão vazios
          if (!title.trim() || !description.trim()) {
            alert("Preencha todos os campos");
            return;
          }
          onAddTaskSubmite(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar tarefa
      </Button>
    </div>
  );
}

export default AddTasks;
