/**
 * Soup class.
 *
 * @class
 *
 */
class Soup	
{
   /**
    * Creates an instance of Soup.
    *
    * @constructor
    */
   constructor(context, document)
   {
      this.ctx = context;
      this.document = document;

      this.initSoup();
   }

   /**
    * Initialises soup.
    *
    */
   initSoup()
   {
      // Sprite position
      this.position = new Vector2();

      // Slice position
      this.slicePos = new Vector2(0, 320);

      // Get images from ImageLoader class
      this.prepSpritesheet = ImageLoader.getPrepSpritesheet(); // Crates, chopping boards and soup
   }

   /**
    * Sets position of soup.
    * 
    * @param {Vector2} vec Argument is a Vector2.
    *
    */
   setPosition(vec)
   {
      this.position = vec;
   }

   /**
    * Gets position of soup.
    * 
    */
   getPosition()
   {
      return this.position;
   }

   /**
    * Set current ingredient to be cooked.
    * 
    */
   setIngredient(vegetable)
   {
      switch(vegetable)
      {
         case 0: // Empty
         this.slicePos.x = 0;
            break;

         case 1: // Beetroot
            this.slicePos.x = 160;
            break;

         case 2: // Carrot
            this.slicePos.x = 320;
            break;

         case 3: // Mushroom
            this.slicePos.x = 480;
            break;

         case 4: // Pea
            this.slicePos.x = 640;
            break;

         case 5: // Tomato
            this.slicePos.x = 800;
            break;
      }
   }
   

   /**
    * Draw.
    *
    */
   draw()
   {
      this.ctx.drawImage(this.prepSpritesheet, this.slicePos.x, this.slicePos.y, 160, 160, this.position.x, this.position.y, 160, 160);
   }
}