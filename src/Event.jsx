import React from "react";
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Event = () => {
  return (
    <div className="container">
      <div
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
        className="left"
      >
        <div className="container__image ">
          <img className="" src="https://images.unsplash.com/photo-1692287253881-777d83014e30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="IMG" />
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="details"
        >
          <h1 >Lorem ipsum dolor sit amet consectetur </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            voluptatibus modi harum eum. At sunt, voluptas deleniti dolorum
            molestias iste fugit ad autem tempore, impedit voluptatem reiciendis
            dignissimos aspernatur consequatur quo numquam id. Laborum similique
            pariatur accusantium eum iusto officiis optio aspernatur id
            blanditiis. Modi, facilis? Molestiae tenetur corrupti aperiam!
          </p>
        </div>
      </div>
      <div className="right">
        <div className="background">
          <div className="background__gradient" />
          <div
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-duration="800"
            className="heading__ankuran"
          >
            <h1 >Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="anakronos"
          >
            <h1>Lorem, ipsum.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              odio, possimus rerum id veritatis itaque facere eum recusandae
              nostrum magni facilis consequuntur minima asperiores
              necessitatibus reiciendis ab molestiae vero, pariatur maiores
              officia! Incidunt earum illum amet aperiam fugit, blanditiis ipsum
              a, expedita iure labore sunt nisi delectus nulla quas eius, magnam
              mollitia totam repudiandae temporibus praesentium ea deleniti ut
              soluta obcaecati! Cum alias eligendi quod consequatur repellat
              nulla! Quo, hic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
