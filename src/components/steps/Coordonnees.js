import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Stepper from '../Stepper';



class  Coordonnees extends Component
{
  state = {
    coordonnees:{profil:"",nom_prenom:"",poste:"",date_naissance:"",telephone:"",adresse:"",email:"",linkedin:""},
    activeStep:1
  }
  componentDidMount()
  {
    this.props.getActiveStep(this.state.activeStep);
    this.props.addCoordonnees(this.state.coordonnees);
  }

handleNext = () => 
{
  if(this.state.activeStep!=4){
    this.setState({activeStep:this.state.activeStep ++})
    console.log("activeStep",this.state.activeStep)
    this.props.getActiveStep(this.state.activeStep);
    this.props.addCoordonnees(this.state.coordonnees);
  }
  this.props.history.push("/formations");
}

handleChange = (e) => {
  let values = {...this.state.coordonnees}
  values.[e.target.name] = e.target.value   
   this.setState({coordonnees:values});
  }

  render()
  {
    return (
      <div className="container">
          <Stepper />          
          <div className="main-content row">              
              <div className="col-9">
                <form className="col-lg-12 row"  >
                  <div className="form-group col-6 ">
                    <input className="form-control" type="file" />
                  </div>
                  <div className="form-group col-12">
                    <textarea name="profil" onChange={this.handleChange}  id="profil" className="form-control" placeholder="Votre présentation" ></textarea>
                  </div>
                  <div className="form-group col-6 ">                
                    <TextField  name="nom_prenom" onChange={this.handleChange} className="col-12" value={this.state.coordonnees.nom_prenom}  label="Nom et Prénom" variant="outlined" />                              
                  </div>
                  <div className="form-group col-6 ">
                    <label>Date de naissance</label>
                  <TextField type="date"  name="date_naissance" onChange={this.handleChange} className="col-12" value={this.state.coordonnees.date_naissance}  />
                  </div>
                  <div className="form-group col-6 ">
                    <TextField  name="poste" onChange={this.handleChange} className="col-12" value={this.state.coordonnees.poste} label="Poste occupé" variant="outlined" /> 
                  </div>
                  <h5 className="col-lg-12">Contact :</h5>
                  <div className="form-group col-6 ">
                      <TextField  name="telephone" onChange={this.handleChange} value={this.state.coordonnees.telephone} className="col-12" label="Telephone" variant="outlined" />
                  </div>
                  <div className="form-group col-6 ">
                      <TextField  name="adresse" onChange={this.handleChange} value={this.state.coordonnees.adresse} className="col-12" label="Adresse" variant="outlined" />
                  </div>
                  <div className="form-group col-6 ">
                      <TextField  name="email" onChange={this.handleChange} value={this.state.coordonnees.email} className="col-12" label="Email" variant="outlined" />
                  </div>
                  <div className="form-group col-6 ">
                      <TextField  name="linkedin" onChange={this.handleChange} value={this.state.coordonnees.linkedin} className="col-12" label="LinkedIn" variant="outlined" />
                  </div>
                  <div className="row col-12">              
                    <div className="form-group col-2" >
                      <button type="button" className="btn btn-success" onClick={this.handleNext}> Suivant</button>            
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-3">
                  <img className="img-fluid" src="images/etape1.png" />
              </div>
          </div>

         
      </div>
    )
  }
 
    
}
function mapStateToProps(state)
{
    return{coordonnees : state.coordonnees}
}
const mapDispatchToProps    =   dispatch =>
{
    return {
      addCoordonnees :(coordonnees)   => {
            dispatch({type: "ADD_COORDONNEES", coordonnees:coordonnees})
        },
      getActiveStep: (activeStep) => {
        dispatch({type:"ACTIVE_STEP",activeStep:activeStep})
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Coordonnees);