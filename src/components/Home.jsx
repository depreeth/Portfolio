import React,{useEffect,useState} from "react";

import Profile from "../assets/profile-pic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';
import  '../css/Button.css'


const Home = () => {
  // const LiquidButton = class LiquidButton {
  //   constructor(button) {
  //     const { width, height } = button.getBoundingClientRect();
  //     const buttonStyles = window.getComputedStyle(button);
  //     console.log();
  //     const options = button.dataset || {};

  //     this.font = `${buttonStyles["font-size"]} ${buttonStyles["font-family"]}`;
  //     console.log(this.font);
  //     this.tension = options.tension || 0.4;
  //     this.width = width;
  //     this.height = height;
  //     this.margin = options.margin || 50;
  //     // assume the padding it the same all around
  //     this.padding = parseFloat(buttonStyles.paddingRight);
  //     this.hoverFactor = options.hoverFactor || 0.5;
  //     this.gap = options.gap || 5;
  //     this.debug = options.debug || false;
  //     this.forceFactor = options.forceFactor || 0.2;
  //     // this.color1 = options.color1 || '#36DFE7';
  //     // this.color2 = options.color2 || '#8F17E1';
  //     // this.color3 = options.color3 || '#E509E6';
  //     this.color1 = options.color1 || "#ffc600";
  //     this.color2 = options.color2 || "#FF0000";
  //     this.color3 = options.color3 || "#e6093d";
  //     this.textColor = buttonStyles.color || "#FFFFFF";
  //     this.layers = [
  //       {
  //         points: [],
  //         viscosity: 0.5,
  //         mouseForce: 100,
  //         forceLimit: 2,
  //       },
  //       {
  //         points: [],
  //         viscosity: 0.8,
  //         mouseForce: 150,
  //         forceLimit: 3,
  //       },
  //     ];
  //     this.text = button.textContent;
  //     this.canvas = options.canvas || document.createElement("canvas");
  //     this.context = this.canvas.getContext("2d");
  //     // this.wrapperElement = options.wrapperElement || document.body;
  //     // if (!this.canvas.parentElement) {
  //     //   this.wrapperElement.append(this.canvas);
  //     // }
  //     button.append(this.canvas);
  //     this.touches = [];
  //     this.noise = options.noise || 0;
  //     button.addEventListener("mousemove", this.mousemove);
  //     button.addEventListener("mouseout", this.mouseout);
  //     this.initOrigins();
  //     this.animate();
  //     this.restingFace();
  //   }

  //   restingFace() {
  //     // force a mouse move on each button
  //     this.mousemove({ offsetX: Math.random() * this.width, offsetY: 1 });
  //   }

  //   get mousemove() {
  //     return (e) => {
  //       this.touches = [
  //         {
  //           x: e.offsetX,
  //           y: e.offsetY,
  //           z: 0,
  //           force: 1,
  //         },
  //       ];
  //     };
  //   }

  //   get mouseout() {
  //     return (e) => {
  //       this.touches = [];
  //       this.restingFace();
  //     };
  //   }

  //   get raf() {
  //     return (
  //       this.__raf ||
  //       (this.__raf = (
  //         window.requestAnimationFrame ||
  //         window.webkitRequestAnimationFrame ||
  //         window.mozRequestAnimationFrame ||
  //         function (callback) {
  //           setTimeout(callback, 10);
  //         }
  //       ).bind(window))
  //     );
  //   }

  //   distance(p1, p2) {
  //     return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  //   }

  //   update() {
  //     for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
  //       const layer = this.layers[layerIndex];
  //       const points = layer.points;
  //       for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
  //         const point = points[pointIndex];
  //         const dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
  //         const dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
  //         const d = Math.sqrt(dx * dx + dy * dy);
  //         const f = d * this.forceFactor;
  //         point.vx += f * (dx / d || 0);
  //         point.vy += f * (dy / d || 0);
  //         for (
  //           let touchIndex = 0;
  //           touchIndex < this.touches.length;
  //           touchIndex++
  //         ) {
  //           const touch = this.touches[touchIndex];
  //           let mouseForce = layer.mouseForce;
  //           if (
  //             touch.x > this.margin &&
  //             touch.x < this.margin + this.width &&
  //             touch.y > this.margin &&
  //             touch.y < this.margin + this.height
  //           ) {
  //             mouseForce *= -this.hoverFactor;
  //           }
  //           const mx = point.x - touch.x;
  //           const my = point.y - touch.y;
  //           const md = Math.sqrt(mx * mx + my * my);
  //           const mf = Math.max(
  //             -layer.forceLimit,
  //             Math.min(layer.forceLimit, (mouseForce * touch.force) / md)
  //           );
  //           point.vx += mf * (mx / md || 0);
  //           point.vy += mf * (my / md || 0);
  //         }
  //         point.vx *= layer.viscosity;
  //         point.vy *= layer.viscosity;
  //         point.x += point.vx;
  //         point.y += point.vy;
  //       }
  //       for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
  //         const prev = points[(pointIndex + points.length - 1) % points.length];
  //         const point = points[pointIndex];
  //         const next = points[(pointIndex + points.length + 1) % points.length];
  //         const dPrev = this.distance(point, prev);
  //         const dNext = this.distance(point, next);

  //         const line = {
  //           x: next.x - prev.x,
  //           y: next.y - prev.y,
  //         };
  //         const dLine = Math.sqrt(line.x * line.x + line.y * line.y);

  //         point.cPrev = {
  //           x: point.x - (line.x / dLine) * dPrev * this.tension,
  //           y: point.y - (line.y / dLine) * dPrev * this.tension,
  //         };
  //         point.cNext = {
  //           x: point.x + (line.x / dLine) * dNext * this.tension,
  //           y: point.y + (line.y / dLine) * dNext * this.tension,
  //         };
  //       }
  //     }
  //   }

  //   animate() {
  //     this.raf(() => {
  //       this.update();
  //       this.draw();
  //       this.animate();
  //     });
  //   }

  //   draw() {
  //     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //     for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
  //       const layer = this.layers[layerIndex];
  //       if (layerIndex === 1) {
  //         if (this.touches.length > 0) {
  //           const gx = this.touches[0].x;
  //           const gy = this.touches[0].y;
  //           layer.color = this.context.createRadialGradient(
  //             gx,
  //             gy,
  //             this.height * 2,
  //             gx,
  //             gy,
  //             0
  //           );
  //           layer.color.addColorStop(0, this.color2);
  //           layer.color.addColorStop(1, this.color3);
  //         } else {
  //           layer.color = this.color2;
  //         }
  //       } else {
  //         layer.color = this.color1;
  //       }
  //       const points = layer.points;
  //       this.context.fillStyle = layer.color;

  //       this.context.beginPath();
  //       this.context.moveTo(points[0].x, points[0].y);
  //       for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
  //         this.context.bezierCurveTo(
  //           points[(pointIndex + 0) % points.length].cNext.x,
  //           points[(pointIndex + 0) % points.length].cNext.y,
  //           points[(pointIndex + 1) % points.length].cPrev.x,
  //           points[(pointIndex + 1) % points.length].cPrev.y,
  //           points[(pointIndex + 1) % points.length].x,
  //           points[(pointIndex + 1) % points.length].y
  //         );
  //       }
  //       this.context.fill();
  //     }
  //     this.context.fillStyle = this.textColor;
  //     // this.context.font = '100 ' + (this.height - this.padding * 2) + 'px ' + this.fontFamily;
  //     this.context.font = this.font;
  //     this.context.textAlign = "center";
  //     this.context.textBaseline = "middle";
  //     this.context.text;
  //     // this.context.fillText(this.text, this.canvas.width / 2, this.canvas.height / 2, this.width - this.padding);
  //     if (this.debug) {
  //       this.drawDebug();
  //     }
  //   }

  //   drawDebug() {
  //     this.context.fillStyle = "rgba(255, 255, 255, 0.8)";
  //     this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  //     for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
  //       const layer = this.layers[layerIndex];
  //       const points = layer.points;
  //       for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
  //         if (layerIndex === 0) {
  //           this.context.fillStyle = this.color1;
  //         } else {
  //           this.context.fillStyle = this.color2;
  //         }
  //         const point = points[pointIndex];
  //         this.context.fillRect(point.x, point.y, 1, 1);
  //         this.context.fillStyle = "#000";
  //         this.context.fillRect(point.cPrev.x, point.cPrev.y, 1, 1);
  //         this.context.fillRect(point.cNext.x, point.cNext.y, 1, 1);
  //         this.context.strokeStyle = "rgba(0, 0, 0, 0.33)";
  //         this.context.strokeWidth = 0.5;
  //         this.context.beginPath();
  //         this.context.moveTo(point.cPrev.x, point.cPrev.y);
  //         this.context.lineTo(point.cNext.x, point.cNext.y);
  //         this.context.stroke();
  //       }
  //     }
  //   }

  //   createPoint(x, y) {
  //     return {
  //       x: x,
  //       y: y,
  //       ox: x,
  //       oy: y,
  //       vx: 0,
  //       vy: 0,
  //     };
  //   }

  //   initOrigins() {
  //     this.canvas.width = this.width + this.margin * 2;
  //     this.canvas.height = this.height + this.margin * 2;
  //     for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
  //       const layer = this.layers[layerIndex];
  //       const points = [];
  //       for (
  //         let x = ~~(this.height / 2);
  //         x < this.width - ~~(this.height / 2);
  //         x += this.gap
  //       ) {
  //         points.push(this.createPoint(x + this.margin, this.margin));
  //       }
  //       for (
  //         let alpha = ~~(this.height * 1.25);
  //         alpha >= 0;
  //         alpha -= this.gap
  //       ) {
  //         const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
  //         points.push(
  //           this.createPoint(
  //             (Math.sin(angle) * this.height) / 2 +
  //               this.margin +
  //               this.width -
  //               this.height / 2,
  //             (Math.cos(angle) * this.height) / 2 +
  //               this.margin +
  //               this.height / 2
  //           )
  //         );
  //       }
  //       for (
  //         let x = this.width - ~~(this.height / 2) - 1;
  //         x >= ~~(this.height / 2);
  //         x -= this.gap
  //       ) {
  //         points.push(
  //           this.createPoint(x + this.margin, this.margin + this.height)
  //         );
  //       }
  //       for (
  //         let alpha = 0;
  //         alpha <= ~~(this.height * 1.25);
  //         alpha += this.gap
  //       ) {
  //         const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
  //         points.push(
  //           this.createPoint(
  //             this.height -
  //               (Math.sin(angle) * this.height) / 2 +
  //               this.margin -
  //               this.height / 2,
  //             (Math.cos(angle) * this.height) / 2 +
  //               this.margin +
  //               this.height / 2
  //           )
  //         );
  //       }
  //       layer.points = points;
  //     }
  //   }
  // };

  // const buttons = document.querySelectorAll("#button");

  // buttons.forEach((button) => {
  //   button.liquidButton = new LiquidButton(button);
  // });

  const [state] = useState({
    title: "Hi, I'm Dhaivat",

  });

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {state.title}
          </h2>
          <h3 className="text-2xl sm:text-5xl font-bold text-white">
           <Typewriter options={{autoStart: true, loop: true, delay: 40, strings:["ML Developer","Blockchain Developer"],}} />
          </h3>

          <a id="button" className=" mx-auto mt-10">
            {/* <Link
              to="projects"
              smooth
              duration={500}
              
              id="button" className=""  data-text="hey"
            >
              Projects
              
            </Link> */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Link
             to="projects"
             smooth
             duration={500}
             className=" mx-auto font-bold font-mono"
            >
            Projects<span><MdOutlineKeyboardArrowRight/></span>
            </Link>
            
          </a>
        
        </div>

        <div className=" h-[400px]">
          <img
            src={Profile}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
