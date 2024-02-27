import React from "react";
import video from "../../videos/original-aef80321bc4fb0ff367b9c7e83ddf1fa.mp4";
import Header from "../../components/Header/Header";
import video2 from "../../videos/istockphoto-1454425463-640_adpp_is.mp4";

const Home = () => {
  return (
    <section id="home">
      <video autoPlay loop muted src={video2}></video>
    </section>
  );
};

export default Home;
