import { ImageListItem } from "@mui/material";

function MadeWith(props) {
  return (
    <ImageListItem key={props.skill.skill}>
      <img className="logo" src={`${props.skill.img}`} loading="lazy" />
    </ImageListItem>
  );
}

export default MadeWith;
