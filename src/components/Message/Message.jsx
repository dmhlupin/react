import './Message.css'

export const Message = (props) => {
    
    return <>
        <div className="Message-block" >Сообщение: {props.message}</div>
    </>
}