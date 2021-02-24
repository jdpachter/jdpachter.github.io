export class Pixel {
  x: number;
  y: number;

  constructor(xVal: number, yVal: number) {
   this.x = xVal;
   this.y = yVal;
 }

 toString(): string {
   return this.x.toString() + this.y.toString();
 }
}
