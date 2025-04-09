import Cast from "../models/Cast.js";

export default {
  create(castData) {
    const result = Cast.create({
      ...castData,
      age: Number(castData.age),
    });

    return result;
  },
};
