const getUiHeight = UI.getScreenHeight();
const space = getUiHeight/30;
const sideIndent = space*3;

/*
const questTreeX=sideIndent+265+space*2, questTreeY=sideIndent,
      questTreeWidth=735-sideIndent*2 - space*4, questTreeHeight=getUiHeight - space*12;
const questPosition = questTreeWidth/13;*/
      
const whiteColor = android.graphics.Color.rgb(255, 255, 255);

const menuButtonSize = 2.56;
const defaultButtonWidth = 220;
const buttunDefaultHeight = 51.16;

let srollPosition = 0;

const windowParametres ={
    location : {
        x: 0,//sideIndent, 
        y: 0,//space,
        width: 1000,//-space*6,
        height: getUiHeight//-space
    },
    drawing:[
        [
         {type: 'background', color: 0},
         {type: 'frame', x: sideIndent, y: space, width: 1000-sideIndent*2, height: getUiHeight-space*2, bitmap: 'questBook.background', sides: true,  scale: 1}
         ],
        [
         {type: 'background', color: 0},
         {type: 'frame', x: sideIndent, y: space, width: 1000-sideIndent*2, height: getUiHeight-space*2, bitmap: 'questBook.background', sides: true,  scale: 1},
         
         {type: 'frame', x: sideIndent+265+space, y: space*2, width: 735-sideIndent*2 - space*2, height: getUiHeight - space*10, bitmap: 'questBook.treeBackground', sides: false,  scale: 1},
      
         {type: 'line', x1: sideIndent+space, y1: space*2, x2: sideIndent+265, y2: space*2, width: 1, color: whiteColor},
         {type: 'line', x1: sideIndent+space, y1: getUiHeight-space - 30.3, x2: sideIndent+265, y2: getUiHeight-space - 30.3, width: 1, color: whiteColor},
         
         {type: 'line', x1: sideIndent+265+space, y1: getUiHeight-space - 30.3, x2: 1000-sideIndent-space, y2: getUiHeight-space - 30.3, width: 1, color: whiteColor}
         ],
        [
         {type: 'background', color: 0},
         {type: 'frame', x: sideIndent, y: space, width: 1000-sideIndent*2, height: getUiHeight-space*2, bitmap: 'questBook.background', sides: true,  scale: 1},
         
       //  {type: 'frame', x: 1000-sideIndent*2-space, y: sideIndent*3+1, width: space*2, height: 230, bitmap: 'questBook.scroll_fone', sides: true,  scale: 1},
         {type: 'scroll', x: 1000-sideIndent*2-space, y: sideIndent*3+1, width: space*2,/* length: ,*/ min: 0, max: getUiHeight, isInt: true, value: 0, bitmapBg:'scroll_fone', bitmapHandle:'scroll_fone'},
         
         {type: 'line', x1: 500, y1: sideIndent*2, x2: 500, y2: getUiHeight-space - 30.3-space, width: 1, color: whiteColor},
         
         {type: 'line', x1: 500+space, y1: sideIndent*3, x2: 1000-sideIndent*2-space, y2: sideIndent*3, width: 1, color: whiteColor},
         {type: 'line', x1: 500+space, y1:  getUiHeight-sideIndent*2, x2: 1000-sideIndent*2-space, y2: getUiHeight-sideIndent*2, width: 1, color: whiteColor},
          
         {type: 'line', x1: sideIndent*4, y1: getUiHeight/2, x2: 500-space, y2: getUiHeight/2, width: 1, color: whiteColor},
         {type: 'line', x1: sideIndent*4, y1: getUiHeight-sideIndent*2, x2: 500-space, y2: getUiHeight-sideIndent*2, width: 1, color: whiteColor}
        ]],
        
    elements: function(_this, isOneButton){//303:   1.515
        let elem = [{
            'exit': {type: 'button', x: sideIndent+303, y: getUiHeight-space - 30.3, bitmap: 'questBook.long_button', bitmap2: 'questBook.long_button_press', scale: 1.515, 
            clicker:{
                onClick: function(){
                        eval(_this).questList.container.close();
                        eval(_this).questTree.container.close();
                        }
                    }
                }
         },
         {
            'exit': {type: 'button', x: sideIndent+303, y: getUiHeight-space - 30.3, bitmap: 'questBook.long_button', bitmap2: 'questBook.long_button_press', scale: 1.515, 
             clicker:{
                onClick: function(){
                        eval(_this).container.close();
                        QuestBook.questInfoItems.container.close();
                        }
                    }
                },
             'chest': { type: 'slot', x: sideIndent*2, y: getUiHeight/2+sideIndent, size: 80, visual: true, bitmap: 'invisibleTexture', needClean: false, isTransparentBackground: true },
             'lootChest': { type: 'slot', x: sideIndent*4, y: getUiHeight/2+1, size: 40, visual: true, bitmap: 'classic_slot', needClean: false },
             
             'claim': {type: 'button', x: 90-space, y: getUiHeight-sideIndent*2+1, bitmap: 'questBook.long_button', bitmap2: 'questBook.long_button_press', scale: 2.05, 
                    clicker:{
                        onClick: function(){
                            
                            }
                          }
                        },
             'detect': {type: 'button', x: 500+space, y: getUiHeight-sideIndent*2+1, bitmap: 'questBook.long_button', bitmap2: 'questBook.long_button_press', scale: 2.05, 
                    clicker:{
                        onClick: function(){
                            
                            }
                          }
                        }
         }];
         
         return elem[isOneButton];
         }
};
alert(getUiHeight-sideIndent*2 - sideIndent*3);

