import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";
import {BsEmojiSunglasses} from 'react-icons/bs';

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Bayramsch <BsEmojiSunglasses /> </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Bayram</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>
          
          I've already known JS, ReactJS, HTML-CSS, Bootstrap, SASS, Agile,SDLC, SQL, Python
        </h4>
        <h2>
          <a href="bayramkmz7240@gmail.com">Send email</a> :
          Bayramkmz7240@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;