import { Schema, model, Document } from "mongoose";
import { EventStatus } from "@/utils/enums";

export interface IEvent extends Document {
  name: string;
  description?: string;
  eventDate: Date;
  location: string;
  space: Schema.Types.ObjectId;
  status: EventStatus;
  guestList?: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    name: { type: String, required: true },
    description: { type: String },
    eventDate: { type: Date, required: true },
    location: { type: String, required: true },
    space: {
      type: Schema.Types.ObjectId,
      ref: "Space",
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(EventStatus),
      default: EventStatus.PLANNING,
      required: true,
    },
    guestList: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
  },
  { timestamps: true }
);

export const Event = model<IEvent>("Event", EventSchema);
