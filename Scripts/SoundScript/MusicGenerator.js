#pragma strict

var music: GameObject;

function Start () {
	
	var G: GameObject = GameObject.FindGameObjectWithTag("SoundController");
	if (!G)
	{
		Instantiate(music, Vector3.zero, Quaternion.identity);
	}

}

function Update () {

}