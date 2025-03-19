import mongoose, { Schema, model, Document } from "mongoose";
import { TicketType, TicketStatus } from "@/lib/enums";

//! Add Space
export interface ITicket extends Document {
  user: Schema.Types.ObjectId;
  subject: string;
  description: string;
  ticketType: TicketType;
  status: TicketStatus;
  createdAt: Date;
  updatedAt: Date;
}

const TicketSchema = new Schema<ITicket>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    ticketType: {
      type: String,
      enum: Object.values(TicketType),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(TicketStatus),
      default: TicketStatus.NEW,
      required: true,
    },
  },
  { timestamps: true }
);

export const Ticket =
  mongoose.models?.Ticket || model<ITicket>("Ticket", TicketSchema);
