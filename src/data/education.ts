import { Education } from "@/types";

export const education: Education[] = [
  {
    id: "enseirb",
    school: "ENSEIRB-MATMECA - Bordeaux INP",
    location: "locations.bordeaux",
    countryCode: "fr",
    degree: "education.enseirb.degree",
    startDate: "education.enseirb.startDate",
    endDate: "education.enseirb.endDate",
    descriptionKeys: [
      "education.enseirb.desc1",
      "education.enseirb.desc2",
      "education.enseirb.desc3",
      "education.enseirb.desc4",
      "education.enseirb.desc5",
      "education.enseirb.desc6",
    ],
    logo: "/logos/enseirb.jpg",
    darkLogo: "/logos/enseirb-b.webp",
  },
  {
    id: "ibn-ghazi",
    school: "CPGE IBN GHAZI Rabat",
    location: "locations.rabat",
    countryCode: "ma",
    degree: "education.ibnGhazi.degree",
    startDate: "education.ibnGhazi.startDate",
    endDate: "education.ibnGhazi.endDate",
    highlight: "education.ibnGhazi.highlight",
    descriptionKeys: [
      "education.ibnGhazi.desc1"
    ],
    logo: "/logos/ibn-ghazi.png",
  },
  {
    id: "moulay-youssef",
    school: "CPGE Moulay Youssef",
    location: "locations.rabat",
    countryCode: "ma",
    degree: "education.moulayYoussef.degree",
    startDate: "education.moulayYoussef.startDate",
    endDate: "education.moulayYoussef.endDate",
    highlight: "education.moulayYoussef.highlight",
    descriptionKeys: [
      "education.moulayYoussef.desc1",
      "education.moulayYoussef.desc2",
      "education.moulayYoussef.desc3",
      "education.moulayYoussef.desc4",
    ],
    logo: "/logos/mly.png",
  },
  {
    id: "hassan",
    school: "Lycée Scientifique Hassan",
    location: "locations.rabat",
    countryCode: "ma",
    degree: "education.hassan.degree",
    startDate: "2017",
    endDate: "2019",
    descriptionKeys: [
      "education.hassan.desc1",
      "education.hassan.desc2"
    ],
    logo: "/logos/hassan.png",
  },
];
