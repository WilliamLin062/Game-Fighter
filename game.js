window.onload = function () {

}
var config = {
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  }
}
var gameSettings = {
  playerSpeed: 200
}
var game = new Phaser.Game(config)