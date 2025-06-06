import fs from "fs";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"; // Helps with chunking
import { NextResponse } from "next/server";

export async function POST(request) {
    var res="";
    const q=await request.json()
 try{
     
  async function processTxt(filePath) {
    const text = fs.readFileSync(filePath, "utf-8");
  
    // Split text into smaller chunks to improve processing
    const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 500, chunkOverlap: 100 });
    const chunks = await splitter.createDocuments([text]);
  
    return chunks.map(chunk => chunk.pageContent).join("\n\n"); // Merge chunks into a single prompt
  }
  
  async function run() {
    const filePath = "info.txt"; // Update with actual file path
    const fullContext = await processTxt(filePath); // Get combined context from file
  
    const model = new ChatGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_API_KEY,
      model: "gemini-1.5-flash",
      temperature: 0.3,
    });
  
    const prompt = `Use the following information as context:\n\n${fullContext}\n\nNow, assume yourself as an assistant of me (Aman Mourya).Do not answer anything beyond the context that is provided to you. Also do not answer inappropriate questions about me. Answer the following question about me: ${q.question}`;
    res = await model.invoke([new HumanMessage(prompt)]);
    
  }
  
  await run();
  return NextResponse.json({response:res})
 }catch(err){
    return NextResponse.json({error:`some error occurred ${err}`})
 }
 
}
