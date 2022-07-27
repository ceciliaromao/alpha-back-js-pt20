export default function AvatarFunction(x, y, coins) {
  this.positionX = x;
  this.positionY = y;
  this.coins = coins;
}

//getters
AvatarFunction.prototype.getAvatar = function () {
  return {
    positionX: this.positionX,
    positionY: this.positionY,
    coins: this.coins
  };
};

AvatarFunction.prototype.getPosition = function () {
  return {
    positionX: this.positionX,
    positionY: this.positionY,
  };
};

AvatarFunction.prototype.getCoins = function () {
  return this.coins;
};

//setters
AvatarFunction.prototype.forward = function () {
  //this.positionY < 1080 ? this.positionY++ : this.positionY;
  this.positionY++;
};

AvatarFunction.prototype.back = function () {
  this.positionY > 0 ? this.positionY-- : this.positionY;
};

AvatarFunction.prototype.right = function () {
  //this.positionX < 1920 ? this.positionX++ : this.positionX;
  this.positionX++;
};

AvatarFunction.prototype.left = function () {
  this.positionX > 0 ? this.positionX-- : this.positionX;
};

AvatarFunction.prototype.addCoins = function () {
  this.coins++;
};

AvatarFunction.prototype.spendCoins = function (value) {
  this.coins -= value;
};
