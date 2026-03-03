const body = document.body;
const themeBtn = document.querySelector("#themeToggle")

console.log(themeBtn);



themeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode")
})


function setUpCounter(btnid, displayid) {
    let count = 0;

    const btn = document.getElementById(btnid);
    const display = document.getElementById(displayid);
    
    btn.addEventListener("click", function () {
        count++;
        display.innerText = count;
    })

}

setUpCounter("btn1", "count1");
setUpCounter("btn2", "count2");
setUpCounter("btn3", "count3");