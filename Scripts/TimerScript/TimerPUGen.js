#pragma strict

var timer:Rigidbody;

function createTimer()
{
	var xposition:int;
	var yposition:int;
	
	//random x position
	xposition = Random.Range(-6,5);
	
	//random y position
	yposition = Random.Range(-3,4);
	
	//make it relative to the position of the gameObject
	xposition = transform.position.x + xposition;
	Instantiate(timer, Vector3(xposition,yposition,0), Quaternion.identity);
}

function Start () {
	
	//wait for half a second, then repeat every second
	InvokeRepeating("createTimer",2.0,5.0);
	
}

function Update () {

}