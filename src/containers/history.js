import React, {Component} from 'react';
import {connect} from 'react-redux';

class History extends Component {
    renderAddress(address) {
        return (
            <li key={address}>{address}</li>
        )
    }

    render() {
        return (
            <div>
                <h4>Your search history:</h4>
                <ul>
                    {this.props.history.map(this.renderAddress)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        history: state.addresses.history
    }
}

export default connect(mapStateToProps)(History);