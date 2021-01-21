import React, { Component } from 'react'
import { connect } from 'react-redux';
import Stepper from '../Stepper';
import Paper from '@material-ui/core/Paper';
import  Model1  from '../models/Model1';
import  Model2  from '../models/Model2';


class Apercu extends Component {
    state = {
        model:'',
        activeStep:5
    }
    componentDidMount = () =>
    {
        this.setState({model:this.props.model})
    }
   
    handleDownload = () =>
    {
        window.print()
    }
  
    render() {
        
        
        console.log("props",this.props.coordonnees)
        return (
            <>
            <Stepper />
            <div id="cv-body" className="container">
                <Paper  className="paper" elevation={5}>                    
                    {this.state.model ==="model1"?<Model1 />:<Model2 />}
                </Paper>

                    <button className="btn btn-success btn-downloadPdf" onClick={this.handleDownload}>Generer un PDF</button>
                
            </div>
            </>
        )
    }
}

function mapStateToProps(state)
{
    return{model:state.model}
}
export default connect(mapStateToProps,null)(Apercu)
