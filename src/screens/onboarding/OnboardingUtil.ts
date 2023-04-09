import { ImageSourcePropType } from "react-native";
import {
  HOME_ONBOARDING_1,
  HOME_ONBOARDING_2,
  HOME_ONBOARDING_3,
  HOME_ONBOARDING_4,
  HOME_ONBOARDING_5,
} from "../../../assets/images/banner";

export type CarouselItem = {
  id: number;
  source: ImageSourcePropType;
  heading: string;
  description: string;
};

export const carousel_data: CarouselItem[] = [
  {
    id: 1,
    source: HOME_ONBOARDING_1,
    heading: "Life made easy",
    description:
      "Enjoy your experience on Aza while making your payments and exploring unprecedented features",
  },
  {
    id: 2,
    source: HOME_ONBOARDING_2,
    heading: `Lightning fast transactions`,
    description:
      "Make payments 24/7 at the speed of light with a 100% transaction certainty",
  },
  {
    id: 3,
    source: HOME_ONBOARDING_3,
    heading: "Bills & Payments",
    description:
      "Settle all your bills effortlessly without stepping out of your house",
  },
  {
    id: 4,
    source: HOME_ONBOARDING_4,
    heading: "Save your funds",
    description:
      "Save and lock up your funds for a specified time frame for future use (coming soon!)",
  },
  {
    id: 5,
    source: HOME_ONBOARDING_5,
    heading: "Cutting Edge Analysis",
    description: "Keep track of your expenditure with our expert analysis",
  },
];
