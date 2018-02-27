module.exports = function solveEquation(equation) {
  let solution = [];
  let parts = equation.split('*');
  let a = parts[0];
  if (a[0] === '-')
  a = -parseInt(a.substring(1))
  else a = parseInt(a);

  let b = parts[1].substring(5);
  if (b[0] === '-')
  b = -parseInt(b.substring(2));
  if (b[0] === '+')
  b = parseInt(b.substring(2))	
  
  let c = parts[2].substring(3);
  if (c[0] === '-')
  c = -parseInt(c.substring(2));
  if (c[0] === '+')
  c = parseInt(c.substring(2))

  let D = parseInt(b * b - 4 * a * c);
  let xF = (-b + Math.sqrt(D)) / 2 / a;
  let xS = (-b - Math.sqrt(D)) / 2 / a;

  if (xF < xS)
  return solution = [xF.toFixed(), xS.toFixed()];
  if (xF > xS)
  return solution = [xS.toFixed(), xF.toFixed()];


}
