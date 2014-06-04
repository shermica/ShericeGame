#pragma strict



//create variable for lives
static var health:int;

function Start () {

	health = 10;
	

}

function OnGUI()
{
	
	//label used to show lives
	GUI.Label(Rect(150,20,100,50),"Police Health: "+health);

}

function OnTriggerEnter(other:Collider)
{

	//police car got hit by the red laser
	if(other.gameObject.tag=="Killer")
	{
		//decrease health by 1
		health--;
		
		
		//all health used up, police car dies
		if(health<=0)
		{
			//destroy the police car
			Destroy(this.gameObject);
			
			Application.LoadLevel(12);
		
		}
		
			//police car got hit by a health pack
		
	
	}

	
	if(other.gameObject.tag=="Health")
		{
			//increase lives by 1
			PoliceCarController.health++;
			Destroy(other.gameObject);
			
		}
	
	if(other.gameObject.tag=="Coin")
	{
		Score.score = Score.score+30;
		Destroy(other.gameObject);
	}

}

function Update () {

	
	//translate the position of the mouse to the position
	//of the police car
	transform.position.y = 
	Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
 	transform.position.y = Mathf.Clamp(transform.position.y, -3.5, 5.5);
 
 
}
