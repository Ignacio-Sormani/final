import { connectToDB } from "./database";

import { User } from "../models/user";
import { Institution } from "../models/institution";
import { Space } from "../models/space";
import { Event } from "../models/event";
import { Booking } from "../models/booking";
import { Payment } from "../models/payment";
import { Request } from "../models/request";
import { Ticket } from "../models/ticket";
import {
  UserRole,
  EventStatus,
  BookingStatus,
  PaymentStatus,
  RequestType,
  RequestStatus,
  TicketType,
  TicketStatus,
} from "./enums";
import { ObjectId } from "mongoose";

async function seed() {
  try {
    await connectToDB();
    console.log("Connected to MongoDB");

    await Promise.all([
      User.deleteMany({}),
      Institution.deleteMany({}),
      Space.deleteMany({}),
      Event.deleteMany({}),
      Booking.deleteMany({}),
      Payment.deleteMany({}),
      Request.deleteMany({}),
      Ticket.deleteMany({}),
    ]);
    console.log("Collections cleared");

    const institution1 = await Institution.create({
      name: "Grand Event Center",
      address: "123 Main St, City",
      contactPhone: "+541112345678",
      admins: [],
    });
    const institution2 = await Institution.create({
      name: "Corporate Hub",
      address: "456 Business Rd, City",
      contactPhone: "+541198765432",
      admins: [],
    });
    console.log("Institutions created");

    const userClient = await User.create({
      name: "Alice Client",
      email: "alice@example.com",
      password: "password",
      roles: [UserRole.CLIENT],
    });

    const userAdmin = await User.create({
      name: "Bob Admin",
      email: "bob@example.com",
      password: "password",
      roles: [UserRole.ADMIN],
      institutions: [institution1._id],
    });
    institution1.admins?.push(userAdmin._id as ObjectId);
    institution1.save();

    const userSuperAdmin = await User.create({
      name: "Charlie Superadmin",
      email: "charlie@example.com",
      password: "password",
      roles: [UserRole.SUPERADMIN],
    });
    console.log("Users created");

    const space1 = await Space.create({
      name: "Ballroom",
      description: "Spacious ballroom suitable for weddings and large events.",
      institution: institution1._id,
      category: "social",
      offeredServices: [
        { name: "Sound System", price: 200 },
        { name: "Lighting", price: 150 },
      ],
      availabilitySlots: [
        {
          startTime: new Date("2025-04-01T09:00:00"),
          endTime: new Date("2025-04-01T12:00:00"),
          basePrice: 500,
        },
        {
          startTime: new Date("2025-04-01T13:00:00"),
          endTime: new Date("2025-04-01T17:00:00"),
          basePrice: 700,
        },
      ],
    });

    const space2 = await Space.create({
      name: "Conference Room",
      description: "Ideal for corporate meetings and seminars.",
      institution: institution2._id,
      category: "corporate",
      offeredServices: [
        { name: "Projector", price: 100 },
        { name: "Video Conferencing", price: 250 },
      ],
      availabilitySlots: [
        {
          startTime: new Date("2025-05-10T08:00:00"),
          endTime: new Date("2025-05-10T12:00:00"),
          basePrice: 300,
        },
        {
          startTime: new Date("2025-05-10T13:00:00"),
          endTime: new Date("2025-05-10T18:00:00"),
          basePrice: 400,
        },
      ],
    });
    console.log("Spaces created");

    const event1 = await Event.create({
      name: "Alice Wedding",
      description: "A beautiful wedding event.",
      eventDate: new Date("2025-04-01T10:00:00"),
      location: "Grand Ballroom, Grand Event Center",
      space: space1._id,
      status: EventStatus.CONFIRMED,
      guestList: [userClient._id, userAdmin._id],
    });
    console.log("Events created");

    const booking1 = await Booking.create({
      user: userClient._id,
      space: space1._id,
      event: event1._id,
      status: BookingStatus.CONFIRMED,
      confirmedStartTime: new Date("2025-04-01T09:00:00"),
      confirmedEndTime: new Date("2025-04-01T12:00:00"),
      totalPrice: 1200,
      contractedServices: [{ serviceName: "Sound System", price: 200 }],
    });

    const booking2 = await Booking.create({
      user: userClient._id,
      space: space2._id,
      status: BookingStatus.REQUESTED,
    });
    console.log("Bookings created");

    const payment1 = await Payment.create({
      booking: booking1._id,
      transactionId: "TX123456789",
      paymentMethod: "MercadoPago",
      amount: 1200,
      paymentStatus: PaymentStatus.COMPLETED,
    });
    console.log("Payments created");

    const request1 = await Request.create({
      user: userClient._id,
      event: event1._id,
      requestType: RequestType.RESERVATION_APPROVAL,
      status: RequestStatus.APPROVED,
      message: "Please confirm the reservation for the wedding event.",
      response: "Reservation confirmed.",
    });
    console.log("Requests created");

    const ticket1 = await Ticket.create({
      user: userClient._id,
      subject: "Issue with booking confirmation",
      description: "I did not receive confirmation after booking.",
      ticketType: TicketType.QUERY,
      status: TicketStatus.NEW,
    });
    console.log("Tickets created");

    console.log("Database seeding completed.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
