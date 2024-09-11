import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Feel the delight in every bite.</p>
            </div>
            <p className="mid">
            Welcome to Bharani's Delight, a cherished destination in Oddanchatram, Tamil Nadu, where authentic South Indian flavors come to life. Our restaurant offers a diverse menu featuring both vegetarian and non-vegetarian dishes, each crafted with traditional recipes and the freshest ingredients. At Bharani's Delight, we are dedicated to delivering a memorable dining experience with every meal, celebrating the rich culinary heritage of South India. Join us to savor the true taste of South Indian cuisine in a warm and inviting atmosphere.
            </p>



            {/* <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link> */}



          </div>
          <div className="banner">
            <img src="about1.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
