#pragma strict

function Start () {

}

function Update () {

}

function OnMouseEnter()
{
	renderer.material.color = Color.red;
	
}

function OnMouseExit()
{
	renderer.material.color = Color.white;
	
	
}

function OnMouseDown()
{
	audio.Play();
	Score.score = Score.score +200;
	
	Application.LoadLevel(12);
}
