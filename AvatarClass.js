export default class AvatarClass {
  constructor(x, y, coins) {
    this.positionX = x;
    this.positionY = y;
    this.coins = coins;
  }

  //getters
  get getAvatar() {
    return {
      positionX: this.positionX,
      positionY: this.positionY,
      coins: this.coins
    };
  }

  get getPosition() {
    return {
      positionX: this.positionX,
      positionY: this.positionY
    };
  }

  get getCoins() {
    return this.coins;
  }

  //setters
  forward() {
    //this.positionY < 1080 ? this.positionY++ : this.positionY;
    this.positionY++;
  }

  back() {
    this.positionY > 0 ? this.positionY-- : this.positionY;
  }

  right() {
    //this.positionX < 1920 ? this.positionX++ : this.positionX;
    this.positionX++;
  }

  left() {
    this.positionX > 0 ? this.positionX-- : this.positionX;
  }

  addCoins() {
    this.coins++;
  }

  spendCoins(value) {
    //this.coins >= value ? this.coins -= value : return;
    this.coins -= value; 
  }
}