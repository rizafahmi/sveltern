export async function load({ locals }) {
  const courses = await locals.pb.collection("courses").getFullList(10, {});

  return {
    courses: structuredClone(courses),
  };
}
