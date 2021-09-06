
function biggerFont() {
    var size =parseInt(document.getElementById("textarea").style.fontSize);
    size +=2;
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
    function increaseBytime() {
        setInterval(biggerFont, 500);
    }
    function changeBackgroundImage() {
        if(document.getElementById('idcheckbox').checked) {
        document.body.style.backgroundImage = "url('hundred-dollar-bill.jpg')";
        }
       else{
            document.body.style.backgroundImage =""; 
        }
      }

      function wordgreater5(){
        const textArea1=document.getElementById("textarea");
        const originalText = textArea1.value;
        let temp = "";
        let otherWord = "";
        for(let i = 0; i < originalText.length; ++i) {
            let letter = originalText.substring(i, i+1);
            otherWord += letter;
            if(letter == ' ' || letter == '\n' || i >= originalText.length-1) {
                if(otherWord.trim().length >= 5)
                otherWord = "Malkovitch ";
                    temp += otherWord;
                    otherWord = "";
            }
        }
        textArea1.value = temp;
    }
    