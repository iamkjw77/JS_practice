function star(line) {
    const queue = [];
    let star = '*';

    for (let i = 1; i <= line; i++) {
        queue.push(star.repeat(i));
    }

    return queue.reverse().join('\n');
}

console.log(star(5));