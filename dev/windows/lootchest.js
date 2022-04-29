let LootChest = {
	isEnabled: false,
	container: new UI.Container(),
	window: new UI.Window({
		location:{
			x:0,
			y:0,
			width: 1000,
			height: getHeight
		},
		drawing: [
		{type: 'background', color: android.graphics.Color.argb(160, 0, 0, 0)}
		], 
		elements:{
			'closeButton': {type: 'button', x:0, y:0, bitmap: 'invisibleTexture', scale:200, clicker:{
				onClick: function(){ 
					LootChest.close();
                    }
			}},
			'chestTexture': {type: 'image', x:500-(126*3)/2, y:getHeight/2.5, bitmap: 'openLootchest', scale:3},
			'lootSlot_0': {type: 'slot', x:1000, y:getHeight/5, size:80, visual:true, bitmap: 'lootSlot'},
			'lootSlot_1': {type: 'slot', x:1000, y:getHeight/5, size:80, visual:true, bitmap: 'lootSlot'},
			'lootSlot_2': {type: 'slot', x:1000, y:getHeight/5, size:80, visual:true, bitmap: 'lootSlot'},
            'lootSlot_3': {type: 'slot', x:1000, y:getHeight/5, size:80, visual:true, bitmap: 'lootSlot'},
            'lootSlot_4': {type: 'slot', x:1000, y:getHeight/5, size:80, visual:true, bitmap: 'lootSlot'},
            'rewardLvl': {type: 'text',  x:500, y:getHeight/1.1, width: 200, height: 16, text: '', font:{color: android.graphics.Color.rgb(255, 255, 255), shadow: 0, size: 20, alignment: 1, underline: true}}
		}
	}),
    clearSlots: function(){
        let chestContainer = this.window.container;
        if(chestContainer.isOpened())
            for(let slotIndex=0; slotIndex<=2; slotIndex++) 
                chestContainer.setSlot('lootSlot_'+ slotIndex, 0, 0, 0);
    },
	open: function(){
		if(!this.isEnabled){
			this.container.openAs(this.window);
			this.isEnabled = true;
			}
	},
	close: function(){
		if(this.isEnabled){
            this.clearSlots();
			this.container.close();
			this.isEnabled = false;
            AddLootToInvebtory();
			}
	},
};

LootChest.window.setAsGameOverlay(true);
LootChest.window.setTouchable(true);

const slotsPosition =[//+.5   
    [460, 1000, 1000, 1000, 1000],//80
    [420, 540, 1000, 1000, 1000],//240
    [360, 480, 600, 1000, 1000],//360     +40 for 2
    [300, 420, 540, 660, 1000],//480
    [220, 340, 460, 580, 700]//600
];


