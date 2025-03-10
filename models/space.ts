import { Schema, model, Document } from "mongoose";
import { SpaceCategory } from "@/utils/enums";

export interface IService {
  name: string;
  price: number;
}

export interface IAvailabilitySlot {
  startTime: Date;
  endTime: Date;
  basePrice: number;
  isAvailable?: boolean;
}

export interface ISpace extends Document {
  name: string;
  description?: string;
  institution: Schema.Types.ObjectId;
  category: string;
  offeredServices: IService[];
  availabilitySlots: IAvailabilitySlot[];
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }
);

const AvailabilitySlotSchema = new Schema<IAvailabilitySlot>(
  {
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    basePrice: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true },
  },
  { _id: false }
);

const SpaceSchema = new Schema<ISpace>(
  {
    name: { type: String, required: true },
    description: { type: String },
    institution: {
      type: Schema.Types.ObjectId,
      ref: "Institution",
      required: true,
    },
    category: {
      type: String,
      enum: Object.values(SpaceCategory),
      required: true,
    },
    offeredServices: { type: [ServiceSchema], default: [] },
    availabilitySlots: { type: [AvailabilitySlotSchema], default: [] },
  },
  { timestamps: true }
);

export const Space = model<ISpace>("Space", SpaceSchema);
