var MCDU_SelfTestCompleted = 0;
var MCDU_SecondsSelftesting = 0;
var ff = new FlightFactor('');
var scratchPad = '';

var colorYellow = "rgb(226,226,75)"; //Y
var colorWhite = "rgb(382,382,382)"; //W
var colorGreen = "rgb(79,238,79)"; //G
var colorBlue = "rgb(62,153,184)"; //B
var colorMagenta = "rgb(202,191,382)"; //M
var colorAmber = "rgb(225,149,37)"; //A
var colorRed = "rgb(382,0,0)"; //R
var colorGrey = "rgb(127,127,127)"; //X

var CharSquare = "□";
var CharOverfly = "";
var CharArrowLeft = "";
var CharArrowRight = "";
var CharDegree = "°";
var CharArrowUp = "";
var CharArrowDown ="";
var CharSlash = "\\";

var fontSizeBig = '100%'; // 110%
var fontSizeSmall = '70%';

var DisplayLines1 = '';
var DisplayLines2 = '';
var DisplayLines3 = '';
var DisplayLines4 = '';
var DisplayLines5 = '';
var DisplayLines6 = '';
var DisplayLines7 = '';
var DisplayLines8 = '';
var DisplayLines9 = '';
var DisplayLines10 = '';
var DisplayLines11 = '';
var DisplayLines12 = '';
var DisplayLines13 = '';
var DisplayLines14 = '';

var DisplayAttrs1 = '';
var DisplayAttrs2 = '';
var DisplayAttrs3 = '';
var DisplayAttrs4 = '';
var DisplayAttrs5 = '';
var DisplayAttrs6 = '';
var DisplayAttrs7 = '';
var DisplayAttrs8 = '';
var DisplayAttrs9 = '';
var DisplayAttrs10 = '';
var DisplayAttrs11 = '';
var DisplayAttrs12 = '';
var DisplayAttrs13 = '';
var DisplayAttrs14 = '';
var GotMCDUData = 1;

var localOperation = 0;
var localMode = "STARTING";


MCDU_HOST_IP = '127.0.0.1';
MCDU_HOST_PORT = '';

window.addEventListener('resize', AdjustFontSize);
window.onload = function() {
    AdjustFontSize();
};

function AdjustFontSize(){
    var w = document.getElementById("MCDU_SCREEN").style.width;
    var h = document.getElementById("MCDU_SCREEN").clientHeight;

    document.body.style.fontSize = h/22 + "px";
}


function makeString24(inputstring){
    var modString = String(inputstring + "                        ").slice(0, 24);
    return modString.toUpperCase();
}


var MCDU_LastMessageReceived = 10;

$(document).ready(function() {
    //noinspection JSUnusedLocalSymbols
    var refresh_aircraft_id = setInterval(function() {
        if (MCDU_LastMessageReceived >= 20) {
            MCDU_LastMessageReceived = 10
        }
        MCDU_LastMessageReceived = MCDU_LastMessageReceived + 1;
        UpdateScreen();
        if($('#MCDU_SCREEN').data('mcdu-number') == '2')
            ff.Get('Aircraft.FMGS.MCDU2', MCDUData);
        else
            ff.Get('Aircraft.FMGS.MCDU1', MCDUData);
    }, 300);
});

//var test = 0;
function MCDUData(data){
    localMode = "ONLINE";
    DisplayLines1 = ConvertChars(data.DisplayLines1);
    DisplayLines2 = ConvertChars(data.DisplayLines2);
    DisplayLines3 = ConvertChars(data.DisplayLines3);
    DisplayLines4 = ConvertChars(data.DisplayLines4);
    DisplayLines5 = ConvertChars(data.DisplayLines5);
    DisplayLines6 = ConvertChars(data.DisplayLines6);
    DisplayLines7 = ConvertChars(data.DisplayLines7);
    DisplayLines8 = ConvertChars(data.DisplayLines8);
    DisplayLines9 = ConvertChars(data.DisplayLines9);
    DisplayLines10 = ConvertChars(data.DisplayLines10);
    DisplayLines11 = ConvertChars(data.DisplayLines11);
    DisplayLines12 = ConvertChars(data.DisplayLines12);
    DisplayLines13 = ConvertChars(data.DisplayLines13);
    DisplayLines14 = ConvertChars(data.DisplayLines14);
    scratchPad = DisplayLines14;
    DisplayAttrs1 = data.DisplayAttrs1;
    DisplayAttrs2 = data.DisplayAttrs2;
    DisplayAttrs3 = data.DisplayAttrs3;
    DisplayAttrs4 = data.DisplayAttrs4;
    DisplayAttrs5 = data.DisplayAttrs5;
    DisplayAttrs6 = data.DisplayAttrs6;
    DisplayAttrs7 = data.DisplayAttrs7;
    DisplayAttrs8 = data.DisplayAttrs8;
    DisplayAttrs9 = data.DisplayAttrs9;
    DisplayAttrs10 = data.DisplayAttrs10;
    DisplayAttrs11 = data.DisplayAttrs11;
    DisplayAttrs12 = data.DisplayAttrs12;
    DisplayAttrs13 = data.DisplayAttrs13;
    DisplayAttrs14 = data.DisplayAttrs14;
    GotMCDUData = 1;
    MCDU_LastMessageReceived = 0.1;
    UpdateScreen();
}

