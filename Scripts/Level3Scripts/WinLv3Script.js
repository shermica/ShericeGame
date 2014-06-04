#pragma strict

function Start () {

}

function Update () {
	
	if(GameObject.FindGameObjectWithTag("7").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("BirdSilhouette").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Cigar").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Dice").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("OpenSign").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("FleurDeLis").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Pill").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Spade").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Tie").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("WomanSign").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("DangerSign").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("HourGlass").renderer.enabled == false)
	{
		Application.LoadLevel(8);
	}
	

}