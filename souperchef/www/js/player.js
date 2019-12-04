/**
 * Player class.
 * 
 * @class
 *
 */
class Player
{
    /**
     * Creates an instance of Player.
     * 
     * @param {Context} context This is the execution context.
     * @param {Document} document A reference to the document.
     *
     * @constructor
     */
    constructor(context, document)
    {
        // Set reference to context
        this.ctx = context;

        // Set reference to document
        this.document = document;

        // Prevent scrolling during touchstart events
        this.document.addEventListener('touchstart', function(e) {e.preventDefault();}, {passive: false});

        // Handle touchstart event
        this.document.addEventListener("touchstart", () => this.onTouchStart(event));

        // Handle touchmove event
        this.document.addEventListener("touchmove", () => this.onTouchMove(event));

        // Handle touchend event
        this.document.addEventListener("touchend", () => this.onTouchEnd(event));

        // Player sprite
        this.sprite = new Image();
        this.sprite.src = 'img/spritesheets/player_spritesheet.png';

        // Create Vector2 to use for player's position and set default position
        this.position = new Vector2(430, 300);

        // Create Vector2 to use for player's end position
        this.endPosition = new Vector2();

        // Create Vector2 to hold directional vector for player's movement
        this.direction = new Vector2();

        // Stores the current distance between the player's current position and the player's end position
        this.distance = 0.0;

        // Movement vector
        this.movementVector = new Vector2();

        // Player speed
        this.speed = 10.0;

        // This bool is true if the player is moving
        this.moving = false;

        // Settings for sprite animator
        this.spritesAcross = 8; // This is the number of animation frames in one horizontal row
        this.spritesDown = 2; // This is the amount of rows in the sprite sheet
        this.spriteWidth = 64;
        this.spriteHeight = 140;
        this.slicePosX = 0;
        this.slicePosY = 0;
        this.movementAngle = 0.0;

        // ENUMS for animation state machine
        this.animationState = {"UP":1, "RIGHT_UP":2, "RIGHT":3, "RIGHT_DOWN":4, "DOWN":5, "LEFT_DOWN":6, "LEFT":7, "LEFT_UP":8, "IDLE":9};
        Object.freeze(this.animationState); // Makes object immutable
        this.currentAnimationState = this.animationState.IDLE;
    }  

   /**
    * Checks for touchstart.
    * 
    */
    onTouchStart(e)
    {
        // Set moving to true
        this.moving = true;

        // The end position is wherever the user has touched the screen
        this.endPosition.x = e.touches[0].clientX;
        this.endPosition.y = e.touches[0].clientY;

        // Get directional vector based on current position and end position
        this.direction = this.endPosition.subtract(this.position);

        // Normalise the directional vector
        this.direction = this.direction.unit();

        // Get angle of direction vector and convert to degrees
        this.movementAngle = this.direction.angle() * 180 / Math.PI;

        // Convert movement angle into something between 0 and 360 degrees
        if (this.movementAngle < 0)
        {
            this.movementAngle += 360;
        }
        
        // Check which animation state to use depending on movement direction
        if (this.movementAngle > 30 && this.movementAngle <= 60) // RIGHT-DOWN
        {
            this.currentAnimationState = this.animationState.RIGHT_DOWN;
        }
        else if (this.movementAngle > 60 && this.movementAngle <= 120) // DOWN
        {
            this.currentAnimationState = this.animationState.DOWN;
        }
        else if (this.movementAngle > 120 && this.movementAngle <= 150) // LEFT-DOWN
        {
            this.currentAnimationState = this.animationState.LEFT_DOWN;
        }
        else if (this.movementAngle > 150 && this.movementAngle <= 210) // LEFT
        {
            this.currentAnimationState = this.animationState.LEFT;
        }
        else if (this.movementAngle > 210 && this.movementAngle <= 240) // LEFT-UP
        {
            this.currentAnimationState = this.animationState.LEFT_UP;
        }
        else if (this.movementAngle > 240 && this.movementAngle <= 300) // UP
        {
            this.currentAnimationState = this.animationState.UP;
        }
        else if (this.movementAngle > 300 && this.movementAngle <= 330) // RIGHT-UP
        {
            this.currentAnimationState = this.animationState.RIGHT_UP;
        }
        else if ((this.movementAngle > 330 && this.movementAngle <= 359)
            || (this.movementAngle >= 0 && this.movementAngle <= 30)) // RIGHT
        {
            this.currentAnimationState = this.animationState.RIGHT;
        }

        // Multiply the directional vector with the speed value
        this.movementVector = this.direction.multiply(this.speed);
    }

   /**
    * Checks for touchmove.
    * 
    */
   onTouchMove(e)
   {
        
   }

   /**
    * Checks for touchend.
    * 
    */
    onTouchEnd(e)
    {
        // Nothing needed here (yet!)
    }

   /**
    * Updates the player's sprite.
    * 
    */
   update()
   {
       if (this.moving === true)
       {
           this.position = this.position.add(this.movementVector);           
           this.distance = this.position.distance(this.endPosition);

           if (this.distance < 10.0)
           {
               this.moving = false;
           }           
       }
       else
       {
        this.currentAnimationState = this.animationState.IDLE;
       }

       // Animate the sprite
       this.animate(this.currentAnimationState);
   }

   /**
    * Animates the player sprite depending on current state.
    * 
    * @param {Enumerator} state The current animation state.
    * 
    */
   animate(state)
   {
        switch (state)
        {
            case this.animationState.UP:                
                this.slicePosY = 0;
                break;

            case this.animationState.RIGHT_UP:
                this.slicePosY = this.spriteHeight;
                break;

            case this.animationState.RIGHT:
                this.slicePosY = this.spriteHeight * 2;
                break;

            case this.animationState.RIGHT_DOWN:
                this.slicePosY = this.spriteHeight * 3;
                break;
        
            case this.animationState.DOWN:
                this.slicePosY = this.spriteHeight * 4;
                break;
        
            case this.animationState.LEFT_DOWN:
                this.slicePosY = this.spriteHeight * 5;                
                break;

            case this.animationState.LEFT:
                this.slicePosY = this.spriteHeight * 6;                
                break;
                
            case this.animationState.LEFT_UP:
                this.slicePosY = this.spriteHeight * 7;
                break;

            case this.animationState.IDLE:
                this.slicePosY = this.spriteHeight * 8;
                break;
        }

        this.slicePosX += this.spriteWidth;

        if (this.slicePosX >= this.spriteWidth * this.spritesAcross)
        {
            this.slicePosX = 0;
        }
   }

   /**
    * Draws the player's sprite.
    * 
    */
    draw()
    {
        this.ctx.drawImage(this.sprite, this.slicePosX, this.slicePosY, 
            this.spriteWidth, this.spriteHeight, parseInt(this.position.x), parseInt(this.position.y), 
            this.spriteWidth, this.spriteHeight);
    }
}