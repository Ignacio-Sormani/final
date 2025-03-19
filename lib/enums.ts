// enums.ts

export enum UserRole {
  CLIENT = "client",
  ADMIN = "admin",
  SUPERADMIN = "superadmin",
}

export enum EventStatus {
  PLANNING = "planning",
  CONFIRMED = "confirmed",
  ONGOING = "ongoing",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export enum BookingStatus {
  REQUESTED = "requested",
  APPROVED = "approved",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
}

export enum PaymentStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
}

export enum RequestType {
  COMMUNICATION = "communication",
  RESERVATION_APPROVAL = "reservationApproval",
  BUDGET = "budget",
}

export enum RequestStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  COMPLETED = "completed",
}

export enum TicketType {
  QUERY = "query",
  REPORT = "report",
}

export enum TicketStatus {
  NEW = "new",
  IN_PROGRESS = "in_progress",
  RESOLVED = "resolved",
  CLOSED = "closed",
}

export enum SpaceCategory {
  SOCIAL = "social",
  CORPORATE = "corporate",
  RECREATIONAL = "recreational",
  CULTURAL = "cultural",
  SPORTS = "sports",
  CONFERENCE = "conference",
  OTHER = "other",
}
