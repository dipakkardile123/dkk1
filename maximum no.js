function max(a, b, c) {
  if (a > c && a > b) {
    console.log(a, "is maximum");
  } else if (b > a && b > c) {
    console.log(b, "is maximum");
  } else {
    console.log(c, "is maximum");
  }
}

max(68, 64, 65);
