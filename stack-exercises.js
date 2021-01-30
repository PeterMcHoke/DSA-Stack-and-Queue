'use stict'

const Stack = require('./Stack')

function display(stack) {
    let currNode = stack.top;
    if (currNode === null) {
        console.log('empty stack');
        return;
        }
    while (currNode !== null) {
        console.log(currNode.value);
        currNode = currNode.next;
    }
}

function peek(stack) {
    if (stack.top === null) {
        console.log('Stack is empty');    
        return ;
    }
    return stack.top.value
}

function isEmpty(stack) {
    return !stack.top;
}

function isPalindrome(string) {
    s = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    //We want to ignore the middle character if the length is odd
    //If it is odd, we will get the first half before the middle character because of Math.floor
    const firstHalfEnd = Math.floor((s.length)/2)-1; //we need to include this last index
    const secondHalfStart = Math.ceil(s.length/2);
    const stack = new Stack();
    for (let i = 0; i <= firstHalfEnd; i++){
        stack.push(s[i])
    }
    for (let j=secondHalfStart; j<s.length; j++){
        if (stack.pop() !== s[j])
            return false 
    }
    return true
}

function parenCheck(string) {
    if (!string.length) return null;
    const stack = new Stack();
    for (let i=0; i < string.length; i++) {
        if (string[i] === '(')
            stack.push('(')
        if (string[i] === ')') {
            if (isEmpty(stack)) {
                console.log('you are missing (')
                return false;
            }
            stack.pop();
        }
    }
    if (!isEmpty(stack)) {
        console.log('You are missing a )')
        return false;
    }
    return true;
}


function sort(stack) {
    const sorted = new Stack();
    while (!isEmpty(stack)) {
        let tmp = stack.pop();
        while (tmp > peek(sorted)) {
            stack.push(sorted.pop());
        }
        sorted.push(tmp);
    }
    return sorted;
}





function main() {
    const starTrek = new Stack();
    const empty = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    display(starTrek)
    //checking if is empty
    console.log('First element of the stack is', peek(starTrek));
    console.log(`The stack named empty is ${isEmpty(empty) ? `` : `not`} empty`);
    console.log(`The stack named starTrek is ${isEmpty(starTrek) ? `` : `not`} empty`);
    //checking if is Palindrome
    console.log(isPalindrome("dad"));
    console.log(isPalindrome("A man, a plan, a canal: Panama"));
    console.log(isPalindrome("1001"));
    console.log(isPalindrome("Tauhida"));
    //parenthesis check
    console.log(parenCheck('Hey what are you (doing)'))
    console.log(parenCheck('Hey what are you (doing'))
    console.log(parenCheck('Hey what are you doing)'))

    const numStack = new Stack();
    numStack.push(2);
    numStack.push(1);
    numStack.push(6);
    numStack.push(4);
    numStack.push(3);
    numStack.push(8);
    numStack.push(5);
    display(sort(numStack));
}

main()


