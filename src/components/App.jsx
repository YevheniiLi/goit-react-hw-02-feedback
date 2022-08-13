import { Component } from "react";
import { GlobalStyle } from "GlobalStyle";
import { FeedBackOptions } from "./Feedback/FeedbackOptions";
import {Statistics} from './Statistics/Statistics'
import {Section} from './Section/Section';
import { Box } from "components/Box";

export class App extends Component  {
 
       state = {
      
      good: 0,
      neutral: 0,
      bad: 0
  }

  // Метод стейта

  handleButton = option => {
    this.setState ( prevState => ({
      [option]: prevState[option] +1,
    
    })
    )
  };


  //  Тотал 
  countTotalFeedback = () => {
  const {good, neutral, bad} = this.state;
  return good + neutral + bad;
   };

   // Процент 
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round(100 / total * good) : 0;
  }

    render ()  {
      
      const keys = Object.keys(this.state);
      const {good, neutral, bad} = this.state;

    return (
      <Box>
        <Section title="Please leave feedback">
          <FeedBackOptions
          options={keys}
          onLeaveFeedback={this.handleButton}
          />
        </Section>

        <Section title="Statistics">
          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>

        <GlobalStyle/>
       
      </Box>
    )
    }
  }
