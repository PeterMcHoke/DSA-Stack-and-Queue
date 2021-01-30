'use stict'

const Queue = require('./Queue')
//const DoubleQueue = require('./DoubleQueue')


function peek(queue) {
    if (queue.first === null) {
        console.log('Queue is empty')
        return null;
    }
    else return queue.first.value
}

function isEmpty(queue) {
    return !queue.first;
}

function display(queue) {
    let currNode = queue.first;
    let order = '';
    while (currNode !== null) {
        order+= `${currNode.value} `;
        currNode = currNode.next;
    }
    console.log(order);
    return order;
}

function pairDancers(dancers) {
    const mQueue = new Queue();
    const fQueue = new Queue();
    dancers.forEach(dancer => {
        if (dancer[0] === 'M') {
            mQueue.enqueue(dancer.split(' ')[1])
        }
        else {
            fQueue.enqueue(dancer.split(' ')[1])
        }
    })
    while (!!mQueue.first && !!fQueue.first) {
        console.log(`Male dancer ${mQueue.dequeue()} will be dancing with female dancer ${fQueue.dequeue()}`)
    }
    while (!!mQueue.first) {
        console.log(`Unfortunatley, ${mQueue.dequeue()} couldn't find a dancing partner.`)
    }
    while (!!mQueue.first) {
        console.log(`Unfortunatley, ${mQueue.dequeue()} couldn't find a dancing partner.`)
    }
    
    return 0;

}

function ophidianBank(queue) {
    while (!!queue.first) {
        let person = queue.dequeue();
        let random = Math.random();
        if (random < .25) {
            queue.enqueue(person);
            console.log(`${person} paperwork isn't quite right, and moved back to the end of the queue`)
        } else {
            console.log(`${person} served`);
        }
    }
    console.log(`Served everybody`)
}


function main() {
    const starTrek = new Queue();
    starTrek.enqueue('Kirk')
    starTrek.enqueue('Spock')
    starTrek.enqueue('Uhura')
    starTrek.enqueue('Sulu')
    //Testing pairing dancers
    pairDancers([
        'F Jane',
        'M Frank',
        'M John',
        'M Sherlock',
        'F Madonna',
        'M David',
        'F Beyonce'
    ])
    ophidianBank(starTrek);
}

main();