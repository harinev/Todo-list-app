import React from 'react';
import Header from "./Component/Header";
import Consolidate from "./Component/Consolidate";
import ConsolidateCount from "./Component/ConsolidateCount";
import Input from "./Component/Input";
import Inputtaskbar from "./Component/Inputtaskbar";
import Task from "./Component/Task";
import './App.css';
import pic1 from './Component/pic1.jpg';

import Completed from './Component/Completed';

class App extends React.Component {
  state = {
    Task: [
      {
        id: "1",
        taskitem: "Pay Insurance",
        duedt: "2019/12/15",
        Completed: false
      },

      {
        id: "2",
        taskitem: "Pack the luggage",
        duedt: "2019/12/10",
        Completed: true
      },
      {
        id: "3",
        taskitem: "Do Shopping",
        duedt: "2019/12/14",
        Completed: false
      },
      {
        id: "4",
        taskitem: "Book Tickets for travel",
        duedt: "2019/08/15",
        Completed: true
      },
      {
        id: "5",
        taskitem: "New Year Party 2020",
        duedt: "2019/12/30",
        Completed: false
      }
    ]
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
        <img src= {pic1.jpg} width="100px"/>
        <Input />
        <Inputtaskbar />
        <br />
        <hr />
        <h3>List of Tasks to do</h3>
        {Pendingtaskarr.map(Tasks => {
          return <Task
            key={Tasks.id}
            taskitem={Tasks.taskitem}
            duedt={Tasks.duedt}
            Completed={Tasks.Completed} />
        })}

        <br />
        <hr />
        <Completed />
        {Completedtaskarr.map(Tasks => {
          return <Task
          key={Tasks.id}
          taskitem={Tasks.taskitem}
          duedt={Tasks.duedt}
          Completed={Tasks.Completed} />
        })}
      </div>


    )
  }
}

export default App;
