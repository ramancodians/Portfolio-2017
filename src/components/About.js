import React from 'react';
import MeImage from "images/raman_choudhary_about_me.jpg";

const About = () => (
  <div className="about">
    <main>
      <div className="left">
        <img src={MeImage} alt="Raman Choudhary"/>
      </div>
      <div className="right">
        <h2>About me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis iusto est, blanditiis doloribus nobis, autem fuga sunt dolorem voluptatibus? Neque fugit eius fuga numquam vero a earum voluptates nihil voluptatum velit obcaecati ipsa tempore sint, autem, aliquid, ducimus ipsam praesentium. Iure, consequuntur alias quisquam tempora commodi doloribus delectus officia in!</p>
      </div>
    </main>
  </div>
);

export default About;
