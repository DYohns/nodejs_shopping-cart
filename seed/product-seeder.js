/**
 * Created by DYohns on 2016/9/22.
 */
var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Gothic is a single-player action role-playing video game for Windows developed by the German company Piranha Bytes.',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/250px-WoW_Box_Art1.jpg',
        title: 'World of Warcraft Video Game',
        description: 'World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment.',
        price: 20
    }),
    new Product({
        imagePath: 'https://www.callofduty.com/content/dam/atvi/callofduty/hub/main-hub/iw-hub/news-updates/cod-mwr.jpg',
        title: 'Call of Duty Video Game',
        description: 'Call of Duty is a first-person shooter video game franchise. The series began on Microsoft Windows, and later expanded to consoles and handhelds. ',
        price: 30
    }),
    new Product({
        imagePath: 'https://lh3.googleusercontent.com/30koN0eGl-LHqvUZrCj9HT4qVPQdvN508p2wuhaWUnqKeCp6nrs9QW8v6IVGvGNauA=w300',
        title: 'Minecraft Video Game',
        description: 'Minecraft is a sandbox video game originally created by Swedish programmer Markus "Notch" Persson and later developed and published by Mojang. ',
        price: 40
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Dark_souls_3_cover_art.jpg/250px-Dark_souls_3_cover_art.jpg',
        title: 'Dark Souls III Video Game',
        description: 'Dark Souls III is an action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, and Microsoft Windows.',
        price: 50
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}