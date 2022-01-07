import React, { useState } from "react";
import M from 'react-materialize';
import { TextInput , Textarea ,Button ,Icon } from "react-materialize";

function Contactme() {
    const [formState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const handleSubmit = (e) => {
        e.preventDefault();
        {
          console.log('Submit Form', formState);
        }
    };
    return(
        <form id="contact-form" onSubmit={handleSubmit}>
        <TextInput id="TextInput-25" label="Name" defaultValue={name}>
        <TextInput
         email
         id="TextInput-42"
         label="Email"
         validate
         defaultValue={email}
        ></TextInput>
            <Textarea
            data-length={120}
            id="Textarea-29"
            label="Message"
            defaultValue={message}
            >
                <Button
            node="button"
            type="submit"
            waves="light"
            
          >
            Submit
            <Icon right>
              send
            </Icon>
          </Button></Textarea>
        </TextInput>
        </form>
    )
}

export default Contactme;
