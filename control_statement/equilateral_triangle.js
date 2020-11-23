function star(line) {
    const queue = [];
    let star = '*';

    for (let i = 1, j = 1; i < line * 2; i += 2) {
        queue.push((' ').repeat(line - j) + star.repeat(i));
        j += 1;
    }

    return queue.join('\n');

}

console.log(star(5));