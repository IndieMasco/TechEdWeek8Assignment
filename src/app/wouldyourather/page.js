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
    <div>
      <Link href={`${currentPath}?sort=asc`}>Sort by (A-Z) </Link>
      <Link href={`${currentPath}?sort=desc`}>Sort by (Z-A)</Link>

      {rather.map((wouldYouRather) => {
        return (
          <div key={wouldYouRather.id}>
            <Link href={`/wouldyourather/${wouldYouRather.id}`}>
              {wouldYouRather.question}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
