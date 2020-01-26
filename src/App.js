import React from 'react';
import Header from "./Component/Header";
import Consolidate from "./Component/Consolidate";
import ConsolidateCount from "./Component/ConsolidateCount";
import Input from "./Component/Input";
import Inputtaskbar from "./Component/Inputtaskbar";
import Task from "./Component/Task";
import './App.css';
import pic1 from './Component/pic1.jpg';
import uuid from "uuid/v4";
import Completed from './Component/Completed';

class App extends React.Component {
  state = {
    Task: [
      {
        id:uuid(),
        taskitem: "Pay Insurance",
        duedt: "2019/12/15",
        Completed: false
      },

      {
        id:uuid(),
        taskitem: "Pack the luggage",
        duedt: "2019/12/10",
        Completed: true
      },
      {
        id:uuid(),
        taskitem: "Do Shopping",
        duedt: "2019/12/14",
        Completed: false
      },
      {
        id:uuid(),
        taskitem: "Book Tickets for travel",
        duedt: "2019/08/15",
        Completed: true
      },
      {
        id:uuid(),
        taskitem: "New Year Party 2020",
        duedt: "2019/12/30",
        Completed: false
      }
    ]
  }
  deleteTask=(taskId)=> {
     // Firstly get the list of tasks from state
    const Task=this.state.Task;

    // Next, identify the task that matches the given task Id and remove it
    const updatedTasks = Task.filter(item => item.id !== taskId);
    //Finally update the state ie., without the deleted task
    this.setState({
      Task: updatedTasks
    });
  }
  completeTask = (taskId) => {
    // Firstly find the task that needs to be updated
    const tasksBeingUpdated = this.state.Task; // Array of tasks
    for( let i = 0; i < tasksBeingUpdated.length; i++ ) {
      const task = tasksBeingUpdated[i];

      if(task.id === taskId ) {
        // We need to update a property on the identified task
        Task.completed = true;
        break;
      }
    }

    // Update state to reflect the changes made to the task
    this.setState({
      Task: tasksBeingUpdated
    });
  }

  addTask = (taskDescription) => {
    // Firstly define the task that is being added
    const taskToAdd = {
      id:uuid(),
      taskitem: taskDescription,
      duedt: Date,
      Completed: false
    };

    

    // Get the current list of tasks from state
    const currentTasks = this.state.Task;

    // add the 'taskToAdd' to the array of tasks in state
    currentTasks.push(taskToAdd);
    // update the state
    this.setState({
      Task: currentTasks
    });
  };

  render() {
    const Pendingtaskarr = this.state.Task.filter(Tasks => {
      return Tasks.Completed === false;
    });

    const Completedtaskarr = this.state.Task.filter(Tasks => {
      return Tasks.Completed === true;
    })

    return (
      <div className="App" >
        <Header />
        <br />
        <hr />
        <div className="container">
          <Consolidate />
          <ConsolidateCount count={this.state.Task.length} Pendtask={Pendingtaskarr.length} CompTask={Completedtaskarr.length} />
        </div> <br />
        <Input />
        <Inputtaskbar addTaskFunc={this.addTask} />

        <hr />
        <h3>List of Tasks to do</h3>
        {Pendingtaskarr.map(Tasks => {
          return <Task
            deleteTaskFunc={this.deleteTask}
            completedTaskFunc={this.completeTask}
            key={Tasks.id}
            taskitem={Tasks.taskitem}
            duedt={Tasks.duedt}
            Completed={Tasks.Completed} 
            id={Tasks.id}/>
        })}

        <br />
        <hr />
        <Completed />
        {Completedtaskarr.map(Tasks => {
          return <Task
            deleteTaskFunc={this.deleteTask}
            key={Tasks.id}
            taskitem={Tasks.taskitem}
            duedt={Tasks.duedt}
            Completed={Tasks.Completed} 
            id={Tasks.id}/>
        })}
      </div>


    )
  }
}

export default App;
