#pragma strict

function Start () {

}

function Update () {
	
	if(GameObject.FindGameObjectWithTag("Button").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Typewriter").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Necklace").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Flowers").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Cushion").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Cigarette").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("FootPrint").renderer.enabled == false &&
	GameObject.FindGameObjectWithTag("Lantern").renderer.enabled == false)
	{
		Application.LoadLevel(6);
	}
	

}