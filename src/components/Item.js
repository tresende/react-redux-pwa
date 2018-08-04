import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountApi from '../services/CountApi';
import Button from '@material-ui/core/Button';
import '../assets/css/layout.css'

export class Item extends Component {


    add() {
        this.props.add(this.props.size);
    }

    remove() {
        this.props.remove(this.props.size);
    }

    render() {
        return (
            <div>
                <div className='content'>
                    sadlfhdskjl
                    <Button onClick={this.remove.bind(this)} variant="contained" color="primary">-</Button>
                    {this.props.size}
                    <Button onClick={this.add.bind(this)} variant="contained" color="primary">+</Button>
                </div>
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
const MessageConatiner = connect(mapStateToProps, mapDispatchToProps)(Item);
export default MessageConatiner;