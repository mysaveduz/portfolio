import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import {FaRedoAlt} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import './Game.css';
import BigBox from './BigBox/BigBox';

const boxes = [
  {text: "red", color: "blue"},
  {text: "yellow", color: "green"},
  {text: "green", color: "red"},
  {text: "blue", color: "brown"}
];
// 1 bo'lsa disabled 2 bo'lsa true


class Game extends Component {
   render(){
      return(
        <div style={{width: this.props.width}} className="Game">
        <p className="game-score">Come on, try this game</p>
        <p className="my-explain">Your job is <br/>1. read the word<br/>2. find the color of word</p>
        <p className="game-score">Your score: {this.props.state.score} out of {this.props.state.tries}	&nbsp;
        {this.props.state.tries === 4
             ?  <span onClick={this.props.onResetHandler} >
                 <IconContext.Provider value={{ color: "blue", size: "19px"}}>
                    <FaRedoAlt />
                 </IconContext.Provider>
                </span>
             : 	<span></span> }</p>
        {this.props.state.tries === 4
           ? this.props.state.score ===4 ?
             <Alert variant="success">
              Your score is {this.props.state.score}, You win !
              </Alert>
              : this.props.state.score !== 0
                ?<Alert variant="warning">
                 Your score is {this.props.state.score} !
                 </Alert>
                 : <Alert variant="danger">
                  You lose !
                  </Alert>
           : null}

        <div className="my-game-container">


        {boxes.map(box => {

           return (
             <BigBox
                disabled={this.props.state.boxes[box.text]}
                answerTrue={this.props.state.boxes[box.text]}
                key={box.text}
                pText={box.text}
                pColor={box.color}
                boxClickHandler={this.props.onBoxClickHandler}
                />
           );
        })}

        </div>
        </div>
      );
   }
}

const mapStateToProps = state => {
   return {
     state: state
   }
}

const mapDispatchToProps = dispatch => {
   return {
     onBoxClickHandler: (bc, pc, tc) => dispatch(actions.boxClicked(bc, pc, tc)),
     onResetHandler: () => dispatch(actions.resetState())
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Game);


// resetState(){
//   const copyBoxes = {...this.props.state.boxes};
//   for(let key in copyBoxes){
//     copyBoxes[key] = 0;
//   }
//   this.setState({boxes: copyBoxes, score: 0, tries: 0});
// }
// resetStateHandler = () => {
//   this.resetState();
//  console.log("clicked");
// }



// const random = Math.random();
// const bgColor1 = random < 0.5 ? box.text : box.color ;
// const bgColor2 = random >= 0.5 ? box.text : box.color ;


//
// <div className="big-box">
//   <p style={{color: box.pcolor}}>{box.ptext}</p>
//   <div
//      onClick={() => this.boxClickHandler(box.box1, box.pcolor)}
//      className="my-box"
//      style={{backgroundColor: box.box1}}>
//   </div>
//   <div
//      onClick={() => this.boxClickHandler(box.box2, box.pcolor)}
//      className="my-box"
//      style={{backgroundColor: box.box2}}>
//
//   </div>
// </div>







// boxClickHandler = (boxColor, textColor, pColor) => {
//   this.setState(prevState => ({tries: prevState.tries + 1}));
//   const boxes ={ ...this.props.state.boxes };
//   boxes[textColor] = 1;
//   console.log(textColor);
//   this.setState({boxes: boxes});
//    if(boxColor === pColor ){
//      const boxes ={ ...this.props.state.boxes };
//      boxes[textColor] = 2;
//      console.log(textColor);
//      this.setState({boxes: boxes});
//      this.setState(prevState => ({score: prevState.score + 1}));
//    }
// }
