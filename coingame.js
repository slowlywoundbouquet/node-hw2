
console.log('Давайте сыграем в игру "Орёл или решка"\n')

const fs = require('fs')
const path = require('path')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let logs = `Игрок ввел \n`
let coin = 1+Math.round(Math.random())
const game = () => {
    readline.question('Орёл (1) или решка (2)? Напишите цифру \n', user_number => {
        user_number = parseInt(user_number)
        
        if (user_number === coin) {
            logs = `Игрок ввёл ${user_number} и выиграл \n`
            console.log(`Вы угадали! Поздравляю! :)`)
            fs.appendFile("logs.txt", logs, (err) => {
            if (err) throw Error(err)
            console.log('Результат игры записан')
            newGame()
            })
        } else {
            logs = `Игрок ввёл ${user_number} и проиграл \n`
            console.log(`Вы не угадали :(`)
            fs.appendFile("logs.txt", logs, (err) => {
            if (err) throw Error(err)
            console.log('Результат игры записан')
            newGame()
            })
        }        
    })
}

const newGame = () => {
    readline.question('Сыграем еще раз? Напишите "Да" или "Нет"\n', user_answer => {
        if (user_answer === 'Да' || user_answer === 'да') {
            game()
        } else {
            const file = path.join(__dirname, 'logs.txt')
            let logs = `--Новый игрок--\n`
            fs.appendFile(file, logs, (err) => {
                if (err) throw Error(err)
                console.log('Пока! Было приятно поиграть')
            })
            readline.close()
        }
})
}
game()