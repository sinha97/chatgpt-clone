import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.MYCHATGPTAPIKEY,
})

const openai = new OpenAIApi(configuration);

export default openai;