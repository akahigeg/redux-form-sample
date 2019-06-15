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

### Stateの初期化
https://redux-form.com/8.2.2/examples/initializefromstate/

reduxFormでReduxと繋いだフォームコンポーネントをさらにconnectに渡してstateを初期値を割り当てる

### formValueSelector 
https://redux-form.com/8.2.2/examples/selectingformvalues/

    const selector = formValueSelector('selectingFormValues')
    const value = selector(state, 'fieldName')

mapStateToPropsの中でフォームの値を取得してフォームのレンダリング処理に使うことができる。

selectした値を変更すると都度フォーム全体がリレンダリングされるのでパフォーマンスに注意。

### Field Arrays
https://redux-form.com/8.2.2/examples/fieldarrays/

ToDoリストのToDoアイテムなど、一つのフォーム内で可変個数のリストアイテムを扱いたいときに便利な機能。Addを推すとフォームが増えてRemoveを推すと消えるなど。

FieldArrayコンポーネントにフォームをレンダリングするコンポーネントを渡す。そのレンダーコンポーネントの中で insert, pop, push, remove, shift, swap, and unshift といったアクションが可能。

    <FieldArray name="members" component={renderMembers} />

renderMembersの中では

    <button type="button" onClick={() => fields.push({})}>Add Member</button>

    {fields.map((member, index) => (
      <li key={index}>...</li>
    ))}
   
ってかんじで。これは欲しかった機能なのでは。

### Remote Submit
ReduxForm外のコンポーネントやミドルウェアからReduxFormのSubmitを行う方法。

### ？
- onSubmitの時しかvaluesを取れないのかな？ => formValueSelectorでレンダリング時にstate to propsできる
- Flow？TypeScript使うときは不要？ => 不要ぽ
- 使うライブラリによってコードの書き方が変わるので、そうした違いに振り回されて混乱しないためにもReduxの基礎を掴んでいることが重要。
- TypeScriptに直していくのつらみあるな。当てはめる型がわからん。 => とりあえずチュートリアルでは本質でないところなのでガンガンanyにしていくか

サンプルが豊富なのはいいな。

ImmutableJSとは




### Formikとの比較雑感
Reduxを使うならFormikよりRedux Formの方がいいのかな。よさげかも。Reduxを使ってないと使えないという欠点はある。

Formikより分かりやすいような。Formikの`{touched.lastName && errors.lastName && <div>{errors.lastName}`とか何者だお前感あるせいだろうか。 <= まだRedux Formのコード書いてない意見