import react from "react";
import M from 'react-materialize';
import { Footer } from 'react-materialize';
import pdf from '../../assets/kbresume.pdf';


function Foo() {
    return(
        <Footer
        className="blue"
       
        copyrights=""
        links={<ul><li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/kamila-raggi-676039101/">LinkedIn</a></li><li><a className="grey-text text-lighten-3" href="https://github.com/kamilaraggi">GitHub</a></li><li><a className="grey-text text-lighten-3" href={pdf}>Resume</a></li><li><a className="grey-text text-lighten-3" href="mailto:kamilaraggi@hotmail.com">E-mail Me</a></li></ul>}
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!"></a>}
      >
        <h5 className="white-text">
         
        </h5>
        <p className="grey-text text-lighten-4">
          
        </p>
      </Footer>
    )
}

export default Foo;