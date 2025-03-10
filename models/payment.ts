import { Schema, model, Document } from "mongoose";
import { PaymentStatus } from "@/utils/enums";

//! Add client
export interface IPayment extends Document {
  booking: Schema.Types.ObjectId;
  transactionId: string;
  paymentMethod: string;
  amount: number;
  paymentStatus: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new Schema<IPayment>(
  {
    booking: { type: Schema.Types.ObjectId, ref: "Booking", required: true },
    transactionId: { type: String, required: true },
    paymentMethod: { type: String, default: "MercadoPago", required: true },
    amount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: Object.values(PaymentStatus),
      default: PaymentStatus.PENDING,
      required: true,
    },
  },
  { timestamps: true }
);

export const Payment = model<IPayment>("Payment", PaymentSchema);
