import { Message } from "./Message"

export const MessageList = ({ messageList}) => {
    return (
        <>
            { messageList.map((msg) => (
                <Message text={msg.text} author={msg.author} />
            ))}
        </>
    )
}