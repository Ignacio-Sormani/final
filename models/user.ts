import { Schema, model, Document } from "mongoose";
import { UserRole } from "@/utils/enums";

//! Add isActive
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  roles: UserRole[];
  // For admin users: the institutions they are assigned to
  institutions?: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email address",
      ],
    },
    password: { type: String, required: true },
    roles: {
      type: [String],
      enum: Object.values(UserRole),
      default: [UserRole.CLIENT],
      required: true,
    },
    institutions: [{ type: Schema.Types.ObjectId, ref: "Institution" }],
  },
  { timestamps: true }
);

export const User = model<IUser>("User", UserSchema);
