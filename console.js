function consolist() {
    // とにかく出す
    console.log("hey");
    // 色付けたり太くしたり(スタイル指定)
    console.log("%chey", 'color: red;');
    console.log("%chey", 'color: red; font-weight: bold');
    // レベル分け
    console.debug("hey");
    console.info("hey");
    console.warn("hey");
    console.error("hey");
    // 変数値埋め込み
    const a = "へいほー";
    console.log(`hey${a}`);
    // オブジェクト内容全出し
    const aa = { a: 1, b: 2, c: { d: "hey" } }
    console.log(JSON.stringify(aa));
    // オブジェクト、クリックで掘れる形に表示
    const aaa = { a: 1, b: 2, c: { d: "hey" } }
    console.dir(aaa);
    // debugモードの時だけ表示したいとか
    let debug = true; // 何某かで設定。
    window.mylog = debug ? console.log.bind(console) : () => { };
    window.mylog("hey");

    debug = false; // 何某かで設定。
    window.mylog = debug ? console.log.bind(console) : () => { };
    window.mylog("hey");
}
consolist();
