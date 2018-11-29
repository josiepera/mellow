import React, { Component } from 'react';
import FooterNav from '../FooterNav';
import Draggable from 'react-draggable';


class Television extends Component{
  state = {
    show: true,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
	}
  toggleInfo = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  handleDrag(e, ui) {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    }

  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  }
  render(){
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;

    return(
    <>
      <div className="name-conatainer" onClick={this.toggleInfo.bind(this)}>
        <h2 className='tv-container'>Television</h2>
      </div>
        {this.state.show &&
        <Draggable {...dragHandlers}>
        <img className="tv" src='https://res.cloudinary.com/jperalta/image/upload/v1543508577/tv.svg' alt='tv' />
        </Draggable>
        }
    </>
    )
  }
}

export default Television;
