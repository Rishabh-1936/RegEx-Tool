var textarea = document.getElementById('textarea');
var test_string = document.getElementById('test_string');
var output_window = document.getElementById('output-window');
var flag = document.getElementById('flag');
var output_heading = document.getElementById('output-heading');
var code1 = document.getElementById('code1');

//document.getElementById('output-window').innerHTML += textarea.value;
var reg_expression = "",
    test_expression = "";

// function output(field, regex) {
//     //output_window.innerHTML=
//     if (regex.test(field)) {
//         output_window.style.color = "blue";
//         output_window.innerHTML = "matched";
//     } else {
//         output_window.style.color = "blue";
//         output_window.innerHTML = "not";
//     }
// }
function code_window(regex, str = "") {

    var string = `
    const regex = ${regex} ;<br>
    const str = ${str} ;<br>
    let m;<br><br>
    
    while ((m = regex.exec(str)) !== null) {<br><br>
        // This is necessary to avoid infinite loops with zero-width matches<br><br>
        if (m.index === regex.lastIndex) {<br>
            regex.lastIndex++;<br>
        }<br><br><br>
        
        ` +
        "// The result can be accessed through the `m`-variable.<br><br>" +
        "m.forEach((match, groupIndex) => {<br>" +
        "    console.log(`Found match, group ${groupIndex}: ${match}`);<br>" +
        "});<br>" +
        "}<br>";
    code1.innerHTML = string;
}

function output(field = "", regex1, flag) {

    var regex = new RegExp(regex1, flag);
    var ans = regex.test(field);

    if (ans) {
        output_heading.innerHTML = "Matched";
        output_heading.className = "label label-success";
        output_window.style.color = "blue";
        output_window.innerHTML = "";
        regex.lastIndex = 0;
    } else {
        output_heading.innerHTML = "Not-Matched";
        output_heading.className = "label label-danger";
        output_window.style.color = "blue";
        output_window.innerHTML = "";
        regex.lastIndex = 0;
    }
    var exe = regex.exec(field);
    console.log(exe, "exe");
    output_window.innerHTML = exe.input;
    code_window(regex, field);
    //code_styling();
}




function clearOff(flag) {
    if (flag == 1) {
        output_heading.innerHTML = "Not-Matched";
        output_heading.className = "label label-danger";
    } else {
        output_heading.innerHTML = "";
    }
    output_window.innerHTML = "";
    regex.lastIndex = 0;
}

textarea.addEventListener('input', (e) => {
    reg_expression = e.target.value;
    if (reg_expression.length <= 1) {
        clearOff(reg_expression.length);
    } else {
        output(test_expression, reg_expression, flag.value);
    }

});
test_string.addEventListener('input', (e) => {
    test_expression = e.target.value;
    if (reg_expression.length <= 1) {

    } else {
        output(test_expression, reg_expression, flag.value);
    }

});

// function testCode(character) {
//     var s1 = document.getElementById("output-window");
//     var str = s1.innerHTML;
//     var newText = "";
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == character + '') {
//             newText += str.charAt(i).fontcolor("red");
//         } else {
//             newText += str[i];
//         }
//     }
//     s1.innerHTML = newText;
// }



// function code_styling() {

//     const regex = /[a-z]/g;
//     const str = '12dssds12d1';
//     let m;

//     while ((m = regex.exec(str)) !== null) {

//         // This is necessary to avoid infinite loops with zero-width matches

//         if (m.index === regex.lastIndex) {
//             regex.lastIndex++;
//         }


//         // The result can be accessed through the `m`-variable.

//         m.forEach((match, groupIndex) => {
//             testCode(match);
//             console.log(`Found match, group ${groupIndex}: ${match}`);
//         });
//     }
// }