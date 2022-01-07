import react from "react";
import M from 'react-materialize';
import { TextInput , Textarea } from "react-materialize";

function Contactme() {
    return(
        <TextInput id="TextInput-25" label="Name">
        <TextInput
         email
         id="TextInput-42"
         label="Email"
         validate
        ></TextInput>
            <Textarea
            data-length={120}
            id="Textarea-29"
            label="Message"
            ></Textarea>
        </TextInput>
    )
}

export default Contactme;
