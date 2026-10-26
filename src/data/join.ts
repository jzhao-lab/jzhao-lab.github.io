// Adapted from the requested Join-page format. These are enquiry suggestions,
// not confirmed job openings, funding offers, or admission requirements.
export type JoinOpportunity = {
  title: string;
  description: string;
  links?: { label: string; href: string }[];
};

export const joinContent = {
  highlight:
    "Dr. Zhao will join the University of Wisconsin–Madison in Fall 2027 as a tenure-track Assistant Professor, with a joint appointment in the Department of Mechanical Engineering (ME) and the Department of Electrical & Computer Engineering (ECE).",
  rankingSource: "Source: UW–Madison News",
  rankings: [
    {
      label: "Subject rankings",
      note: "U.S. · U.S. News 2026 (Graduate)",
      items: [
        { rank: "#16", name: "Mechanical Engineering" },
        { rank: "#15", name: "Electrical Engineering" },
      ],
    },
    {
      label: "National rankings",
      note: "United States",
      items: [
        { rank: "#34", name: "U.S. News (2027)" },
        { rank: "#8", name: "U.S. News Public Schools (2027, tied)" },
        { rank: "#23", name: "Times Higher Education (2027, tied)" },
      ],
    },
    {
      label: "World rankings",
      note: "Global",
      items: [
        { rank: "#60", name: "U.S. News Best Global Universities (2026–2027)" },
        { rank: "#35", name: "ARWU / ShanghaiRanking (2026)" },
        { rank: "#53", name: "Times Higher Education (2027, tied)" },
      ],
    },
  ],

  introduction: "Zhao Lab will explore research at the intersection of translational bioelectronics, AI-driven intelligent healthcare, smart garments, robotics, embodied intelligence & interactions, and emerging micro/nano-electronics. Connect about human and technology through materials, devices, advanced manufacturing, system integrations, multimodal data analytics, and translational deployment.",
  disciplinesList: [
    "Mechanical engineering",
    "Electrical & Computer engineering",
    "Materials science",
    "Bioengineering",
    "Biomedical engineering",
    "Computer science",
    "AI",
  ],
  skills: [
    "Bioelectronics, biomaterials, and bio-interfaces",
    "Translational healthcare and women's health",
    "E-textiles and soft, flexible, stretchable electronics",
    "Wearable sensors, tactile and haptic interfaces",
    "Robotics — exoskeletons, soft, and medical robots",
    "Electronics, micro/nano fabrication, and advanced manufacturing",
    "Sensing, semiconductors, and optoelectronic devices",
    "Multimodal data analysis, fusion, and AI",
  ],
  opportunities: [
    {
      title: "Graduate students (MS & PhD)",
      description: "Prospective MS and PhD students are encouraged to apply through the official UW–Madison program pages below and to list Dr. Zhao as a potential advisor. I also encourage you to reach out to discuss shared research interests.\n\n- When reaching out, you are encouraged to include: (i) CV with full publication lists and three references; (ii)  a brief description of research background; (iii) relevant research skills and experiences, if any (iv) research topic(s) that excite you the most (v) research topics that you dislike, if any ",
      links: [
        { label: "Official PhD program in Mechanical Engineering", href: "https://engineering.wisc.edu/programs/degrees/mechanical-engineering-phd/" },
        { label: "Official PhD program in Electrical & Computer Engineering", href: "https://engineering.wisc.edu/programs/degrees/electrical-and-computer-engineering-phd/" },
        { label: "Official MS program in Mechanical Engineering", href: "https://engineering.wisc.edu/programs/degrees/mechanical-engineering-research-ms/" },
        { label: "Official MS program in Electrical & Computer Engineering", href: "https://engineering.wisc.edu/programs/degrees/electrical-and-computer-engineering-research-ms/" },
      ],
    },
    {
      title: "Postdoctoral researchers",
      description: "Get in touch to discuss shared research interests and potential collaborations. A CV, a short research statement, and your anticipated timing are helpful starting points.",
    },
    {
      title: "Undergraduates & research interns",
      description: "Share your interests, relevant coursework or project experience, and anticipated availability. Tell me about something you have built, measured, or analyzed, and what you would like to explore next.",
    },
    {
      title: "Visiting researchers",
      description: "Reach out about potential research connections or visits. Include your experience, research interests, and preferred timing so we can discuss possible fit.",
    },
    {
      title: "Collaborate with us",
      description: "Have an idea, a research question, or a complementary area of expertise? Let’s explore connections across wearable healthcare, soft electronics, robotics, and human-computer interactions.",
    },
  ],
};