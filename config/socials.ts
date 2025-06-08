import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "Aakrshit Thakur",
    icon: Icons.gitHub,
    link: "https://github.com/AakrshitThakur",
  },
  {
    name: "LinkedIn",
    username: "Aakrshit Thakur",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/aakrshit-thakur-14433627b/",
  },
  {
    name: "Gmail",
    username: "Aakrshit Thakur",
    icon: Icons.gmail,
    link: "mailto:thakurraakrshitt@gmail.com",
  },
];
