import Math from "./models/Math.js";
import Random from "./models/Random.js";
import Style from "./models/Style.js";

async function delay(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export default {
  Math,
  Random,
  Style,
};

export { Math, Random, Style };
