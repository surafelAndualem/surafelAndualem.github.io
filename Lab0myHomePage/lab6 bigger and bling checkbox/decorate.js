
function biggerFont() {
    var size =parseInt(document.getElementById("textarea").style.fontSize);
    size += 12;
    document.getElementById("textarea").style.fontSize = size
    + "pt";
    }
    function greenAndBold() {
        if (document.getElementById('idcheckbox').checked) {
            document.getElementById('textarea').style.fontWeight = 'bold';
            document.getElementById('textarea').style.color = 'green';
            document.getElementById('textarea').style.textDecoration = 'underline';
        } else {
            document.getElementById('textarea').style.fontWeight = 'normal';
            document.getElementById('textarea').style.color = 'black';
            document.getElementById('textarea').style.textDecoration = 'none';
        }
    }