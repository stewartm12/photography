"use client";

import { createContext, useContext, useState } from "react";

export const INDIVIDUAL_AND_FAMILY_CATEGORY = "Individual & Family Portraits";
export const ENGAGEMENT_AND_COUPLE_CATEGORY = "Engagement & Couples Photography";
export const CORPORATE_AND_COMMERCIAL_CATEGORY = "Corporate & Commercial Photography";
export const PRODUCT_CATEGORY = "Product Photography";
export const PET_AND_ANIMAL_CATEGORY = "Pet & Animal Photography";
export const GRADUATION_AND_SENIOR_CATEGORY = "Graduation & Senior Portraits";
export const SPORT_CATEGORY = "Sport Photography";

const ReservationContext = createContext();

export function ReservationProvider({ children, categories }) {
  const [formData, setFormData] = useState({
    categories: categories,
    categoryId: null,
    fullName: "",
    email: "",
    displayDate: false,
    displayLocation: false,
    isSubmitting: false,
    isSuccess: false,
    preferredDateTime: "",
    numberOfParticipants: 1,
    additionalNotes: "",
    categoryId: "",
    locationName: "",
    locationAddress: "",
    serviceDetails: null
  });

  return (
    <ReservationContext.Provider value={{ formData, setFormData }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  return useContext(ReservationContext);
}
