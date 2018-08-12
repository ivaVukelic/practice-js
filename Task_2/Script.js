function selected(e) {

    var container = document.getElementById('container');

    var box = document.createElement('div');
    box.style.backgroundColor = e.value;

    box.classList.add('box');

    var areSame = false;

    for (var i = 0; i < container.children.length; i++) {

        if (container.children[i].style.backgroundColor == box.style.backgroundColor) {
            areSame = true;
            break;
        }
    }

    if (!areSame) {

        var textBox = document.createElement('div');
        textBox.classList.add('textBox');
        textBox.textContent = e.value;
        box.appendChild(textBox);
        box.draggable = true;
        box.ondragstart = function (e) {
            e.dataTransfer.setData('color', e.target.style.backgroundColor);
        }
        container.appendChild(box);


    }
}

function randomize(e) {

    var current;

    for (var i = 0; i < e.children.length; i++) {
        
        current = e.children[i];

        if (current.children.length != 0) {

            randomize(current);

        }

        current.style.backgroundColor = getRandomColor();
        current.style.transform = "rotate(" + random(360) + "deg)";
        current.style.borderRadius = String(random(100) + '%');

    }
}

function getRandomColor() {

    return "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";

}

function random(max) {

    return Math.floor(Math.random() * max);

}

function drop(e) {

    e.preventDefault();
    var data = e.dataTransfer.getData('color');
    e.target.style.backgroundColor = data;

    e.target.appendChild(document.createElement('div'));

}

function dragOver(e) {

    e.preventDefault();

}