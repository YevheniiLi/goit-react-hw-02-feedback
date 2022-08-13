import { FeedbackList, FeedbackButton } from "./Feedback.styled";
import PropTypes from 'prop-types';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
    return (
             <FeedbackList>
                {options.map(key => (
                    <li key={key}>
                        <FeedbackButton
                            type="button"
                            onClick={() => onLeaveFeedback(key)}
                        >
                            {key}
                        </FeedbackButton>
                    </li>
                ))}
             </FeedbackList>
    )
}



FeedBackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    
}