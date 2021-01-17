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
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">
                        <img src="logo.png" alt='logo' />
                    </span>
                    <ul className="social-links float-right">
                        <li><a href=""><i class="fab fa-facebook"></i></a></li>
                        <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                        <li><a href=""><i class="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </nav>
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