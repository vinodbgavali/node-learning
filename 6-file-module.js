const fs = require("fs");

const first = fs.readFile("./Files/file1.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
    }
    const first = result;

    fs.readFile("./Files/file2.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        fs.writeFile("./Files/result.txt", `result of file -> ${first} + ${second}\n`, {flag:"a"}, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);

        })

    })

});



