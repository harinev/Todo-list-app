import React from "react";
// import moment from "moment";
class Task extends React.Component {
    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.id);
    };

    doneClicked = () => {
        this.props.completedTaskFunc(this.props.id);
        alert("Moved to the completed list")
    };
    render() {
        return (

            <div className="row">
                <div className="col-3">
                    <p>{this.props.taskitem}</p>
                </div>
                <div className="col-3">
                    <p>{this.props.duedt}</p>
                </div>

                <div className="col-2">
                    {this.props.Completed === true ?
                        <button disabled className="btn-group btn-secondary">Done</button> :
                        <button className="btn btn-success" onClick={this.doneClicked}>Done</button>}
                </div>
                <div className="col-2">
                    {<button type="button" className="btn btn-warning" onClick={this.deleteClicked}>Delete </button>}
                </div>
            </div>
        )
    }
}

export default Task;