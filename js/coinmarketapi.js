var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON("https://api.coinmarketcap.com/v1/ticker/hodlcoin/", function(error, body){
    if(error !== null){
        document.getElementById("coinmarketapi-marketcap").innerHTML = "Error (" + err + ")";
        document.getElementById("coinmarketapi-volume").innerHTML = "Error (" + err + ")";
        document.getElementById("coinmarketapi-supply").innerHTML = "Error (" + err + ")";
        document.getElementById("coinmarketapi-totalsupply").innerHTML = "Error (" + err + ")";
    }else{
        document.getElementById("coinmarketapi-marketcap").innerHTML = body[0]['market_cap_usd'];
        document.getElementById("coinmarketapi-volume").innerHTML = body[0]['24h_volume_usd'];
        document.getElementById("coinmarketapi-supply").innerHTML = body[0]['available_supply'];
        document.getElementById("coinmarketapi-totalsupply").innerHTML = body[0]['total_supply'];
    }
});
