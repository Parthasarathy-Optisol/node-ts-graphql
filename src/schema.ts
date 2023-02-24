import {GraphQLSchema} from 'graphql';
import {buildSchema} from 'type-graphql';
import {join} from 'path'
import {resolverManager} from './resolvers/'

export async function buildGraphqlSchema():Promise<GraphQLSchema> {
    const resolvers = await resolverManager.getResolvers();
    if(!resolvers || resolvers.length === 0){
        return;
    }
    const schema:GraphQLSchema = await buildSchema({
        resolvers,
        emitSchemaFile : {path:join(process.cwd(),'schema.gql')}
    })
    return schema
}




export const typeDefs = `

type Book {
    title : String
    author : String
}

type Query {
    books : [Book]
}

`
