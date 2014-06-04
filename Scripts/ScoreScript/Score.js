#pragma strict

static var score: int;

function Start () {
	
	DontDestroyOnLoad(this);
	score = 0;

}

function Update () {

}

function OnGUI()
{
	GUI.Label(Rect(40,20,100,20), "Score: " +score);
}