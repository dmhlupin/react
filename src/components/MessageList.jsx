import { Message } from "./Message"

export const MessageList = ({ messageList}) => {
    return (
        <>
            { messageList.map((msg) => (
                <Message key={msg.id} text={msg.text} author={msg.author} />
            ))}
        </>
    )
}