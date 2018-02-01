import React, { Component } from 'react';
import {AppBar, Drawer, MenuItem} from 'material-ui/';
import {ActionHome} from 'material-ui/svg-icons';



class AppNavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            menuOn:false
        };
        this.handleMenuBtn = this.handleMenuBtn.bind(this);
        this.handleHomeMenuBtn = this.handleHomeMenuBtn.bind(this);

    }
    handleMenuBtn(event)
    {

        this.setState({
            menuOn : !this.state.menuOn
        });

    }
    handleHomeMenuBtn(event)
    {

    }
    render()
    {
        const homeIcon = <ActionHome/>;
        return(
            <div   >
                <AppBar
                    title="Farzad Habibi"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    zDepth={2}
                    onLeftIconButtonClick = {this.handleMenuBtn}

                />
                <Drawer open={this.state.menuOn} openSecondary={true}>
                    <MenuItem leftIcon={homeIcon} onClick={this.handleHomeMenuBtn}>Home</MenuItem>

                </Drawer>


            </div>
        );
    }
}


export default AppNavBar;