import { Container, Typography, Card, CardContent } from "@mui/material";

function AboutMe() {
  return (
    <Container sx={{ maxWidth: "275", mb: "2em" }}>
      <Typography variant="h4" sx={{ mb: "0.5em", display: 'flex', justifyContent: 'center' }}>
        About Me
      </Typography>

      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#bcbcbc",
          display: "inline-block",
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{  }}>
            A full stack developer who has a passion for both responsive
            front-end and efficient back-end applications. Experience in
            Javascript, React, Node, Material UI and more. Feel free to peruse
            my projects!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutMe;
