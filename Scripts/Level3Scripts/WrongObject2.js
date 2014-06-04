#pragma strict

function Start () {

}

function Update () {

}

function OnMouseDown()
{
	audio.Play();
	Score.score = Score.score -15;
}