import { Component } from "react";
import { GlobalStyle } from "GlobalStyle";
import { Box } from "Box";


export class App extends Component  {
  // Общий стейт в ближайшем предке 
  static defaultProps = {
    
  }

  state = {
      
      good: 0,
      neutral: 0,
      bad: 0
  }

  // Метод стейта

  goodResultFeedback = () => {
    this.setState ( prevState => ({
      good: prevState.good +1,
    
    }));
    console.log(this.state);
    
  }

  neutralResultFeedback = () => {
    this.setState ( prevState => ({
      neutral: prevState.neutral +1,
    
    }));
    console.log(this.state);
  }

  badResultFeedback = () => {
    this.setState( prevState => ({
      bad: prevState.bad +1,
    }))
    console.log(this.state);
  }


  //  Тотал 
  countTotalFeedback = () => {
    
   }

   // Процент 
  countPositiveFeedbackPercentage = () => {
   
  }

    render ()  {

        
    return (
      <Box as='div'>
        <>
              <h3>Please leave feedback</h3>
          
              <button type="button" onClick={this.goodResultFeedback}>Good</button>
              <button type="button" onClick={this.neutralResultFeedback}>Neutral</button>
              <button type="button" onClick={this.badResultFeedback}>Bad</button>
          </>

              <h3>Statistics</h3>
          <p>Good {this.state.good}</p>
          <p>Neutral{this.state.neutral}</p>
          <p>Bad{this.state.bad}</p>
          <p>Total : {this.state.length}</p>
          <p>Positive feedbacks</p>
          <GlobalStyle />
      </Box>
    );
    }
};
