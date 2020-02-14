import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  boxes: {
    red: 0,
    yellow: 0,
    green: 0,
    blue: 0
  },
  score: 0,
  tries: 0
}

const boxClicked = (state, action) => {
   const tries = state.tries + 1;
   const boxes ={ ...state.boxes };
   if(action.boxColor === action.pColor ){

      boxes[action.textColor] = 2;
      const score = state.score + 1;
      const updatedState = {
        boxes: boxes,
        score: score,
        tries: tries
      }

      return updateObject(state, updatedState);
   }
   boxes[action.textColor] = 1;
   const updatedState = {
     boxes: boxes,
     tries: tries
   }
   return updateObject(state, updatedState);
}

const resetState = (state, action) => {
   const resetedState = {
     boxes: {
       red: 0,
       yellow: 0,
       green: 0,
       blue: 0
     },
     score: 0,
     tries: 0
   }
   return updateObject(state, resetedState);
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
     case actionTypes.BOX_CLICKED: return boxClicked( state, action );
     case actionTypes.RESET_STATE: return resetState( state, action );

     default: return state;
 }
}

export default reducer;
