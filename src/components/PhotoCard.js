import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 250px;
  height: 200px;
`;

const PhotoCard = props => {
  console.log("props", props);
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>{props.data.date}</p>
      <p>{props.data.explanation}</p>
      <Image src={props.data.url} />
      <p>{props.data.copyright}</p>
    </div>
  );
};
export default PhotoCard;
