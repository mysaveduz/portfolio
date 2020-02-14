import * as actionTypes from './actionTypes';

export const boxClicked = ( boxColor, textColor, pColor ) => {
   return {
     type: actionTypes.BOX_CLICKED,
     boxColor: boxColor,
     textColor: textColor,
     pColor: pColor
   }
}

export const resetState = () => {
   return {
     type: actionTypes.RESET_STATE
   }
}
