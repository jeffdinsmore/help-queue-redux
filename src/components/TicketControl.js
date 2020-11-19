import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Help from './Help';
import Question from './Question';
import Steps from './Steps';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
      // listVisibleOnPage: 0,
      // formVisibleOnPage: 4,
      // stepsVisibleOnPage: 1,
      // helpVisibleOnPage: 2,
      // questionsVisibleOnPage: 3
    };
  }

  // handleClick = () => {
  //   this.setState(prevState => ({
  //     stepsVisibleOnPage: !prevState.stepsVisibleOnPage
  //   }));
  // }

  handleClick = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.count === 1) {
      currentlyVisibleState = <Steps />
      buttonText = "Yes";
    } else if (this.state.count === 2) {
      currentlyVisibleState = <Help />
      buttonText = "Yes";
    } else if (this.state.count === 3) {
      currentlyVisibleState = <Question />
      buttonText = "Go to Form";
    } else if (this.state.count === 4) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket";
      this.state.count = 0;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;