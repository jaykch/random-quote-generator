$(document).ready(function () {
    console.log("jquery ready");
    getQuote();
});

var quote = "";
var author = "";

var view = (function () {
    var currentColor;

    var renderQuote = function (x) {
        $('#quote').html("<p><strong>" + x + "</p></strong>");
    };
    var renderAuthor = function (x) {
        $('#author').html(x);
    };

    var changeColor = function () {
        _randomizeColor();
        $('.change-bg-colour').css("background", currentColor);
        $('#quote').css("color", currentColor);
    };

    var colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50",
        "#8BC34A", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#"];

    var _randomizeColor = function () {
        var selector = Math.floor((Math.random() * 20) + 1) - 1;
        currentColor = colors[selector];
    };

    return {
        renderQuote: renderQuote,
        renderAuthor: renderAuthor,
        changeColor: changeColor
    };
})();

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote + "- " + author, "_blank");
}

function getQuote() {
    //Mashape API - quotes aren't that great
    /*$.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            view.renderQuote(data.quote);
            view.renderAuthor(data.author);
            view.changeColor();
            quote = data.quote;
            author = data.author;
        },
        error: function (err) {
            alert(err);
        }
    });*/

    //forismatic API, quotes are really nice and I can see myself using it
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data){
        quote = data.quoteText;
        author = data.quoteAuthor;
        view.renderQuote(quote);
        view.renderAuthor(author);
        view.changeColor();
    }).fail(function(error){
        throw error;
    });
}
