import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
  import BuildingCv from './BuildingCv';
  import HomePage from './HomePage';
import Model1 from './models/Model1';
import Model2 from './models/Model2';
import Apercu from './steps/Apercu';
import Competences from './steps/Competences';
import Coordonnees from './steps/Coordonnees';
import Experiences from './steps/Experiences';
import Formations from './steps/Formations';
import Models from './steps/Models';


function Router () 
{
    return(   
            <Switch>
                <Route exact  path='/' component={HomePage} />
                <Route path="/model1" component={Model1} />
                <Route path="/model2" component={Model2} />
                <Route path="/models" component={Models} />                    
                <Route path="/makeCV" component={BuildingCv} />
                <Route path="/formations" component={Formations} />
                <Route path="/coordonnees" component={Coordonnees} />
                <Route path="/experiences" component={Experiences} />
                <Route path="/competences" component={Competences} />
                <Route path="/apercu" component={Apercu} />
                                   
            </Switch>
    );
}
export default Router;