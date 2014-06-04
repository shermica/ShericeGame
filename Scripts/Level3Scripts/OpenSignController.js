#pragma strict

function Start () {

}

function Update () {

}

function OnMouseDown()
{
	var b:GameObject;
	b = GameObject.FindGameObjectWithTag("OpenSign");
	b.renderer.enabled = false;
	this.renderer.enabled = false;
	
	//play audio
	audio.Play();
	
	//add score
	Score.score = Score.score +10;
	
}