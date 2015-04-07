/*rawlib-Это переменная, библиотеки юзерских слов*/
var rawlib ="Повествование, в отличие от описания, представляет собой изображение событий или явлений, совершающихся не одновременно, а следующих друг за другом или обусловливающих друг друга. Самый, по-видимому, краткий в мировой литературе образец повествования – знаменитый рассказ Цезаря: «Пришёл, увидел, победил». Он ярко и точно передаёт суть повествования – это рассказ о том, что произошло, случилось."
var uslib;


/* эта функция очищает инпут или новые данные что бы они были готовы для добавления в базу*/
var readyToLib = function(rawlib){

    /*удаляем символы*/
    var reg = new RegExp ('[!@`~#$>%^}&*):;?,1234567890–(—<{;».«\n]','gi');
    var dif = rawlib.replace ( reg,' ');

    /*делаем массив из слов*/
     uslib= dif.toLowerCase().split(" ").sort();

    /*отрезаем все что меньше одного-двух символов*/
    for (var j = 0 ; j < uslib.length; j++) {
        if(uslib[j].length <= 2) uslib[j]='';
    }

    /*удаляем пустые элементы*/
    for (var i = uslib.length; i >= 0; i--) {
        if (!uslib[i]) uslib.splice(i, 1);
    }

    /*удаляем все что повторяется*/
    for(var z = uslib.length; z >= 0; z--) {
        if(uslib[z] == uslib[z-1]) uslib.splice (z,1);


    }
}

readyToLib(rawlib);

console.log(uslib);



var angLib = [];
/*перегоняем все слова в библиотке в англ раскладку для их распознавания при наборе*/
/*этот набор строчек перегоняет массив в стринг, меняет символы на англ и снова разбивает*/
var angSLib = function(uslib){
angLib  = uslib.join(" ");
var qa = new RegExp ('й','gi');
angLib = angLib.replace(qa,'q');
var wa = new RegExp ('ц','gi');
angLib = angLib.replace(wa,'w');
var ea = new RegExp ('у','gi');
angLib = angLib.replace (ea,'e');
var ra = new RegExp ('к','gi');
angLib = angLib.replace (ra,'r');
var ta = new RegExp ('е','gi');
angLib = angLib.replace (ta,'t');
var ya = new RegExp ('н','gi');
angLib = angLib.replace (ya,'y');
var ua = new RegExp ('г','gi');
angLib = angLib.replace (ua,'u');
var e0a = new RegExp ('ё','gi');
angLib = angLib.replace (e0a,'`');
var ia = new RegExp ('ш','gi');
angLib = angLib.replace (ia,'i');
var oa = new RegExp ('щ','gi');
angLib = angLib.replace (oa,'o');
var pa = new RegExp ('з','gi');
angLib = angLib.replace (pa,'p');
var q1a = new RegExp ('х','gi');
angLib = angLib.replace (q1a,'[');
var q2a = new RegExp ('ъ','gi');
angLib = angLib.replace (q2a,']');
var aa = new RegExp ('ф','gi');
angLib = angLib.replace (aa,'a');
var sa = new RegExp ('ы','gi');
angLib = angLib.replace (sa,'s');
var da = new RegExp ('в','gi');
angLib = angLib.replace (da,'d');
var fa = new RegExp ('а','gi');
angLib = angLib.replace (fa,'f');
var ga = new RegExp ('п','gi');
angLib = angLib.replace (ga,'g');
var ha = new RegExp ('р','gi');
angLib = angLib.replace (ha,'h');
var ja = new RegExp ('о','gi');
angLib = angLib.replace (ja,'j');
var ka = new RegExp ('л','gi');
angLib = angLib.replace (ka,'k');
var la = new RegExp ('д','gi');
angLib = angLib.replace (la,'l');
var a1a = new RegExp ('ж','gi');
angLib = angLib.replace (a1a,';');
var a2a = new RegExp ('э','gi');
angLib = angLib.replace (a2a,"'");
var za = new RegExp ('я','gi');
angLib = angLib.replace (za,'z');
var xa = new RegExp ('ч','gi');
angLib = angLib.replace (xa,'x');
var ca = new RegExp ('с','gi');
angLib = angLib.replace (ca,'c');
var va = new RegExp ('м','gi');
angLib = angLib.replace (ea,'v');
var ba = new RegExp ('и','gi');
angLib = angLib.replace (ba,'b');
var na = new RegExp ('т','gi');
angLib = angLib.replace (na,'n');
var ma = new RegExp ('ь','gi');
angLib = angLib.replace (ma,'m');
var z1a = new RegExp ('б','gi');
angLib = angLib.replace (z1a,',');
var z2a = new RegExp ('ю','gi');
angLib = angLib.replace (z2a,'.');
angLib = angLib.split(" ");
}

angSLib(uslib);
console.log(angLib);

/*то что пользователь печататет*/
var newNtTpng="и грянул гром W";



/*взять последнее слово из всего что юзер печатал-печатает,что бы работало со всеми новыми словами*/
newNtTpng=newNtTpng.toLowerCase();
var TpLs = newNtTpng.split(" ");
for (var i2 = TpLs.length; i2 >= 0; i2--) {
    if (!TpLs[i2]) TpLs.splice(i2, 1);}
var word=TpLs[TpLs.length-1];

/*находим новое слово(или даже буквы) по совпадениям в базе только в той же раскладке и выдаем варианты*/
for (var a = 0; a < uslib.length ; a++) {
    if ( uslib[a].substr(0,word.length) === word ) {
        console.log(uslib[a]);
    }
}

/*находим новое слово(или даже буквы) по совпадениям если бы он писал на русском и выдаем варианты в нормальной раскладке*/
for (var a2 = 0; a2 < angLib.length ; a2++) {
    if ( angLib[a2].substr(0,word.length) === word ) {
        console.log(uslib[a2]);
    }
}








