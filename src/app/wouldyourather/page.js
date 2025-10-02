import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function WouldYouRatherPage() {
  const query = await db.query(`SELECT id, question FROM rather`);

  const rather = query.rows;

  return (
    <div>
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
