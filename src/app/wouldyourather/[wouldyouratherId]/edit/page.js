import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function editCommentAction(formData) {
  "use server";

  const commentId = formData.get("commentId");
  const ratherId = formData.get("ratherId");
  const name = formData.get("name");
  const commentText = formData.get("comment");

  if (!name || !commentText) {
    console.error("Name and comment are required.");
    return;
  }

  await db.query(`UPDATE comment SET name = $1, comment = $2 WHERE id = $3`, [
    name,
    commentText,
    commentId,
  ]);

  revalidatePath(`/wouldyourather/${ratherId}`);

  redirect(`/wouldyourather/${ratherId}`);
}

export default async function EditCommentPage({ params, searchParams }) {
  const ratherId = params.wouldyouratherId;
  const commentId = searchParams.commentId;

  const ratherQuery = await db.query(
    "SELECT question FROM rather WHERE id = $1",
    [ratherId]
  );
  const question = ratherQuery.rows[0]?.question || "Question not found";

  const commentQuery = await db.query(
    "SELECT id, name, comment FROM comment WHERE id = $1 AND question_id = $2",
    [commentId, ratherId]
  );
  const comment = commentQuery.rows[0];

  return (
    <>
      <div className="main-content">
        <h2 className="edit-title">{question}</h2>

        <form action={editCommentAction} className="edit-container">
          <fieldset className="edit-fieldset">
            <legend className="edit-legend">Edit Your Answer</legend>
            <input type="hidden" name="commentId" value={comment.id} />
            <input type="hidden" name="ratherId" value={ratherId} />

            <label htmlFor="name" className="edit-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              required
              maxLength={255}
              defaultValue={comment.name}
              className="edit-input"
            />
            <label htmlFor="comment" className="edit-label">
              Answer:
            </label>
            <textarea
              type="text"
              name="comment"
              required
              minLength={1}
              maxLength={255}
              defaultValue={comment.comment}
              className="edit-textarea"
            />
          </fieldset>
          <button type="submit" className="edit-button">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
