<?php
  $tick = file_get_contents('https://api.coinmarketcap.com/v1/ticker/hodlcoin/');
  $data = json_decode($tick, TRUE);
  $market = $data[0]["market_cap_usd"];
  $volume = $data[0]["24h_volume_usd"];  
  $supply = $data[0]["available_supply"];
  $total = $data[0]["total_supply"]; 
  echo "{$market}<br>{$volume}<br>{$supply}<br>{$total}<br>";
?> 
