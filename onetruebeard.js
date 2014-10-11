$(document).ready(function() {
  
    var earlImg = ['http://i.imgur.com/QIvruce.jpg',
                   'http://i.imgur.com/aSsSEw9.jpg',
                   'http://i.imgur.com/As9OXDT.jpg',
                   'http://i.imgur.com/wcfN9Lb.jpg',
                   'http://i.imgur.com/xTvUEXQ.jpg',
                   'http://i.imgur.com/tUMPCw2.jpg',
                   'http://i.imgur.com/kva4BWc.jpg',
                   'http://i.imgur.com/eQn0vQO.jpg',
                   'http://i.imgur.com/mrE5CCK.png',
                   'http://i.imgur.com/XaPr6jp.jpg',
                  ];
    
    var oldImg = $('img');
    
    oldImg.each(function() {
        var a = $(this);
        a.attr("src", earlImg[Math.floor(Math.random()*earlImg.length)]);
    });

});