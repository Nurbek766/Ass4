function getCheckboxValuesForLoop(html_collection){
    let price = 0;
    for (let i = 0; i < html_collection.length; i++) {
        if (html_collection[i].checked) {
            price = price + Number(html_collection[i].value)
        }
    }
    return price;
}
function calculate(){

    let price = Number(document.getElementById("cost").value);

    const nam = document.getElementById("nam").value;

    var education = Number(document.getElementById("education").value);
    price *= education;
    console.log(price);//+
    
    var networth = Number(document.getElementById("networth").value);
    price *= networth;
    console.log(price);//*

    var caste = Number(document.getElementById("caste").value);
    price += caste;
    console.log(price);//+

    var skills = document.getElementsByName("myCheck");
    price += getCheckboxValuesForLoop(skills);
    console.log(price);

    var age = Number(document.getElementById("myAge").value);
    price *= age;
    console.log(price);

    var reputation = document.getElementsByName("myReputation");
    price += getCheckboxValuesForLoop(reputation);
    

    const loveletter = document.getElementById("text").value;


    document.getElementById("submit").innerHTML = `The price for your bride is ${nam} ,${price} ,${loveletter}`;
    console.log(price);
}