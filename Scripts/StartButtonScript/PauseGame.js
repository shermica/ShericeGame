#pragma strict

var paused: boolean = false;

function Start () {

}

function Update () {

	if(Input.GetButtonUp("Jump"))
	{
		if(!paused)
		{
			Time.timeScale = 0;
			paused = true;
		}
		else{
			paused = false;
			Time.timeScale = 1;
		}
	}

}
