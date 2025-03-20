import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Chamando uma API para a aplicação
  //useEffect(() => {
  //const fetchTasks = async () => {
  //Acessa a API e retorna os dados
  //const response = await fetch(
  //"https://jsonplaceholder.typicode.com/todos?_limit=10",
  //{
  //method: "GET",
  //}
  //);
  //Converte os dados em JSON
  //const data = await response.json();
  //Atualiza o estado com os dados da API

  //setTasks(data);
  //};
  //fetchTasks();
  //}, []);

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
      id: v4(),
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
