var RGB_Output = document.getElementById('rgb-color-output');
var WindowColorRGB = document.getElementById('rgb-color-box');
RGB_Color = 'rgb(0, 0, 0)';
RGB_Output.innerText = RGB_Color;
WindowColorRGB.style.backgroundColor = RGB_Color;

function TryGenerateRGB() {
    RGB_Color = 'rgb(';
    var Result = [0, 0, 0];
    for (var n = 0; n < 3; n++) {
        Result[n] += Math.floor(Math.random() * 255 - 255);
        if (n == 2) {
            RGB_Color += Math.abs(Result[n]);

        } else {
            RGB_Color += Math.abs(Result[n]) + ',';
        }
    }
    RGB_Color += ')'
    // var random = Math.random();
    // HEX_Output.innerText = Hexadecimal_Seq;
    // HEX_Output.innerText = Result;
    RGB_Output.innerText = RGB_Color;
    WindowColorRGB.style.background = RGB_Color;
}
