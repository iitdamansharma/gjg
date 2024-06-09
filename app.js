const getcolor = () =>{
    //  Here I am write the code for changine the color of website you know
     //hex code 
     const randomNumber = Math.floor(Math.random()*16777215);
     const randomcode = "#" +randomNumber.toString(16);
     document.body.style.backgroundColor = randomcode;
    // console.log(randomNumber,randomcode); this is show that how your random number is genetated and hexadecimal number is generated in the is case you know. 
    document.getElementById("color-code").innerText = randomcode;
    navigator.clipboard.writeText(randomcode)
} 
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
//Note we have to type of call event call and inite call you know. 
//init call function is called you know when page is loading just after that or say that when our.
//Event function is colled we hober on that and when we do clik on them this is the differen between init call function.
getcolor();