function SetOverlayWindow(arrayOfWindows){
    for(let _window in arrayOfWindows)
    if(_window.window){
        _window.window.setAsGameOverlay(true);
        _window.window.setTouchable(true);
        }
};


let QuestBook ={
    questInfoItems:{
        container: new UI.Container(),
           window: new UI.Window({
               location: {
                   x: 500+space, y: sideIndent*3+1,
                   width: 407, height: 230,
                   scrollY: getUiHeight*2
               },
               drawing: [
                     {type: 'line', x1: 500, y1: getUiHeight*2, x2: 500, y2: getUiHeight-space - 30.3-space, width: 3, color: android.graphics.Color.rgb(0, 255, 0)},
                     {type: 'background', color: 0},
                     {type: 'line', x1: 500+space, y1: sideIndent*3, x2: 1000-sideIndent*2-space, y2: 0, width: 3, color: whiteColor},
                     {type: 'line', x1: 500+space, y1:  getUiHeight*1.5-sideIndent*2, x2: 1000-sideIndent*2-space, y2: getUiHeight-sideIndent*2, width: 3, color: android.graphics.Color.rgb(0, 0, 255)}
               ],
               elements: {} 
           })
    },
    questInfo:{
        container: new UI.Container(),
           window: new UI.Window({
               location: windowParametres.location,
               drawing: windowParametres.drawing[2],
               elements: windowParametres.elements('QuestBook.questInfo', 1)
           })
    },
    
    questMenu: {
        questList:{
            container: new UI.Container(),
            window: new UI.Window({
                location: windowParametres.location,
                drawing: windowParametres.drawing[1],
                elements: windowParametres.elements('QuestBook.questMenu', 0)
            }),
           }, 
        questTree: {
            container: new UI.Container(),
            window: new UI.Window({
                location: {
                    x: sideIndent+265+space*2, y: sideIndent, 
                    width: 735-sideIndent*2 - space*4, height: getUiHeight - space*12
                },
                drawing: [
                    {type: 'background', color: whiteColor},
                ],
                elements: {}
           })
    }
    },
    generalMenu: {
      container: new UI.Container(),
       window: new UI.Window({
           location: windowParametres.location,
           drawing: windowParametres.drawing[0],
           elements: {//960.445
                 'logo': { type: 'image', x: space*4, y: space*2, bitmap: 'stoneBlock_logo', scale: .916 },
                 'exit': {type: 'button', x: space*4, y: getUiHeight -buttunDefaultHeight- space*2, bitmap: 'questBook.button', bitmap2: 'questBook.button_press', scale: menuButtonSize, 
                    clicker:{
                        onClick: function(){
                            QuestBook.generalMenu.container.close();
                            }
                          }
                        },
                 'quests': {type: 'button', x: space*4+defaultButtonWidth, y: getUiHeight -buttunDefaultHeight-space*2, bitmap: 'questBook.button', bitmap2: 'questBook.button_press', scale: menuButtonSize, 
                     clicker: {
                         onClick: function(){
                            QuestBook.questMenu.questList.container.openAs(QuestBook.questMenu.questList.window);
                            QuestBook.questMenu.questTree.container.openAs(QuestBook.questMenu.questTree.window);
                             }
                           }
                         },
                 'party': {type: 'button', x: space*4+defaultButtonWidth*2, y: getUiHeight -buttunDefaultHeight-space*2, bitmap: 'questBook.button', bitmap2: 'questBook.button_press', scale: menuButtonSize, 
                    clicker:{
                        onClick: function(){ 
                          QuestBook.questInfo.container.openAs(QuestBook.questInfo.window);
                          QuestBook.questInfoItems.container.openAs(QuestBook.questInfoItems.window);
                          
                          QuestBookFiller.InfoWindow(QuestBook.questInfo.container);
                        }
                      }
                    },
                  'theme': {type: 'button', x: space*4+defaultButtonWidth*3, y: getUiHeight -buttunDefaultHeight-space*2, bitmap: 'questBook.button', bitmap2: 'questBook.button_press', scale: menuButtonSize, 
                    clicker:{
                        onClick: function(){
                          
                        }
                      }
                    }
           }
           })
    }
}; 


