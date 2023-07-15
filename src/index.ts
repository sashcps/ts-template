import { readdir } from "fs/promises";

function work(): Promise<string[]> {
    return readdir(__dirname);
};

(async () => {
    const results = await work();
    console.log(`"${__dirname}" files:`);
    console.log(results.forEach((name, i) => console.log(`${i + 1}) ${name}`)));
})().catch((e) => {
    console.error(e);
});
