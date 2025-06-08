import { ValidCategory, ValidEduType } from "./constants";

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface EducationInterface {
  id: string;
  type: ValidEduType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
}

export const EducationArr: EducationInterface[] = [
  {
    id: "GGDSD",
    companyName: "GGDSD College Chandigarh",
    type: "Colleges",
    category: ["BCA", "Graduation"],
    shortDescription:
      "GGDSD College, Chandigarh (Goswami Ganesh Dutta Sanatan Dharma College), established in 1973, is a premier institution affiliated with Panjab University. Known for academic excellence and holistic development, it offers UG, PG, and Ph.D. programs across Commerce, Science, Arts, and Management. Accredited with an A+ grade by NAAC and ranked among India’s top colleges, the college boasts modern facilities and a strong emphasis on values and ethics.",
    websiteLink: "https://ggdsd.ac.in/",
    startDate: new Date("2022-09-01"),
    endDate: new Date("2025-05-31"),
    companyLogoImg: "/education/ggdsd-logo.png",
    descriptionDetails: {
      paragraphs: [
        "Goswami Ganesh Dutta Sanatan Dharma (GGDSD) College, located in Sector 32, Chandigarh, is a premier institution affiliated with Panjab University. Established in 1973 in memory of Goswami Ganesh Dutta Ji, the college was founded by Pt. Mohan Lal Ji, a former minister of Punjab, along with Prof. Roshan Lal Verma Ji and other visionaries. Their mission was to create a center of excellence that integrates academic rigor with the ethical and spiritual values of Sanatan Dharma.",
      ],
      bullets: [
        "I have an aggregate of 80.3% up to the fifth semester of my BCA course.",
      ],
    },
  },
  {
    id: "DAV-CPS",
    companyName: "D.A.V. Centenary Public School Una (H.P)",
    type: "Schools",
    category: ["10th", "12th"],
    shortDescription:
      "DAV Centenary Public School, Una, established in 1986, is a leading CBSE-affiliated English medium school in Himachal Pradesh. Managed by DAVCMC, it offers classes from LKG to XII in Science, Commerce, and Arts streams. The school is known for its modern infrastructure, including smart classrooms, labs, and a junior wing, and emphasizes conceptual learning over rote methods.",
    websiteLink: "http://davuna.org/",
    startDate: new Date("2016-01-4"),
    endDate: new Date("2022-07-0"),
    companyLogoImg: "/education/dav-logo.png",
    descriptionDetails: {
      paragraphs: [
        "DAV Centenary Public School, Una, established in 1986, is a co-educational English medium senior secondary school affiliated with the Central Board of Secondary Education (CBSE). Managed by the DAV College Managing Committee (DAVCMC), it stands as the largest CBSE-affiliated DAV institution in Himachal Pradesh, catering to over 2,600 students.",
      ],
      bullets: [
        "Completed 10th grade in 2020 with a percentage of 70.2%.",
        "Completed 12th grade in 2022 with a percentage of 84.8%.",
      ],
    },
  },
  {
    id: "Udemy",
    companyName: "Udemy",
    type: "Certificates",
    category: ["Frontend", "Backend", "MERN"],
    shortDescription:
      "Udemy is an online learning platform offering a wide range of courses in topics like programming, business, personal development, design, and more. It allows experts to create and sell courses, while learners can study at their own pace with lifetime access to purchased content.",
    websiteLink: "https://www.udemy.com/",
    startDate: new Date("2023-6-1"),
    endDate: new Date("2024-1-1"),
    companyLogoImg: "/education/udemy-logo.jpg",
    descriptionDetails: {
      paragraphs: [
        "DAV Centenary Public School, Una, established in 1986, is a co-educational English medium senior secondary school affiliated with the Central Board of Secondary Education (CBSE). Managed by the DAV College Managing Committee (DAVCMC), it stands as the largest CBSE-affiliated DAV institution in Himachal Pradesh, catering to over 2,600 students.",
      ],
      bullets: [
        "Covered JavaScript, React.js, Node.js, Express.js, MongoDB; built mini-projects like YelpCamp.",
        "Successfully completed 74 hours of video lectures.",
      ],
    },
  },
];

export const featuredEducation = EducationArr.slice(0, 3);
