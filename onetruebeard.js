(function ($) {

    var self = {
      earlImgs: [
        'http://i.imgur.com/QIvruce.jpg',
        'http://i.imgur.com/aSsSEw9.jpg',
        'http://i.imgur.com/As9OXDT.jpg',
        'http://i.imgur.com/wcfN9Lb.jpg',
        'http://i.imgur.com/xTvUEXQ.jpg',
        'http://i.imgur.com/tUMPCw2.jpg',
        'http://i.imgur.com/kva4BWc.jpg',
        'http://i.imgur.com/eQn0vQO.jpg',
        'http://i.imgur.com/mrE5CCK.png',
        'http://i.imgur.com/XaPr6jp.jpg',
      ],
      
      handleImages: function (lstImgs, time) {
        $.each($('img'), function (i, item) {
          // Skip if image is already replaced
          if ($.inArray($(item).attr('src'), lstImgs) == -1) {
            var h = $(item).height();
            var w = $(item).width();

            // If image loaded
            if (h > 0 && w > 0) {
              self.handleImg(item, lstImgs);
            } else {
              // Replace when loaded
              $(item).load(function () {
                // Prevent 'infinite' loop
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                  self.handleImg(item, lstImgs);
                }
              });
            }
          }
        });
        // Keep replacing
        if (time > 0) {
          setTimeout(function () { self.handleImages(lstImgs, time); }, time);
        }
      },

      handleImg: function (item, lstImgs) {
        $(item).error(function () {
          // Handle broken imgs
          self.handleBrokenImg(item, lstImgs);
        });

        self.setRandomImg(item, lstImgs);
      },

      setRandomImg: function (item, lstImgs) {
        var h = $(item).height();
        var w = $(item).width();
        $(item).css('width', w + 'px').css('height', h + 'px');
        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
      },

      handleBrokenImg: function (item, lstImgs) {
        var brokenImg = $(item).attr('src');
        var index = lstImgs.indexOf(brokenImg);
        if (index > -1) {
          lstImgs.splice(index, 1);
        }
        self.setRandomImg(item, lstImgs);
      },
    };

    // Run on jQuery ready
    $(function () {
      self.handleImages(self.earlImgs, 3000);
    });

    // Set global variable
    $.beardIt = self;
})(jQuery);