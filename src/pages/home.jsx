import React, { useEffect, useState } from 'react'
import { createTask, getAllTasks } from '../api/type'
import { useForm } from 'react-hook-form';

export function Home() {

  const [tasks, setTasks] = useState([]);

  const { register , handleSubmit} = useForm();

  useEffect(() => {
    loadTasks();
  },[]);

  async function loadTasks(){
    const res = await getAllTasks();
    setTasks(res.data);
  }

  const onSubmit = handleSubmit(async (data) => {
    await createTask(data);
    loadTasks(); // Recarga las tareas después de crear una nueva
  });

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" 
          placeholder='title'
          {...register("title", {require:true})}
          />

          <button>save</button>
        </form>
      </div>
      
      {tasks.map(task => (
        <div key={task.id}>
          <h1>{task.title}</h1>
        </div>
      ))}
    </div>
  )
}
