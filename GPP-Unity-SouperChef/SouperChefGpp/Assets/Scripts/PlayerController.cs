using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    Vector3 cursorPosition; // position of the cursor when the mouse has been clicked
    Vector3 directionVect;
    Vector3 velocity = new Vector3( 0, 0, 0 );
    float distance = 0;
    float speed = 0.1f;
    bool holdingVeg;
    int currentHeldItem;

    public GameObject heldItem;

    // Start is called before the first frame update
    void Start()
    {
        holdingVeg = true;
    }

    // Update is called once per frame
    void Update()
    {

        if (Input.GetMouseButton(0))
        {
           
            cursorPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            cursorPosition.z = 0;
            directionVect = cursorPosition - transform.position;
            directionVect.Normalize();

            velocity = directionVect * speed;

        }
        

        distance = Vector3.Distance(transform.position, cursorPosition);

        if (transform.position != cursorPosition && speed < 1)
        {
            speed *= 1.2f;
            velocity = directionVect * speed;
        }
        if (distance > velocity.normalized.magnitude)
        {
            transform.position += velocity * Time.deltaTime;
        }
        else
        {
            transform.position = cursorPosition;
            speed = 0.1f;
        }

        if (heldItem == true)
        {
            heldItem.gameObject.GetComponent<VegSprite>().UpdatePosition(transform.position);
            
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.tag == ("Carrot"))
        {
            
            holdingVeg = true;
            currentHeldItem =0 ;
            heldItem.gameObject.GetComponent<VegSprite>().SetSprite(currentHeldItem);
        }
        if (collision.tag == ("Beetroot"))
        {
          
            currentHeldItem =1;
            holdingVeg = true;
            //GetComponent<VegSprite>().SetSprite(currentHeldItem);
        }
        if (collision.tag == ("Mushroom"))
        {
         
            currentHeldItem = 2;
            holdingVeg = true;
           // GetComponent<VegSprite>().SetSprite(currentHeldItem);
        }
    }


}
