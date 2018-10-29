import React from 'react';
import ReactDOM from 'react-dom';

import Avatar from '@material-ui/core/Avatar';
import styles from './static/style.scss';


export class ChatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {messageList:[]};
        this.submitMessageMe = this.submitMessageMe.bind(this);
        this.submitMessageHim = this.submitMessageHim.bind(this);
    }
    
    componentDidMount() {
        //get Previous Messages
    }
    
    componentDidUpdate() {
        
    }

    submitMessageMe(e) {
        e.preventDefault();
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear()  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        this.setState({
            messageList: this.state.messageList.concat([{
                sender: "Me",
                content: ReactDOM.findDOMNode(this.refs.msgMe).value,
               // img: "http://i.imgur.com/Tj5DGiO.jpg",
                time: datetime,
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msgMe).value = "";
        });
    }

    submitMessageHim(e) {
        e.preventDefault();
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear()  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        this.setState({
            messageList: this.state.messageList.concat([{
                sender: "Him",
                content: ReactDOM.findDOMNode(this.refs.msgHim).value,
               // img: "http://i.imgur.com/Tj5DGiO.jpg",
                time: datetime,
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msgHim).value = "";
        });
    }
     
    render(){
        const msgs = this.state.messageList;
        console.log(msgs);
        return(
            <div className={styles.Boxchat}>
                <h3>My chat Room React</h3>
                <paper>
                { 
                    msgs.map(message =>  
                    message.sender == "Me" ?
                    <ChatMessageMe msg={message}  />:
                    <ChatMessageHim msg={message}  />
                    )
                }
                </paper>
                <form className="input" onSubmit={(e) => this.submitMessageMe(e)}>
                    <input type="text" ref="msgMe" className={styles.Inputchatmessage} />
                    <input type="submit" value="Submit" className={styles.Submitchatbutton} />
                </form>

                <form className="input" onSubmit={(e) => this.submitMessageHim(e)}>
                    <input type="text" ref="msgHim" className={styles.Inputchatmessage} />
                    <input type="submit" value="Submit" className={styles.Submitchatbutton} />
                </form>
            </div>
        );
    }
 
}


const ChatMessageHim = ({msg}) => (
    <div>
        <Avatar>YOU</Avatar>
        <p>{msg.time} </p>
        <p>{msg.content}</p>
    </div>
);

const ChatMessageMe = ({msg}) => (
    <div>
        <Avatar>Me</Avatar>
        <p>{msg.time} </p>
        <p>{msg.content}</p>
    </div>
);
