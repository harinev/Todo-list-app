import React from 'react';

class ConsolidateCount extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-4">
                    <p>{this.props.count[0]}</p>
                </div>
                <div className="col-4">
                    <p>{this.props.count[1]}</p>
                </div>
                <div className="col-4">
                    <p>{this.props.count[2]}</p>
                </div>
            </div>
    )
        }
}

export default ConsolidateCount;