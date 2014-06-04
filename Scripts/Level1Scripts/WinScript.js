#pragma strict

function Start () {

}

function Update () {
	
	if(GameObject.FindGameObjectWithTag("Bullet").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("FingerPrint").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Wallet").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Knife").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("HandBag").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Glove").renderer.enabled == false)
	{
		Application.LoadLevel(4);
	}
	

}