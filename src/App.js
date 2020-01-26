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
        <Inputtaskbar />

        <hr />
        <h3>List of Tasks to do</h3>
        {Pendingtaskarr.map(Tasks => {
          return <Task
            deleteTaskFunc={this.deleteTask}

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
