export async function POST(request: Request) {
  const body = await request.json();
  const message = body.message || "";

  return Response.json({
    reply: `Fake AI says: You said "${message}"`,
  });
}
