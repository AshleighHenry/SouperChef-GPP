/**
 * Order class.
 *
 * @class
 *
 */
class Order
{
   /**
    * Creates an instance of Order.
    *
    * @constructor
    */
   constructor(context, document)
   {
      this.ctx = context;
      this.document = document;

      this.initOrder();
   }

   /**
    * Initialises Order class.
    *
    */
   initOrder()
   {
      // Sprite position
      this.position = new Vector2();

      // Slice position
      this.slicePos = new Vector2(0, 0);

      // Get images from ImageLoader class
      this.orderSprites = ImageLoader.getOrderSpritesheet(); // Bowls of soup
   }

   /**
    * Sets position of order.
    * 
    * @param {Vector2} vec Argument is a Vector2.
    *
    */
   setPosition(vec)
   {
      this.position = vec;
   }

   /**
    * Gets position of order.
    * 
    */
   getPosition()
   {
      return this.position;
   }

   /**
    * Set current ingredient.
    * 
    */
   setIngredient(order)
   {
      switch(order)
      {
         case 0: // Empty
         this.slicePos.x = 0;
            break;

         case 1: // Beetroot
            this.slicePos.x = 80;
            break;

         case 2: // Carrot
            this.slicePos.x = 160;
            break;

         case 3: // Mushroom
            this.slicePos.x = 240;
            break;

         case 4: // Pea
            this.slicePos.x = 320;
            break;

         case 5: // Tomato
            this.slicePos.x = 400;
            break;
      }
   }

   /**
    * Update.
    *
    */
   update()
   {
               
   }

   /**
    * Draw.
    *
    */
   draw()
   {
      this.ctx.drawImage(this.orderSprites, this.slicePos.x, this.slicePos.y, 80, 80, this.position.x, this.position.y, 80, 80); 
   }
}