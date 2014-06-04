#pragma strict

var timer: float = 11;

function Start () {
	
}

function Update () {

	timer -= Time.deltaTime;
	if(timer <=0)
	{
		timer = 0;
		Application.LoadLevel(3);
	}

}

function OnGUI()
{
	GUI.Box(new Rect(650,20,100,20), "Timer: " + timer.ToString("0"));
}