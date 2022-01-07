import react from "react";
import M from 'react-materialize';
import { Button , Icon } from 'react-materialize';

function Resume() {
    return(
        <Button
        node="button"
        style={{
          marginRight: '5px'
        }}
        waves="light"
      >
        button
        <Icon left>
          cloud
        </Icon>
      </Button>
    )
}

export default Resume;