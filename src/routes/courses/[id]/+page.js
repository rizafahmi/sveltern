import { error } from "@sveltejs/kit";

export function load({ params }) {
  return {
    id: params.id,
  };
}
