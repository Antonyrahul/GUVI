var Dog = /** @class */ (function () {
    function Dog(dogname) {
        this.dogName = dogname;
        var dogimg = document.createElement('img');
        dogimg.src = "dog.jfif";
        dogimg.onclick = this.showDogName();
        document.body.appendChild(dogimg);
    }
    Dog.prototype.showDogName = function () {
        var _this = this;
        return function () {
            alert(_this.dogName);
        };
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(catname) {
        this.catName = catname;
        var catimg = document.createElement('img');
        catimg.src = "cat.jfif";
        catimg.onclick = this.showCatName();
        document.body.appendChild(catimg);
    }
    Cat.prototype.showCatName = function () {
        var _this = this;
        return function () {
            alert(_this.catName);
        };
    };
    return Cat;
}());
function addDog() {
    var dogName = prompt("enter the dogs name");
    var dogObj = new Dog(dogName);
}
function addCat() {
    var catName = prompt("enter the cats name");
    var catObj = new Cat(catName);
}