function ConvertChars(inputstring){
    var outputString = inputstring.replace(/c/g, CharArrowRight);
    outputString = outputString.replace(/b/g, CharArrowLeft);
    outputString = outputString.replace(/d/g, CharSquare);
    outputString = outputString.replace(/e/g, CharDegree);
    outputString = outputString.replace(/f/g, CharArrowUp);
    outputString = outputString.replace(/g/g, CharArrowDown);

    //var outputString = inputstring;

    return outputString
}

function UpdateScreen() {
    if (MCDU_SecondsSelftesting == 6) {
        MCDU_SelfTestCompleted = 1
    }
    if (MCDU_SelfTestCompleted == 0) {
        localMode = "SELFTEST";
        WriteTextToLine(1, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(2, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(3, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(4, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(5, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(6, 'GGGGGGGGGGGGGGGGGGGGGGGG', '      PLEASE WAIT       ');
        WriteTextToLine(7, 'GGGGGGGGGGGGGGGGGGGGGGGG', '  SELF TEST MAX 10 SEC  ');
        WriteTextToLine(8, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(9, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(10, 'WWWWWWWWWWWWWWWWWWWWWWWW', '     NVAN EXTRACTOR     ');
        WriteTextToLine(11, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(12, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(13, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        WriteTextToLine(14, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
        MCDU_SecondsSelftesting = MCDU_SecondsSelftesting + 1;
    } else {
        if (MCDU_LastMessageReceived == 0) {
            localMode = "NOCONNECTION";
            WriteTextToLine(1, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(2, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(3, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(4, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(5, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(6, 'GGGGGGGGGGGGGGGGGGGGGGGG', '        FAILURE         ');
            WriteTextToLine(7, 'GGGGGGGGGGGGGGGGGGGGGGGG', '     NO CONNECTION      ');
            WriteTextToLine(8, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(9, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(10, 'WWWWWWWWWWWWWWWWWWWWWWWW', '     NVAN EXTRACTOR     ');
            WriteTextToLine(11, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(12, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(13, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            WriteTextToLine(14, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
            localOperation = 1;
        } else {
            if ((MCDU_LastMessageReceived) >= 10) {
                localMode = "NOCONNECTION";
                WriteTextToLine(1, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(2, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(3, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(4, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(5, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(6, 'GGGGGGGGGGGGGGGGGGGGGGGG', '        FAILURE         ');
                WriteTextToLine(7, 'GGGGGGGGGGGGGGGGGGGGGGGG', '     NO CONNECTION      ');
                WriteTextToLine(8, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(9, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(10, 'WWWWWWWWWWWWWWWWWWWWWWWW', '     NVAN EXTRACTOR     ');
                WriteTextToLine(11, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(12, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(13, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                WriteTextToLine(14, 'WWWWWWWWWWWWWWWWWWWWWWWW', '                        ');
                localOperation = 1;
            } else {
                WriteTextToLine(1, DisplayAttrs1, DisplayLines1);
                WriteTextToLine(2, DisplayAttrs2, DisplayLines2);
                WriteTextToLine(3, DisplayAttrs3, DisplayLines3);
                WriteTextToLine(4, DisplayAttrs4, DisplayLines4);
                WriteTextToLine(5, DisplayAttrs5, DisplayLines5);
                WriteTextToLine(6, DisplayAttrs6, DisplayLines6);
                WriteTextToLine(7, DisplayAttrs7, DisplayLines7);
                WriteTextToLine(8, DisplayAttrs8, DisplayLines8);
                WriteTextToLine(9, DisplayAttrs9, DisplayLines9);
                WriteTextToLine(10, DisplayAttrs10, DisplayLines10);
                WriteTextToLine(11, DisplayAttrs11, DisplayLines11);
                WriteTextToLine(12, DisplayAttrs12, DisplayLines12);
                WriteTextToLine(13, DisplayAttrs13, DisplayLines13);
                WriteTextToLine(14, DisplayAttrs14, DisplayLines14);
            }
        }
    }
}

function WriteTextToLine(Line, Attrs, Text){
    if (Text.length < 24) {
        return;
    }
    for (let i = 0, len = 24; i < len; i++) {
        let CurrentCell = "LCD_LINE" + Line + "_CHAR" + (i+1);
        var CharToSet = Text[i];
        if (CharToSet != 'undefined') {
            if (CharToSet.charCodeAt(0) == "65533") {
                CharToSet = "Â°"; // '\xB0'
            }
        }
        document.getElementById(CurrentCell).innerHTML = CharToSet;
    }

    for (let i = 0, len = 24; i < len; i++) {
        var cellColor = "white";
        var cellFontSize = fontSizeBig;
        let CurrentCell = "LCD_LINE" + Line + "_CHAR" + (i+1);

        if(Attrs[i]=="W"){
            cellColor = colorWhite;
            cellFontSize = fontSizeBig;
        }
        if(Attrs[i]=="w"){
            cellColor = colorWhite;
            cellFontSize = fontSizeSmall;
        }
        if(Attrs[i]=="G"){
            cellColor = colorGreen;
            cellFontSize = fontSizeBig;
        }
        if(Attrs[i]=="g"){
            cellColor = colorGreen;
            cellFontSize = fontSizeSmall;
        }
        if(Attrs[i]=="B"){
            cellColor = colorBlue;
            cellFontSize = fontSizeBig;
        }
        if(Attrs[i]=="b"){
            cellColor = colorBlue;
            cellFontSize = fontSizeSmall;
        }
        if(Attrs[i]=="M"){
            cellColor = colorMagenta;
            cellFontSize = fontSizeBig;
        }
        if(Attrs[i]=="m"){
            cellColor = colorMagenta;
            cellFontSize = fontSizeSmall;
        }
        if(Attrs[i]=="Y"){
            cellColor = colorYellow;
            cellFontSize = fontSizeBig;
        }
        if(Attrs[i]=="y"){
            cellColor = colorYellow;
            cellFontSize = fontSizeSmall;
        }
        if(Attrs[i]=="A"){
            cellColor = colorAmber;
            cellFontSize = fontSizeBig;
        }
        if(Attrs[i]=="a"){
            cellColor = colorAmber;
            cellFontSize = fontSizeSmall;
        }
        if(Attrs[i]=="R"){
            cellColor = colorRed;
            cellFontSize = fontSizeBig;
        }
        if(Attrs[i]=="r"){
            cellColor = colorRed;
            cellFontSize = fontSizeSmall;
        }
        if(Attrs[i]=="X"){
            cellColor = colorGrey;
            cellFontSize = fontSizeBig;
        }
        if(Attrs[i]=="x"){
            cellColor = colorGrey;
            cellFontSize = fontSizeSmall;
        }

        document.getElementById(CurrentCell).style.color = cellColor;
        document.getElementById(CurrentCell).style.fontSize = cellFontSize;
    }
}

function GetTextFromLine(Line,Position){
    var Output = "";
    if(Line==1){
        Output = DisplayLines1;
    }
    if(Line==2){
        Output = DisplayLines2;
    }
    if(Line==3){
        Output = DisplayLines3;
    }
    if(Line==4){
        Output = DisplayLines4;
    }
    if(Line==5){
        Output = DisplayLines5;
    }
    if(Line==6){
        Output = DisplayLines6;
    }
    if(Line==7){
        Output = DisplayLines7;
    }
    if(Line==8){
        Output = DisplayLines8;
    }
    if(Line==9){
        Output = DisplayLines9;
    }
    if(Line==10){
        Output = DisplayLines10;
    }
    if(Line==11){
        Output = DisplayLines11;
    }
    if(Line==12){
        Output = DisplayLines12;
    }
    if(Line==13){
        Output = DisplayLines13;
    }
    if(Line==14){
        Output = DisplayLines14;
    }

    return Output.substr(Position, Position) + "\nCharcode: " + Output.charCodeAt(Position);
}