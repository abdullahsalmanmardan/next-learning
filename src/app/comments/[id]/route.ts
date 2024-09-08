import { comments } from "../data";

// lec 36 dynamic route handlers /comments/:id

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comments);
}

// lec 37 patch request.
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  let selectedComment = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[selectedComment].text = text;
  return Response.json(comments);
}

// delete request.
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  let selectedComment = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  let updatedComments = comments.filter(
    (comment) => comment.id !== selectedComment
  );
  return Response.json(updatedComments);
}
