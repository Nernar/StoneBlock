
				//Linked Destruction

				
const getLDconfig = new Config(__modpack__.getRootDirectoryPath() + '/mods/Linked-Destruction/config.json');

getLDconfig.checkAndRestore({
    'withoutBlock': 1
});
getLDconfig.save();
