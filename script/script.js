let indicator1Button = document.getElementById('indicator1');
let indicator2Button = document.getElementById('indicator2');
let indicator3Button = document.getElementById('indicator3');
let indicatorLine1 = document.getElementById('indicatorLine1')
let indicatorLine2 = document.getElementById('indicatorLine2')
let indicatorLine3 = document.getElementById('indicatorLine3')


indicator1Button.addEventListener('click', ()=>{
    console.log("button1");

    indicatorLine1.style.background= "red";
    indicatorLine1.style.transition= ".2s";
    indicatorLine2.style.background= "var(--Grayish-Blue)";
    indicatorLine3.style.background= "var(--Grayish-Blue)";
})

indicator2Button.addEventListener('click', ()=>{
    console.log("button2");
    indicatorLine1.style.background= "var(--Grayish-Blue)";
    indicatorLine2.style.background= "red";
    indicatorLine2.style.transition= ".2s";
    indicatorLine3.style.background= "var(--Grayish-Blue)";
})

indicator3Button.addEventListener('click', ()=>{
    console.log("button3");

    indicatorLine1.style.background= "var(--Grayish-Blue)";
    indicatorLine2.style.background= "var(--Grayish-Blue)";
    indicatorLine3.style.background= "red";
    indicatorLine3.style.transition= ".2s";
})