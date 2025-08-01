export interface Assessment {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  url: string;
  category: string;
  bodyPart: string[];
  purpose: string;
}

export const assessments: Assessment[] = [
  {
    id: "odi",
    name: "Oswestry Disability Index",
    abbreviation: "ODI",
    description: "A self-completed questionnaire that gives a subjective percentage score of level of function (disability) in activities of daily living in those with low back pain.",
    url: "https://odi.aaronbuckland.com",
    category: "Disability Assessment",
    bodyPart: ["Spine", "Lower Back"],
    purpose: "Measures functional disability in patients with low back pain"
  },
  {
    id: "oks",
    name: "Oxford Knee Score",
    abbreviation: "OKS",
    description: "A patient-reported outcome measure specifically designed and developed to assess function and pain after total knee replacement surgery.",
    url: "https://oks-andrew.websited.org",
    category: "Joint Function",
    bodyPart: ["Knee"],
    purpose: "Evaluates knee function and pain levels post-surgery"
  },
  {
    id: "ohs",
    name: "Oxford Hip Score",
    abbreviation: "OHS",
    description: "A patient-reported outcome measure designed to assess function and pain after total hip replacement surgery from the patient's perspective.",
    url: "https://ohs-andrew.websited.org",
    category: "Joint Function",
    bodyPart: ["Hip"],
    purpose: "Measures hip function and pain following hip replacement"
  },
  {
    id: "koos",
    name: "Knee Injury and Osteoarthritis Outcome Score",
    abbreviation: "KOOS",
    description: "A patient-reported outcome measure for knee injury and osteoarthritis, evaluating symptoms, pain, function in daily living, sport and recreation function, and quality of life.",
    url: "https://koos.websited.org",
    category: "Osteoarthritis Assessment",
    bodyPart: ["Knee"],
    purpose: "Comprehensive assessment of knee injury and osteoarthritis outcomes"
  },
  {
    id: "hhs",
    name: "Harris Hip Score",
    abbreviation: "HHS",
    description: "A clinician-based assessment tool that measures hip function, pain, and mobility. It's widely used to evaluate the results of hip surgery.",
    url: "https://hhs.websited.org",
    category: "Clinical Assessment",
    bodyPart: ["Hip"],
    purpose: "Clinical evaluation of hip function and surgical outcomes"
  },
  {
    id: "vas-ssraa",
    name: "VAS-SSRAA",
    abbreviation: "VAS-SSRAA",
    description: "Visual Analog Scale for Spine Surgery Recovery and Activity Assessment. A tool for measuring patient-reported outcomes in spine surgery.",
    url: "https://vas-ssraa.websited.org",
    category: "Recovery Assessment",
    bodyPart: ["Spine"],
    purpose: "Tracks recovery progress following spine surgery"
  },
  {
    id: "fjs-12",
    name: "Forgotten Joint Score (FJS-12)",
    abbreviation: "FJS-12",
    description: "A patient-reported outcome measure that evaluates the ability to forget about the affected joint in everyday life, indicating successful treatment outcomes.",
    url: "https://forgotten-joint.websited.org",
    category: "Joint Awareness",
    bodyPart: ["Hip", "Knee"],
    purpose: "Measures joint awareness and treatment success"
  },
  {
    id: "eq-5d-5l",
    name: "EQ-5D-5L",
    abbreviation: "EQ-5D-5L",
    description: "A standardized instrument for measuring health status and quality of life, consisting of five dimensions with five levels each, plus a visual analog scale.",
    url: "https://eq-5d-5l.websited.org",
    category: "Quality of Life",
    bodyPart: ["General"],
    purpose: "General health status and quality of life assessment"
  },
  {
    id: "sane",
    name: "Single Assessment Numeric Evaluation",
    abbreviation: "SANE",
    description: "A simple, single-question assessment that asks patients to rate their current level of function as a percentage of normal function.",
    url: "https://sane.websited.org/",
    category: "Functional Assessment",
    bodyPart: ["General"],
    purpose: "Quick evaluation of overall functional status"
  },
  {
    id: "moxfq",
    name: "Manchester-Oxford Foot Questionnaire",
    abbreviation: "MOXFQ",
    description: "A patient-reported outcome measure specifically designed to assess outcomes of foot surgery, evaluating pain, walking/standing, and social interaction.",
    url: "https://moxfq.websited.org/",
    category: "Joint Function",
    bodyPart: ["Foot", "Ankle"],
    purpose: "Comprehensive assessment of foot and ankle function"
  },
  {
    id: "oes",
    name: "Oxford Elbow Score",
    abbreviation: "OES",
    description: "A patient-reported outcome measure designed to assess function and symptoms in patients with elbow problems, covering pain, function, and social-psychological effects.",
    url: "https://oes.websited.org/",
    category: "Joint Function",
    bodyPart: ["Elbow"],
    purpose: "Evaluates elbow function and pain in daily activities"
  },
  {
    id: "ases",
    name: "American Shoulder and Elbow Surgeons Score",
    abbreviation: "ASES",
    description: "A standardized assessment tool that evaluates shoulder function through both patient self-evaluation and physician assessment components.",
    url: "https://ases.websited.org/",
    category: "Clinical Assessment",
    bodyPart: ["Shoulder", "Elbow"],
    purpose: "Comprehensive evaluation of shoulder and elbow function"
  },
  {
    id: "meps",
    name: "Mayo Elbow Performance Score",
    abbreviation: "MEPS",
    description: "A clinician-based assessment tool that evaluates elbow function based on pain, motion, stability, and daily function parameters.",
    url: "https://meps.websited.org/",
    category: "Clinical Assessment",
    bodyPart: ["Elbow"],
    purpose: "Clinical evaluation of elbow performance and function"
  },
  {
    id: "oss",
    name: "Oxford Shoulder Score",
    abbreviation: "OSS",
    description: "A patient-reported outcome measure specifically designed to assess function and pain in patients with shoulder problems in their daily activities.",
    url: "https://oss.websited.org/",
    category: "Joint Function",
    bodyPart: ["Shoulder"],
    purpose: "Measures shoulder function and pain levels"
  },
  {
    id: "worc",
    name: "Western Ontario Rotator Cuff Index",
    abbreviation: "WORC",
    description: "A disease-specific quality of life measurement tool for patients with rotator cuff pathology, covering physical symptoms, sports/recreation, work, lifestyle, and emotions.",
    url: "https://worc.websited.org/",
    category: "Quality of Life",
    bodyPart: ["Shoulder"],
    purpose: "Comprehensive quality of life assessment for rotator cuff conditions"
  }
];

export const categories = [
  "All",
  "Disability Assessment",
  "Joint Function",
  "Osteoarthritis Assessment", 
  "Clinical Assessment",
  "Recovery Assessment",
  "Joint Awareness",
  "Quality of Life",
  "Functional Assessment"
];

export const bodyParts = [
  "All",
  "Spine",
  "Lower Back", 
  "Knee",
  "Hip",
  "Shoulder",
  "Elbow",
  "Foot",
  "Ankle",
  "General"
];
