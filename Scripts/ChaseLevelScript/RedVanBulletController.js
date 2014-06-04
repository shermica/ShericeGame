#pragma strict

var speedOfRVBullet:int;


function OnBecameInvisible()
{

	Destroy(this.gameObject);

}

function Start () {

}

function Update () {

	transform.Translate(Vector3.left * speedOfRVBullet * Time.deltaTime);

}