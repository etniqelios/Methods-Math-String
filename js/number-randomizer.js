function GetRandomNumber() {
        var minLenght = document.getElementById('number-value-1').value;
        var maxLenght = document.getElementById('number-value-2').value;

        var output = document.getElementById('student-number-output');
        var Result = '';

        // var SpecialNumber = document.getElementById('special-numbers').value;
        // array = SpecialNumber.split("");


        if (minLenght < 1 || maxLenght < 1) {
            Result = "Can't be zero or lower";
            console.log(Result);
            output.innerHTML = `<span style="color: red;">` + Result + `</span>`;
            return 0;
        } else if (minLenght > maxLenght) {
            Result = "Lower do not be higher than high number.";
            console.log(Result);
            output.innerHTML = `<span style="color: red;">` + Result + `</span>`;
            return 0;
        }

        var RandomPool = [];

        for (var n = minLenght;  n <= maxLenght; n++) {
            RandomPool[n] = n;
        }

        for (var i = 0; i < 1; i++) {
            Result = RandomPool[Math.floor(Math.random() * RandomPool.length)];
        }

        if (Result == undefined) {
            Result = 'Happy number: nobody comes to answer test!';
        }

        output.innerHTML = `<span style="color: green;">` + Result + `</span>`;
        console.log(RandomPool);
        // console.log(array);
        console.log(Result);
}
