export const caseStudies = [
  {
    id: "ismt",
    site: "ISMT Business School",
    url: "https://ismtindia.com",
    niche: "Education — BCA / BBA / MBA Admissions, Mumbai",
    timeline: "March 2025 – Present",
    challenge:
      "New and competitive education website with low organic visibility in a crowded Mumbai admissions market. Needed to grow organic traffic and generate inbound student inquiries.",
    actions: [
      "Conducted full technical SEO audit — fixed crawlability and indexing issues",
      "Built pillar–cluster content strategy around BCA, BBA, and MBA keywords",
      "Implemented Article, FAQ, and Breadcrumb schema markup",
      "Optimised on-page elements: meta tags, headings, internal links, image alt text",
      "Executed backlink outreach to increase domain authority",
    ],
    results: [
      { label: "Organic Traffic Share", before: "51%", after: "78%" },
      { label: "Avg. Indexing Time", before: "2–3 weeks", after: "3–5 days" },
      { label: "Page 1 Keywords", before: "~2", after: "11+" },
    ],
    trafficData: {
      labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      clicks: [250, 280, 310, 420, 580, 820, 1100, 1480, 2200, 3800, 5600, 7250],
    },
    image: '/ismtindiawebsite.webp',
  },
  {
    id: "careermanagers",
    site: "CareerManagers",
    url: "https://careermanagers.in",
    niche: "Exam Preparation — CET, RRB, NABARD, GATE",
    timeline: "2025 – Present",
    challenge:
      "Exam-prep platform with existing content but poor organic discoverability for high-intent study material and mock test queries.",
    actions: [
      "Identified high-intent study material and mock test keywords with low competition",
      "Restructured existing content for better search intent alignment",
      "Added structured data for course/exam content",
      "Improved internal linking between syllabus, study material, and mock test pages",
      "Built topical authority across CET, RRB, NABARD, and GATE verticals",
    ],
    results: [
      { label: "Organic Traffic Share", before: "42%", after: "71%" },
      { label: "Page 1 Keywords", before: "~3", after: "10+" },
      {
        label: "Pages on Page 2 → Page 1",
        before: "Page 2",
        after: "In progress",
      },
    ],
    trafficData: {
      labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      clicks: [110, 180, 420, 1200, 3100, 5130],
    },
    image: '/careermaangers.webp',
  },
  {
    id: "examtarikh",
    site: "ExamTarikh",
    url: "https://examtarikh.in",
    niche: "Government Exams — SSC CGL, SBI PO (Personal Project)",
    timeline: "Personal project — ongoing",
    challenge:
      "Built and ranked a personal exam-prep website from scratch to validate SEO skills independently, outside of employment.",
    actions: [
      "Built site architecture and content strategy solo",
      "Targeted question-form and long-tail SSC/SBI keywords",
      "Created unique tools (e.g. SBI PO pension calculator) to earn organic visibility",
      "Applied full technical SEO independently — indexing, schema, on-page",
    ],
    results: [
      { label: "Pages Ranked Page 1", before: "0", after: "4+" },
      {
        label: "Unique Tool Rankings",
        before: "0",
        after: "SBI PO calculator — P1",
      },
      { label: "Built Solo", before: "—", after: "✓ End-to-end" },
    ],
    trafficData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      clicks: [50, 180, 450, 820],
    },
    image: '/examtarikh.webp',
  },
];
