/* ***************************** onclick bottles events ***************************** */

var bottles = document.querySelectorAll("li");

bottles.forEach(element => {
    element.addEventListener('click', (e) => {

        const index = Array.prototype.indexOf.call(bottles, element);

        bottles.forEach(color => {color.style.background = "#fff";});
        for(let i=0; i <= index; i++){
            bottles[i].style.background = "#6bb3fa";
        }
    });
});



/* ***************************** onclick bottles events end ***************************** */
