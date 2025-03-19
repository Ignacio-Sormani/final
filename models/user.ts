import mongoose, { Schema, model, Document } from "mongoose";
import { UserRole } from "@/lib/enums";

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: UserRole;
  institution?: Schema.Types.ObjectId;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
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
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.CLIENT,
      required: true,
    },
    institution: {
      type: Schema.Types.ObjectId,
      ref: "Institution",
      validate: {
        validator: function (this: IUser, value: Schema.Types.ObjectId) {
          return this.role !== UserRole.ADMIN || !!value;
        },
        message: "Admin users must have an institution assigned.",
      },
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || model<IUser>("User", UserSchema);
