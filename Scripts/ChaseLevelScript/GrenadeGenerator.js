#pragma strict

//reference to bullet
var GrenadeToShoot:Rigidbody;

function Start () {

}

function Update () {
	
	if(Input.GetKeyDown(KeyCode.LeftAlt))
	{
		Instantiate(GrenadeToShoot,transform.position,Quaternion.identity);
	}

}