function manageArgs(process: NodeJS.Process, argscommands: any, log: Boolean) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        const func = argscommands["default"];
        if (func === undefined) {
            if(log){
                console.log("\x1b[1;31m"+"no default command put it will be the normal way")
            }
        } else if (log) {
            console.log("\x1b[1;32m" + "Default mode");
            func()
        }
        
    } else {
        if (args[0] in argscommands) {
            const func = argscommands[args[0]];
            func();
        } else {
            console.log("Invalid command.");
        }
    }
}

module.exports = manageArgs;