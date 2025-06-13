// Import the Contact model for handling contact form submissions
import Contact from "@/api-modals/Contact.ts";

// Import the MongoDB connection utility
import dbConnect from "@/lib/mongodbConn.ts";

// Import types and utilities from Next.js for handling requests and responses
import { NextRequest, NextResponse } from "next/server";

// Handler for POST requests to the contact form endpoint
export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body as JSON
    const fields = await req.json();

    // Validate required fields: name, email, and message must be present
    if (!fields.name || !fields.email || !fields.message)
      return new NextResponse(JSON.stringify({ status: 400 }));

    // Attempt to establish a database connection
    const conn = await dbConnect();

    // If the database connection fails, respond with a 500 Internal Server Error
    if (!conn) return new NextResponse(JSON.stringify({ status: 500 }));

    // Create a new Contact document using the submitted fields
    const newContact = new Contact(fields);

    // Save the new contact document to the database and log the result
    console.log(await newContact.save());

    // Respond with a 200 OK status to indicate success
    return new NextResponse(JSON.stringify({ status: 200 }));
  } catch (error: any) {
    // Log any errors that occurred during processing
    console.log(error);

    // Return the error's status code (if available), else response may be undefined/incomplete
    return new NextResponse(JSON.stringify({ status: error.status }));
  }
}
