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
        // data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="left"
      >
        <div className="container__image ">
          <img className="" src="img/techno.jpg" alt="IMG" />
        </div>

        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="details"
        >
          <h1>Techno Main Salt Lake</h1>
          <p>
            Techno Main Salt Lake (Erst while Techno India) was established in
            the year 2001 with 4 AICTE approved DegreeEngineering Courses. At
            present the college is running 15+ UG programs and 6 PG courses.
            Being located at Sector-V, Salt Lake, Kolkata, the college enjoys
            the advantage of proximity totheIT Hubof West Bengal. The college
            emphasizes on holistic development of students which is crucial for
            their growth and prosperity in professional life. Despite the taxing
            academic schedule, they actively participate in various
            co-curricular activities. Involvement in numerous versatile
            inter-college and national level competitions sharpens the
            managerial skills of the aspiringstudents.
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
            <h1>The Annual Cultural Festival of Techno Main Salt Lake</h1>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="anakronos"
          >
            <h1>Anakronos</h1>
            <p>
              is one of the most prominent college fest across Kolkata. It is
              dedicated to the celebration of creativity, passion and talent of
              today’s youth. Anakhronos is also known for its exciting
              performance line-ups which includes the likes of Pentagram, Ash
              King, Armaan Malik, Shaan, Vishal Dadlani, Benny Dayal, Jonita
              Gandhi, Dev Negi and many more. Due to the pandemic we shifted our
              18th season to online mode and introduced e-Anakhronos. However,
              for our 19th season we are all set to take things to a greater
              level. Anakhronos is coming back with full on zest and going
              offline once again. We promise it will be an unforgettable
              extravaganza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
