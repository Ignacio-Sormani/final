import { Schema, model, Document } from "mongoose";

//! Add admins
export interface IInstitution extends Document {
  name: string;
  address: string;
  contactPhone: string;
  createdAt: Date;
  updatedAt: Date;
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
  },
  { timestamps: true }
);

export const Institution = model<IInstitution>(
  "Institution",
  InstitutionSchema
);
