var HEX_Output = document.getElementById('hex-color-output');
var WindowColorHEX = document.getElementById('hex-color-box');
var HASH = '#';
var HEX_Color = HASH + "000000";
HEX_Output.innerText = HEX_Color;
WindowColorHEX.style.backgroundColor = HEX_Color;

function TryGenerateHEX() {
    var Hexadecimal_Seq = '0123456789ABCDEF';

    var Result = '';
    for (var n = 0; n < 6; n++) {
        Result += Hexadecimal_Seq[Math.floor(Math.random() * Hexadecimal_Seq.length)];
    }

    HEX_Color = HASH + Result;

    // var random = Math.random();
    // HEX_Output.innerText = Hexadecimal_Seq;
    // HEX_Output.innerText = Result;
    HEX_Output.innerText = HEX_Color;
    WindowColorHEX.style.backgroundColor = HEX_Color;
}
