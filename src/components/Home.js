import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountApi from '../services/CountApi';

export class Home extends Component {
    add() {
        this.props.add(this.props.size);
    }

    remove() {
        this.props.remove(this.props.size);
    }

    render() {
        return (
            <div>
                <button onClick={this.remove.bind(this)}> - </button>
                {this.props.size}
                <button onClick={this.add.bind(this)}> + </button>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        size: state.countReducer.size,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (size) => {
            dispatch(CountApi.add(size));
        },
        remove: (size) => {
            dispatch(CountApi.remove(size));
        },
    }
}
const MessageConatiner = connect(mapStateToProps, mapDispatchToProps)(Home);
export default MessageConatiner;