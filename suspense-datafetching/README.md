# このサンプルで実装したこと
ReactのSuspense対応非同期処理を手書きするハンズオン
[第5章 コンポーネントの外部にデータを持とう]のハンズオン
https://zenn.dev/uhyo/books/react-concurrent-handson/viewer/data-fetching-2

DataLoaderコンポーネントからuseData1フックを呼び出す

loading中にPromiseをthrowするフックを作成
非同期処理をフックに隠蔽したおかげで、戻り値にundefinedを含める必要がなくなり、インタフェースがよりシンプルになった
