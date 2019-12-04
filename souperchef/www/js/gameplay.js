/**
 * GamePlay class.
 *
 * @class
 *
 */
class GamePlay	
{
   /**
    * Creates an instance of GamePlay.
    *
    * @constructor
    */
   constructor(context, document)
   {
      this.ctx = context;
      this.document = document;

      this.initGamePlay();
   }

   /**
    * Initialises gameplay.
    *
    */
   initGamePlay()
   {
      // Create player instance
      this.player = new Player(this.ctx, this.document);

      // Get images from ImageLoader class
      this.floorSprite = ImageLoader.getFloorSprite(); // Floor
      this.decorativeItems = ImageLoader.getDecorativeItems(); // Decorative items not used in gameplay
      this.servingCounter = ImageLoader.getServingCounter(); // Serving counter

      // Ingredient crate positions
      this.ingredientsPos_1 = new Vector2(384, 608);
      this.ingredientsPos_2 = new Vector2(544, 608);
      this.ingredientsPos_3 = new Vector2(704, 608);

      // Cutting board positions
      this.choppingBoardPos_1 = new Vector2(384, 128);
      this.choppingBoardPos_2 = new Vector2(544, 128);
      this.choppingBoardPos_3 = new Vector2(704, 128);

      // Soup positions
      this.soupPos_1 = new Vector2(0, 288);
      this.soupPos_2 = new Vector2(0, 448);
      this.soupPos_3 = new Vector2(0, 608);

      // Order positions
      this.orderPos_1 = new Vector2(920, 24);
      this.orderPos_2 = new Vector2(816, 24);
      this.orderPos_3 = new Vector2(712, 24);

      // Empty order position
      this.emptyOrderPos = new Vector2(232, 138);

      // Create ingredients and set positions
      this.ingredient_1 = new Ingredient(this.ctx, this.document);
      this.ingredient_2 = new Ingredient(this.ctx, this.document);
      this.ingredient_3 = new Ingredient(this.ctx, this.document);

      this.ingredient_1.setPosition(this.ingredientsPos_1);
      this.ingredient_2.setPosition(this.ingredientsPos_2);
      this.ingredient_3.setPosition(this.ingredientsPos_3);

      // Create chopping boards and set positions
      this.choppingBoard_1 = new ChoppingBoard(this.ctx, this.document);
      this.choppingBoard_2 = new ChoppingBoard(this.ctx, this.document);
      this.choppingBoard_3 = new ChoppingBoard(this.ctx, this.document);
      
      this.choppingBoard_1.setPosition(this.choppingBoardPos_1);
      this.choppingBoard_2.setPosition(this.choppingBoardPos_2);
      this.choppingBoard_3.setPosition(this.choppingBoardPos_3);

      // Create soup and set positions
      this.soup_1 = new Soup(this.ctx, this.document);
      this.soup_2 = new Soup(this.ctx, this.document);
      this.soup_3 = new Soup(this.ctx, this.document);
            
      this.soup_1.setPosition(this.soupPos_1);
      this.soup_2.setPosition(this.soupPos_2);
      this.soup_3.setPosition(this.soupPos_3);

      // Create the order objects
      this.order_1 = new Order(this.ctx, this.document);
      this.order_2 = new Order(this.ctx, this.document);
      this.order_3 = new Order(this.ctx, this.document);
      this.emptyOrder = new Order(this.ctx, this.document);

      this.order_1.setPosition(this.orderPos_1);
      this.order_2.setPosition(this.orderPos_2);
      this.order_3.setPosition(this.orderPos_3);      
      this.emptyOrder.setPosition(this.emptyOrderPos);

      /////////////////////////////////////////////////
      ///////////////// TEST STUFF!!! /////////////////
      /////////////////////////////////////////////////

      // These will eventually come from the order class (probably)
      this.ingredient_1.setIngredient(1);
      this.ingredient_2.setIngredient(2);
      this.ingredient_3.setIngredient(3);

      this.choppingBoard_1.setIngredient(1);
      this.choppingBoard_2.setIngredient(2);
      this.choppingBoard_3.setIngredient(3);

      this.soup_1.setIngredient(1);
      this.soup_2.setIngredient(2);
      this.soup_3.setIngredient(3);

      this.order_1.setIngredient(1);
      this.order_2.setIngredient(2);
      this.order_3.setIngredient(3);
   }

   /**
    * Draw decorative items.
    *
    */
   drawDecorativeItems()
   {
      // These have fixed positions as they are static throughout gameplay.
      this.ctx.drawImage(this.decorativeItems, 0, 0, 160, 160, 0, 128, 160, 160);
      this.ctx.drawImage(this.decorativeItems, 160, 0, 160, 160, 864, 128, 160, 160);
      this.ctx.drawImage(this.decorativeItems, 320, 0, 160, 160, 864, 288, 160, 160);
      this.ctx.drawImage(this.decorativeItems, 320, 0, 160, 160, 864, 448, 160, 160);
      this.ctx.drawImage(this.decorativeItems, 320, 0, 160, 160, 864, 608, 160, 160);   
      this.ctx.drawImage(this.servingCounter, 160, 128);       
   }

   /**
    * Update.
    *
    */
   update()
   {
      this.player.update();          
   }

   /**
    * Draw.
    *
    */
   draw()
   {
      this.ctx.drawImage(this.floorSprite, 0, 0);
      this.drawDecorativeItems();
      this.ingredient_1.draw();
      this.ingredient_2.draw();
      this.ingredient_3.draw();
      this.choppingBoard_1.draw();
      this.choppingBoard_2.draw();
      this.choppingBoard_3.draw();
      this.soup_1.draw();
      this.soup_2.draw();
      this.soup_3.draw();
      this.order_1.draw();
      this.order_2.draw();
      this.order_3.draw();
      this.emptyOrder.draw();
      this.player.draw();       
   }
}