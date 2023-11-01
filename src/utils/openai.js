import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI,
  dangerouslyAllowBrowser:true,
});

export default openai;
