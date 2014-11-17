# jquery.akFlickr.js

> お勉強プラグインシリーズ。Flickr の API からデータを取得・表示するプラグイン。


## Demo

[CodePen](http://codepen.io/akey/pen/jEOXYM)


## Usage

    // Format:
    $(selector).akFlickr({
    });

    // Examples:
    $('#modInstagram').akFlickr({
    });


## Options

画像のサイズ
square - 75x75
large_square - 150x150
thumbnail - 長辺を 100px にリサイズ
small - 長辺を 240px にリサイズ
small_320 - 長辺を 320px にリサイズ
medium - 長辺を 500px にリサイズ
medium_640 - 長辺を 640px にリサイズ
medium_800 - 長辺を 800px にリサイズ
large - 長辺を 1024px にリサイズ
original - オリジナル

options.data 検索オプション（★がデフォルト値）

■ text - フリーワード全文検索
■ user_id - 写真投稿者ユーザーID
■ tags - タグ
■ per_page - 検索1回あたりの取得件数（デフォルト 100）
■ page - 出力ページ番号

■ tag_mode - 複数指定時の検索モード
★ any OR検索
all AND検索

■ min_upload_date - アップロード日時（最小値＝最も古い）絞込み
■ min_taken_date 撮影日時（最大値＝最も古い）絞込み
■ max_taken_date 撮影日時（最大値＝最も新しい）絞込み

■ sort - 並べ替え
★ date-posted-desc アップロード日時の新しい順
date-posted-asc アップロード日時の古い順
date-taken-asc 撮影日時の古い順
date-taken-desc 撮影日時の新しい順
interestingness-desc 人気の高い順
interestingness-asc 人気の低い順
relevance 関連度の高い順


## ToDo

* DOM のとこなおすかも


## Changelog

まだないよ