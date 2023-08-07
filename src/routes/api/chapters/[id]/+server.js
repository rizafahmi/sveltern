import { error, json } from "@sveltejs/kit";

export async function GET({ params, locals }) {
  const { id } = params;
  const chapter = await locals.pb.collection("chapters").getOne(id);
  return json(chapter);
}
