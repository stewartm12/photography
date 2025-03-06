import CorporateCommercialForm from "./category-type-forms/corporate-commercial-form";
import EngagementCoupleForm from "./category-type-forms/engagement-couple-form";
import GraduationSeniorForm from "./category-type-forms/graduation-senior-form";
import IndividualFamilyForm from "./category-type-forms/individual-family-form";
import PetAnimalForm from "./category-type-forms/pet-animal-form";
import ProductForm from "./category-type-forms/product-form";

import {
  useReservation,
  INDIVIDUAL_AND_FAMILY_CATEGORY,
  ENGAGEMENT_AND_COUPLE_CATEGORY,
  CORPORATE_AND_COMMERCIAL_CATEGORY,
  PRODUCT_CATEGORY,
  PET_AND_ANIMAL_CATEGORY,
  GRADUATION_AND_SENIOR_CATEGORY
} from "@/context/reservation-context";

export default function CategoryDetailsForm() {
  const { formData, setFormData } = useReservation();
  const selectedCategory = formData.categories.find((category) => category.id === formData.categoryId);

  if (!selectedCategory) return null;

  switch (selectedCategory.name) {
    case INDIVIDUAL_AND_FAMILY_CATEGORY:
      return <IndividualFamilyForm />;
    case ENGAGEMENT_AND_COUPLE_CATEGORY:
      return <EngagementCoupleForm />;
    case CORPORATE_AND_COMMERCIAL_CATEGORY:
      return <CorporateCommercialForm />;
    case PRODUCT_CATEGORY:
      return <ProductForm />;
    case PET_AND_ANIMAL_CATEGORY:
      return <PetAnimalForm />;
    case GRADUATION_AND_SENIOR_CATEGORY:
      return <GraduationSeniorForm />;
    default:
      return null;
  }
}
