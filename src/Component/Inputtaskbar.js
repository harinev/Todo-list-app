import React from "react";
import './Inputtaskbar.css';
class Inputtaskbar extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-6">
                <input class="form-control" type="text" placeholder="Add new task here" id="example-text-input" />
                </div>
                <div className="col-2">
                    <input class="form-control" type="date" placeholder="13-12-2019" id="example-date-input" />
                </div>
                <div className="col-2">
                    <p><button type="button" class="btn btn-secondary add-button">Add</button> </p>
                </div>
            </div>
    )
        }
}
export default Inputtaskbar;