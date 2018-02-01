import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Contact from './f_components/fContactBar';



export class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name : 'username',
            val : null
        };

        this.handleUpdateInput = this.handleUpdateInput.bind(this);


    }
    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };


    render()
    {

        return(
            <div>
                <div style={{textAlign :"center"}}>
                    <Avatar src="avatar.jpg" size="20%" style={{marginLeft :'auto'}}/>
                </div>
                <div style={{textAlign : 'center'}}>
                    <h2 style={{font:""}}>Farzad Habibi</h2>
                </div>
                <div style={{textAlign :"center"}}>
                    <div>
                        <Contact/>
                    </div>
                </div>



            </div>

        );
    }
}


