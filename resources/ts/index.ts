import * as dotenv from 'dotenv';
import {OpenAIChat} from "langchain/llms";
import {ChainValues, loadQAChain} from "langchain/chains";
import {Document} from "langchain/docstore";

dotenv.config();
// const model = new OpenAI({openAIApiKey: process.env.OPEN_AI_API_KEY, temperature: 0.9});
const model = new OpenAIChat({openAIApiKey: process.env.OPEN_AI_API_KEY, modelName: "gpt-3.5-turbo"});
const chain = loadQAChain(model, {type: 'map_reduce'});
const docs = [
  new Document({pageContent: `#description
&ref(WmlwZZIq.jpg)
#contents(**)
*Gamerchの会員登録する
Gamerchでは、メールアドレスがあれば簡単に会員登録ができます。
会員登録をすることでWikiを閲覧するだけでなく、[[Wikiの作成>https://gamerch.com/help/entry/301211]]や[[編集>https://gamerch.com/help/entry/301259]]をすることができます。

*会員登録するにあたって必要なもの
会員登録には&color(#ff0000){''メールアドレス''}が必要です。
メールアドレスとパスワードを設定して、登録します。
|30%CENTER|70%|c
|!メールアドレス|入力したメールアドレス宛てに仮登録メールが送信されます。~~Yahoo!などのフリーメールアドレスでも登録可能です。|
|!パスワード|安全のため、第三者が推測しやすいパスワードは避けて下さい。~~パスワードは定期的に変更していただくようお願いします。|

*会員登録の流れ
**パソコンの場合
#youtube(https://youtu.be/18qKJ3aCmlY)

Gamerchの画面右上「''新規登録''」から会員登録画面へ進んでください。
CENTER:&ref(iwXXZDOD.jpg)
CENTER:&ref(qYkm4KeT.jpg,320)

各規約と個人情報の取扱いを確認の上「''すべての規約と個人情報の取扱いに同意する''」にチェックを入れ、メールアドレスを入力してください。
CENTER:&ref(6bIHTi05.jpg)&ref(0C60kNdU.jpg)

外部SNSのアカウントで登録することもできます。
CENTER:&ref(pAw9If2v.jpg)
|CENTER|CENTER|CENTER|CENTER|c
|>|>|>|!登録可能な外部サービス|
|Twitter|Google|Facebook|Yahoo!|

ご登録いただいたメールアドレス宛に確認用のメールが届きますので、&color(#ff0000){''本登録URL''}をクリックしてください。
CENTER:&ref(vCVdJUE1.jpg)

パスワードの登録、画像認証をご入力いただき「''登録する''」ボタンを押してください。
CENTER:&ref(hgGROcZz.jpg)

以上で''会員登録は完了''です。
会員登録完了のメールが届きますので、内容をご確認ください。
CENTER:&ref(NYByHNUp.jpg)

**スマートフォンの場合
#youtube(https://youtu.be/7vJkmhLne2Y)

画面右上にある、''四角いメニューボタン''を押して会員登録画面へ進んでください。
CENTER:&ref(RLz9syjG.jpg)
CENTER:&ref(7qstffIV.jpg)

各規約と個人情報の取扱いを確認した上で、メールアドレスを入力してください。
CENTER:&ref(auLSIhg1.jpg)

メールに記載された本登録URLからパスワードの登録、画像認証を入力後「''登録する''」を押してください。
CENTER:&ref(qykH8a4G.jpg)
以上で''会員登録は完了''です。

#btn(blue){''基本ヘルプ・ご利用ガイドトップ''>https://gamerch.com/help/}`}),
  new Document({pageContent: `#description
&ref(CF5fnQTs.jpg)
#contents(**)
*Wikiを作成する
Gamerchでは、誰でも簡単にWikiを作成することができます。

*Wikiを作成するにあたって必要なもの
Wiki作成には&color(#ff0000){''会員登録''}が必要です。
※Gamerch会員登録がお済みでない方は「[[会員登録の手順>https://gamerch.com/help/entry/297778]]」を参考に、会員登録をおこなってください。

*Ｗiki作成の流れ
#youtube(https://youtu.be/erf4nAQsxk4)
※[[Gamerch公式Youtube動画>https://youtu.be/erf4nAQsxk4]]より

**パソコンの場合
ゲーマチへログイン後、右上のハンバーガーメニューから「''マイページ''」もしくは「''[[新しいWikiを作成>https://gamerch.com/account/wiki/new]]''」を押してください。
CENTER:&ref(MESFv7KF.jpg)

「''マイページ''」からはメニュー内の「''[[新しいWikiを作成する>https://gamerch.com/account/wiki/new]]''」から新しいWikiを作成します。
CENTER:&ref(StPTyXQv.jpg)

***STEP.1「Wiki基本設定」
CENTER:&ref(aIhoaa2a.jpg)
&color(#ff0000){各項目の書き方がわからない場合は、「？」を押すと解説が表示されます。}
CENTER:&ref(5WvyVvBj.jpg)

#box(#fcfcfc){
-''Wikiタイトルを入力''（50文字以内）
&ref(fdhLX3cV.jpg)
「''Wiki''」「''攻略''」などのワードを入れることをおすすめします。
ゲームの省略名が浸透していなければ、正式名でもOKです。
&color(#0dbc0d){''例:マギアレコード攻略wiki''}
}
#box(#fcfcfc){
-''短いWikiタイトル''（15文字以内）
&ref(s8ipIdKZ.jpg)
浸透している短いタイトルがなければ自動入力されるタイトルでもOKです。
&color(#0dbc0d){''例:マギレコ攻略wiki''}
}
#box(#fcfcfc){
-''Wiki URL''（3～20文字）
&ref(FFIiCqBb.jpg)
https:/&#47;gamerch.com/''〇〇〇''
''〇''部分を自由に決められます。
ゲーム名の''ローマ字化''や''英語表記''にすることをおすすめします。
&color(#0dbc0d){''例:''}
https:/&#47;gamerch.com/&color(#0066ff){magireco}/
※magireco(マギレコ)
}
#box(#fcfcfc){
-''Wiki概要''（120文字以内）
&ref(7P4dnF7K.jpg)
Wikiの内容を端的にまとめて記述してください。
ユーザーの関心を惹く、宣伝文句のような内容にするのがおすすめです。

&color(#0dbc0d){''例：マギアレコード（マギレコ）攻略Wikiです。リセマラやイベント情報はもちろん、アンケートで集計した可愛い子ランキングやキャラ自慢で盛り上がっている掲示板などを用意しています。''}
}
#box(#fcfcfc){
-''Wikiの用途''
CENTER:&ref(D97YIDcT.jpg)
作成するWikiがどのような用途になるか選択します。
-配信済みのスマホゲーム
-配信前(事前登録中)のスマホゲーム
-家庭用ゲーム機ゲーム
-アーケードゲーム
-その他のゲーム
「''配信済のスマホゲーム''」を選択した場合、App storeまたはGoogle PlayのアプリURLも入力できます。
Wikiとアプリを紐付けすると、アプリの情報ページにWikiへのリンクが表示されます。
CENTER:&ref(hTVLJSk7.jpg)
}

***STEP.2「画面基本設定」「収益還元設定」
CENTER:&ref(xnuCWMVv.jpg)
#box(#fcfcfc){
-''Wikiアイコンを設定''
Wikiヘッダーに表示されるアイコンです。
CENTER:&ref(VGK4lYss.jpg)
}
#box(#fcfcfc){
''▼Wikiアイコン画像アップロード方法''
「''画像アップロード''」から、アップしたい画像ファイルをドラッグ＆ドロップ。
もしくは「''参照''」から登録したい画像を呼び出します。
CENTER:&ref(KdYcWaK9.jpg)
登録した画像は大きさなどの変更ができます。
アイコンは''幅88px 高さ88px''で表示されます。
CENTER:&ref(OipVaCOK.jpg)
}
#box(#fcfcfc){
-''最初のテンプレートを選択''
CENTER:&ref(O3IK180J.jpg)
Wiki作成時のテンプレートを選択してください。
ゲームのカテゴリに合ったテンプレートを選択することで、Wiki編集の効率が上がります。
}
#box(#fcfcfc){
-''Twitterシェア設定'' (20文字以内)
CENTER:&ref(6AIGipzg.jpg)
Wikiページ内のシェアボタンからシェアした際、ツイート本文に入れたいメッセージやハッシュタグを設定できます。
ゲームに関するツイートで使われるハッシュタグやWikiの宣伝を入れると、投稿ツイートが見られやすくなります。
}
#box(#fcfcfc){
-''広告収益還元設定''（広告収益の受け取り）
CENTER:&ref(nPlMqT1y.jpg)
Gamerchでは、作成したWiki上の広告で獲得した収益からWiki編集者に還元する「#ig_link(''広告収益還元システム'')」を実装しています。
ここでは、広告収益を受け取るか、受け取らないかを選択できます。
詳細は、[[収益還元システム>https://gamerch.com/help/entry/24]]をご参照ください。
}

***STEP.3「設定確認・規約同意」
最後に、「''新規Wiki作成設定の確認''」「''利用規約の同意''」をお願いします。
CENTER:&ref(Vl85qcHI.jpg)
各項目を修正したい場合は、「''前へ''」ボタンをクリックし、修正してください。

入力・確認が完了しましたら、[[Gamerch利用規約>https://gamerch.com/support/terms]]をご確認の上「''同意する''」にチェックを入れて「''Wikiを作成''」ボタンを押してください。
CENTER:&ref(yV2KGK3k.jpg)

Wikiが表示されれば、新規Wikiの立ち上げは完了です。

**スマートフォンの場合
&color(#ff0000){スマートフォンからWikiの新規作成はできません。}
お手数ですが、パソコンから作成いただきますよう、お願い致します。

#btn(blue){''基本ヘルプ・ご利用ガイドトップ''>https://gamerch.com/help/}`})
];
const run = async () => {
  const question = '日本一高い山はなんですか？'
  const res: ChainValues = await chain.call({
    input_documents: docs,
    question
  });

  console.log({Q: question, A: res.text.replace('。', '。\n')});
};

run()
