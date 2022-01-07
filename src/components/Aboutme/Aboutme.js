import react from "react";
import M from 'materialize-css';
import image from '../../assets/img9.png';
import { Row , Col , Card , Icon , CardTitle , img } from 'react-materialize';

function Aboutme () {
    return(
        <Row>
        <Col
         m={12}
          s={12}
        >
          <Card
            actions={[
              <a key="1" href="https://www.linkedin.com/in/kamila-raggi-676039101/">LinkedIn</a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle img=''/>}
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
          <Col m={6} s={10}>
          <img src={image} className="my-2" style={{ width: "100%" }} alt="cover"/>
          </Col>
          <Col m={6} s={12}>
            Full-Stack Web Developer leveraging customer service background to build a 
            more intuitive user experience on the web. About to earn a certificate in 
            full stack development from the UNCC Coding Bootcamp, with newly developed skills
             in JavaScript, CSS, React.js, and responsive web design. Known as an innovative 
             problem solver passionate about developing apps, with a focus on mobile-first 
             design and development. With each project, my aim is to best engage my audience 
             for an impactful user experience. I applied aspects of UX and agile development 
             in a recent project. I worked on a team of four to develop a single-page MERN app 
             hat helps local business owners track their sales, inventory, and attendance at 
             specialty events. Im excited to leverage my skills as part of a fast-paced, 
             quality-driven team to build better experiences on the web. Portuguese and 
             English bilingual speaker with strong ability in creative designs and teamwork to 
             build and maintain websites from ideation to production.
             </Col>
          </Card>
        </Col>
      </Row>
    )
}

export default Aboutme;