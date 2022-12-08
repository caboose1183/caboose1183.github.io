import "./App.css";

import { Container, Typography } from "@mui/material";

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container sx={{ my: "5em" }}>
        <Typography variant="h1">Sidney Pang</Typography>
        <Typography variant="h4">Full Stack Developer</Typography>
      </Container>

      <AboutMe />

      <Typography variant="h4" sx={{ my: "1em", display: 'flex', justifyContent: 'center' }}>
        Projects
      </Typography>

      <Projects
        project={{
          img: "https://raw.githubusercontent.com/diavolosz/BayStreetBets/master/client/public/img/stock5.png",
          title: "Bay Street Bets",
          description:
            "A web application you can use to browse stocks and invite others to join in competitions to see who can earn the most. Responsible for stock APIs for information and live updates, using react-chart-js to visualize equity",
        }}
        skills={[
          {
            skill: "js",
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          },
          {
            skill: "react",
            img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
          },
          {
            skill: "node",
            img: "https://www.turing.com/blog/wp-content/uploads/2021/11/node-js-logo.png",
          },
          {
            skill: "postgresql",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
          },
          {
            skill: "css",
            img: "https://img.freepik.com/free-icon/css_318-698167.jpg?w=2000",
          },
        ]}
      />

      <Projects
        project={{
          img: "https://github.com/diavolosz/Lighthouse-MT-wikiMaps/raw/master/sampleImage/mapPinDisplay.png",
          title: "Pinnet WikiMaps",
          description:
            "An application where users can view maps with locations of interest. Users can create maps, add and delete pins on maps they have created. Used with leafletjs map api to create and place POIs.",
        }}
        skills={[
          {
            skill: "js",
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          },
          {
            skill: "react",
            img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
          },
          {
            skill: "node",
            img: "https://www.turing.com/blog/wp-content/uploads/2021/11/node-js-logo.png",
          },
          {
            skill: "postgresql",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
          },
          {
            skill: "jquery",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS675AayU2ibelLn7YfoadLA8lNVjxP8XAQWw&usqp=CAU",
          },
        ]}
      />

      <Projects
        project={{
          img: "https://github.com/caboose1183/scheduler/raw/master/docs/Peek%202022-07-20%2019-03.gif?raw=true",
          title: "Scheduler",
          description:
            "A scheduler that the user can create, edit, and delete interview appointments",
        }}
        skills={[
          {
            skill: "js",
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          },
          {
            skill: "react",
            img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
          },
          {
            skill: "node",
            img: "https://www.turing.com/blog/wp-content/uploads/2021/11/node-js-logo.png",
          },
          {
            skill: "postgresql",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
          },
          {
            skill: "cypress",
            img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/q1cwqhahz7jbtfzalznd",
          },
        ]}
      />

      <Skills />

      <Footer />
    </>
  );
}

export default App;
