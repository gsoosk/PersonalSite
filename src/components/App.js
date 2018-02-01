import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import '../App.css';
import Particles from './f_components/fParticles';
import Page from './Page';
import { Row, Col } from 'react-flexbox-grid';
import AppNavBar from './AppNavBar';

class App extends Component
{
    render()
    {
        
        return(
            <div>

                <Router>
                    <div>

                    <Route path="/" component={Home}/>
                    </div>
                </Router>

            </div>
        );
    }
}

class Home extends Component {
    // constructor(props)
    // {
    //     super(props);
    // }


    render() {
    return (

        <div>


            <Particles/>
            <Row>
                <Col xs={12}>
                    <AppNavBar />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={2}>
                    <div>
                        {/*LeftPanel*/}
                    </div>
                </Col>
                <Col xs={8}>
                    <div>
                        {/*MiddlePanel*/}
                        <Page/>
                        <br/>
                    </div>
                </Col>
                <Col xs={2}>
                    <div>
                        {/*RightPanel*/}
                    </div>
                </Col>

            </Row>

        </div>
    );
  }
}



export default App;
