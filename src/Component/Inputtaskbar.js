import React from "react";
import './Inputtaskbar.css';
import moment from "moment";
class Inputtaskbar extends React.Component {
    state = {
        taskitem: "",
        duedt: moment().format("DD/MM/YYYY")
    };


    updateDate = event => {
        this.setState({
            duedt: event.target.value
        });
    }

    updatetaskitem = event => {
        
        this.setState({
            taskitem: event.target.value
        });
    }
    addClicked = () => {
        this.props.addTaskFunc(
            this.state.taskitem,
            this.state.duedt,
            
            );

    }
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <input className="form-control bar"
                        type="text" onChange={this.updatetaskitem}
                        value={this.state.taskitem}
                        placeholder="Add new task here"
                        id="example-text-input" />
                </div>
                <div className="col-3">
                    <input className="form-control dateinput"
                        type="date"
                        value={this.state.duedt}
                        onChange={this.updateDate}
                         />
                </div>
                <div className="col-2">
                    <p><button type="button"
                        className="btn btn-secondary add-button"
                        onClick={this.addClicked}>Add</button> </p>
                </div>
            </div>
        )
    }
}
export default Inputtaskbar;