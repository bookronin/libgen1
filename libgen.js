var str ="Текст ()(от лат. textus — «ткань; сплетение, связь, сочетание»)";
str = str.split(")").join(" ").split("(").join(" ").split("«").join(" ").split("»").join(" ").split(";").join(" ").split(".").join(" ").split("-").join(" ").split("—").join(" ");


var chunk= str.split(" ").sort();


console.log(chunk);