import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountApi from '../services/CountApi';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import '../assets/css/layout.css'

export class Home extends Component {

    state = {
        open: false,
    };

    add() {
        this.props.add(this.props.size);
    }

    remove() {
        this.props.remove(this.props.size);
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <AppBar >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            onClick={this.handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>Mini variant drawer</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} >
                    <div>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mailFolderListItems}</List>
                    <Divider />
                    <List>{otherMailFolderListItems}</List>
                </Drawer>
                <div className='content'>
                abcd
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
const MessageConatiner = connect(mapStateToProps, mapDispatchToProps)(Home);
export default MessageConatiner;