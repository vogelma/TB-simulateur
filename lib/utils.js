const fs = require('fs')
module.exports = {
    
    inventaire: function () {

        const directory = fs.opendirSync('public')
        let file
        let inventaire
        while ((file = directory.readSync()) !== null) {
        console.log(file.name)
        inventaire += file.name
        }
        directory.closeSync()
    }
} 