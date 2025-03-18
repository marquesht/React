import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar React e Node.js",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Fazer compras",
      description: "Fazer compras no supermercado",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Ler um livro",
      description: "Ler o livro de React e Node.js",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onAddTaskSubmite(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    return setTasks([...tasks, newTask]);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center p-6">
      <div className="w-[500px] space-y-5">
        <h1 className="text-3xl text-blue-950 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmite={onAddTaskSubmite} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
