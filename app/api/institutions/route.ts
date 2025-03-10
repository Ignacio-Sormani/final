import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import { Institution, User } from "@/models";

// GET - Fetch all institutions
export async function GET() {
  await connectToDB();
  const institutions = await Institution.find().populate("admins");
  return NextResponse.json(institutions);
}

// POST - Create a new institution along with admin accounts
export async function POST(req: Request) {
  await connectToDB();
  const { name, address, phone, admins } = await req.json();

  //! TODO: Add proper request validation
  //! TODO: Hash admin passwords properly before saving

  // Create admin users
  const adminIds = await Promise.all(
    admins.map(
      async (admin: { name: string; email: string; password: string }) => {
        const newUser = new User({ ...admin, password: "hashedPassword" }); // //! Replace "hashedPassword" with a real hash function
        await newUser.save();
        return newUser._id;
      }
    )
  );

  // Create the institution document
  const institution = new Institution({
    name,
    address,
    phone,
    admins: adminIds,
  });
  await institution.save();

  return NextResponse.json(institution, { status: 201 });
}
