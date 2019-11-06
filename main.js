var Coins = 0;
var SaveTicks = 0;
var Farm = 0;
var Cup = 2;
var CPC = 1;
Load();
function CoinsClick(number){
    Coins = Coins + number;
    document.getElementById("Coins").innerHTML = Coins;
}


function buyFarm(){
    var FarmCost = Math.floor(10 * Math.pow(1.1,Farm));     //works out the cost of this Farm
    if(Coins >= FarmCost){                                   //checks that the player can afford the Farm
        Farm = Farm + 1;                                   //increases number of Farm
    	Coins = Coins - FarmCost;                          //removes the Coins spent
        document.getElementById('Farm').innerHTML = Farm;  //updates the number of Farm for the user
        document.getElementById('Coins').innerHTML = Coins;  //updates the number of Coins for the user
    }
    var nextFarmCost = Math.floor(10 * Math.pow(1.1,Farm));       //works out the cost of the next Farm
    document.getElementById('FarmCost').innerHTML = nextFarmCost;  //updates the Farm cost for the user
}

function buyCup(){
    var CupCost = Math.floor(Math.pow(10,Cup));     //works out the cost of this Farm
    if(Coins >= CupCost){                                   //checks that the player can afford the Farm
        Cup = Cup + 1;
        CPC = CPC * 3;                                   //increases number of Farm
    	Coins = Coins - CupCost;                          //removes the Coins spent
        document.getElementById('Cup').innerHTML = Cup;  //updates the number of Farm for the user
        document.getElementById('Coins').innerHTML = Coins;  //updates the number of Coins for the user
    }
    var nextCupCost = Math.floor(Math.pow(10,Cup));       //works out the cost of the next Farm
    document.getElementById('CupCost').innerHTML = nextCupCost;  //updates the Farm cost for the user
}

//save
function Save(){
  var save = {
    Coins: Coins,
    Farm: Farm,
    CPC: CPC,
    Cup: Cup
    };
    
  localStorage.setItem("save",JSON.stringify(save));
  
}


//load
function Load(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.Coins !== "undefined") Coins = savegame.Coins;
  document.getElementById("Coins").innerHTML = Coins;
  if (typeof savegame.Farm !== "undefined") Farm = savegame.Farm;
  document.getElementById("Farm").innerHTML = Farm;
  var nextFarmCost = Math.floor(10 * Math.pow(1.1,Farm));       //works out the cost of the next Farm
    document.getElementById('FarmCost').innerHTML = nextFarmCost;  //updates the Farm cost for the user
  if (typeof savegame.CPC !== "undefined") CPC = savegame.CPC;
  document.getElementById("CPU").innerHTML = CPU;
  if (typeof savegame.Cup !== "undefined") Cup = savegame.Cup;
  document.getElementById("Cup").innerHTML = Cup;
  
}

//delete player's save
function DeleteSave() {
  localStorage.removeItem("save");
  document.location.reload();        //reloads the page so it doesn't save over again.
}

//Exports The player's save
function ExportSave() {
  save();
  var SaveString = new localStorage.getItem("save");
  document.getElementById("SaveString").innerHTML = SaveString;
}


window.setInterval(function(){
	
	CoinsClick(Farm);
	SaveTicks = SaveTicks + 1;
	if (SaveTicks == 10) {
	  Save();
	  SaveTicks = 0;
	}
	
}, 1000);