import React from "react";

class Pendingtask extends React.Component {
    render() {
        return (

            <div className="row">
                <div className="col-1 md-1" >
                    <p>{this.props.slno}</p>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="inlineCheckboxOptions" id="inlineCheckbox1" value="option1" />
                    </label>
                </div>
                <div className="col-4">
                    <p>{this.props.taskitem}</p>
                </div>
                <div className="col-3">
                    <p>{this.props.duedt}</p>
                </div>
                <div class="btn-group btn-group-sm" role="group">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Done</button>
                            <button class="dropdown-item" type="button">Modify</button>
                            <button class="dropdown-item" type="button">Delete</button>
                        </div>
                        <button type="button" class="btn btn-info">Submit</button>
                    </div>
                </div>

               
                    
                
            </div>
        )
    }
}

export default Pendingtask;