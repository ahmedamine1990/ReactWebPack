import React from 'react';
import ReactDOM from 'react-dom';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import styles from './static/style.scss';


export class ChatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {messageList:[]};
        this.submitMessage = this.submitMessage.bind(this);
    }
    
    componentDidMount() {
        //get Previous Messages
    }
    
    componentDidUpdate() {
        
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            messageList: this.state.messageList.concat([{
                sender: "Ahmed Amine CHAARI",
                content: ReactDOM.findDOMNode(this.refs.msg).value,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
                time: Date.now(),
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
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
                    msgs.map(message =>  <ChatMessage msg={message}  />)
                }
                </paper>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" className={styles.Inputchatmessage} />
                    <input type="submit" value="Submit" className={styles.Submitchatbutton} />
                </form>
            </div>
        );
    }
 
}

export class ChatMessage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
         <Avatar src={this.props.msg.img} />
        <p>{this.props.msg.time} </p>
        <Card className={this.props.msg.sender}>
            <CardContent>
                <Typography>
                    {this.props.msg.content}
                </Typography>
            </CardContent>
        </Card>
        </div>
        )
    }
}
