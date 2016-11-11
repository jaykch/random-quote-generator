$(document).ready(function () {
    console.log("jquery ready");
    getQuote();
});

var view = (function (){
    var currentColor;

    var renderQuote = function(x){
        $('#quote').html("<p><strong>" + x + "</p></strong>");
    };
    var renderAuthor = function(x){
        $('#author').html(x);
    };

    var changeColor = function(){
        _randomizeColor();
        $('.change-bg-colour').css("background", currentColor);
        $('#quote').css("color", currentColor);
    };

    var colors = ["#F44336", "#E91E63", "#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50",
        "#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B","#"];

    var _randomizeColor = function(){
        var selector = Math.floor((Math.random() * 20) + 1);
        currentColor = colors[selector];
    };

    return{
        renderQuote: renderQuote,
        renderAuthor: renderAuthor,
        changeColor: changeColor
    };
})();

function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        dataType: 'json',
        success: function(data) {
            //console.log(data);
            view.renderQuote(data.quote);
            view.renderAuthor(data.author);
            view.changeColor();
        },
        error: function(err) { alert(err); }
    });
}
