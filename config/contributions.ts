export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Minflash-Frontend",
    contibutionDescription:
      "Improved the UI and logic of authentication section/page.",
    repoOwner: "Aradhya Sharma",
    link: "https://github.com/AradhyaSharma31/Minflash-Frontend",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
