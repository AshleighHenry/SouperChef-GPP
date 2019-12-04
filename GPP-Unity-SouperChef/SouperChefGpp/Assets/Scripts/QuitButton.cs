using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class QuitButton : MonoBehaviour
{
    public Button quitButton;

    void Start()
    {
        Button btn = quitButton.GetComponent<Button>();
        btn.onClick.AddListener(TaskOnClick);
    }

    void TaskOnClick()
    {

    }
}
