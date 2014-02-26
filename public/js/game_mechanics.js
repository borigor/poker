function Hero() {
  this.speed = 3;
  this.alive = true;

  this.draw = function() {
    //TODO
  };

  this.move = function() {
    //TODO
  };

  this.fire = function() {
    //TODO
  };
}

function Bullet(object) {
  this.alive = false;
  var self = object;

  this.spawn = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.alive = true;
  };

  this.draw = function() {
    //TODO
  };

  this.clear = function() {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.alive = false;
  };
}

function Enemy() {

  this.spawn = function (x,y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.alive = true;
  };

  this.draw = function () {
    //TODO
  };

  this.fire = function () {
    //TODO
  }

  this.clear = function () {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.alive = false;
  };
}