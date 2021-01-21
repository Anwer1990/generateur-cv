import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Radio, TextField } from '@material-ui/core';
import Stepper from '../Stepper';
import { connect } from 'react-redux';

 class Competences extends Component {
     state= {
       competences:[{nom:"",selectedValue:"Debutant(e)"}],
       activeStep:4      
     }
     handleSelectChange = (i,e) => 
     {
      const values = this.state.competences;
      values[i].selectedValue = e.target.value;
      console.log("value select",values);
        this.setState({competences:values})        
     }
     handleChange = (i,e) =>
     {
       console.log("index ===",i)
       console.log("event ===",e)
       console.log("state ===",this.state)
        const values = this.state.competences;
       values[i].nom = e.target.value;
       this.setState({competences:values})
     }
     handleAdd = () => {
      const values = [...this.state.competences];
      console.log("values +",values);
      values.push({nom:"",selectedValue:"Debutant(e)"});
      this.setState({competences:values});
    }
  
   handleRemove = (i) => {
      const values = [...this.state.competences];
      values.splice(i, 1);
      this.setState({competences:values});
      console.log("values -",values);
    }
    handleNext = () => 
    {
      if(this.state.activeStep!=5){
        this.setState({activeStep:this.state.activeStep ++})
        console.log("activeStep",this.state.activeStep)
        this.props.getActiveStep(this.state.activeStep);
        this.props.addCompetences(this.state.competences);
      }
      this.props.history.push("/apercu");
    }
    handleBack = () =>
    {
      if(this.state.activeStep!=1){
        this.setState({activeStep:this.state.activeStep --})
        console.log("activeStep",this.state.activeStep)
        this.props.getActiveStep(this.state.activeStep);
        
      }
      this.props.history.push("/competences");
    }
    render() {
      console.log("competences",this.state.competences[0])
        return (
            <div className="container">
                <Stepper />
              <div className="main-content row">
               <div className=" col-9">
                {this.state.competences.map((row, index)=>{return(            
                    <div className="row" key={`${row}-${index}`}>
                      <div className="from-group col-4">
                          <TextField  name="competence"  onChange={e => this.handleChange(index,e)}  className="col-12" value={row.nom}  label="Compétence" variant="outlined" />
                      </div>
                      <div className=" col-lg-4 form-group row">
                        <Radio
                              checked={row.selectedValue === 'Debutant(e)'}
                              onChange={e => this.handleSelectChange(index,e)}
                              value="Debutant(e)"
                              name="radio-button-demo"
                              inputProps={{ 'aria-label': 'Debutant(e)' }}
                            />
                        <Radio
                          checked={row.selectedValue === 'Intermédiaire'}
                          onChange={e => this.handleSelectChange(index,e)}
                          value="Intermédiaire"
                          name="radio-button-demo"
                          inputProps={{ 'aria-label': 'Intermédiaire' }}
                        />
                        <Radio
                          checked={row.selectedValue === 'Bien'}
                          onChange={e => this.handleSelectChange(index,e)}
                          value="Bien"
                          name="radio-button-demo"
                          inputProps={{ 'aria-label': 'Bien' }}
                        />
                        <Radio
                          checked={row.selectedValue === 'Trés bien'}
                          onChange={e => this.handleSelectChange(index,e)}
                          value="Trés bien"
                          color="default"
                          name="radio-button-demo"
                          inputProps={{ 'aria-label': 'Trés bien' }}
                        />
                        <Radio
                          checked={row.selectedValue === 'Excellent'}
                          onChange={e => this.handleSelectChange(index,e)}
                          value="Excellent"
                          color="default"
                          name="radio-button-demo"
                          inputProps={{ 'aria-label': 'Excellent' }}
                          size="small"
                        />
                      </div>                    
                        <div className="col-lg-4">{row.selectedValue}</div>
                    </div>
                    )})}
                    <div className="add-btn-container">
                      <button type="button" className="btn btn-success" onClick={() => this.handleAdd()}>+</button>
                    </div>
                    <div className="row col-12">              
                    <div className="form-group col-2" >
                      <button type="button" className="btn btn-success" onClick={this.handleNext}> Suivant</button>            
                    </div>
                  </div>
                </div>                
                <div className="col-3">
                  <img className="img-fluid" src="images/etape4.png" />
                </div>
                </div>
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
          addCompetences : (competences) =>
          {
            dispatch (
              {type:"ADD_COMPETENCES",competences:competences}
            )
          }              
        }
    )
}
export default connect("",mapDispatchToProps)(Competences)
