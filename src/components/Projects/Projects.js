import react from "react";
import M from 'materialize-css';
import { Tab , Tabs , Row } from 'react-materialize';
import image1 from '../../assets/project1.gif';
import image2 from '../../assets/project2.png';
import image3 from '../../assets/project3.png';
import image4 from '../../assets/project4.png';

function Projects() {
    return(
        <Tabs
        className="tab-demo z-depth-1"
        options={{
          swipeable: true
        }}
        scope="tabs-32"
      >
        <Tab
          className="blue"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false
          }}
          title="Project 1"
        >
          <div className="project">
          <h2>
          <a className="grey-text text-lighten-3" href="https://enigmatic-beach-53993.herokuapp.com/">Redux Store</a>
          </h2>
          <a className="grey-text text-lighten-3" href="https://github.com/kamilaraggi/redux-store-ecommerce">GitHub Repo</a>
          <p>
          E-commerce platform that uses Redux to manage global state.
          </p>
          <div>
          <img src={image1} className="my-2" style={{ width: "65%" }} alt="cover" href="https://enigmatic-beach-53993.herokuapp.com/"/>
          </div>
          </div>
        </Tab>
        <Tab
          active
          className="blue"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false
          }}
          title="Project 2"
        >
          <div className="project">
          <h2>
          <a className="grey-text text-lighten-3" href="https://vielayb.github.io/Group-Project/">NeXtflix</a>
          </h2>
          <a className="grey-text text-lighten-3" href="https://github.com/vielayb/Group-Project">GitHub Repo</a>
          <p>
          NeXtflix use TheMovieEDB api, IMDB api so people can search movies and then look it up to see movie tittle, 
          movie overview, ratings, actors, and also use YouTube api to get the trailers.
          </p>
          <div>
          <img src={image2} className="my-2" style={{ width: "45%" }} alt="cover" href=""/>
          </div>
          </div>
        </Tab>
        <Tab
          className="blue"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false
          }}
          title="Project 3"
        >
          <div className="project">
          <h2>
          <a className="grey-text text-lighten-3" href="https://ancient-castle-74692.herokuapp.com/">Book Search</a>
          </h2>
          <a className="grey-text text-lighten-3" href="https://github.com/kamilaraggi/book-search">GitHub Repo</a>
          <p>
          The app was built using the MERN stack, with a React front end, MongoDB database, 
          and Node.js/Express.js server and API. Built with a RESTful API, and refactor it to 
          be a GraphQL API built with Apollo Server.
          </p>
          <div>
          <img src={image3} className="my-2" style={{ width: "65%" }} alt="cover" href="https://enigmatic-beach-53993.herokuapp.com/"/>
          </div>
          </div>
        </Tab>
        <Tab
          className="blue"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false
          }}
          title="Project 4"
        >
          <div className="project">
          <h2>
          <a className="grey-text text-lighten-3" href="https://fast-sands-05015.herokuapp.com/">Budget Tracker</a>
          </h2>
          <a className="grey-text text-lighten-3" href="https://github.com/kamilaraggi/budget-tracker">GitHub Repo</a>
          <p>
          Giving users a fast and easy way to track their money is important, 
          but allowing them to access that information at any time is even more important. 
          Having offline functionality is paramount to the success of an application that handles 
          users financial information.
          </p>
          <div>
          <img src={image4} className="my-2" style={{ width: "65%" }} alt="cover" href="https://enigmatic-beach-53993.herokuapp.com/"/>
          </div>
          </div>
        </Tab>
      </Tabs>
    )
}

export default Projects;