import { json } from "@sveltejs/kit";

export async function GET(){
  return json({
    json:'data'
  })
}