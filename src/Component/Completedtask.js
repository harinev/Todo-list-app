import React from "react";

class Completedtask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-1 md-1" >
                    <p>{this.props.slno1}</p>
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
                    <p>{this.props.donedt}</p>
                </div>
                <div class="btn-group btn-group-sm" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select</button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <button class="dropdown-item" type="button">Modify</button>
                        <button class="dropdown-item" type="button">Delete</button>
                    </div>
                </div>

                <div className="col-2">
                    <p><button type="button" class="btn btn-info">Submit</button></p>
                </div>
            </div>
        )
    }
}

export default Completedtask;