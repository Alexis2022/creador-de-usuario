import { useEffect, useState } from 'react';
import { getTaskRequest } from '../api/task.api';
import {useLogin} from '../context/LoginContext';
import {useNavigate} from 'react-router-dom';

function Inicio() {

  const {users} = useLogin();

  const navigate = useNavigate();

  const cerrarSesion = ()=>{
    navigate("/");
  }

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const loadTasks = async ()=>{
        const response = await getTaskRequest();
        setTasks(response);
      }
      loadTasks();
    } catch (error) {
      console.log(error)
    }
  }, []);
  return (
    <div>
      <div className='cerrar-sesion'>
        <button onClick={cerrarSesion}>Cerrar sesion</button>
      </div>
      <h1>Task</h1>
      {
        tasks.map(task => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Inicio