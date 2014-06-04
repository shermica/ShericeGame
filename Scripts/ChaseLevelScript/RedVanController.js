#pragma strict
var topMargin:int;
var bottomMargin:int;

var moveUp:boolean;
var moveDown:boolean;

var enemyBullet:Rigidbody;

static var ehealth:int;

function shootEnemyBullet()
{
	//shoot the laser
	Instantiate(enemyBullet,transform.position,transform.rotation);
}



function Start () {

	
	ehealth = 150;
	//red van will shoot half a second after
	InvokeRepeating("shootEnemyBullet",0.5,0.2);
	topMargin = 4;
	bottomMargin = -4;
	
	//the van start by moving UP
	moveUp = true;
	moveDown = false;
}

function Update () {

	
	
	if (moveUp == true)
	{
		//move the van UP
		transform.Translate(Vector3.up * 5 * Time.deltaTime);
		if (transform.position.y >=topMargin)
		{
			moveUp = false;
			moveDown = true;
		}
	}
	if(moveDown == true)
	{
		transform.Translate(Vector3.down * 5 * Time.deltaTime);
		if (transform.position.y <=bottomMargin)
		{
			moveUp = true;
			moveDown = false;
		}
		
	}
	
}



	
function OnGUI()
{
	
	//label used to show lives
	GUI.Label(Rect(550,20,100,50),"Enemy Health: "+ehealth);

}
