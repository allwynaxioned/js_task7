/* ***************************** onclick bottles events ***************************** */

var bottles = document.querySelectorAll("li");
var remainDisplay = document.querySelector(".remained > span");
var remained = document.querySelector(".remained");
var percentage = document.querySelector(".percentage");

bottles.forEach(element => {
    element.addEventListener('click', () => {

        const index = Array.prototype.indexOf.call(bottles, element);

        bottles.forEach(color => {
            color.style.background = "#fff";
            color.style.color = "#2d4dc4";
        });
        for(let i=0; i <= index; i++){
            bottles[i].style.background = "#6bb3fa";
            bottles[i].style.color = "#fff";
        }
        
        let literValue = 2-((index+1)*.25);
        let remainedValue = (literValue*100)/2;
        let percentValue = 100-remainedValue;
        switch(index){
            case 0:
                remainDisplay.innerHTML = literValue+"L";
                percentage.innerHTML = percentValue+"%";
                remained.style.height = remainedValue+"%";
                percentage.style.height = percentValue+"%";
                break;
            case 1:
                remainDisplay.innerHTML = literValue+"L";
                percentage.innerHTML = percentValue+"%";
                remained.style.height = remainedValue+"%";
                percentage.style.height = percentValue+"%";
                break;
            case 2:
                remainDisplay.innerHTML = literValue+"L";
                percentage.innerHTML = percentValue+"%";
                remained.style.height = remainedValue+"%";
                percentage.style.height = percentValue+"%";
                break;
            case 3:
                remainDisplay.innerHTML = literValue+"L";
                percentage.innerHTML = percentValue+"%";
                remained.style.height = remainedValue+"%";
                percentage.style.height = percentValue+"%";
                break;
            case 4:
                remainDisplay.innerHTML = literValue+"L";
                percentage.innerHTML = percentValue+"%";
                remained.style.height = remainedValue+"%";
                percentage.style.height = percentValue+"%";
                break;
            case 5:
                remainDisplay.innerHTML = literValue+"L";
                percentage.innerHTML = percentValue+"%";
                remained.style.height = remainedValue+"%";
                percentage.style.height = percentValue+"%";
                break;
            case 6:
                remainDisplay.innerHTML = literValue+"L";
                percentage.innerHTML = percentValue+"%";
                remained.style.height = remainedValue+"%";
                percentage.style.height = percentValue+"%";
                break;
            case 7:
                remainDisplay.innerHTML = literValue+"L";
                percentage.innerHTML = percentValue+"%";
                remained.style.height = remainedValue+"%";
                percentage.style.height = percentValue+"%";
                break;
            }

            if(remainDisplay.textContent == "0L")
            {
                remained.style.fontSize = "0px";
                remainDisplay.style.fontSize = "0px";
            }
            else
            {
                remained.style.fontSize = "12px";
                remainDisplay.style.fontSize = "18px";
            }
    });
});



/* ***************************** onclick bottles events end ***************************** */
