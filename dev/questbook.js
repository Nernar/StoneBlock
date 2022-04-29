let QuestBookFiller=[
    function Tree(container){
        if(container.isOpened){
            
        }
    },
    function SmallInfoWindow(container){
        
    },

    function InfoWindow(container){
        do{
            alert('upd');
        container.setSlot('chest', 54, 1, 0);
        container.setSlot('lootChest', ItemID.lootChest, 1, 0);
        }while(!container.isOpened());
    }
];


Callback.addCallback('LocalTick', function (){
    if(QuestBook.questInfo.container.isOpened()&&QuestBook.questInfo.container.getSlot('chest').id==0){
        //alert('gygy');
        QuestBook.questInfo.container.setSlot('chest', 54, 1, 0);
        QuestBook.questInfo.container.setSlot('lootChest', ItemID.lootChest, 1, 0);
        }
});
