
var userlib ="Повествование, в отличие от описания, представляет собой изображение событий или явлений, совершающихся не одновременно, а следующих друг за другом или обусловливающих друг друга. Самый, по-видимому, краткий в мировой литературе образец повествования – знаменитый рассказ Цезаря: «Пришёл, увидел, победил». Он ярко и точно передаёт суть повествования – это рассказ о том, что произошло, случилось."
;

var reg = new RegExp ('[!@`~#$>%^}&*):;?,1234567890–(—<{;».«\n]','gi');
var dif = userlib.replace ( reg,' ');

var uslib= dif.toLowerCase().split(" ").sort();

/*for (var i = uslib.length; i >= 0; i--) {

    console.log(uslib[i].parseFloat().length );
    if (uslib[i].length == 1) uslib.splice(i, 1);
}*/
for (var j = 0 ; j < uslib.length; j++) {
   if(uslib[j].length <= 2) uslib[j]='';
}

for (var i = uslib.length; i >= 0; i--) {
    if (!uslib[i]) uslib.splice(i, 1);
}
;
console.log(uslib);
