import * as PIXI from 'pixi.js'

console.log("jou")

const app: PIXI.Application = new PIXI.Application({ 
    width: 256, 
    height: 256,                       
    antialias: true, 
    transparent: false, 
    resolution: 1
  }
)

document.body.appendChild(app.view);

