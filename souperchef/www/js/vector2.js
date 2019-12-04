/**
 * Vector 2 class.
 * 
 * A simple class for doing some Vector2 maths.
 * 
 * By Alan 'Two Sheds' Bolger.
 *
 * @class
 *
 */
class Vector2
{
   /**
    * Creates an instance of Vector2.
    * 
    * Has default values of 0.0 for x and y if no parameters are given.
    * 
    * @param {Number} vec_x Argument is scalar value for x.
    * @param {Number} vec_y Argument is scalar value for y.
    *
    * @constructor
    */
   constructor(vec_x = 0.0, vec_y = 0.0)
   {
     this.x = vec_x;
     this.y = vec_y;
     this.a = 0.0;
     this.b = 0.0;
     this.result = 0.0;
   }

   /**
    * Adds a Vector2 to another Vector2 and returns the result.
    *
    * @param {Vector2} vec Argument is a Vector2.
    */
   add(vec)
   {
     this.a = this.x + vec.x;
     this.b = this.y + vec.y;
     return new Vector2(this.a, this.b);
   }

   /**
    * Subtracts a Vector2 from another Vector2 and returns the result.
    *
    * @param {Vector2} vec Argument is a Vector2.
    */
   subtract(vec)
   {
     this.a = this.x - vec.x;
     this.b = this.y - vec.y;
     return new Vector2(this.a, this.b);
   }

   /**
    * Multiplies a Vector 2 with a scalar value and returns the result.
    * 
    * @param {Number} scalar Argument is a scalar value.
    */
   multiply(scalar)
   {
     this.a = this.x * scalar;
     this.b = this.y * scalar;
     return new Vector2(this.a, this.b);
   }

   /**
    * Returns the length of a Vector2.
    */
   length()
   {
    this.result = Math.sqrt((this.x * this.x) + (this.y * this.y));
	  return this.result;
   }

   /**
    * Normalises a Vector2 and returns the result.
    */
   unit()
   {
    this.a = this.x / (Math.sqrt((this.x * this.x) + (this.y * this.y)));
	  this.b = this.y / (Math.sqrt((this.x * this.x) + (this.y * this.y)));
	  return new Vector2(this.a, this.b);
   }

   /**
    * Normalises the given Vector2. 
    */
   normalise()
   {
    this.x = this.x / (Math.sqrt((this.x * this.x) + (this.y * this.y)));
	  this.y = this.y / (Math.sqrt((this.x * this.x) + (this.y * this.y)));
   }

   /**
    * Returns the distance between two vectors
    * 
    * @param {Vector2} vec Argument is a Vector2.
    */
   distance(vec)
   {
     this.result = Math.sqrt(((this.x - vec.x) * (this.x - vec.x)) + ((this.y - vec.y) * (this.y - vec.y)));
     return this.result;
   }

   /**
    * Returns the angle of a vector
    * 
    */
   angle()
   {
     this.result = Math.atan2(this.y, this.x);
     return this.result;
   }
}
