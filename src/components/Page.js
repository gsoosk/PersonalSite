import React,{Component} from 'react';
import {Login} from "./Login";
import {Paper} from "material-ui";
import EnterTransition from './transition/EnterTransition';




class Page extends Component
{
    // constructor(props)
    // {
    //     super(props);
    // }
    render()
    {
        return(
            <div>
            <EnterTransition>
                <Paper style={{width : '100%', opacity:'0.9'}} zDepth={1}  >
                    <Login/>
                </Paper>

            </EnterTransition>

            </div>

        );
    }

}
export default Page;
