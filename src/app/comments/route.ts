import { comments } from "./data";

// lec39
export async function GET() {
  return Response.json(comments);
}

// handle post request

export async function POST(request: Request) {
  const newComment = await request.json();

  const updatedComments = [...comments, newComment];

  return new Response(JSON.stringify(updatedComments), {
    headers: {
      "content-type": "application/json",
    },
    status: 201,
  });
}


