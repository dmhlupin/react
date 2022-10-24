import { PropTypes } from "prop-types";

export const Message = ({author, text}) => {
    return (
        <div className="message">
            <div className="message-author">
                <span>{author}: </span>    
            </div>
            <div className="message-text">
                <span>{text}</span>
            </div>
        </div>
    );
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string
}