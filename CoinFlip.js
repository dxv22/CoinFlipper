let coinFlip = times => {
    let totals = {
        heads: 0,
        tails: 0
    }
    for (let i=0; i<times; i++) {
        let val = Math.random()
        if (val < 0.5) {
            console.log('You flipped a heads')
            totals.heads ++
        } else {
            console.log('You flipped a tails')
            totals.tails ++
        }
    }
    return `Total flips => Heads: ${totals.heads} Tails: ${totals.tails}`
}

// Run npm install prompt-sync in the terminal
const prompt = require('prompt-sync')({sigint: true})
let flipTimes = prompt('Enter number of flips: ')
console.log(coinFlip(flipTimes))