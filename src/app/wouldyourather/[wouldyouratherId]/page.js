import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

async function deleteCommentAction(formData) {
  "use server";

  const commentId = formData.get("commentId");
  const ratherId = formData.get("ratherId");

  await db.query(`DELETE FROM comment WHERE id = $1`, [commentId]);

  revalidatePath(`/wouldyourather/${ratherId}`);
}

export default async function WouldyouRatherPage({ params }) {
  const wouldyouratherId = params.wouldyouratherId;

  const ratherQuery = await db.query(
    "SELECT id, question FROM rather WHERE id = $1",
    [wouldyouratherId]
  );
  const rather = ratherQuery.rows[0];

  const commentsQuery = await db.query(
    "SELECT id, name, comment FROM comment WHERE question_id = $1 ORDER BY id desc",
    [wouldyouratherId]
  );
  const comments = commentsQuery.rows;

  return (
    <>
      <h1 className="comment-title1">{rather.question}</h1>
      <div className="comment-container">
        <h2 className="comment-title2">Comments</h2>
        <div className="comment-card">
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.name}:</strong> {comment.comment}
                  <form action={deleteCommentAction}>
                    <input type="hidden" name="commentId" value={comment.id} />
                    <input
                      type="hidden"
                      name="ratherId"
                      value={wouldyouratherId}
                    />
                    <button className="comment-delete" type="submit">
                      Delete
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          ) : (
            NULL
          )}
        </div>
      </div>
    </>
  );
}
