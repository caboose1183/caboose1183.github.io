import { PropaneSharp } from "@mui/icons-material";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  ListSubheader,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import MadeWith from "./MadeWith";

function Projects(props) {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <ImageList cols={1} gap={20} sx={{ width: "70%" }}>
        <Card sx={{ backgroundColor: "#bcbcbc" }}>
          <ImageListItem key={props.project.title}>
            <img
              src={`${props.project.img}`}
              alt={props.project.title}
              loading="lazy"
            />
            <ImageListItemBar title={props.project.title} position="top" />
          </ImageListItem>
          <CardContent sx={{ fontSize: "1.2em" }}>
            {props.project.description}
          </CardContent>
          <CardContent
            sx={{
              fontSize: "1.5em",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Made Using
          </CardContent>
          <CardContent>
            <ImageList sx={{ width: "100%" }} cols={5} gap={10} rowHeight={155}>
              <MadeWith skill={props.skills[0]} />
              <MadeWith skill={props.skills[1]} />
              <MadeWith skill={props.skills[2]} />
              <MadeWith skill={props.skills[3]} />
              <MadeWith skill={props.skills[4]} />
            </ImageList>
          </CardContent>
        </Card>
      </ImageList>
    </Container>
  );
}

export default Projects;
