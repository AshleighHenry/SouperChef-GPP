/**
 * ImageLoader class.
 * 
 * @class
 *
 */
class ImageLoader
{
   /**
    * Creates an instance of ImageLoader.
    *
    * @constructor
    */
    constructor()
    {
        
    }

   /**
    * Loads all images used in game.
    *
    */
    static loadImages()
    {
        // Tiled floor
        this.floorSprite = new Image();
        this.floorSprite.src = 'img/kitchen_floor.png';

        // Preparation spritesheet
        this.prepSpritesheet = new Image();
        this.prepSpritesheet.src = 'img/spritesheets/prep_spritesheet.png';

        // Decorative items spritesheet
        this.decorativeItems = new Image();
        this.decorativeItems.src = 'img/spritesheets/decorative_items.png';

        // Serving counter
        this.servingCounter = new Image();
        this.servingCounter.src = 'img/serving_counter.png';

        // Order sprites
        this.orderSpritesheet = new Image();
        this.orderSpritesheet.src = 'img/spritesheets/order_spritesheet.png';
    }

   /**
    * Get floor sprite.
    * 
    */
    static getFloorSprite()
    {
        return this.floorSprite;
    }

   /**
    * Get preparation spritesheet.
    * 
    */
    static getPrepSpritesheet()
    {
        return this.prepSpritesheet;
    }

   /**
    * Get decorative items spritesheet.
    * 
    */
    static getDecorativeItems()
    {
        return this.decorativeItems;
    }

   /**
    * Get serving counter sprite.
    * 
    */
    static getServingCounter()
    {
        return this.servingCounter;
    }

   /**
    * Get order spritesheet.
    * 
    */
    static getOrderSpritesheet()
    {
        return this.orderSpritesheet;
    }
}