import "./App.css";
import Event from "./Event";
// import Particles from "react-particles-js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },


          //  FOR  SNOWFALL  MOTION



          // particles: {
          //   number: {
          //     value: 50,
          //   },
          //   size: {
          //     value: 3,
          //   },
          //   move: {
          //     enable: true,
          //     speed: 6,
          //     direction: "none",
          //     random: false,
          //     straight: false,
          //     out_mode: "out",
          //     attract: {
          //       enable: false,
          //       rotateX: 600,
          //       rotateY: 1200,
          //     },
          //   },
          // },

          // interactivity: {
          //   events: {
          //     onhover: {
          //       enable: true,
          //       mode: "repulse",
          //     },
          //   },
          // },

          
          // NORMAL MOTION OF THE PARTICLE JS
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          config_demo: {
            hide_card: false,
            background_color: "#b61924",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover",
          },

          //  HERE IS THE DIFFERENCE BETWEEN THE TWO CODE SAMPLES OF THE PARTICLE JS

          //   particles: {
          //     number: {
          //       value: 15,
          //       density: {
          //         enable: false,
          //         value_area: 900,
          //       },
          //     },
          //     color: {
          //       value: "#ffffff",
          //     },
          //     shape: {
          //       type: "square",
          //       options: {
          //         sides: 5,
          //       },
          //     },
          //     opacity: {
          //       value: 0.8,
          //       random: false,
          //       anim: {
          //         enable: false,
          //         speed: 8,
          //         opacity_min: 0.1,
          //         sync: false,
          //       },
          //     },
          //     size: {
          //       value: 4,
          //       random: false,
          //       anim: {
          //         enable: false,
          //         speed: 40,
          //         size_min: 0.1,
          //         sync: false,
          //       },
          //     },
          //     rotate: {
          //       value: 0,
          //       random: true,
          //       direction: "clockwise",
          //       animation: {
          //         enable: true,
          //         speed: 5,
          //         sync: false,
          //       },
          //     },
          //     line_linked: {
          //       enable: true,
          //       distance: 600,
          //       color: "#111",
          //       opacity: 0.4,
          //       width: 2,
          //     },
          //     move: {
          //       enable: true,
          //       speed: 8,
          //       direction: "none",
          //       random: false,
          //       straight: false,
          //       out_mode: "out",
          //       attract: {
          //         enable: false,
          //         rotateX: 600,
          //         rotateY: 1200,
          //       },
          //     },
          //   },
          //   interactivity: {
          //     events: {
          //       onhover: {
          //         enable: true,
          //         mode: ["grab"],
          //       },
          //       onclick: {
          //         enable: false,
          //         mode: "bubble",
          //       },
          //       resize: true,
          //     },
          //     modes: {
          //       grab: {
          //         distance: 400,
          //         line_linked: {
          //           opacity: 1,
          //         },
          //       },
          //       bubble: {
          //         distance: 400,
          //         size: 40,
          //         duration: 2,
          //         opacity: 8,
          //         speed: 3,
          //       },
          //       repulse: {
          //         distance: 200,
          //       },
          //       push: {
          //         particles_nb: 4,
          //       },
          //       remove: {
          //         particles_nb: 2,
          //       },
          //     },
          //   },
          //   retina_detect: true,
          //   background: {
          //     color: "#111 ",
          //     image: "",
          //     position: "50% 50%",
          //     repeat: "no-repeat",
          //     size: "cover",
          //   },
          // }}
        }}
      />

      <Event />

    </div>
  );
}

export default App;
