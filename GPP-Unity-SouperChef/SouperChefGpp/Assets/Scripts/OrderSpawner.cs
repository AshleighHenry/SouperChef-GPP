using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum Flavour
{
    BEETROOT,
    MUSHROOM,
    TOMATO,
    CARROT,
    PEA, // uh oh
    WATER // Default flavour if error occurs. Also water isnt a flavour
}
public class OrderSpawner : MonoBehaviour
{
  
    [HideInInspector]
    public Flavour m_flavour;
    void Start()
    {
        
    }

   
    /// <summary>
    /// Generate the type of order that needs to be created and assign sprite to that order
    /// </summary>
    /// <param name="t_soupNumber"> Range of soups able to be spawned on level</param>
    public void SetSoupFlavour(int t_soupNumber)
    {
        switch (t_soupNumber)
        {
            case 0:
                m_flavour = Flavour.BEETROOT;
                break;
            case 1:
                m_flavour = Flavour.MUSHROOM;
                break;
            case 2:
                m_flavour = Flavour.TOMATO;
                break;
            case 4:
                m_flavour = Flavour.PEA;
                break;
            case 5:
                m_flavour = Flavour.WATER;
                break;
            default:
                m_flavour = Flavour.WATER; // default to water
                break;
        }
    }

}
