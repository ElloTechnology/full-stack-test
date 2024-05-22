import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import fileMerger from "./utils/fileMerger.js";
import Query from "./resolvers/Query.js";

// Check if file exits. If not, create a new file called data.json inside the resource folder
// data.json contains data from provided resource files combined into one

const filename = fileURLToPath(import.meta.url);
const dir = dirname(filename);
const filePathOne = resolve(dir, "../resources/a_color_of_his_own.json");
const filePathTwo = resolve(dir, "../resources/fishing_in_the_air.json");
const filePath = resolve(dir, "../resources/data.json");

if (!existsSync(filePath)) {
    (async () => {
        await fileMerger(filePathOne, filePathTwo);
    })()
}

const server: ApolloServer = new ApolloServer({
    typeDefs: readFileSync(resolve(dir, './schema.graphql'), "utf-8"),
    resolvers: {
        Query,
    }
});

// If port not provided, default to 3000
const PORT = 3000 | +process.env.PORT;

await startStandaloneServer(server, {
    listen: { port: PORT }
});

console.log(`Server listening on port: ${PORT}`);