SetOverlayWindow(QuestBook);


Callback.addCallback('ItemUseLocalServer', function(coords, item, block, isReal, player){
        if(item.id==ItemID.questBook)
           QuestBook.generalMenu.container.openAs(QuestBook.generalMenu.window);   
    
    });
    Callback.addCallback('ItemUseNoTarget', function(item, player){
        if(item.id==ItemID.questBook)
           QuestBook.generalMenu.container.openAs(QuestBook.generalMenu.window);   
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


/*
let quests_windows = new UI.WindowGroup();
let interval = getUiHeight - 10;
 
let QL ={
    container: new UI.Container(),
    window: new UI.Window({
        location: {
            x: 300,
            y: 20,
            width: 700 - space,
            height: getUiHeight - space*10
        },
        drawing:[
            {type: 'background', color: 0},
        ],
        elements:{}
    }),
};
    
QL.window.setAsGameOverlay(true);
QL.window.setTouchable(true);

let RIC = new UI.Container();
let FQC = new UI.Container();
let RewardInfoWindow = new UI.Window({
        location: { 
            x: 500+space, 
            y: space*8,
            width: 500 - space*2.5,
            height: getUiHeight/2 + sideIndent
        },
        drawing:[
            {type: 'background', color: android.graphics.Color.rgb(55, 20, 5)},
            {type: 'line', x1: 0, y1: 2, x2: 1000, y2: 2, width: 2, color: whiteColor},
            {type: 'line', x1: 0, y1: getUiHeight-2, x2: 1000, y2: getUiHeight- 2, width: 2, color: whiteColor},
            ],
        elements: {
            'scroll': {type: 'scroll', x: 1000, y: 0, length: getUiHeight, min: 0, max: getUiHeight, isInt: true, value: 0}
        }
});

let FullQuestWindow = new UI.Window({
        location: { 
            x: space, 
            y: space,
            width: 1000 - space*2,
            height: getUiHeight - space*2
        },
        drawing:[
            {type: 'background', color: 0},
            {type: 'frame', x: 0, y: 0, width: 1000, height: getUiHeight - space, bitmap: 'default.general_fon', sides: true,  scale: .8},
            //{type: 'line', x1: 20, y1: 20, x2: 280, y2: 20, width: 1, color: whiteColor},
            {type: 'line', x1: 500, y1: sideIndent, x2: 499, y2: getUiHeight - sideIndent, width: 1, color: whiteColor},
            {type: 'line', x1: space*4, y1: getUiHeight/3, x2: 500 - space, y2: getUiHeight/3, width: 1, color: whiteColor},
            ],
        elements: {
            'exit': {type: 'button', x: 375, y: getUiHeight - space- 26, bitmap: 'default.button', bitmap2: 'default.button_press', scale: 1.3, clicker:{
                onClick: function(){
                    RIC.close();
                    FQC.close();
                    }}},
            'QuestName': {type: 'text', x: 496, y: space, z: 100, width: 128, height: 16, text: '', font: { color: whiteColor, shadow: 0, size: 21, alignment: 1 }},
            'Description': {type: 'text', x: space, y: space*4, z: 110, width: 128, height: 16, text: '', font: { color: whiteColor, shadow: 0, size: 21, alignment: 0 }},
            'RT': {type: 'text', x: 766, y: space*4, z: 100, width: 128, height: 16, text: 'Retrieval Task', font: { color: whiteColor, shadow: 0, size: 21, alignment: 1 }},
            'Consume': {type: 'text', x: 500+space, y: space*6, z: 100, width: 128, height: 16, text: '', font: { color: whiteColor, shadow: 0, size: 21, alignment: 0 }},
            'ItemReward': {type: 'text', x: 186, y: getUiHeight/2 - space*2, z: 100, width: 128, height: 16, text: 'Item Reward', font: { color: whiteColor, shadow: 0, size: 21, alignment: 1 }},
            'LootChests': {type: 'text', x: space*7, y: getUiHeight/2 + space, z: 100, width: 128, height: 16, text: '1 Loot Chest', font: { color: whiteColor, shadow: 0, size: 21, alignment: 0 }},
            'Exit': {type: 'text', x: 500, y: getUiHeight - space*2 - 15.5, z: 100, width: 260, height: 26, text: 'Back', font: { color: whiteColor, shadow: 0, size: 19.5, alignment: 1}},
        }
    });
    
RewardInfoWindow.setAsGameOverlay(true);
RewardInfoWindow.setTouchable(true);

FullQuestWindow.setAsGameOverlay(true);
FullQuestWindow.setTouchable(true);

let fullQuest = function(questObject){
    let countQuest = questObject.items.length;
    let qcontent = RewardInfoWindow.getContent();
    
FQC.openAs(FullQuestWindow);
RIC.openAs(RewardInfoWindow);

Callback.addCallback('tick', function (){
    if(FQC.isOpened && RIC.isOpened){
        FQC.setText('QuestName', questObject.name);
        FQC.setText('Decription', questObject.describe);
        FQC.setText('Consume', 'Consume: ' + questObject.consume);
        for(let j = 0; j <= countQuest; j++)
        for(let k in questObject.items){
            RIC.setSlot(questObject.name+j, questObject.items[k][0], questObject.items[k][1], questObject.items[k][2]);
            RIC.setText('Text'+j, Item.getName(questObject.items[k][0], questObject.items[k][2]));
        qcontent.elements[questObject.name+j] = {
            type: 'slot',
            x: 0,
            y: 150*j,
            size: 150,
            visual: true,
            bitmap: 'default.slot',
            needClean: false,
            isTransparentBackground: false,
        };
        qcontent.elements['Text'+j] = {
            type: 'text',
            x: space*9,
            y: 150*j + 75,
            z: 100,
            width: 128,
            height: 16,
            text: '',
            font: { color: whiteColor,
            shadow: 0,
            size: 40,
            alignment: 0 }
        };
        qcontent.drawing = [{
            type: 'line',
            x1: 0, y1: 150*j,
            x2: 1000, y2: 150*j,
            width: 2, 
            color: whiteColor
        }];
        }
    }
});

};



let QuestPage = function (){
    
};


QuestPage.prototype.getObject = function(object){
let content = QL.window.getContent();
for(let i in object){
    //alert(object[i].x + '  ' + object[i].y);
copyObjectToContent(content, object, i);
}
};

let slotIndic = 'default.quest_slot';
let copyObjectToContent = function(content, object, i){
let item = object[i];
//alert(item.x + '  ' + item.y);
//-67.﻿2
Callback.addCallback('tick', function (){
if(QL.window.isOpened){
    for(let j in item.items)
        QL.container.setSlot(item.name, item.items[j][0], 1, item.items[j][2]);
    for(let k in item.lines){
        if(item.consume=='No'){
            slotIndic = 'default.quest_slot';
            content.drawing.push({type: 'line', x1: (67*item.lines[k][0]) + 24, y1: (67*item.lines[k][1])+ 24, x2: (67*item.lines[k][2])+ 24, y2: (67*item.lines[k][3])+ 24, width: 3.5, color: android.graphics.Color.rgb(255, 4, 4)});
            }
        else {
            slotIndic = 'default.quest_slot_comleted';
            content.drawing.push({type: 'line', x1: (67*item.lines[k][0]) + 24, y1: (67*item.lines[k][1])+ 24, x2: (67*item.lines[k][2])+ 24, y2: (67*item.lines[k][3])+ 24, width: 3.5, color: android.graphics.Color.rgb(4, 255, 4)});
            }
        }
        content.elements[item.name] = {
            type: 'slot',
            x: 67*item.x,
            y: 67*item.y,
            size: 48,
            visual: true,
            bitmap: slotIndic,
            needClean: false,
            isTransparentBackground: false,
            clicker:{
                onClick: function(){
                    fullQuest(item);
            }}
        };
    }
});
};



let QuestListWindow = new UI.Window({
        location: { 
            x: space, 
            y: space,
            width: 1000 - space*2,
            height: getUiHeight - space*2
        },
        drawing:[
            {type: 'background', color: 0},
            {type: 'frame', x: 0, y: 0, width: 1000, height: getUiHeight - space, bitmap: 'default.general_fon', sides: true,  scale: .8},
            {type: 'frame', x: 300, y: 20, width: 700 - space, height: getUiHeight - space*10, bitmap: 'default.quest_fon', sides: false,  scale: 1},
            {type: 'line', x1: 20, y1: 20, x2: 280, y2: 20, width: 1, color: whiteColor},
            {type: 'line', x1: 20, y1: getUiHeight - space- 25, x2: 280, y2: getUiHeight - space- 25, width: 1, color: whiteColor},
            {type: 'line', x1: 300, y1: getUiHeight - space- 25, x2: 1000 - space, y2: getUiHeight - space- 25, width: 1, color: whiteColor},
            ],
        elements: {
            'exit': {type: 'button', x: 375, y: getUiHeight - space- 26, bitmap: 'default.button', bitmap2: 'default.button_press', scale: 1.3, clicker:{
                onClick: function(){
                    QuestListWindow.close();
                    QL.container.close();
                    }}},
            'SB': {type: 'button', x: 20, y: 21, bitmap: 'default.button', bitmap2: 'default.button_press', scale: 1.3, clicker: {
                 onClick: function(){
                     QL.container.openAs(QL.window);
                 }}},
            'PG': {type: 'button', x: 20, y: 47, bitmap: 'default.button', bitmap2: 'default.button_press', scale: 1.3, clicker: {
                 onClick: function(){ 
                    QL.window.close();
                 }}},
            'MA': {type: 'button', x: 20, y: 73, bitmap: 'default.button', bitmap2: 'default.button_press', scale: 1.3, clicker: {
                 onClick: function(){
                 }}},
            'quest4': {type: 'button', x: 20, y: 98, bitmap: 'default.button', bitmap2: 'default.button_press', scale: 1.3, clicker: {
                 onClick: function(){ 
                 }}},
            'quest5': {type: 'button', x: 20, y: 124, bitmap: 'default.button', bitmap2: 'default.button_press', scale: 1.3, clicker: {
                 onClick: function(){
                 }}},
            'quest6': {type: 'button', x: 20, y: 150, bitmap: 'default.button', bitmap2: 'default.button_press', scale: 1.3, clicker: {
                 onClick: function(){
                 }}},
            'Quest1': {type: 'text', x: 151, y: 13.5, z: 100, width: 260, height: 26, text: 'Start of StoneBlock', font: { color: whiteColor, shadow: 0, size: 19.5, alignment: 1 }},
            'Quest2': {type: 'text', x: 151, y: 38.5,  z: 100, width: 260, height: 26, text: 'Power Generation', font: { color: whiteColor, shadow: 0, size: 19.5, alignment: 1 }},
            'Quest3': {type: 'text', x: 151, y: 63.5, z: 100, width: 260, height: 26, text: 'Mystical Agricultural', font: { color: whiteColor, shadow: 0, size: 19.5, alignment: 1 }},
            'Quest4': {type: 'text', x: 151, y: 88.5, z: 100, width: 260, height: 26, text: 'Storage', font: { color: whiteColor, shadow: 0, size: 19.5, alignment: 1 }},
            'Quest5': {type: 'text', x: 151, y: 117, z: 100, width: 260, height: 26, text: 'Draconic Evolution', font: { color: whiteColor, shadow: 0, size: 19.5, alignment: 1 }},
            'Quest6': {type: 'text', x: 151, y: 140, z: 100, width: 260, height: 26, text: 'ProjectE', font: { color: whiteColor, shadow: 0, size: 19.5, alignment: 1 }},
            'Exit': {type: 'text', x: 500, y: getUiHeight - space*2 - 15.5, z: 100, width: 260, height: 26, text: 'Back', font: { color: whiteColor, shadow: 0, size: 19.5, alignment: 1}},
        }
    });

let QuestMenuWindow = new UI.Window({
        location: {
            x: space,
            y: space,
            width: 1000 - space*2,
            height: getUiHeight - space*2
        },
        drawing:[
            {type: 'background', color: 0},
            {type: 'frame', x: 0, y: 0, width: 1000, height: getUiHeight - space, bitmap: 'questBook.background', sides: true,  scale: .8},
        ],
        elements:{
             'logo': { type: 'image', x: 19, y: 19, bitmap: 'sb_logo', scale: 1 },
             'exit': {type: 'closeButton', x: 20 - 1.7, y: getUiHeight - space*5, global: 1, bitmap: 'default.button_menu', bitmap2: 'default.button_menu_press', scale: 2.8},
             'quests': {type: 'button', x: 260 - .8, y: getUiHeight - space*5, bitmap: 'default.button_menu', bitmap2: 'default.button_menu_press', scale: 2.8, clicker: {
                 onClick: function(){ 
                    QuestListWindow.open();
                 }}},
             'party': {type: 'button', x: 500 + .8, y: getUiHeight - space*5, bitmap: 'default.button_menu', bitmap2: 'default.button_menu_press', scale: 2.8, clicker: {}},
             'theme': {type: 'button', x: 740 + 1.7, y: getUiHeight - space*5, bitmap: 'default.button_menu', bitmap2: 'default.button_menu_press', scale: 2.8/*, clicker: },*/
      /*       
             'Exit': {type: 'text', x: 18.3 + 120.4, y: getUiHeight - space*5 + 7, z: 100, width: 240.8, height: 56, text: 'Exit', font: { color: whiteColor, shadow: 0, size: 18, alignment: 1 }},
             'Quests': {type: 'text', x: 259.2 + 120.4, y: getUiHeight - space*5 + 7, z: 100, width: 240.8, height: 56, text: 'Quests', font: { color: whiteColor, shadow: 0, size: 18, alignment: 1 }},
             'Party': {type: 'text', x: 500.8 + 120.4, y: getUiHeight - space*5 + 7, z: 100, width: 240.8, height: 56, text: 'Party', font: { color: whiteColor, shadow: 0, size: 18, alignment: 1 }},
             'Theme': {type: 'text', x: 741.7 + 120.4, y: getUiHeight - space*5 + 7, z: 100, width: 240.8, height: 56, text: 'Theme', font: { color: whiteColor, shadow: 0, size: 18, alignment: 1 }},
        }
    });

QuestMenuWindow.setAsGameOverlay(true);
QuestListWindow.setAsGameOverlay(true);

QuestMenuWindow.setTouchable(true);
QuestListWindow.setTouchable(true);*/
