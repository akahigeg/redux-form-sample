### Redux Formとは
- フォームの内容をReduxのStoreに入っているStateにin/outする
- formReducerでActionを処理
- reduxFormがHoCでフォームにRedux Formの機能を持たせる
  - FieldコンポーネントをReduxと繋ぐ
- Understanding Field Value Lifecycle
  - https://redux-form.com/8.2.2/docs/valuelifecycle.md/
  - Stateから値を読むときにformatでフォームに沿った値に加工できる
  - Stateに値を書き込む前にparseやnormalizeで値を加工できる

### バリデーション
色々なやり方がある。

- Synchronous Validation: reduxFormの引数にvalidate属性としてerrorsを返すバリデータ関数を渡すやり方 
  - errors={} が初期値で空のまま return されればエラー無しということになる
- Field-Level Validation: Fieldコンポーネントのvalidate属性にバリデータ関数もしくはバリデータ関数の配列を指定
  - バリデータ関数が取る引数は value, allValues, props, name
- Submit Validation: submit関数内でvaluesの内容を検証してSubmissionErrorを投げる
- Async Blur Validation: 非同期でサーバーサイドバリデーション reduxFormにasyncValidate関数を渡す 問い合わせ中にインジケータ回したりできる
  - asyncBlurFieldsを指定しないとどのフィールドが変更されたときにも非同期の問い合わせを送ってしまう
  - Synchronous Validationでエラーがある場合はAsyncの方は動かない
- Async Change Validation: BlurではなくChangeしたときに非同期でサーバーサイドバリデーション

サーバーサイドバリデーション

### ？
onSubmitの時しかvaluesを取れないのかな？

Flow？TypeScript使うときは不要？

サンプルが豊富なのはいいな。


使うライブラリによってコードの書き方が変わるので、そうした違いに振り回されて混乱しないためにもReduxの基礎を掴んでいることが重要。

### Formikとの比較雑感
Reduxを使うならFormikよりRedux Formの方がいいのかな。よさげかも。Reduxを使ってないと使えないという欠点はある。

Formikより分かりやすいような。Formikの`{touched.lastName && errors.lastName && <div>{errors.lastName}`とか何者だお前感あるせいだろうか。 <= まだRedux Formのコード書いてない意見