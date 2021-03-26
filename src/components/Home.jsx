import React from "react";
import axios from "axios";
import "./Home.css";

export default function Home(props) {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [date, setDate] = React.useState("");
  const [description, setDescription] = React.useState("");

  let url = `https://api.nasa.gov/planetary/apod?api_key=${props.passkey}`;
  axios.get(url).then((res) => {
    setDate(res.data.date);
    setTitle(res.data.title);
    setImage(res.data.url);
    setDate(res.data.date);
    setDescription(res.data.explanation);
  });

  return (
    <div id="home-container">
      <div id="title-container">
        <b>Title : </b> {title}
      </div>

      <div id="image-container">
        <img src={image} id="image" alt={title} />
      </div>
      <div id="description-container">
        <b>Description : </b> {description}
      </div>
      <div id="date-container">
        <b>Date : </b>
        {date}
      </div>
    </div>
  );
}
