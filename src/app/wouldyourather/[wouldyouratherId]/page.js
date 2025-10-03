import { db } from "@/utils/dbConnection";

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
      <h1>{rather.question}</h1>
      <div>
        <h2>Comments</h2>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.name}:</strong> {comment.comment}
              </li>
            ))}
          </ul>
        ) : (
          NULL
        )}
      </div>
    </>
  );
}
