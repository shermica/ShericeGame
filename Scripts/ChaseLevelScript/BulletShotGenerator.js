#pragma strict

//reference to bullet
var bulletToShoot:Rigidbody;

function Start () {

}

function Update () {
	
	if(Input.GetMouseButtonDown(0))
	{
		Instantiate(bulletToShoot,transform.position,Quaternion.identity);
	}

}