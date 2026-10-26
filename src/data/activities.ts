import brightpath_2023_1 from "@/assets/activities/brightpath-2023-1.webp.asset.json";
import brightpath_2023_2 from "@/assets/activities/brightpath-2023-2.webp.asset.json";
import brightpath_2023_3 from "@/assets/activities/brightpath-2023-3.webp.asset.json";
import brightpath_2023_4 from "@/assets/activities/brightpath-2023-4.webp.asset.json";
import brightpath_2023_5 from "@/assets/activities/brightpath-2023-5.webp.asset.json";
import brightpath_2023_6 from "@/assets/activities/brightpath-2023-6.webp.asset.json";
import praxis_2023_1 from "@/assets/activities/praxis-2023-1.webp.asset.json";
import praxis_2023_2 from "@/assets/activities/praxis-2023-2.webp.asset.json";
import praxis_2023_3 from "@/assets/activities/praxis-2023-3-upright.webp.asset.json";
import praxis_2023_4 from "@/assets/activities/praxis-2023-4.webp.asset.json";
import praxis_2023_5 from "@/assets/activities/praxis-2023-5.webp.asset.json";
import brightpath_2022_1 from "@/assets/activities/brightpath-2022-1.webp.asset.json";
import brightpath_2022_2 from "@/assets/activities/brightpath-2022-2-upright.webp.asset.json";
import brightpath_2022_3 from "@/assets/activities/brightpath-2022-3.webp.asset.json";
import brightpath_2022_4 from "@/assets/activities/brightpath-2022-4.webp.asset.json";
import brightpath_2022_5 from "@/assets/activities/brightpath-2022-5.webp.asset.json";

export type ActivityParagraphPart = { text: string; href?: string };

const photo = (asset: { url: string }, width = 1800, height = 1350) => ({ url: asset.url, width, height });

export const outreachActivities: { id: string; date: string; title: string; paragraphs: ActivityParagraphPart[][]; links: { label: string; href: string }[]; photos: { url: string; width: number; height: number }[] }[] = [
{
  "id": "brightpath-2023",
  "date": "Jul 2023",
  "title": "BrightPath STEAM Academy Summer Camp",
  "paragraphs": [
    [
      {
        "text": "BrightPath STEAM Academy",
        "href": "https://brightpathsteam.org/"
      },
      {
        "text": " works to increase Black/African American youth representation and exposure to STEAM (Science, Technology, Engineering, Arts, and Math), promoting educational equity and expanding access to future opportunities in science and engineering."
      }
    ]
  ],
  "links": [],
  photos: [photo(brightpath_2023_1), photo(brightpath_2023_2), photo(brightpath_2023_3, 1350, 1800), photo(brightpath_2023_4), photo(brightpath_2023_5), photo(brightpath_2023_6)],
},
{
  "id": "praxis-2023",
  "date": "Jun 2023",
  "title": "Praxis Week",
  "paragraphs": [
    [
      {
        "text": "During "
      },
      {
        "text": "Praxis Week",
        "href": "https://www.jburroughs.org/n/~board/campus-candids/post/praxis-week-2023"
      },
      {
        "text": ", students from John Burroughs School interacted with professional scientists, engineers, and physicians to explore career pathways in fields including data science, biotechnology, engineering, and robotics."
      }
    ],
    [
      {
        "text": "I participated as a STEM mentor, sharing my research experience and engaging students in discussions about science, engineering, and future career opportunities."
      }
    ]
  ],
  "links": [],
  photos: [photo(praxis_2023_1), photo(praxis_2023_2), photo(praxis_2023_3, 1350, 1800), photo(praxis_2023_4), photo(praxis_2023_5)],
},
{
  "id": "brightpath-2022",
  "date": "Jul 2022",
  "title": "BrightPath STEAM Academy Summer Camp",
  "paragraphs": [
    [
      {
        "text": "Participated in the 2022 BrightPath STEAM Academy Summer Camp to engage underrepresented youth in science, technology, engineering, arts, and mathematics."
      }
    ]
  ],
  "links": [
    {
      "label": "Event",
      "href": "https://brightpathsteam.org/2022-brightpath-steam-academy-1-day-virtual-washu-summer-camp/"
    },
    {
      "label": "Program",
      "href": "https://brightpathsteam.org/"
    },
    {
      "label": "News",
      "href": "https://www.stltoday.com/pr/news/brightpath-steam-academy-impacts-500-underrepresented-youth-in-st-louis-and-beyond/article_87086202-75d4-11ed-8c09-7fdb8d9faf9f.html"
    }
  ],
  photos: [photo(brightpath_2022_1, 1800, 1200), photo(brightpath_2022_2, 1350, 1800), photo(brightpath_2022_3), photo(brightpath_2022_4), photo(brightpath_2022_5)],
}
];
