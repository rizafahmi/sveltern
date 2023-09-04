import { error } from "@sveltejs/kit";

export async function load({ params }) {
  console.log(params);
  return {
    id: params.id,
  };
}
