/** @type {import("../typings/phaser")} */

import 'phaser';
import config from './config/config';
import Scene1 from './scenes/Scene1';
import StartScene from './scenes/StartScene';

class Game extends Phaser.Game {
    constructor() {
      super(config);
  
      this.scene.add('StartScene', StartScene);
      this.scene.add('Scene1', Scene1);
      
      this.scene.start('StartScene');
    }
  }
  
  window.onload = function () {
    window.game = new Game();
  }
  