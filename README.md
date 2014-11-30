# jquery.akFlickr.js

> お勉強プラグインシリーズ。Flickr の API からデータを取得・表示するプラグイン。


## Demo

[CodePen](http://codepen.io/akey/pen/jEOXYM)


## Usage

    // Format:
    $(selector).akFlickr({
      api_key : YOUR_API_KEY,
      count: 5,
      searchOptions: {
        text: 'kawaii',
        sort: 'interestingness-desc'
      }
    });

    // Examples:
    $('#modInstagram').akFlickr({
      api_key : YOUR_API_KEY,
      link: false,
      count: 5,
      size: 'large_square',
      searchOptions: {
        user_id : YOUR_FLICKR_ID
      },
      tag: 'li',
      className: 'mod-imgList_item'
    });


## Options
<table>
  <thead>
    <tr>
       <th>Property</th>
       <th>Type</th>
       <th>Default</th>
       <th>Description</th>
     </tr>
  </thead>
  <tbody>
    <tr>
      <th>api_key</th>
      <td>String</td>
      <td>-</td>
      <td>APIキー</td>
    </tr>
    <tr>
      <th>link</th>
      <td>Boolean</td>
      <td>true</td>
      <td>リンクの有無</td>
    </tr>
    <tr>
      <th>count</th>
      <td>Number</td>
      <td>20</td>
      <td>アイテムの数</td>
    </tr>
    <tr>
      <th>size</th>
      <td>String</td>
      <td>medium</td>
      <td>
        <p>画像のサイズ</p>
        <ul>
          <li>square - 75x75 </li>
          <li>large_square - 150x150 </li>
          <li>thumbnail - 長辺を 100px にリサイズ </li>
          <li>small - 長辺を 240px にリサイズ </li>
          <li>small_320 - 長辺を 320px にリサイズ </li>
          <li>medium - 長辺を 500px にリサイズ </li>
          <li>medium_640 - 長辺を 640px にリサイズ </li>
          <li>medium_800 - 長辺を 800px にリサイズ </li>
          <li>large - 長辺を 1024px にリサイズ </li>
          <li>original - オリジナル </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>searchOptions</th>
      <td>Object</td>
      <td>-</td>
      <td>
        <h4>検索条件の指定</h4>
        <p>下記 3 つのうち、最低 1 つの検索条件を指定します。</p>
        <ul>
          <li><code>user_id: YOUR_FLICKR_ID</code> - 写真投稿者ユーザーID</li>
          <li><code>text: 'フリーワード'</code> - フリーワード全文検索</li>
          <li><code>tags: 'タグ'</code> - タグ</li>
        </ul>
        <p>※ <code>text</code> <code>tags</code> の複数指定はカンマ区切り</p>
        <h4>その他の検索条件等</h4>
        <p>※ ★はデフォルト</p>
        <h5>複数指定時の検索モード</h5>
        <ul>
          <li><code>tag_mode: 'any'</code> - OR検索 ★</li>
          <li><code>tag_mode: 'all'</code> - AND検索</li>
        </ul>
        <h5>時間軸で絞り込む</h5>
        <ul>
          <li><code>min_upload_date: 'YYYY-MM-DD'</code> - アップロード日時 [from]</li>
          <li><code>min_taken_date: 'YYYY-MM-DD'</code> - 撮影日時 [from]</li>
          <li><code>max_taken_date: 'YYYY-MM-DD'</code> - 撮影日時 [to]</li>
        </ul>
        <p>※ YYYY-MM-DD もしくは UNIX タイムスタンプで指定</p>
        <h5>ライセンスで絞り込む</h5>
        <p><code>license: 'LICENSE_ID'</code> - LICENSE_ID をカンマ区切りで指定</p>
        <p>※ [LICENSE_IDはこちら](https://www.flickr.com/services/api/flickr.photos.licenses.getInfo.html)</p>
        <h5>並べ替え</h5>
        <ul>
          <li><code>sort: 'date-posted-desc'</code> - アップロード日時の新しい順 ★</li>
          <li><code>sort: 'date-posted-asc'</code> - アップロード日時の古い順</li>
          <li><code>sort: 'date-taken-asc'</code> - 撮影日時の古い順</li>
          <li><code>sort: 'date-taken-desc'</code> - 撮影日時の新しい順</li>
          <li><code>sort: 'interestingness-desc'</code> - 人気の高い順</li>
          <li><code>sort: 'interestingness-asc'</code> - 人気の低い順</li>
          <li><code>sort: 'relevance'</code> - 関連度の高い順</li>
        </ul>
        <h5>エリア絞り込み</h5>
        <p><code>bbox: '-170, 8, -60, 62'</code> - 西端経度, 南端緯度, 東端経度, 北端緯度</p>
      </td>
    </tr>
    <tr>
      <th>tag</th>
      <td>String</td>
      <td>div</td>
      <td>アイテムをラップするタグ</td>
    </tr>
    <tr>
      <th>className</th>
      <td>String</td>
      <td>-</td>
      <td>アイテムをラップするタグにつけるクラス</td>
    </tr>
  </tbody>
</table>


## ToDo

* DOM のとこなおすかも


## Changelog

まだないよ