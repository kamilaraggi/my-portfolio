import react from "react";
import M from 'react-materialize';
import { Button , Icon , Row , CardPanel , Col , Chip } from 'react-materialize';
import pdf from '../../assets/kbresume.pdf';

function Resumebtn() {
    return(
      <Row>
  
    <CardPanel className="blue">
      <span className="white-text">
      <h3>TECHNICAL SKILLS</h3>
       <div>
       <Chip
       close={false}
       closeIcon={<Icon className="close">close</Icon>}
       options={null}
        >
           JavaScript
       </Chip>
      <Chip
       close={false}
        closeIcon={<Icon className="close">close</Icon>}
         options={null}
        >
         ES6+
       </Chip>
       <Chip
        close={false}
        closeIcon={<Icon className="close">close</Icon>}
         options={null}
         >
         CSS3
        </Chip> 
        <Chip
          close={false}
            closeIcon={<Icon className="close">close</Icon>}
           options={null}
           >
           HTML5
          </Chip>
          <Chip
           close={false}
           closeIcon={<Icon className="close">close</Icon>}
           options={null}
          >
         SQL
         </Chip> 
         <Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
NoSQL
</Chip> 
</div>

       <div>
       <Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
GitHub
</Chip><Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
JavaScript
</Chip>
<Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
MongoDB
</Chip> <Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
MySQL
</Chip></div>

        <div>
          
        <Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
Express
</Chip>
<Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
React
</Chip><Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
Node
</Chip>
<Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
Handlebars
</Chip>
<Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
Query
</Chip><Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
Bootstrap
</Chip></div>

      </span>
    </CardPanel>
  
  <Button
        node="button"
        style={{
          marginRight: '5px'
        }}
        waves="light"
        className="blue"
      >
        <a className="grey-text text-lighten-3" href={pdf}>Resume</a>
        <Icon left>
          cloud
        </Icon>
      </Button>
      
</Row>
       
    )
}

export default Resumebtn;