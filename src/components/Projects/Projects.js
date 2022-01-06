import react from "react";
import M from 'materialize-css';
import { Tab , Tabs } from 'react-materialize';

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
          title="Test 1"
        >
          Test 1
        </Tab>
        <Tab
          active
          className="red"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false
          }}
          title="Test 2"
        >
          Test 2
        </Tab>
        <Tab
          className="green"
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false
          }}
          title="Test 3"
        >
          Test 3
        </Tab>
      </Tabs>
    )
}

export default Projects;