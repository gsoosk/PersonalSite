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
                <div style={{textAlign :"center", fontFamily:'Lato'}}>
                    <Avatar src="avatar.jpg" size="15%" style={{marginLeft :'auto', margin:'10px'}}/>
                </div>
                <div style={{textAlign : 'center'}}>
                    <h1 style={{fontFamily:"Lato", fontSize:"40px"}}>Farzad Habibi</h1>
                </div>
                <div>
                    <p style={{textAlign:'center', margin:'20px', fontFamily:'Lato', fontSize:"17px"}}>
                        My name is Farzad Habibi. I am a senior student at the
                        <a href="https://ece.ut.ac.ir/en"> University of Tehran</a>, working on a BSc. Degree in Computer Engineering. My interests are mainly in Computer Networks, Operating Systems, Cyber-Physical Systems, and Distributed Systems. You can find further information about me on
                        <a href='https://farzadhabibi.ir/mycv'> my cv</a>.
                    </p>
                    <p style={{textAlign:'center', margin:'20px', fontFamily:'Lato', fontSize:"15px"}}>
                        Oh, I also love every kind of programming in all fields. :)
                    </p>
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


