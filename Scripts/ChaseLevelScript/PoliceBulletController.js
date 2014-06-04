﻿#pragma strict

//a number which sets the speed of the bullet
var speedOfBullet:int;	

function Start () {
	
}

function Update () {

	
	//by default the bullet will not move
	transform.Translate(Vector3.right * speedOfBullet * Time.deltaTime);

}

function OnTriggerEnter(object:Collider)
{
	//if the object I hit is a van, destroy the laser, destroy the object
	//and increase the score in score
	if(object.gameObject.tag == "KillerVan")
	{
		//increase the score
		Score.score++;
		
		RedVanController.ehealth--;
		//destroy the laser
		//Destroy(this.gameObject);
		
		if(RedVanController.ehealth<=0)
		{
			//destroy the red van 
			Destroy(this.gameObject);
			
			Application.LoadLevel(14);
		
		}
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}
