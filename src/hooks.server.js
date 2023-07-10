import pb from "$lib/pocketbase.js";

export async function handle({ event, resolve }) {
  event.locals.pb = pb;

  return resolve(event);
}
