let randNumber = Math.floor(Math.random() *100) +1
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')

btn.addEventListener('click',() => {
    const userGuess = input.value

    if (!userGuess || userGuess < 1) {
        result.innerText = 'yozing sonni 1 da 100 ni'
    } else if(userGuess == randNumber){
        result.innerText = 'tabriklayman sz toptiz'

        setTimeout(() => {
            andNumber = Math.floor(Math.random() *100) +1
            result.innerText = 'topgan son yangiladin! toping yana'
            input.value = ''
        }, 3000);

    } else if(userGuess < randNumber){
        result.innerText = 'katta'
    } else {
        result.innerText = 'kichkina'
    }
})



