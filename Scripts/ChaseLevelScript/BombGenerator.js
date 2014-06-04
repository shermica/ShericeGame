#pragma strict

//reference to bullet
var bombToShoot:Rigidbody;

function Start () {

}

function Update () {
	
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(bombToShoot,transform.position,Quaternion.identity);
	}

}