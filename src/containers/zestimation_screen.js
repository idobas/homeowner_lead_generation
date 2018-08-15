import React, {Component} from 'react';
import {connect} from 'react-redux';
import './zestimation_screen.css';


class ZestimationScreen extends Component {
    render() {
        return (
            <div className='zestimate'>
                <h4>Here is your zestimate for the address:</h4>
                <h3>{this.props.address}</h3>
                <h2>{`${this.props.zestimate}$`}</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        zestimate: state.addresses.zestimate,
        address: state.addresses.address
    }
}

export default connect(mapStateToProps)(ZestimationScreen);