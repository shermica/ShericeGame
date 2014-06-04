#pragma strict

var health:Rigidbody;

function createHealth()
{
	var xposition:int;
	var yposition:int;
	
	//random x position
	xposition = Random.Range(8,11);
	
	//random y position
	yposition = Random.Range(-4,4);
	
	//make it relative to the position of the gameobject
	xposition = transform.position.x + xposition;
	
	Instantiate(health,Vector3(xposition,yposition,0),Quaternion.identity);
}

function Start () {

	//wait for half a second, then repeat every second
	InvokeRepeating("createHealth",2.0,5.0);
}

function Update () {

}