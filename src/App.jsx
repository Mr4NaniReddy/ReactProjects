import { useState } from 'react'
import TaskItem from './components/TaskItem'
import AlreadyCompleted from './components/AlreadyCompleted';
import './App.css'


function App() {

  const [newTask, setNewTask] = useState("");
  const [mytasks, setmytasks] = useState(["swimming", "coding", "farming"]);
  const [completedtasks, setcompletedtasks] = useState([]);

  function handleInput(e)
  {
    let newValue = e.target.value;
    setNewTask(newValue);
  }
  function addTask()
  {
    if (!newTask.trim()) {
      return;
    }
    setmytasks(prev=>[...prev, newTask])
    setNewTask("");
  }
  function ondelete(taskName)
  {
    let deletedtasks = mytasks.filter(x=> x!=taskName)
    setmytasks(deletedtasks)
  }
  function oncomplete(taskName)
  {
    let completedtasks = mytasks.filter(x=> x==taskName)
    let afterFiltering = mytasks.filter(x=> x!=taskName)
    setcompletedtasks(prev=>[...prev,completedtasks[0]])
    setmytasks(afterFiltering)
  }
  return (
    <div className="mainbody d-flex justify-content-center align-items-center">
      <div className="todo-list-maindiv">
        <h3>My To do List</h3>
        <div>
          <div className='todo-task-input-div'>
            <div className="form-floating w-75">
              <input type="text" className='form-control' id='floatingInput' placeholder="enter you task" onChange={(e)=>{
                handleInput(e)
            }} value={newTask}/>
              <label htmlFor='floatingInput'>Todo task</label>
            </div>
            <button className="btn btn-primary" id="add-button" onClick={()=>{addTask()}}>+</button>
          </div>
          <h4 className='m-2'>need to be completed</h4>
          <ul className='tasks-list'>
            {
              mytasks.map((task,index)=>
                <TaskItem tasks={task} key={index} deleteFunction={ondelete} completeFunction={oncomplete}/>
              )
            }
          </ul>
          <br></br>
          <hr/>
          <h4 className='m-2'>completed</h4>
          <ul className='tasks-list'>
            {
              completedtasks.map((task,index)=>
                <AlreadyCompleted tasks={task} key={index}/>
              )
            }
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App
