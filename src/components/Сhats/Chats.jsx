import { Chat } from "./Chat"

export const Chats = ({chatList}) => {
    console.log(chatList);
    return chatList.map((chat) => (
            <Chat key={chat.chatId} chatName={chat.chatName}/>
        ))}
