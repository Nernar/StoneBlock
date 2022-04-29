IMPORT('SoundAPI');


let questComplatedSound = new Sound();
questComplatedSound.setSource('levelup.ogg');

let getHeight = UI.getScreenHeight();

Callback.addCallback('CoreConfigured', function (config) {
	//alert("start load...");
});


let visitingPlayersId = [];
Saver.addSavesScope('visitingPlayersIdScope ', 
    function read(scope){
        visitingPlayersId = scope? scope.visitingPlayersId: false;
    },
    function save(){
        return {'visitingPlayersId': visitingPlayersId};
    }
);
/*
let GetPlayerId = function(ID){
	
	PlayersID = Network.getConnectedPlayers();

		for (let i in PlayersID) 
		if(ID==PlayersID[i]) return PlayersID[i];
};
*/

Callback.addCallback('ServerPlayerLoaded', function(player){
    for(let i in visitingPlayersId)
        if(player!=i){
           // Dimensions.transfer(player, StoneBlock.id);
            visitingPlayersId.push(player);
            }
});

IDRegistry.genItemID('lootChest');
Item.createItem('lootChest', 'Loot Chest', {
	name: 'lootchest', meta: 0
	}, 
	{
	stack: 1
});

IDRegistry.genItemID('questBook');
Item.createItem('questBook', 'QuestBook', {
	name: 'questBook', meta:0
	}, 
	{
		stack: 1
	});

	
	
	
