import React, { Component }  from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Stepper from '../Stepper';

class Formations extends Component
{
 state = {
    formations:[{ annee_promotion:'',etablissement:'',titre:''}],
    activeStep:2
  }
  handleNext = () => 
{
  if(this.state.activeStep!=4){
    this.setState({activeStep:this.state.activeStep ++})
    console.log("activeStep",this.state.activeStep)
    this.props.getActiveStep(this.state.activeStep);
    this.props.addFormations(this.state.formations)
  }
  this.props.history.push("/experiences");
}
handleBack = () =>
{
  if(this.state.activeStep!=1){
    this.setState({activeStep:this.state.activeStep --})
    console.log("activeStep",this.state.activeStep)
    this.props.getActiveStep(this.state.activeStep);
  }
  this.props.history.push("/coordonnees");
}
   handleChange = (i, event) => {
    const values = [...this.state.formations];
    values[i].[event.target.name] = event.target.value;
    console.log(values)
    this.setState({formations:values});
  }
  
handleAdd = (event) => {
    const values = [...this.state.formations];
    console.log("values +",values);
    values.push({annee_promotion:'',etablissement:'',titre:'' });
    this.setState({formations:values});
  }

 handleRemove = (i) => {
    const values = [...this.state.formations];
    values.splice(i, 1);
    this.setState({formations:values});
    console.log("values -",values);
  }
  render() {
    console.log("formations",this.state.formations)
    return(
        <div className="container ">
          <Stepper />
          <div className="main-content row">
            <div className="header-content col-12">
              <h2 >Formation</h2>
              <h5 >Détaillez vos formations</h5>
            </div>
              <div className="col-9">
                <form >
                  <div className="mid-container">            
                  {this.state.formations.map((row, index)=>{return(            
                    <div className="row" key={`${row}-${index}`}>
                      <div className="form-group col-3">              
                        <TextField type="date" name="experiences" onChange={e => this.handleChange(index,e)} name="annee_promotion"  className="form-control " label="" />              
                      </div>
                      <div className="form-group col-4">
                        <TextField type="text" name="experiences" onChange={e => this.handleChange(index,e)} name="etablissement" className="form-control " label="Etablissement" variant="outlined" />    
                      </div>
                      <div className="form-group col-4">
                        <TextField type="text" name="experiences" onChange={e => this.handleChange(index,e)} name="titre" className="form-control " label="Diplôme" variant="outlined" />    
                      </div>
                      <div className="form-group">
                        <button type="button" onClick={() => this.handleRemove(index)}  className="btn btn-danger">-</button>
                      </div>            
                    </div>
                  )})} 
                    
                  <button type="button" className="btn btn-success" onClick={() => this.handleAdd()}>+</button>

                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="form-group col-6" >
                        <button type="button" onClick={this.handleBack} className="btn btn-primary"> Retour </button>              
                      </div>
                      <div className="form-group col-6" >
                        <button type="button" className="btn btn-primary" onClick={this.handleNext}> Suivant</button>            
                      </div>
                    </div>
                    </div>
                </form>
              </div>
              <div className="col-3">
                      <img className="img-fluid" src="images/etape2.png" />
              </div>            
          </div>
      </div>
    );
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
          addFormations : (formations) =>
          {
            dispatch(
              {type:"ADD_FORMATIONS",formations: formations}
            )
          }
        }
    )
}
export default connect("",mapDispatchToProps)(Formations);


