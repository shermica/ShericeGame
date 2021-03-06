﻿#pragma strict

var coin:Rigidbody;

function createCoin()
{
	var xposition:int;
	var yposition:int;
	
	//random x position
	xposition = Random.Range(8,11);
	
	//random y position
	yposition = Random.Range(-4,4);
	
	//make it relative to the position of the gameobject
	xposition = transform.position.x + xposition;
	
	Instantiate(coin,Vector3(xposition,yposition,0),Quaternion.identity);
}

function Start () {

	//wait for half a second, then repeat every second
	InvokeRepeating("createCoin",2.0,10.0);
}

function Update () {

}