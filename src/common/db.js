import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = 'mongodb+srv://cristian_jerez:XghvNORpPZ6k8wPf@eva-u3-express.xzavx.mongodb.net/?retryWrites=true&w=majority&appName=eva-u3-express';

export const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
}
})

export default client;