import React from 'react';
import Header from "./Component/Header";
import Consolidate from "./Component/Consolidate";
import ConsolidateCount from "./Component/ConsolidateCount";
import Input from "./Component/Input";
import Inputtaskbar from "./Component/Inputtaskbar";
import Task from "./Component/Task";
import './App.css';
import axios from "axios";
import Completed from './Component/Completed';

class App extends React.Component {
  state = {
    Task: []
  };

  componentDidMount() {
    //Fetch the data using GET
    //  Then, set the state of task
    axios.get("https://sub5721szi.execute-api.eu-west-1.amazonaws.com/dev/todos")
      .then((response) => {
        const task = response.data.todos;
        this.setState({
          Task: task
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  deleteTask = (taskId) => {
    axios.delete("https://sub5721szi.execute-api.eu-west-1.amazonaws.com/dev/todos/${id}")
      .then(() => {
        // Firstly get the list of tasks from state
        const Task = this.state.Task;
        
        // Next, identify the task that matches the given task Id and remove it
        
        const updatedTasks = Task.filter(item => {
          if(item.id == taskId) return false;
          else return true
        })
        //Finally update the state ie., without the deleted task
        this.setState({
          Task: updatedTasks
        });
      })
      .catch((err) => {
        console.log(err);
      })

  };

  completeTask = (taskId) => {
    axios.put("https://sub5721szi.execute-api.eu-west-1.amazonaws.com/dev/todos/${id}", {
      Completed: true
    })
      .then(() => {
        // Firstly find the task that needs to be updated
        const tasksBeingUpdated = this.state.Task.map(task => {
          if (task.id === taskId) {
            // We need to update a property on the identified task
            task.Completed = true;
          }
          return task;
        })
        // Update state to reflect the changes made to the task
        this.setState({
          Task: tasksBeingUpdated
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

 
  addTask = (taskDescription) => {
    // Firstly define the task that is being added
    const taskToAdd = {
      taskitem: taskDescription,
      //duedt: taskdate,
      Completed: false,

    };

    axios.post("https://sub5721szi.execute-api.eu-west-1.amazonaws.com/dev/todos", taskToAdd)
      .then((response) => {

        // Get the current list of tasks from state
        const newTasks = response.data;
        const copyOfCurrentTasks = this.state.Task.slice()
        copyOfCurrentTasks.push(newTasks);
        this.setState({
          Task: copyOfCurrentTasks
    });
      })
      .catch((err) => {
        console.log(err)
      })
  };

  render() {
    const Pendingtaskarr = this.state.Task.filter(Tasks => {
      return Tasks.Completed === 0;
    });

    const Completedtaskarr = this.state.Task.filter(Tasks => {
      return Tasks.Completed === 1;
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
        <h3>List of Tasks todo</h3>
        {Pendingtaskarr.map(Tasks => {
          return (<Task
            deleteTaskFunc={this.deleteTask}
            completedTaskFunc={this.completeTask}
            key={Tasks.id}
            taskitem={Tasks.taskitem}
            duedt={Tasks.duedt}
            Completed={Tasks.Completed}
            id={Tasks.id} />
          )
        })}

        <br />
        <hr />
        <Completed />
        {Completedtaskarr.map(Tasks => {
          return <Task
            completedTaskFunc={this.completeTask}
            deleteTaskFunc={this.deleteTask}
            key={Tasks.id}
            taskitem={Tasks.taskitem}
            duedt={Tasks.duedt}
            Completed={Tasks.Completed}
            id={Tasks.id} />
        })}
      </div>


    )
  }
}

export default App;
