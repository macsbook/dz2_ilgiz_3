const box = document.querySelector('.box')
const Start = document.querySelector('.Start')
const Stop = document.querySelector('.Stop')



let leftPos = 0;
let topPos = 0;

function move() {
    if(leftPos < 400 && topPos === 0) {
        leftPos += 20;
        box.style.left = `${leftPos}px`;
        setTimeout(() => {
            move();
        }, 100);
    }  else if (leftPos >= 400 && topPos < 300 ) {
        topPos += 20;
        box.style.top = `${topPos}px`;
        setTimeout(() => {
            move();
        }, 100);
    }  else if (leftPos > 0 && topPos >= 280) {
        leftPos -= 20;
        box.style.left = `${leftPos}px`;
        setTimeout(() => {
            move();
        }, 100)
    } else if (leftPos === 0 && topPos > 0) {
        topPos -= 20;
        box.style.top = `${topPos}px`;
        setTimeout(() => {
            move();
        }, 100)
    }
}
move()





let num = 0;
Start.addEventListener('click',() => {
    let inter = setInterval( () => {
        num ++
        console.log(num)
        },500
    )
    Stop.addEventListener('click',() => {
        setTimeout(() => {clearInterval(inter)})
    })
})

