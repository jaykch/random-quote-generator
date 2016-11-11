$(document).ready(function () {
    console.log("jquery ready");
    getQuote();
});

var view = (function (){
    var renderQuote = function(x){
        $('#quote').html("<p>" + x + "</p>");
    };
    var renderAuthor = function(x){
        $('#author').html(x);
    };

    return{
        renderQuote: renderQuote,
        renderAuthor: renderAuthor
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
        },
        error: function(err) { alert(err); }
    });
}
