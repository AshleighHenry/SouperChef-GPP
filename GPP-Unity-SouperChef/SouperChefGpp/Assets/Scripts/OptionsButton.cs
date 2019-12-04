using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class OptionsButton : MonoBehaviour
{
    public Button optionsButton;

    void Start()
    {
        Button btn = optionsButton.GetComponent<Button>();
        btn.onClick.AddListener(TaskOnClick);
    }

    void TaskOnClick()
    {

    }
}
