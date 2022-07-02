import { Component } from '@angular/core';

import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'nx-monorg2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  // particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: "random"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
          parallax: {
            force: 60
          }
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 2,
          maxSpeed: 5,
          
        },
      
        remove: { quantity: 10 },
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: []
          }
        },
      }
    },
    particles: {
      color: {
        value: "random"
      },
      lineLinked: {
        enable: false,
        color: 'random'
      },
      // links: {
      //   color: "#ffffff",
      //   distance: 150,
      //   enable: false,
      //   opacity: 0.5,
      //   width: 1
      // },
      collisions: {
        enable: false
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: true,
        speed: 2,
        straight: false,
        spin: {
          acceleration: 0,
          enable: true
        }

        

      },
      rotate: {
        animation: {
          enable: false,
          speed: 1,
          sync: false
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 20
      },
      opacity: {
        value: 0.4
      },
      shape: {
        type: "char",
        polygon: {
          nb_sides: 5
        },
        options: {
          character: {
            value: [
              'Angular', 'Css', 'HTML', 'JSON', 'JS', 'Git', 'react', 'js', 'saas', 'css'
            ],
            weight: 400,
            fill: true,
            font: 'Verdana'
          },
          
        }

        
      },
      size: {
        value: {min: 3, max: 50 },
        random: true
      },


      



    },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

}
