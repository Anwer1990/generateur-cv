import { createStore } from 'redux';
import rootReducer from '../reducers';

// const initialState = {
//     coordonnees:[],
//     activeStep:1
// };

function loadState(){
    try{
        const state = localStorage.getItem('state');
  
        if(state !== null){
            return JSON.parse(state);
        }
       
    } catch(e){
        // ignore errors
    }
  
    return {
      coordonnees:[],
      formations:[],
      experiences:[],
      competences:[],
      activeStep:1,
    };
  }

  function saveState(state){
    localStorage.setItem('state', JSON.stringify(state));

  }
const store = createStore(rootReducer, loadState() , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    saveState(store.getState());
  });

export default store;