import { Container, ImageList, ImageListItem, Typography } from "@mui/material";

function Skills() {
  const skills = [
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
    {
      skill: "ruby",
      img: "https://avatars.githubusercontent.com/u/4223",
    },
    {
      skill: "material",
      img: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
    },
    {
      skill: "bootstrap",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
    },
    {
      skill: "sass",
      img: "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
    },
  ];

  return (
    <Container
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography variant="h4" sx={{ my: "1em" }}>
        Skillset
      </Typography>
      <ImageList
        sx={{ width: "60%", height: 800 }}
        cols={3}
        rowHeight={210}
        gap={12}
      >
        {skills.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.skill} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default Skills;
