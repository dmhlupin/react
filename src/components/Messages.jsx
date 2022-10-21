export const Messages = (props) => {
    return (
      props.messageList.map((message) => 
        <div key={message.key}>
          <p>Автор: {message.author}</p>
          <p>Сообщение: {message.message}</p>
          <br/>
        </div>
      )
    )
  }