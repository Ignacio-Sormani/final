import mongoose, { Schema, model, Document } from "mongoose";
import { RequestType, RequestStatus } from "@/lib/enums";

export interface IRequest extends Document {
  user: Schema.Types.ObjectId;
  event?: Schema.Types.ObjectId;
  space?: Schema.Types.ObjectId;
  requestType: RequestType;
  status: RequestStatus;
  message: string;
  response?: string;
  createdAt: Date;
  updatedAt: Date;
}

const RequestSchema = new Schema<IRequest>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    event: { type: Schema.Types.ObjectId, ref: "Event" },
    space: { type: Schema.Types.ObjectId, ref: "Space" },
    requestType: {
      type: String,
      enum: Object.values(RequestType),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(RequestStatus),
      default: RequestStatus.PENDING,
      required: true,
    },
    message: { type: String, required: true },
    response: { type: String },
  },
  { timestamps: true }
);

export const Request =
  mongoose.models?.Request || model<IRequest>("Request", RequestSchema);
