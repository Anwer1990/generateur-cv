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
        const printableElements = document.getElementById('doc_pdf').innerHTML;
        
        document.body.innerHTML = printableElements;
        window.print();
    }
  
    render() {
        
        
        console.log("props",this.props.coordonnees)
        return (
            <>
            <Stepper />
            <div className="container">
                <Paper  className="paper" elevation={5}>                    
                    {this.state.model ==="model1"?<Model1 />:<Model2 />}
                </Paper>

                    <button className="btn btn-success mt-10" onClick={this.handleDownload}>Generer un PDF</button>
                
            </div>
            </>
        )
    }
}

function mapStateToProps(state)
{
    return{coordonnees : state.coordonnees,formations:state.formations,experiences:state.experiences,competences:state.competences,model:state.model}
}
export default connect(mapStateToProps,null)(Apercu)
