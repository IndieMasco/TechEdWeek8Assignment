//TODO: get the individual post data from the database
//TODO: implement a delete action to delete comments

import { db } from "@/utils/dbConnection";

export default async function WouldYouRatherPageIdPage({ params }) {
  const wouldyouratherId = await params.wouldyouratherId;

  const query = await db.query(
    `SELECT id, question FROM rather WHERE id = ${wouldyouratherId}`
  );

  const rather = query.rows[0];

  return (
    <div>
      <h2>{rather.question}</h2>
    </div>
  );
}
