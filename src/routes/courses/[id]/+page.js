import { error } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    id: params.id,
  };
}
