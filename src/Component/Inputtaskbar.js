import React from "react";
import './Inputtaskbar.css';
class Inputtaskbar extends React.Component {
    state ={
        taskitem:"",
        id: 0,
        duedt: "2019-12-13"
    };

    updatetaskitem=(event) =>{
        console.log(event.target.value)
        this.setState({
        taskitem: event.target.value
    });
    }

    render(){
        return (
            <div className="row">
                <div className="col-5">
                <input className="form-control bar" type="text" onChange={this.updatetaskitem} value={this.state.taskitem}  placeholder="Add new task here" id="example-text-input" />
                </div>
                <div className="col-2">
                    <input className="form-control clearfix" type="date" id="example-date-input" />
                </div>
                <div className="col-2">
                    <p><button type="button" className="btn btn-secondary add-button">Add</button> </p>
                </div>
            </div>
    )
        }
}
export default Inputtaskbar;