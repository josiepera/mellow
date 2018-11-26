import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterNav from './FooterNav';
import Draggable from 'react-draggable';

class Furniture extends Component {
  state = {
    show: false,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
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

  toggleInfo = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render(){
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;

	return(
		<>
			<div>
					<div className="furn-inlist" onClick={this.toggleInfo.bind(this)}>
            <h2>{this.props.furniture.name}</h2>
    			</div>
          {this.state.show &&
          <Draggable {...dragHandlers}>
            <img className="furn-pic"
            src={this.props.furniture.url}
            alt="furniture" />
          </Draggable>
        }
					<FooterNav/>
			</div>
		</>
	)
}
}

export default Furniture;
