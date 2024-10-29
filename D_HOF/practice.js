let radii = [1,2,3,5,6];
// op area = [3.14, , , , , , ]; pi*r*r
// circum = [6.28 , , ,  ,]; 2*pi*r
// sphere = [ , , , , ,]; 4/3*pi*r*r*r
// hemisphere = [ , , ,, , ]; 2/3*pi*r*r*r

const pi = 3.14;

let area = radii.map(r => pi * r * r); // pi * r^2
let circumference = radii.map(r => 2 * pi * r); // 2 * pi * r
let sphere = radii.map(r => (4 / 3) * pi * r * r * r); // (4/3) * pi * r^3
let hemisphere = radii.map(r => (2 / 3) * pi * r * r * r); // (2/3) * pi * r^3

console.log("Areas:", area);
console.log("Circumferences:", circumference);
console.log("Sphere Volumes:", sphere);
console.log("Hemisphere Volumes:", hemisphere);
