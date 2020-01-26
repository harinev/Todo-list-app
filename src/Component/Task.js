import React from "react";

class Task extends React.Component {
    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.item.id);
      };
    
      doneClicked = () => {
        this.props.completedTaskFunc(this.props.item.id);
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

                <div className ="col-2">
                    {this.props.Completed===true ? 
                    <button  disabled className="btn-group btn-secondary">Done</button> : 
                    <button  className="btn btn-success" onClick={this.doneClicked}>Done</button>}
                </div>
                <div className="col-2">
                    {<button type="button" className="btn btn-warning" onClick={this.deleteClicked}>Delete </button>}
                </div>
            </div>
        )
    }
}

export default Task;