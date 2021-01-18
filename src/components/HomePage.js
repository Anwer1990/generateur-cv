import React,{Component} from 'react';
import { render } from 'react-dom';
import {Link}  from "react-router-dom";


class HomePage extends Component
{
    state ={
        activeStep:1 
    }
    componentDidMount = () => {
        localStorage.setItem("state",JSON.stringify(this.state));
    }
    render(){
    return(
        <div className="container-full">        
            
            <div className="jumbotron">
                <div className="jumbotron-content">
                    <h2>Construirez votre curriculum vitae en quelque minutes</h2>
                    <Link to="/Coordonnees" className="btn btn-success btn-lg">Créer un CV</Link>    
                </div>                
            </div>            
        </div>
    );
    }
}

export default HomePage;