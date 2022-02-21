const config = {
    url: "https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=ISBN:",
    parentId: "bookId",
    searchBtnId: "isbn-search-btn",
    searchInputId: "isbn-search",
}

// イベントリスナーを検索ボタンに設定します。
let searchBtn = document.getElementById(config.searchBtnId);
searchBtn.addEventListener("click", function(){
    
    let isbn = document.getElementById(config.searchInputId).value;

    fetch(config.url + isbn).then(response=>response.json()).then(function(data){
        // サーバーのデータ
        console.log(data);
    });
});