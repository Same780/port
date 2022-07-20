const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');
const hourNum = document.querySelector('.hours');
const minNum = document.querySelector('.minutes');
console.dir(hourNum);

function clock () {
    // Date - класс, получить текущую дату и время
    const time = new Date; // new - создает экземпляр класса
    let second = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hourDeg = time.getHours() * 30;
    sec.style.transform = `rotate(${second}deg)`;
    min.style.transform = `rotate(${minutes}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    setTimeout(clock, 1000);  // callback - функция обратного вызова
}
clock()

// let i = 0;
// function rec () { // замыкание
//     console.log(++i);
//     if(i < 5) {
//         rec(); // рекурсия
//     }
// }
// rec();

const links = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < links.length; i++) {
    const element = links[i];
    // element.onclick = function () { console.log("Привет!"); }
    element.addEventListener('click', function (e) {  
        // console.log(e);
        e.preventDefault(); //отмена действия по умолчанию
        // тег.classList.add('назавние класса') - добавляет класс
        // тег.classList.remove('назавние класса') - удаляет класс
        // тег.classList.contains('назавние класса') - проверяет наличие класса (true/false)
        // тег.classList.toggle('назавние класса') - добавляет или удаляет класс
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');         
        }

        this.classList.add("active");
        tabs[i].classList.add("active");
        console.log(links);
    })
}
console.log(links);


const span = document.querySelector(".tabsLink__span");
const h = document.querySelector(".stopwatch__hours");
const m = document.querySelector(".stopwatch__minutes");
const s = document.querySelector(".stopwatch__seconds");
const start = document.querySelector(".stopwatch__btn")

start.addEventListener("click", function () {
    if(start.innerHTML == "start"){
       start.innerHTML = "stop";
       span.classList.add("active")
       watch(this, 0)
    
    }
      else if(start.innerHTML == "stop") {
          start.innerHTML = "clear"
          span.classList.remove("active")
          span.classList.add("active_clear")
            
        }


         else {
          start.innerHTML = "start"
          span.classList.remove("active_clear")
          h.innerHTML = 0;
          m.innerHTML = 0;
          s.innerHTML = 0;
         }
})

function watch(el, i) {
     if (el.innerHTML == "stop") {

         if (i == 59) {
            i = 0
            s.innerHTML = i

            if (m.innerHTML == 59) {
                m.innerHTML = 0;
                h.innerHTML++;
            } else {
                m.innerHTML++
            }

            }
        else{
            i++;
            s.innerHTML = i
            
        }
        setTimeout(() =>{
           watch(el, i)
        }, 1000);
        }
    } 
    
    



