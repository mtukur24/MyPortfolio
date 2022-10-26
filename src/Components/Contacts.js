import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';


const Maindiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px -40px -10px -40px;
    padding: 20px 40px 20px 40px;
    color: whitesmoke;
    background: #7979d2;
    flex-shrink: 0;
    height: 550px;
    background-size: max-content; 

    h1 {
        text-align: center;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 45em) {
        padding: 10px 10px 10px 10px;

        h1 {
            font-size: 30px;
        }
    }
`;

const Form = styled.form`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-self: center;
    row-gap: 10px;
    align-items: center;

    @media screen and (max-width: 45em) {
        font-size: 10px;
    }
`;

const Input = styled.input`
    height: 20px;
    width: 50%;
    padding: 20px;
    border-radius: 3px;
    border: none;
    font-size: 15px;
    outline-color: #29293d;
    margin-top: 10px;

    @media screen and (max-width: 45em) {
        font-size: 10px;
        height: 10px;
        width: 70%;
        padding: 10px;
    }
    
`;

const Textarea = styled.textarea`
    height: 100px;
    width: 50%;
    padding: 20px;
    border-radius: 3px;
    border: none;
    font-size: 15px;
    outline-color: #29293d;

    @media screen and (max-width: 45em) {
        font-size: 10px;
        height: 100px;
        width: 70%;
        padding: 10px;
    }
`;

const Button = styled.button`
    height: 50px;
    width: 20%;
    border-radius: 3px;
    border: none;
    margin-bottom: 20px;
    margin-top: 10px;

    &:active {
        background: #29293d;
        color: white;
    }

    @media screen and (max-width: 45em) {
        font-size: 10px;
        height: 20px;
        width: 50%;
        
    }
`;

const DoneDiv = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: black;
    text-align: center;
    margin-top: 0px;

    @media screen and (max-width: 45em) {
        font-size: 20px;
    }
`;

const Contacts = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ujg9qbw', 'template_biuxa2b', form.current, 'iJ8OFlmuKJMTqNU_-')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };


    return ( 
        <Maindiv id="contacts">
            <h1 >Contact me!</h1>
            <DoneDiv>{done && "Thanks for contacting me, I'll get back to you ASAP."}</DoneDiv>
            <Form ref={form} onSubmit={sendEmail} >
                <Input 
                    type="text" 
                    name="user_name"
                    placeholder="Name*"
                    required="required" 
                />
                <Input 
                    type="email" 
                    name="user_email"
                    placeholder="Email*"
                    required="required" 
                />
                <Textarea 
                    placeholder="Message*"
                    name="message"
                    required="required" 
                />
                <Button type="submit"> Send Message</Button>
                
            </Form>
            

        </Maindiv>
        
     );
}
 
export default Contacts;