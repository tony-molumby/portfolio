import React, {Component} from 'react';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: "",
            email: "",
            message: "",
            nameErr: "",
            emailErr: "",
            messageErr: "",
            sendMessage: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        let {
                name, 
                email, 
                message, 
                nameErr,
                emailErr,
                messageErr,
                sendMessage
            } = this.state;
        
        return (
            <div id={this.props.id}>
                <form
                    action="https://formspree.io/tony.molumby@gmail.com"
                    method="POST"
                >
                    <div id="name">
                        {nameErr}
                        <input
                            placeholder="name"
                            type="text"
                            name='name' 
                            className="inputs comic-font" 
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div id="email">
                        {emailErr}
                        <input 
                            placeholder="email" 
                            className="inputs comic-font" 
                            name="email"
                            type='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div id="message">
                        {messageErr}
                        <textarea
                            placeholder="type in a message" 
                            className="message comic-font"
                            name="message"
                            value={message} 
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <div id="subject">
                        <input
                            type="hidden"
                            className="message"
                            name="_subject"
                            value="New Message from your portfolio site!"
                        />
                    </div>
                    <input id="submit" className='comic-font' type="submit" value='send' />
                    <div id="send-message">{sendMessage}</div>
                </form>
            </div>
        )
    }
}

export default ContactForm;