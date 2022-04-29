let currentLoot=[];

function OpenLootChest(playerUid, item){
    Entity.setCarriedItem(item.id, item.count-1, 0);
    LootChest.open();
    SetLootToChest();
}

function GetRandomLoot(){
    getRandomIndex = Math.floor(Math.random()*itemRewards.length);
    //GetRandomIndex.pop();
    return itemRewards[getRandomIndex];
}

function SetRewardLevel(nameReward){
    LootChest.container.setText('rewardLvl', nameReward[nameReward.length-1]);
}

function SetLootToChest(){
  //  alert('set slot');
    let lootChestContent=LootChest.container.getGuiContent();
    currentLoot=GetRandomLoot();
    
    if(LootChest.isEnabled){
        MoveSlots(slotsPosition, currentLoot, lootChestContent);
        SetRewardLevel(currentLoot);
        for(let index in currentLoot)
            if(index!=currentLoot.length-1)
                LootChest.container.setSlot('lootSlot_' + index, currentLoot[index][0], currentLoot[index][1], currentLoot[index][2]);
    }
}

function MoveSlots(positions, countDrops, content){
  //  alert('move slits');
    if(countDrops.length>0)
    for(let index=0; index<5; index++)
    switch(countDrops.length-1){
        case 1:
            content.elements['lootSlot_'+index].x=positions[0][index];
            break;
            case 2:
                content.elements['lootSlot_'+index].x=positions[1][index];
                break;
                case 3:
                    content.elements['lootSlot_'+index].x=positions[2][index];
                    break;
                    case 4:
                        content.elements['lootSlot_'+index].x=positions[3][index];
                        break;
                        case 5:
                            content.elements['lootSlot_'+index].x=positions[4][index];
    }
}

function AddLootToInvebtory(){
  //  alert('add items');
    if(currentLoot.length>=1){
    for(let loots in currentLoot) 
    if(loots!=currentLoot.length-1)
        Player.addItemToInventory(currentLoot[loots][0], currentLoot[loots][1], currentLoot[loots][2]);
    currentLoot = [];
    }
}

Callback.addCallback('ItemUseLocalServer', function(coords, item, block, isReal, player){
     if(item.id==ItemID.lootChest)
         OpenLootChest(player, item);
});
Callback.addCallback('ItemUseNoTarget', function(item, player){
     if(item.id==ItemID.lootChest)
          OpenLootChest(player, item);
});
