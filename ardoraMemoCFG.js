//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=70;timeIni=70; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=7;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#A6A6FF"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo lograste, FELICIDADES!!"; messageTime="TIEMPO!"; messageError=""; messageErrorG=""; messageAttempts="Demasiados intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="bWVtb3JhbWE2"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["","","","","","","",""];im1=["1.jpg","3.jpg","5.jpg","6.jpg","8.jpg","10.jpg","12.jpg","8b.jpg"];mp31=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="];alt1=["","","","","","","",""];
var wo2=["","","","","","","",""];im2=["sonido6.png","sonido6.png","sonido6.png","sonido6.png","sonido6.png","sonido6.png","sonido6.png","sonido6.png"];mp32=["MjY=","MjU=","MjE=","MjA=","MjQ=","Mjc=","MjM=","MjI="];alt2=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjM=","MjI=","Mjc=","MjY=","MjQ=","MjE=","MjA=","MjU="];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="memorama6_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
