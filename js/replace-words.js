function Replace() {
    var ContentText = document.getElementById("textarea-1").textContent;
    var Input_1 = document.getElementById("input-1-1").value;
    var Input_2 = document.getElementById("input-2-1").value;
    var Output_1 = document.getElementById("output-1-2").value;
    var Output_2 = document.getElementById("output-2-2").value;

    var OutputResult = document.getElementById("output-replaced-words");

    var Result = '';

    Result = ContentText.replace(Input_1, Output_1);
    Result = Result.replace(Input_2, Output_2);

    console.log(ContentText);
    OutputResult.innerText = Result;
}
