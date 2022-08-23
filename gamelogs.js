const fs = require('fs')

fs.readFile('logs.txt', 'utf8', (err, data) => {
    if (err) throw Error(err)
    let logs = data.split('\n')
    
    let win = 0
    let lose = 0
    let sum = 0

    logs.forEach(element => {
        let word = element.split(' ')
        if (word[4] === 'проиграл') {
            lose++
        }
        else if (word[4] === 'выиграл') {
            win++
        }
        else {
            sum++
        }
    })

    let all_stat = win + lose
    let winrate = win / all_stat * 100
    let loserate = lose / all_stat * 100

    console.log(`Кол-во игр: ${all_stat}\n Кол-во побед: ${win}\n Кол-во поражений: ${lose}\n Процент побед: ${winrate} %\n Процент поражений: ${loserate} %`)
})