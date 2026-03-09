import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message?.trim();

    if (!message) {
      return Response.json(
        { reply: "Please enter a message." },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-5.2",
      input: message,
    });

    return Response.json({
      reply: response.output_text || "No response returned.",
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return Response.json(
      { reply: "Something went wrong while contacting the AI." },
      { status: 500 }
    );
  }
}