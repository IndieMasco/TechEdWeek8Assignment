import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function getQuestions() {
  const result = await db.query(
    `SELECT id, question FROM rather ORDER BY id ASC`
  );
  return result.rows;
}

export default async function FormPage() {
  const questions = await getQuestions();

  async function handleSubmit(formData) {
    "use server";

    const formValues = {
      question_id: formData.get("question_id"),
      name: formData.get("name"),
      comment: formData.get("comment"),
    };
    console.log(formValues);

    await db.query(
      `INSERT INTO comment (question_id, name, comment) VALUES($1, $2, $3)`,
      [formValues.question_id, formValues.name, formValues.comment]
    );

    revalidatePath("/wouldyourather");

    redirect("/wouldyourather");
  }

  return (
    <>
      <form action={handleSubmit} className="form-container">
        <fieldset className="form-fieldset">
          <legend className="form-legend">Question</legend>
          <label htmlFor="question_id" className="form-label">
            Would you rather:
          </label>
          <select
            id="question_id"
            name="question_id"
            required
            className="form-select"
          >
            {questions.map((q) => (
              <option key={q.id} value={q.id}>
                {q.question}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="form-fieldset">
          <legend className="form-legend">Answer</legend>
          <label htmlFor="name" className="form-label">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            required
            maxLength={255}
            placeholder="Yuki"
            className="form-input"
          />
          <label htmlFor="comment" className="form-label">
            Answer:{" "}
          </label>
          <textarea
            type="text"
            name="comment"
            required
            minLength={1}
            maxLength={255}
            placeholder="I would rather ........"
            className="form-textarea"
          />
        </fieldset>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </>
  );
}
