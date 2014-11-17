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
      size: 'thumbnail',
      searchOptions: {},
      link: true,
      tag: 'div',
      className: ''
    }, options);

    // MEMO: options.data 検索オプション（★がデフォルト値）

    // ■ text - フリーワード全文検索
    // ■ user_id - 写真投稿者ユーザーID
    // ■ tags - タグ
    // ■ per_page - 検索1回あたりの取得件数（デフォルト 100）
    // ■ page - 出力ページ番号

    // ■ tag_mode - 複数指定時の検索モード
    // ★ any OR検索
    // all AND検索

    // ■ min_upload_date - アップロード日時（最小値＝最も古い）絞込み
    // ■ min_taken_date 撮影日時（最大値＝最も古い）絞込み
    // ■ max_taken_date 撮影日時（最大値＝最も新しい）絞込み

    // ■ bbox - エリア
    // 西端の経度、南端の緯度、東端の経度、北端の緯度の値をカンマ区切りで並べる（東経・北緯を正の値とする）。
    // （例）　139.70,35.61,139.78,35.74

    // ■ sort - 並べ替え
    // ★ date-posted-desc アップロード日時の新しい順
    // date-posted-asc アップロード日時の古い順
    // date-taken-asc  撮影日時の古い順
    // date-taken-desc 撮影日時の新しい順
    // interestingness-desc  人気の高い順
    // interestingness-asc 人気の低い順
    // relevance 関連度の高い順

    // ■ extras 追加出力項目（カンマ区切り）
    // license ライセンス種別
    // date_upload アップロード日時
    // date_taken  撮影日時
    // owner_name  投稿者名
    // icon_server アイコンサーバー
    // original_format アップロード時のフォーマット
    // last_update 更新日時
    // geo 緯度経度

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
      var d    = $.Deferred();
      var data = {
        api_key: options.api_key,
        method: 'flickr.photos.search',
        format: 'json'
      };

      if (options.searchOptions) data = $.extend(data, options.searchOptions);
      console.log(data);

      $.ajax({
        type: 'GET',
        url: 'https://www.flickr.com/services/rest/',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        data: data
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