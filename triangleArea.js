let s = (a + b + c) / 2;
let area= Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
  return area;

  // Given sides of the triangle
let side1 = 5;
let side2 = 6;
let side3 = 7;

// Calculate the area
let areatriangle = triangleArea(side1, side2, side3);

console.log("The area of the triangle is: " + area.toFixed(2));
