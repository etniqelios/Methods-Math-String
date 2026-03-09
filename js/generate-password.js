
function TryGeneratePass() {
    const Output = document.getElementById('password-output');
    const maxLenght = document.getElementById('max-lenght').value;


    var Numbers = '';
    var Symbols = '';

    const Info = document.getElementById('password-info');

    const ShowSequence = document.getElementById('sequence-gen-show');

    var isLettersActive = document.getElementById('letters-enabled').checked;

    var isNumbersActive = document.getElementById('numbers-enabled').checked;

    var isSymbolsActive = document.getElementById('symbols-enabled').checked;

    var isEnabledNumber = document.getElementById('enable-huge-gen').checked;


    var SelectLetterType = document.getElementById('select-option').value;

    var LettersOut = '';

    var Status = '';
    if (maxLenght >= 40 && isEnabledNumber == false) {
        Status = maxLenght + ' to many characters, your can BUMB...';
        Info.innerHTML = Status;
        return 0;
    }

    if (isLettersActive) {
        var Letters = 'abcdefghijklmnopqrstvwxyz';
        switch(SelectLetterType) {
            case '1':
                LettersOut = Letters.toLowerCase();
                break;
            case '2':
                LettersOut = Letters.toUpperCase();
                break;
            case '3':
                const LettersFirst = Letters.toLowerCase();
                const LettersSecond = Letters.toUpperCase();
                LettersOut = LettersFirst + LettersSecond;
                break;
            default:
                LettersOut = Letters;
                break;
        }
    } else {
        Letters = '';
    }

    if (isNumbersActive) {
        Numbers = '0123456789';
    } else {
        Numbers = '';
    }

    if (isSymbolsActive) {
        Symbols = '!@#$%';
    } else {
        Symbols = '';
    }


    if (!isLettersActive && !isNumbersActive && !isSymbolsActive) {
        Status = "choose first";
        Info.innerHTML = Status;
        return 0;
    }


    var Seq = LettersOut + Numbers + Symbols;


    var Result = '';
    for (var n = 0; n < maxLenght; n++) {
        Result += Seq[Math.floor(Math.random() * Seq.length)];
    }


    if (Result.length > 100) {
        Status = 'Hacker may cry...';
    } else if (Result.length > 22) {
        Status = 'massive';
    } else if (Result.length > 12) {
        Status = 'strong';
    } else if (Result.length > 8) {
        Status = 'middle';
    } else {
        Status = 'poor';
    }

    ShowSequence.innerText = Seq;
    Output.innerText = Result;
    Info.innerHTML = Status;
}
