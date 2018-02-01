import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class FButton extends Component
{
   constructor(props)
   {
       super(props);
       console.log("Hoe");


   }
   render()
   {
       return(
           <div>
                <RaisedButton {...this.props}/>
           </div>


       );
   }
}
export default FButton;