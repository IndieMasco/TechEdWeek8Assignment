import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function WouldYouRatherPage({ searchParams }) {
  const sort = searchParams.sort || "asc";

  const orderBy = sort === "asc" ? "ASC" : "DESC";

  const query = await db.query(`
    SELECT id, question 
    FROM rather
    ORDER BY question ${orderBy}
  `);

  const rather = query.rows;

  const currentPath = "/wouldyourather";

  return (
    <>
      <div className="a-z-constainer">
        <Link className="a-z" href={`${currentPath}?sort=asc`}>
          Sort by (A-Z){" "}
        </Link>
        <Link className="z-a" href={`${currentPath}?sort=desc`}>
          Sort by (Z-A)
        </Link>
      </div>
      {rather.map((wouldYouRather) => {
        return (
          <div className="question-container" key={wouldYouRather.id}>
            <Link
              className="question-text"
              href={`/wouldyourather/${wouldYouRather.id}`}
            >
              {wouldYouRather.question}
            </Link>
          </div>
        );
      })}
    </>
  );
}
