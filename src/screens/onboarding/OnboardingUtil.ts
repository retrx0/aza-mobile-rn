import { ImageSourcePropType } from "react-native";

export type CarouselItem = {
  id: number;
  source: ImageSourcePropType;
  heading: string;
  description: string;
};

export const carousel_data: CarouselItem[] = [
  {
    id: 1,
    source: require("../../../assets/images/banner/Home-onboard-1.png"),
    heading: "Life made easy",
    description:
      "Enjoy your experience on Aza while making your payments and exploring unprecedented features",
  },
  {
    id: 2,
    source: require("../../../assets/images/banner/Home-onboard-5.png"),
    heading: `Lightning fast transactions`,
    description:
      "Make payments 24/7 at the speed of light with a 100% transaction certainty",
  },
  {
    id: 3,
    source: require("../../../assets/images/banner/Home-onboard-2.png"),
    heading: "Bills & Payments",
    description:
      "Settle all your bills effortlessly without stepping out of your house",
  },
  {
    id: 4,
    source: require("../../../assets/images/banner/Home-onboard-3.png"),
    heading: "Save your funds",
    description:
      "Save and lock up your funds for a specified time frame for future use",
  },
  {
    id: 5,
    source: require("../../../assets/images/banner/Home-onboard-4.png"),
    heading: "Cutting Edge Analysis",
    description: "Keep track of your expenditure with our expert analysis",
  },
];
