function digital_root(n) {
  if (n < 10) {
    return n;
    }
    
  while (n > 9) {
    var digits = String(n).split("").map(Number);
    n = digits.reduce((sum, current) => sum + current);
  }
  return n;
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));
