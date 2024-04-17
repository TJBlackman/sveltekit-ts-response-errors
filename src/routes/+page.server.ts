import { fail, type Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const moons = formData.get("moons");
    if (!moons || moons !== "1") {
      return fail(400, {
        fieldErrors: {
          moons: "Incorrect number of moons",
        },
      });
    }

    const oceans = formData.get("oceans");
    if (!oceans || oceans !== "5") {
      return fail(400, {
        fieldErrors: {
          oceans: "Incorrect number of oceans",
        },
      });
    }

    return {
      success: true,
    };
  },
} satisfies Actions;
