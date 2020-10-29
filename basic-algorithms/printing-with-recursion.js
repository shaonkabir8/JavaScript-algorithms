// Sometimes in code interview we could have been asked to print some strings without using any kind of loop. We can use recursion there. Here is a simple demonstration how we can print something multiple times without using any kind of loop

function recursivePrint(n, message) {
    console.log(`${message}`);
    n = n - 1;
    if (n !== 0) {
        recursivePrint(n, message);
    }

}
recursivePrint(5, "Hello, World!");