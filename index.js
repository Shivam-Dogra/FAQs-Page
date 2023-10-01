const accordian = document.querySelectorAll('.accordian');

accordian.forEach(a =>{

    var icon = a.querySelector('.icon');
    var ans = a.querySelector('.answers');
    a.addEventListener('click', ()=>{
        icon.classList.toggle('active');
        ans.classList.toggle('active');
    })
})
