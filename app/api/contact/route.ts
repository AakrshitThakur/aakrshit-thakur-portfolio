import { NextResponse } from "next/server";

// Handler for POST requests
export async function POST(req: Request) {
  // Get the Google Form base submission link from environment variables
  const formLink = process.env.GOOGLE_FORM_LINK;
  
  // Return a 500 error if the form link is not configured
  if (!formLink) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  // Get field IDs for each form input from environment variables
  // These should match the input names in your Google Form
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  try {
    // Parse the JSON body from the request
    const body = await req.json();
    const { name, message, social, email } = body;

    // Send form submission as a GET request to the Google Form
    const res = await fetch(
      `${formLink}/formResponse?${fieldIdName}=${name}&${fieldIdEmail}=${email}&${fieldIdMessage}=${message}&${fieldIdSocial}=${social}`
    );

    // Respond with a success message
    return NextResponse.json("Success!");
  } catch (error) {
    // Log and return a 500 error if something goes wrong
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
