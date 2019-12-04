using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VegSprite : MonoBehaviour
{

    public Sprite[] potSpriteSheet;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // only updates when held by player. 
    public void UpdatePosition(Vector2 pos)
    {
       
        transform.position = new Vector3(pos.x, pos.y, -3);
       
    }
    
    public void SetSprite(int vegInt)
    {
        GetComponent<SpriteRenderer>().sprite = potSpriteSheet[vegInt];
    }
}
