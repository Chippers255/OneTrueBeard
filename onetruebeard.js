$(document).ready(function() {
  
    var earlImg = ['QIvruce.jpg',
                   'aSsSEw9.jpg',
                   'As9OXDT.jpg',
                   'wcfN9Lb.jpg',
                   'xTvUEXQ.jpg',
                   'tUMPCw2.jpg',
                   'kva4BWc.jpg',
                   'eQn0vQO.jpg',
                   'mrE5CCK.png',
                   'XaPr6jp.jpg',
                  ];
    
    $("img").each(function() {
        $(this).attr("src", "http://i.imgur.com/" + earlImg[Math.floor(Math.random()*earlImg.length)]);
    });

});
