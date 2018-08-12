function Person(name, surname, dob, car) {

    this.name = name;
    this.surname = surname;
    this.dob = dob;
    this.car = car;

    this.ofAge = function () {

        var dobSplit = this.dob.split('-');
        var dobCast = new Date(dobSplit[0], dobSplit[1] - 1, dobSplit[2]);

        var minAge = 18;
        var tempDate = new Date(dobCast.getFullYear() + minAge, dobCast.getMonth()-1, dobCast.getDate());

        return (tempDate <= new Date());

    }

    this.fullName = function () {

        var fullName = this.name + ' ' + this.surname;

        return fullName;

    }

}

function Car(model, link) {

    this.model = model;
    this.link = link;

    this.hyperLink = function () {

        var str = this.model + 's website';
        var hyperLink = str.link(this.link);
        return hyperLink;

    }

}

window.onload = function () {

    var cars = [
        new Car('Volvo', 'https://www.volvocars.com/hr'),
        new Car('Dacia', 'https://www.dacia.hr'),
        new Car('Range Rover', 'https://croatia.landrover.com'),
        new Car('Lada', 'https://www.lada.ru/en/')
    ];

    var select = document.getElementById('car');

    for (var i = 0; i < cars.length; i++) {

        var option = document.createElement("option");
        option.value = cars[i].link;
        option.text = cars[i].model;
        select.add(option);

    }

}

function printTxt() {

    var select = document.getElementById('car');

    var c = new Car(
        select.selectedOptions[0].text,
        select.selectedOptions[0].value
        );

    var p = new Person(

        document.getElementById('name').value,
        document.getElementById('surname').value,
        document.getElementById('dob').value,
        c

    );

    if (p.ofAge()) {
        document.getElementById('text').innerHTML =
            p.fullName() + ' can buy ' + p.car.model + ' at: ' + p.car.hyperLink();
    } else {
        document.getElementById('text').innerText =
            p.fullName() + ' cannot buy ' + p.car.model;
    }

}