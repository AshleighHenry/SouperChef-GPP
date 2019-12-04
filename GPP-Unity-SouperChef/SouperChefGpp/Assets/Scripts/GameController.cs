using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class GameController : MonoBehaviour
{

  
    public GameObject orderPrefab;      // prefab for order tab object
    public Sprite[] potSpriteSheet;     // Sprite Array of soup pots
    float currCountdownValue;
    public int maxLevelTimer;   // maximum time allowed per level
    public Text timerText;
    [HideInInspector]
    public List<GameObject> orderSheet = new List<GameObject>();    // list to store current orders

    int numOfOrders;            // the current number of orders active
    public int maxOrders;       // the max number of orders available in level
    public int flavoursInRange; // the range of flavours that can be generated in current level.


    int delayBetweenOrders = 10;
    int countForOrders;
    // Start is called before the first frame update
    void Start()
    {
        countForOrders = 0;
        currCountdownValue = maxLevelTimer;
        timerText.text = "Time Left: ";
        numOfOrders = 0;
        MakeSoupOrder(flavoursInRange);
        StartCoroutine(StartCountdown(maxLevelTimer));
    }

    void MakeSoupOrder(int t_flavourRange)
    {
        if (numOfOrders < maxOrders)
        {
            if (flavoursInRange >= potSpriteSheet.Length || flavoursInRange < 0)
            {
                flavoursInRange = potSpriteSheet.Length -1; // set range to be length of spritesheet, prevent going out of bounds
                                                            // -1 as last index in array is default water pot sprite, not a flavour
            }
            int randomSoupNum = Random.Range(0, flavoursInRange);
            Sprite soupSprite = potSpriteSheet[randomSoupNum];
            Vector2 spawnPos = new Vector2(-5.5f + 1.4f * numOfOrders, 4.2f);
            // newOrder.GetComponent<OrderSpawner>().GenerateFlavour(3);
            GameObject newOrder = Instantiate(orderPrefab,spawnPos , Quaternion.identity);
            newOrder.GetComponent<SpriteRenderer>().sprite = soupSprite;
            orderSheet.Add(newOrder);
            numOfOrders++;
        }
    }


    // Update is called once per frame
    void Update()
    {
        
        if (countForOrders == 5)
        {
            MakeSoupOrder(flavoursInRange);
            countForOrders = 0;
        }
        Timer();
    }

    void Timer()
    {
        //levelTimer = levelTimer -Time.deltaTime;
        //timerText.text = "Time Left" + levelTimer;
    }


    IEnumerator StartCountdown(float countdownValue = 10)
    {
        currCountdownValue = countdownValue;
        while (currCountdownValue > 0)
        {
          
            countForOrders++;
           
            timerText.text = "Time Left" + currCountdownValue;
            yield return new WaitForSeconds(1.0f);
            currCountdownValue--;
        }
    }

}
