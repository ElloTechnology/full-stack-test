import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { existsSync } from "node:fs";
import fileMerger from "./utils/fileMerger";
import Query from "./resolvers/Query";
import Book from "./resolvers/Book";
import Page from "./resolvers/Page";

// Check if file exits. If not, create a new file called data.json inside the resource folder
// data.json contains data from provided resource files combined into one

if (!existsSync("../resources/data.json")) {
    async () => {
        await fileMerger("../resources/a_color_of_his_own.json", "../resources/fishing_in_the_air.json");
    }
}

const server: ApolloServer = new ApolloServer({
    typeDefs: './schema.graphql',
    resolvers: {
        Query,
        Book,
        Page
    }
});

// If port not provided, default to 3000
const PORT = 3000 | +process.env.PORT;

await startStandaloneServer(server, {
    listen: { port: PORT }
});

console.log(`Server listening on port: ${PORT}`);