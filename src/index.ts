import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { existsSync, readFileSync } from "node:fs";

import fileMerger from "./utils/fileMerger.js";
import Query from "./resolvers/Query.js";
import pathBuilder from "./utils/pathBuilder.js";

// Check if file exits. If not, create a new file called data.json inside the resource folder
// data.json contains data from provided resource files combined into one

const filePathOne: string = pathBuilder("../resources/a_color_of_his_own.json", import.meta.url);
const filePathTwo: string = pathBuilder("../resources/fishing_in_the_air.json", import.meta.url);
const filePath: string = pathBuilder("../resources/data.json", import.meta.url);

if (!existsSync(filePath)) {
    (async () => {
        await fileMerger(filePathOne, filePathTwo);
    })()
}

const server: ApolloServer = new ApolloServer({
    typeDefs: readFileSync(pathBuilder('./schema.graphql', import.meta.url), "utf-8"),
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