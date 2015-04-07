var str ="Текст ()(от лат. textus — «ткань; сплетение, связь, сочетание»)";
var reg = new RegExp ('[!@#$>%^}&*):;?,(—<{;».«]','gi');
var dif = str.replace ( reg,' ');

var chunk= dif.split(" ").sort();


console.log(chunk);
