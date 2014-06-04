#pragma strict

function Start () {

}

function Update () {

}

function OnMouseDown()
{
	if(Application.loadedLevel == 2)
	{
		//get the timer
		Camera.main.GetComponent(TimerLv1).timer +=5;
		Destroy(this.gameObject);
	}
	
	if(Application.loadedLevel == 5)
	{
		//get the timer
		Camera.main.GetComponent(TimerLv2).timer +=5;
		Destroy(this.gameObject);
	}
	
	if(Application.loadedLevel == 7)
	{
		//get the timer
		Camera.main.GetComponent(TimerLv3).timer +=5;
		Destroy(this.gameObject);
	}
	
}