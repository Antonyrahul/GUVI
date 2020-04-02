
class Dog{
    dogName;
    constructor(dogname){
        this.dogName= dogname
        var dogimg = document.createElement('img');
        dogimg.src = "dog.jfif"
        dogimg.onclick = this.showDogName();
        document.body.appendChild(dogimg);
        

    }
    showDogName()
    {
        return ()=>{
            alert(this.dogName);
        }
    }
}

class Cat{
    catName;
    constructor(catname){
        this.catName= catname
        var catimg = document.createElement('img');
        catimg.src = "cat.jfif"
        catimg.onclick = this.showCatName();
        document.body.appendChild(catimg);
        

    }
    showCatName()
    {
        return ()=>{
            alert(this.catName);
        }
    }
}
function addDog()
{
    var dogName = prompt("enter the dogs name");
    var dogObj = new Dog(dogName);
}

function addCat()
{
    var catName = prompt("enter the cats name");
    var catObj = new Cat(catName);
}