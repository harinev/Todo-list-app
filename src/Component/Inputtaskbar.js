import React from "react";
import './Inputtaskbar.css';
class Inputtaskbar extends React.Component {
    state = {
        taskitem: "",
        duedt: "2019-12-13"
    };

    
    updateDate = event => {
        this.setState({
            duedt: event.target.value
        });
    }
    addClicked = () => {
        this.props.addTaskFunc(this.state.taskitem);
        //this.props.duedt;
    }
    updatetaskitem = (event) => {
        console.log(event.target.value)
        this.setState({
            taskitem: event.target.value
        });
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <input className="form-control bar" type="text" onChange={this.updatetaskitem} value={this.state.taskitem} placeholder="Add new task here" id="example-text-input" />
                </div>
                <div className="col-3">
                    <input className="form-control dateinput" type="date" id="example-date-input" />
                </div>
                <div className="col-2">
                    <p><button type="button" className="btn btn-secondary add-button" onClick={this.addClicked}>Add</button> </p>
                </div>
            </div>
        )
    }
}
export default Inputtaskbar;