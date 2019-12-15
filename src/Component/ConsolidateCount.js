import React from 'react';

class ConsolidateCount extends React.Component {
    render(){
        return (
            <div className="form-row content">
                <div className="col-4">
                    <p>{this.props.count}</p>
                </div>
                <div className="col-3">
                    <p>{this.props.Pendtask}</p>
                </div>
                <div className="col-3">
                    <p>{this.props.CompTask}</p>
                </div>
            </div>
    )
        }
}

export default ConsolidateCount;