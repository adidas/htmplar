/**
 * parse-arguments
 **/

const createCliArgs = commands => {
    const cli = [];
    let cmd = '';

    if (typeof commands === 'object' && commands !== null) {
        Object.keys(commands).forEach(key => {
            cli.push(`--${key} ${commands[key]}`);
        });

        cmd = cli.join(' ');
    }

    return cmd;
};

module.exports = {
    createCliArgs
};