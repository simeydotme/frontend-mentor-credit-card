const creditcard = (val) => {
  return (
    val.substring(0, 4) +
    " " +
    val.substring(4, 8) +
    " " +
    val.substring(8, 12) +
    " " +
    val.substring(12, 16)
  );
};

const padcard = (val) => {
  val = (val || "0000000000000000").padEnd(16, "0");
  return creditcard(val);
};

export { creditcard, padcard };
