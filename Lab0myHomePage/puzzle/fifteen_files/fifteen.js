var emptySquare = {
    x: 300,
    y: 300
};

function setBackGroundPosition(x, y) {
    return -x + 'px ' + (-y) + 'px';
}


function getPuzzlePieces() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    return divs;
}

var init = function () {
    var divs = getPuzzlePieces();

    // initialize each piece

    for (var i = 0; i < (divs.length); i++) {

        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);
        var div = divs[i];

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        div.id.backgroundPosition = setBackGroundPosition(x, y);
        // store x and y for later
        div.x = x;
        div.y = y;
        // div.id = parseInt(x) / 100 + "_" + y / 100;
    }
};

init();

var findEmptySquare = true;

var getEmptyNeighbor = function (x, y) {
    var rows = [0, 0, 100, -100];
    var columns = [-100, 100, 0, 0];
    for (let i = 0; i < 4; i++) {
        var new_x = (x + rows[i]);
        var new_y = (y + columns[i]);


        if ((new_x >= 0 && new_x < 400) && (new_y >= 0 && new_y < 400)) {
            if (new_x == emptySquare.x && new_y == emptySquare.y) {
                findEmptySquare = true;
                return;
            }
        }
    }
    findEmptySquare = false;
};


var changePosition = function (div1, div2) {
    var temp = {};
    temp.x = $(div1).css("left");
    temp.y = $(div1).css("top");
    $(div1).css("left", $(div2).css("left"));
    $(div1).css("top", $(div2).css("top"));
    $(div2).css("left", temp.x);
    $(div2).css("top", temp.y);
    findEmptySquare = false;
};


var shuffle = function () {
    let divs = getPuzzlePieces();
    for (let i = 1; i < 53; i++) {
        let element1 = Math.floor(Math.random() * 15);
        let element2 = Math.floor(Math.random() * 15);


        let div1 = divs[element1];
        let div2 = divs[element2];
        changePosition(div1, div2);
    }
};


var moveToEmptySquare = function (x, y, div) {
    const {y: y1, x: x1} = emptySquare;
    $(div).css("left", x1);
    $(div).css("top", y1);
    emptySquare.x = x;
    emptySquare.y = y;
    findEmptySquare = false;
};


$('#shufflebutton')
    .click(shuffle);


$('.puzzlepiece')
    .mouseover(function (event, value) {
        var position = [];
        position[0] = parseInt($(this).css('left'));
        position[1] = parseInt($(this).css('top'));
        getEmptyNeighbor(position[0], position[1]);

        if (findEmptySquare === true) {
            $(this).addClass('movablepiece');
        } else {
            $(this).removeClass('movablepiece');
        }
    });


$('.puzzlepiece')
    .click(function (event, value) {
        var position = [];
        position[0] = parseInt($(this).css('left'));
        position[1] = parseInt($(this).css('top'));
        getEmptyNeighbor(position[0], position[1]);

        if (findEmptySquare === true) {
            moveToEmptySquare(position[0], position[1], this);
        }

    });
