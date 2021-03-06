import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Stepper from '../Stepper';
import { connect } from 'react-redux';

 class Experiences extends Component {
     state ={
         experiences : [{poste:"",employeur:"",date_debut:"",date_fin:""}],
        activeStep:3
     }
     handleNext = () => 
     {
       if(this.state.activeStep!=5){
         this.setState({activeStep:this.state.activeStep ++})
         console.log("activeStep",this.state.activeStep)
         this.props.getActiveStep(this.state.activeStep);
         this.props.addExperiences(this.state.experiences)
       }
       this.props.history.push("/competences");
     }
     handleBack = () =>
     {
       if(this.state.activeStep!=1){
         this.setState({activeStep:this.state.activeStep --})
         console.log("activeStep",this.state.activeStep)
         this.props.getActiveStep(this.state.activeStep);
         this.props.addExperiences(this.state.experiences);
       }
       this.props.history.push("/formations");
     }
     handleChange = (i, event) => {
        const values = [...this.state.experiences];
        values[i].[event.target.name] = event.target.value;
        console.log(values)
        this.setState({experiences:values});
      }
     handleAdd = () => {
        const values = [...this.state.experiences];
        console.log("values +",values);
        values.push({poste:"",employeur:"",date_debut:"",date_fin:""});
        this.setState({experiences:values});
      }
    
     handleRemove = (i) => {
        const values = [...this.state.experiences];
        values.splice(i, 1);
        this.setState({experiences:values});
        console.log("values -",values);
      }
    render() {
        return (
            <div className="container">
                <Stepper />
                <form className="col-lg-12">
                    <div className="mid-container">            
                    {this.state.experiences.map((row, index)=>{return(            
                        <div className="row" key={`${row}-${index}`}>
                            
                        <div className="form-group col-lg-12">
                            <TextField type="text" name="poste" onChange={e => this.handleChange(index,e)} className="form-control " label="Intitulé de poste *" variant="outlined" />    
                        </div>
                        <div className="form-group col-lg-12">
                            <TextField type="text" name="employeur" onChange={e => this.handleChange(index,e)}  className="form-control " label="Employeur" variant="outlined" />    
                        </div>
                        <div className="col-lg-10 row">
                            <div className="form-group col-lg-6">
                                <TextField type="date" name="date_debut" className="form-control " onChange={e => this.handleChange(index,e)} />
                            </div>
                            <div className="form-group col-lg-6">
                            <TextField type="date" name="date_fin" format="dd/MM/yyyy" className="form-control " onChange={e => this.handleChange(index,e)} />
                            </div>
                        </div>
                        <div className="form-group col-lg-2">
                            <button type="button" onClick={() => this.handleRemove(index)}  className="btn btn-danger">-</button>
                        </div>            
                        </div>
                    )})} 
                        
                    <button type="button" className="btn btn-success" onClick={() => this.handleAdd()}>+</button>

                    </div>
                    <div className="row col-2">
                        <div className="form-group col-6" >
                            <button type="button" onClick={this.handleBack} className="btn btn-primary"> Retour </button>              
                        </div>
                        <div className="form-group col-6" >
                            <button type="button" className="btn btn-primary" onClick={this.handleNext}> Suivant</button>            
                        </div>
                        </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>
{
    return (
        {
          getActiveStep : (activeStep) =>
            {
                dispatch(
                {type : "ACTIVE_STEP" ,activeStep : activeStep},
                )
            },
          addExperiences : (experiences) =>
          {
            dispatch(
              {type:"ADD_EXPERIENCES",experiences: experiences}
            )
          }
        }
    )
}
export default connect("",mapDispatchToProps)(Experiences)
