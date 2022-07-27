import AvatarClass from "./AvatarClass.js";
import AvatarFunction from "./AvatarFunction.js";

function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const xC = Random(0, 1920);
const yC = Random(0, 1080);
const coinsC = Random(0, 100);
const avatarC = new AvatarClass(xC, yC, coinsC);

const xF = Random(0, 1920);
const yF = Random(0, 1080);
const coinsF = Random(0, 100);
const avatarF = new AvatarFunction(xF, yF, coinsF);

console.log(avatarC, avatarF);

avatarC.forward();
avatarC.right();
avatarC.right();
avatarC.back();
avatarC.back();
avatarC.left();
avatarC.addCoins();
avatarC.spendCoins(10);
console.log("AvatarClass", avatarC);

avatarF.forward();
avatarF.right();
avatarF.right();
avatarF.back();
avatarF.back();
avatarF.left();
avatarF.addCoins();
avatarF.spendCoins(10);
console.log("AvatarFunction", avatarF);