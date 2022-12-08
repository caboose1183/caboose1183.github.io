import {
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Link,
} from "@mui/material";

function Footer() {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography variant="h4" sx={{ my: "1em" }}>
        Find Me On
      </Typography>
      <ImageList
        sx={{ width: "60%", height: 200 }}
        cols={3}
        rowHeight={10}
        gap={10}
      >
        <ImageListItem
          key={`https://cdn-icons-png.flaticon.com/512/174/174857.png`}
        >
          <Link href="https://www.linkedin.com/in/sidney-pang-6549a2220/">
            <img
              src={`https://cdn-icons-png.flaticon.com/512/174/174857.png`}
              alt={"linkedin"}
              loading="lazy"
            />
          </Link>
        </ImageListItem>

        <ImageListItem
          key={`https://cdn-icons-png.flaticon.com/512/174/174857.png`}
        >
          <Link href="https://www.linkedin.com/in/sidney-pang-6549a2220/">
            <img
              src={`https://cdn-icons-png.flaticon.com/512/174/174857.png`}
              alt={"linkedin"}
              loading="lazy"
            />
          </Link>
        </ImageListItem>

        <ImageListItem
          key={`https://cdn-icons-png.flaticon.com/512/174/174857.png`}
        >
          <Link href="https://www.linkedin.com/in/sidney-pang-6549a2220/">
            <img
              src={`https://cdn-icons-png.flaticon.com/512/174/174857.png`}
              alt={"linkedin"}
              loading="lazy"
            />
          </Link>
        </ImageListItem>
      </ImageList>
    </Container>
  );
}

export default Footer;
