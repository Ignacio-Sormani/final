import { Schema, model, Document } from "mongoose";
import { BookingStatus } from "@/utils/enums";

export interface IContractedService {
  serviceName: string;
  price: number;
}

//! Add payment and date
export interface IBooking extends Document {
  user: Schema.Types.ObjectId;
  space: Schema.Types.ObjectId;
  event?: Schema.Types.ObjectId;
  status: BookingStatus;
  confirmedStartTime?: Date;
  confirmedEndTime?: Date;
  totalPrice?: number;
  contractedServices?: IContractedService[];
  createdAt: Date;
  updatedAt: Date;
}

const ContractedServiceSchema = new Schema<IContractedService>(
  {
    serviceName: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }
);

const BookingSchema = new Schema<IBooking>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    space: { type: Schema.Types.ObjectId, ref: "Space", required: true },
    event: { type: Schema.Types.ObjectId, ref: "Event" },
    status: {
      type: String,
      enum: Object.values(BookingStatus),
      default: BookingStatus.REQUESTED,
      required: true,
    },
    confirmedStartTime: { type: Date },
    confirmedEndTime: { type: Date },
    totalPrice: { type: Number },
    contractedServices: { type: [ContractedServiceSchema], default: [] },
  },
  { timestamps: true }
);

export const Booking = model<IBooking>("Booking", BookingSchema);
