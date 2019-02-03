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
            disabled: 'disabled',
            submitButton: <input id='submit' className='comic-font' type="submit" value='send' disabled />
        }
    }

    handleChange = (e) => {
        let {name, email, message} = this.state;
        let element = ''
        let valid = document.getElementById('email').validity.valid
        this.setState({
            [e.target.name]: e.target.value
        }, (previousState) => {
            if(name.length > 1 && email.length > 4 && message.length > 10 && valid ){
                element = <input id='submit' className='comic-font' type="submit" value='send' />
            } else {
                element = <input id='submit' className='comic-font' type="submit" value='send' disabled />
            }
            this.setState({
                submitButton: element
            })
                      
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
                sendMessage,
                submitButton
            } = this.state;
  
        return (
            <div id={this.props.id}>
                <form
                    action="https://formspree.io/tony.molumby@gmail.com"
                    method="POST"
                >
                    <div >
                        {nameErr}
                        <input
                            id='name'
                            placeholder="name"
                            type="text"
                            name='name' 
                            className="inputs comic-font" 
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div >
                        {emailErr}
                        <input 
                            id="email"
                            placeholder="email" 
                            className="inputs comic-font" 
                            name="email"
                            type='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div >
                        {messageErr}
                        <textarea
                            id="message"
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
                    {submitButton}
                    <div id="send-message">{sendMessage}</div>
                </form>
            </div>
        )
    }
}

export default ContactForm;