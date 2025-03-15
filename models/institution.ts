import { Schema, model, Document } from "mongoose";

export interface IInstitution extends Document {
  name: string;
  address: string;
  contactPhone: string;
  createdAt: Date;
  updatedAt: Date;
  admins?: Schema.Types.ObjectId[];
}

const InstitutionSchema = new Schema<IInstitution>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    contactPhone: {
      type: String,
      required: true,
      match: [
        /^(\+54)?\s?\d{10}$/,
        "Please enter a valid Argentine phone number",
      ],
    },
    admins: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Institution = model<IInstitution>(
  "Institution",
  InstitutionSchema
);
