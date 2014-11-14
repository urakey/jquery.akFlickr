/*!
 * jquery.akFlickr
 * Version: 0.1
 *
 * Copyright(c) 2014 Aki Fukayama <akey@chocolateboard.net>
 * MIT Licensed
 */
(function($)
{
  'use strict';

  $.fn.akFlickr = function(options)
  {
    /**
     * Option - defaults
     */
    options = $.extend({
      data    : {
        format  : 'json',
        method  : 'flickr.photos.search',
        api_key : 'b79e6bc83dfd04775a10b732c5f59f5e', //API Key
        user_id : '35463031@N02', //userID
        sort    : 'date-posted-desc', //SortSetting
        tags    : 'square', //TagSetting
        per_page: 100
      },
      size: 'thumbnail',
      tag: 'div',
      className: ''
    }, options);

    /**
     * Core
     */
    return this.each(function()
    {
      var $target = $(this);
      loadPhotos($target, options);
    });

    /**
     * Method - private
     */
    function loadPhotos($dom, options) {
      var d          = $.Deferred();

      $.ajax({
        type : 'GET',
        url  : 'http://www.flickr.com/services/rest/',
        dataType: 'jsonp',
        jsonp   : 'jsoncallback',
        data : options.data
      })
      .done(function(data) {
        if (data.stat == 'ok') appendHtml($dom, formatHtml(data, options));
        d.resolve();
      })
      .fail(function(e) {
        console.log(e);
      });
      return d.promise();
    }

    function formatHtml(data, options) {
      var items   = data.photos.photo;
      console.log(items);
    }

    function appendHtml($dom, htmlSrcArray) {

      // if(htmlSrcArray.length <= 0) return;
      // $.each(htmlSrcArray, function(index, htmlSrc){
      //   $dom.append(htmlSrc);
      // });
    }

  };

})(jQuery);