import React from 'react';
import Header from "./Component/Header";
import Consolidate from "./Component/Consolidate";
import ConsolidateCount from "./Component/ConsolidateCount";
import Input from "./Component/Input";
import Inputtaskbar from "./Component/Inputtaskbar";
import Pendingtask from "./Component/Pendingtask";
import Completedtask from "./Component/Completedtask";

import './App.css';
// import { breakStatement } from '@babel/types';
import Pending from "./Component/Pending";
import Completed from './Component/Completed';

function App() {
  return (
    <div className="App">
      <Header />
      <br /> 
      <hr />
      <div className="container">
        <Consolidate />
        <ConsolidateCount count={["5", "3", "2"]} />
      </div>
      
      <Input />
      <Inputtaskbar />
      <br />
      <hr />
      <h3>List of Tasks to do:</h3>
      <Pending />
      <div className="container">
        <Pendingtask slno="1" taskitem="To learn React" duedt="15.12.2019"/>
        <Pendingtask slno="2" taskitem="To Apply on my website" duedt="16.12.2019"/>
        <Pendingtask slno="3" taskitem="To go live" duedt="17.12.2019" />
      </div>
      <br /> 
      <hr />
        <Completed />
      <div className="container">
        <Completedtask slno1="1" taskitem="To learn javascript" donedt="07.12.2019"/>
        <Completedtask slno1="2" taskitem="To write HTML" donedt="08.12.2019"/>
      </div>
    </div>
    
  );
}

export default App;
