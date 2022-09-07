const creditcard = (val) => {
  if (val.match(/^3[47]/)) {
    return (
      val.substring(0, 4) +
      " " +
      val.substring(4, 10) +
      " " +
      val.substring(10, 15)
    );
  } else {
    return (
      val.substring(0, 4) +
      " " +
      val.substring(4, 8) +
      " " +
      val.substring(8, 12) +
      " " +
      val.substring(12, 16)
    );
  }
};

const padcard = (val) => {
  val = (val || "0000000000000000").padEnd(16, "0");
  return creditcard(val);
};

export { creditcard, padcard };
