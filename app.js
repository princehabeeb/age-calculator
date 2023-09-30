const input = document.querySelector('.input');
const btn = document.querySelector('.btn');


btn.addEventListener('click', function () {
    // console.log(input.value);

    let thisYear  = new Date().getFullYear();
    const age = thisYear - input.value;

    alert(age);
});


// let myDate = new Date().getFullYear();


// console.log(myDate);