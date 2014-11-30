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
      api_key: '',
      link: true,
      count: 20,
      size: 'medium',
      tag: 'div',
      className: ''
    }, options);


    /**
     * Core
     */
    return this.each(function()
    {
      var $target = $(this);
      var suffix = setPhotoSuffix(options.size);
      loadPhotos($target, options, suffix);
    });

    /**
     * Method - private
     */
    function loadPhotos($dom, options, suffix) {
      var d    = $.Deferred();
      var data = {
        format: 'json',
        method: 'flickr.photos.search',
        api_key: options.api_key,
        per_page: options.count
      };

      if (options.searchOptions) data = $.extend(data, options.searchOptions);

      $.ajax({
        type: 'GET',
        url: 'https://www.flickr.com/services/rest/',
        data: data,
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
      })
      .done(function(data) {
        if (data.stat == 'ok') {
          if(data.photos.length <= 0) return;
          appendHtml($dom, formatHtml(data, options, suffix));
        }
        d.resolve();
      })
      .fail(function(xhr, status, error) {
        console.log(xhr, status, error);
      });
      return d.promise();
    }

    function formatHtml(data, options, suffix) {
      var photos = data.photos;
      var htmlTag = options.tag;
      var id, owner, secret, server, farm, title, ispublic, isfriend, isfamily;
      var link, imgPath, tmpHtmlSrc;
      var htmlSrc = '';

      $.each(photos.photo, function(index, item){
        id       = item.id;
        owner    = item.owner;
        secret   = item.secret;
        server   = item.server;
        farm     = item.farm;
        title    = item.title;
        ispublic = item.ispublic;
        isfriend = item.isfriend;
        isfamily = item.isfamily;

        link = 'http://www.flickr.com/photos/' + owner + '/' + id + '/';
        imgPath = 'http://farm' + farm + '.static.flickr.com/' + server + '/' + id + '_' + secret + suffix + '.jpg';

        // MEMO: DOM は自由に作れたほうがいい？あとで検討する
        if (options.className) tmpHtmlSrc  = '<' + htmlTag + ' class="' + options.className + '">';
        else tmpHtmlSrc  = '<' + htmlTag + '>';

        if (options.link && link) tmpHtmlSrc += '<a href="' + link + '" target="_blank">';

        tmpHtmlSrc += '<img src="' + imgPath + '" alt="' + title + '">';

        if (options.link && link) tmpHtmlSrc += '</a>';
        tmpHtmlSrc += '</' + htmlTag + '>';

        htmlSrc += tmpHtmlSrc;
      });

      return htmlSrc;
    }

    function appendHtml($dom, htmlSrc) {
      if(!htmlSrc) return;
      $dom.append(htmlSrc);
    }

    function setPhotoSuffix(size) {
      var suffix;

      switch(size) {
        case 'square':
          suffix = '_s';
          break;
        case 'large_square':
          suffix = '_q';
          break;
        case 'thumbnail':
          suffix = '_t';
          break;
        case 'small':
          suffix = '_m';
          break;
        case 'small_320':
          suffix = '_n';
          break;
        case 'medium_640':
          suffix = '_z';
          break;
        case 'medium_800':
          suffix = '_c';
          break;
        case 'large':
          suffix = '_b';
          break;
        case 'original':
          suffix = '_o';
          break;
        default:
          suffix = '';
          break;
      }

      return suffix;
    }

  };

})(jQuery);