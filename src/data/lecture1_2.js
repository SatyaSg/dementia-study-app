export const lecture1_2 = {
  id: 1,
  title: "Introduction & Need for Dementia Care",
  colour: "#1F3864",

  revision: {
    sections: [
      // ── LECTURE 1 ──────────────────────────────────────────────────────────
      {
        type: "keyDefinition",
        label: "KEY DEFINITION",
        text: "Dementia is a progressive syndrome causing decline in memory, thinking, behaviour and the ability to carry out daily activities. It is NOT a normal part of ageing.",
      },
      {
        type: "statTable",
        heading: "Singapore Statistics (WiSE Study 2023 — IMH)",
        rows: [
          {
            label: "1 in 11",
            value:
              "Individuals aged 60 and above in Singapore live with dementia",
          },
          {
            label: "1 in 2",
            value: "Individuals aged 85 and above are diagnosed with dementia",
          },
          {
            label: "74,000",
            value:
              "Approximate number of persons living with dementia in Singapore in 2023",
          },
          {
            label: "152,000",
            value:
              "Projected number of persons with dementia in Singapore by 2030",
          },
          {
            label: "Aged Society",
            value:
              "Singapore reached this status in 2017 (>14% population aged 65+)",
          },
          {
            label: "Super-Aged",
            value:
              "Singapore is expected to reach this status by 2026 (>21% aged 65+)",
          },
          {
            label: "WiSE 2013 vs 2023",
            value:
              "Prevalence slightly decreased from 10% to 8.8% — a positive trend",
          },
          {
            label: "Undiagnosed",
            value:
              "Improved: 70.6% undiagnosed in 2013, reduced to 51.5% in 2023",
          },
        ],
      },
      {
        type: "bulletList",
        heading: "Young-Onset Dementia (YOD) — Key Facts",
        items: [
          "Defined as dementia diagnosed in individuals under the age of 65",
          "Strongly linked to stroke and traumatic brain injury (TBI) — different from older adults",
          "Over 100 cases diagnosed at NNI (National Neuroscience Institute) each year",
          "~30% of dementia cases at NNI are young-onset; youngest patient recorded was 40 years old",
          "YOD is more costly: avg ~S$21,391/year vs S$11,356/year for older adults with dementia",
        ],
      },
      {
        type: "statTable",
        heading: "Caregiver Impact — Key Numbers to Remember",
        rows: [
          {
            label: "Average caregiver age",
            value: "62 years old; majority are women",
          },
          {
            label: "Weekly caregiving hours",
            value: "33 hours per week on average",
          },
          {
            label: "Overwhelmed caregivers",
            value:
              "74% report feeling overwhelmed (Milieu & Dementia Singapore, 2023)",
          },
          {
            label: "Caregiver training attended",
            value: "Only 5% have attended any formal caregiver training",
          },
          {
            label: "Aware of subsidies",
            value: "Only 38% are aware of subsidies for caregiver courses",
          },
          {
            label: "Eldercare leave",
            value: "Only 28% of employed caregivers receive eldercare leave",
          },
          {
            label: "Extra cost of dementia care",
            value:
              "~40% more expensive than regular day care (Lien Foundation, 2018)",
          },
          {
            label: "Total cost (SG, 2015)",
            value: "~S$2.8 billion — expected to triple by 2030",
          },
        ],
      },
      {
        type: "bulletList",
        heading:
          "Government Response: National Dementia Strategy 2023–2033 (6 Goals)",
        items: [
          "Reduce risk through healthier lifestyles and public education",
          "Improve early detection and diagnosis (including at polyclinic level)",
          "Strengthen caregiver support — respite care, training, workplace flexibility",
          "Empower persons with dementia to live meaningfully in the community",
          "Build dementia-inclusive environments (housing, transport, amenities)",
          "Enhance research and data capability for evidence-based policy",
        ],
      },
      {
        type: "statTable",
        heading: "Key Programmes — Singapore (Must Know)",
        rows: [
          {
            label: "DFC (Dementia-Friendly Communities)",
            value:
              "Launched 2016 — trained neighbourhoods; e.g. Yishun, Bedok, Hong Kah North",
          },
          {
            label: "CREST (Community Outreach Teams)",
            value:
              "Provides early detection, education and emotional support in heartlands",
          },
          {
            label: "CTG (Caregivers Training Grant)",
            value: "Subsidises affordable dementia care training for families",
          },
          {
            label: "ElderFund / MediFund",
            value: "Financial assistance schemes for long-term care costs",
          },
          {
            label: "Pioneer Generation Package",
            value: "Additional support for pioneering generation seniors",
          },
          {
            label: "Memory Clinics",
            value:
              "Established in 16 of 23 polyclinics for community-level dementia diagnosis",
          },
          {
            label: '"Forget Us Not" Campaign',
            value: "Public awareness campaign to reduce stigma around dementia",
          },
        ],
      },
      {
        type: "examTip",
        label: "EXAM GOLDEN RULE",
        text: "In any scenario question asking what an HCA should do: SAFETY + DIGNITY + CALM + PATIENT-CENTRED approach is ALWAYS the correct answer. Never restrain, never ignore, never argue, never punish.",
      },

      // ── LECTURE 2 ──────────────────────────────────────────────────────────
      {
        type: "keyDefinition",
        label: "CORE DEFINITION",
        text: "Dementia is an UMBRELLA TERM — not a single disease. It describes a group of symptoms caused by disorders affecting the brain, leading to decline in memory, thinking, language, judgement and behaviour. It is NOT a normal part of ageing.",
      },
      {
        type: "comparisonTable",
        heading: "4 Main Types of Dementia — Quick Comparison",
        columns: ["Type", "Cause", "Key Feature", "Special Note"],
        rows: [
          {
            col1: "Alzheimer's Disease",
            col2: "Amyloid plaques & tau tangles",
            col3: "Memory loss first; gradual onset",
            col4: "Most common — 60–80% of cases",
          },
          {
            col1: "Vascular Dementia",
            col2: "Reduced blood flow (stroke/hypertension)",
            col3: "Sudden onset; stepwise decline",
            col4: "2nd most common; may be preventable",
          },
          {
            col1: "Lewy Body Dementia",
            col2: "Lewy body protein deposits",
            col3: "Visual hallucinations; Parkinson-like symptoms",
            col4: "Fluctuating alertness; affects both men and women",
          },
          {
            col1: "Frontotemporal (FTD)",
            col2: "Protein clumps in frontal/temporal lobes",
            col3: "Personality & behaviour changes FIRST",
            col4: "More common in under-65s (Pick's disease)",
          },
        ],
      },
      {
        type: "twoColumnList",
        heading: "Reversible vs Irreversible Dementia",
        columns: [
          {
            title: "REVERSIBLE (treatable causes)",
            items: ["Vitamin B12 deficiency", "Hypothyroidism", "Depression"],
          },
          {
            title: "IRREVERSIBLE (cannot be cured)",
            items: [
              "Alzheimer's disease",
              "Vascular dementia",
              "Lewy Body dementia",
              "Frontotemporal dementia",
            ],
          },
        ],
        note: "Most common dementias are irreversible — treatment only manages symptoms.",
      },
      {
        type: "bulletList",
        heading: "Symptoms of Dementia — 12 Key Signs",
        items: [
          "Memory loss — forgetting recent events, names of loved ones; disrupts daily life",
          "Difficulty with familiar tasks — cannot prepare food, handle finances, or get dressed independently",
          "Language problems — cannot find the right words; using wrong words or becoming mute",
          "Disorientation to time/place — gets lost in familiar places; confused about day, month, year",
          "Poor judgement — making unsafe decisions; e.g. going out in cold weather without clothes",
          "Misplacing objects — puts things in wrong places (wallet in oven); blames others for theft",
          "Mood/personality changes — depression, anxiety, suspicion, irritability",
          "Withdrawal from social life — stops hobbies, avoids social situations",
          "Aggression / wandering — common behavioural symptoms requiring careful management",
          "Apathy — loss of motivation or interest in activities they used to enjoy",
          "Insomnia / sundowning — confusion or agitation that worsens in the late afternoon/evening",
          "Increasing dependence — progressively relies on others for all activities of daily living (ADLs)",
        ],
      },
      {
        type: "comparisonTable",
        heading: "Normal Ageing vs Dementia — Critical Distinction",
        columns: ["Normal Ageing (Not Dementia)", "Dementia"],
        rows: [
          {
            col1: "Forgets where they parked the car",
            col2: "Forgets they drove a car at all",
          },
          {
            col1: "Forgets where they put their keys",
            col2: "Forgets what keys are used for",
          },
          {
            col1: "Goes into a room and forgets why",
            col2: "Forgets where they are (the room itself)",
          },
          {
            col1: "Sometimes cannot find the right word",
            col2: "Forgets the meaning of common words",
          },
          {
            col1: "Mild slowdown in recall",
            col2: "Memory loss disrupts daily functioning",
          },
        ],
      },
      {
        type: "statTable",
        heading: "Stages of Dementia Progression",
        rows: [
          {
            label: "Stage 1: Preclinical",
            value:
              "Brain changes occur — NO visible symptoms yet. Can last years. Brain imaging may detect changes.",
          },
          {
            label: "Stage 2: Mild Cognitive Impairment (MCI)",
            value:
              "Mild memory/thinking problems. Person can still function independently.",
          },
          {
            label: "Stage 3: Mild Dementia (Early)",
            value:
              "Memory lapses noticeable. Gets lost, forgets names. Needs some help.",
          },
          {
            label: "Stage 4: Moderate Dementia (Middle)",
            value:
              "Significant memory gaps. Cannot manage daily tasks alone. May wander.",
          },
          {
            label: "Stage 5: Severe Dementia (Late)",
            value:
              "Fully dependent. May lose ability to speak, walk, swallow. 24-hour care needed.",
          },
        ],
      },
      {
        type: "twoColumnList",
        heading: "Risk Factors for Dementia",
        columns: [
          {
            title: "Non-Modifiable (Cannot Change)",
            items: [
              "Age (>65 years, risk doubles every 5 years)",
              "Family history of dementia",
              "Genetics — APOE-e4 gene (risk gene)",
              "Genetics — APP, PS-1, PS-2 (deterministic genes for early onset)",
              "Previous serious head injury",
            ],
          },
          {
            title: "Modifiable (Can Be Reduced)",
            items: [
              "High blood pressure (hypertension)",
              "Diabetes",
              "High cholesterol",
              "Heart disease / stroke",
              "Physical inactivity / obesity",
              "Smoking and excessive alcohol",
              "Social isolation and low education",
              "Depression (if untreated)",
            ],
          },
        ],
      },
      {
        type: "comparisonTable",
        heading: "Cognitive Assessment Tools — Quick Reference",
        columns: ["Tool", "Score / Time", "Cut-off", "Key Feature"],
        rows: [
          {
            col1: "MMSE (Mini-Mental State Exam)",
            col2: "0–30 / 5–10 min",
            col3: "≤23 = cognitive impairment",
            col4: "11 questions; tests orientation, registration, attention, recall, language. Most widely used.",
          },
          {
            col1: "MoCA (Montreal Cognitive Assessment)",
            col2: "0–30 / ~10 min",
            col3: "<26 = abnormal",
            col4: "Screens 6 domains: memory, language, attention, visuospatial, abstraction, orientation. Better at detecting MCI than MMSE.",
          },
          {
            col1: "AD8 (8-Item Informant Interview)",
            col2: "0–8 / ~3 min",
            col3: "≥2 = cognitive impairment",
            col4: "Informant-based (family/friend completes it). Tests memory, orientation, judgement, function. Culturally sensitive.",
          },
          {
            col1: "GPCOG (GP Assessment of Cognition)",
            col2: "2–5 min",
            col3: "Requires further testing if score low",
            col4: "Designed for GPs. Needs patient to write/draw. Screening tool only — not diagnostic.",
          },
          {
            col1: "AMT (Abbreviated Mental Test)",
            col2: "0–10 / 3–5 min",
            col3: "<7 = probable impairment",
            col4: "10 simple orientation questions. Used at TTSH and community hospitals in Singapore.",
          },
        ],
      },
      {
        type: "examTip",
        label: "EXAM TIP — Diagnosis",
        text: "Diagnosis of dementia requires: (1) Thorough medical history, (2) Mental status and mood testing, (3) Physical and neurological examination, (4) Blood tests and brain imaging (CT/MRI) to rule out other causes. An HCA DOES NOT diagnose — they observe, report, and support under supervision.",
      },
    ],
  },

  qa: [
    // PART 3 — HIGH-PROBABILITY EXAM TOPICS (Quick Answers) — Lecture 1
    {
      question: "What does the WiSE 2023 study tell us?",
      answer:
        "About 1 in 11 people aged 60+ and 1 in 2 people aged 85+ in Singapore have dementia. Conducted by IMH, funded by MOH.",
    },
    {
      question:
        "When did Singapore become 'aged society' and when will it be 'super-aged'?",
      answer:
        "Aged society: 2017. Super-aged society: 2026 (when >21% of population is aged 65+).",
    },
    {
      question: "How many Singaporeans are projected to have dementia by 2030?",
      answer:
        "152,000 — highlighting the urgent need for more dementia care services and professionals.",
    },
    {
      question: "What is the financial burden of dementia in Singapore?",
      answer:
        "Estimated S$2.8 billion in 2015; expected to triple by 2030. YOD costs ~S$21,391/year vs S$11,356 for older adults.",
    },
    {
      question:
        "What are the 6 strategic goals of the National Dementia Strategy (2023–2033)?",
      answer:
        "Reduce risk, improve detection, support caregivers, empower persons with dementia, build inclusive environments, enhance research.",
    },
    {
      question: "What is CREST and what does it do?",
      answer:
        "Community Outreach Teams — proactively identify seniors at risk of dementia and refer them for further assessment in heartland communities.",
    },
    {
      question: "What is CTG and who benefits?",
      answer:
        "Caregivers Training Grant — helps family members access affordable dementia care training courses, reducing their skills gap.",
    },
    {
      question: "What percentage of caregivers feel overwhelmed?",
      answer: "74%, according to a 2023 Milieu and Dementia Singapore study.",
    },
    {
      question: "How many hours per week do caregivers spend on average?",
      answer: "33 hours per week. Yet only 5% have received formal training.",
    },
    {
      question: "What is young-onset dementia and what causes it?",
      answer:
        "Dementia in people under 65. Commonly linked to stroke, traumatic brain injury and neurological conditions — different from age-related dementia.",
    },
    // PART 3 — HIGH-PROBABILITY EXAM TOPICS (Quick Answers) — Lecture 2
    {
      question: "Is dementia a disease or a syndrome?",
      answer:
        "It is an UMBRELLA TERM / syndrome — not one single disease. It describes a group of symptoms caused by brain cell death or dysfunction.",
    },
    {
      question: "Is dementia a normal part of ageing?",
      answer:
        "NO. This is a very common misconception. Dementia is caused by disease, not by normal ageing.",
    },
    {
      question: "What is the most common type of dementia?",
      answer:
        "Alzheimer's Disease — accounting for 60–80% of all dementia cases worldwide.",
    },
    {
      question: "What causes vascular dementia?",
      answer:
        "Reduced blood flow to the brain due to stroke, hypertension, or other vascular conditions. It is the second most common type.",
    },
    {
      question: "What makes frontotemporal dementia different?",
      answer:
        "It affects personality and behaviour FIRST (before memory). More common in people under 65. Also known as Pick's disease.",
    },
    {
      question: "What are the reversible causes of dementia?",
      answer:
        "Vitamin B12 deficiency, hypothyroidism (underactive thyroid), and severe depression — all treatable.",
    },
    {
      question: "What is an MMSE and what score indicates impairment?",
      answer:
        "Mini-Mental State Examination — 30-point test. Score of 23 or below indicates cognitive impairment. Takes 5–10 minutes.",
    },
    {
      question: "What is the MoCA cut-off score?",
      answer:
        "Score below 26 is considered abnormal. The MoCA is better at detecting mild cognitive impairment (MCI) than the MMSE.",
    },
    {
      question: "What is sundowning?",
      answer:
        "A pattern where dementia symptoms worsen in the late afternoon or evening, causing increased confusion, agitation and wandering.",
    },
    {
      question: "What are the key differences between MMSE and MoCA?",
      answer:
        "MMSE: 11 questions, 5 domains, better for moderate-severe dementia. MoCA: 30 points, 6 domains (includes executive function/visuospatial), better for MCI detection.",
    },
    {
      question: "What does an HCA do during cognitive assessment?",
      answer:
        "An HCA assists under supervision — they DO NOT independently administer diagnostic tests or make diagnoses. They observe and report behaviour.",
    },
    {
      question: "What genes are linked to Alzheimer's disease?",
      answer:
        "Risk gene: APOE-e4. Deterministic genes: APP, Presenilin-1 (PS-1), Presenilin-2 (PS-2) — these directly cause early-onset Alzheimer's.",
    },
  ],

  level1: [
    // PART 4 — LEVEL 1 MCQs (Knowledge & Recall) Q1–Q30
    {
      question:
        "According to the 2023 WiSE study conducted by IMH, approximately what fraction of Singapore residents aged 60 and above lives with dementia?",
      options: ["A. 1 in 5", "B. 1 in 11", "C. 1 in 20", "D. 1 in 3"],
      answer: "B",
      explanation:
        "The 2023 Well-being of the Singapore Elderly (WiSE) study by IMH found approximately 1 in 11 persons aged 60 and above has dementia in Singapore.",
    },
    {
      question:
        "In which year did Singapore officially become an 'aged society' according to UN classification?",
      options: ["A. 2010", "B. 2020", "C. 2017", "D. 2026"],
      answer: "C",
      explanation:
        "Singapore became an 'aged society' in 2017, when the proportion of residents aged 65 and above exceeded 14%. It is expected to become 'super-aged' by 2026.",
    },
    {
      question:
        "What is the UN threshold percentage for a country to be classified as 'super-aged'?",
      options: [
        "A. 14% of population aged 65+",
        "B. 7% of population aged 65+",
        "C. 21% of population aged 65+",
        "D. 25% of population aged 65+",
      ],
      answer: "C",
      explanation:
        "The UN defines 'super-aged' as when 21% or more of the population is aged 65 and above. Singapore is expected to reach this by 2026.",
    },
    {
      question:
        "What is the estimated number of Singaporeans projected to be living with dementia by 2030?",
      options: ["A. 74,000", "B. 100,000", "C. 152,000", "D. 200,000"],
      answer: "C",
      explanation:
        "MOH projects that approximately 152,000 Singaporeans will be living with dementia by 2030, due to the rapidly ageing population.",
    },
    {
      question:
        "According to the 2023 WiSE study, approximately what proportion of individuals aged 85 and above in Singapore has dementia?",
      options: ["A. 1 in 4", "B. 1 in 3", "C. 1 in 2", "D. 1 in 11"],
      answer: "C",
      explanation:
        "The WiSE 2023 study found that approximately 1 in 2 (50%) of people aged 85 and above in Singapore have dementia.",
    },
    {
      question:
        "The average caregiver of a person with dementia in Singapore is approximately how old, according to the TraCE study?",
      options: [
        "A. 45 years old",
        "B. 55 years old",
        "C. 62 years old",
        "D. 70 years old",
      ],
      answer: "C",
      explanation:
        "The TraCE (Caregiving Transitions Among Family Caregivers of Elderly Singaporeans) study found that caregivers average 62 years of age and are mostly women.",
    },
    {
      question:
        "On average, how many hours per week do family caregivers of persons with dementia in Singapore spend on caregiving?",
      options: ["A. 10 hours", "B. 20 hours", "C. 33 hours", "D. 50 hours"],
      answer: "C",
      explanation:
        "Despite an average of 33 hours per week of caregiving, only 5% of caregivers have attended any formal training — a major concern highlighted in the lecture.",
    },
    {
      question:
        "What does 'CTG' stand for in the context of Singapore's dementia support programmes?",
      options: [
        "A. Community Training Group",
        "B. Caregivers Training Grant",
        "C. Cognitive Therapy Guidelines",
        "D. Clinical Training Grant",
      ],
      answer: "B",
      explanation:
        "CTG = Caregivers Training Grant. It is a financial assistance scheme that helps family members access affordable dementia care training courses.",
    },
    {
      question:
        "Young-onset dementia (YOD) is defined as dementia diagnosed in individuals:",
      options: [
        "A. Aged 70 and above",
        "B. Aged 75 and below",
        "C. Under 65 years of age",
        "D. Under 80 years of age",
      ],
      answer: "C",
      explanation:
        "Young-onset dementia (YOD) is clinically defined as dementia in individuals under the age of 65. The youngest recorded case at NNI was 40 years old.",
    },
    {
      question:
        "Compared to regular daycare, how much more expensive is dementia care, according to the 2018 Lien Foundation study?",
      options: [
        "A. 10% more expensive",
        "B. 20% more expensive",
        "C. 40% more expensive",
        "D. Double the cost",
      ],
      answer: "C",
      explanation:
        "The 2018 Lien Foundation study found that dementia care costs approximately 40% more than regular social or day care, creating financial hardship for many families.",
    },
    {
      question:
        "Which community programme was launched in 2016 to train residents and businesses to recognise and assist persons with dementia?",
      options: [
        "A. CREST",
        "B. CTG",
        "C. Dementia-Friendly Communities (DFC)",
        "D. ElderFund",
      ],
      answer: "C",
      explanation:
        "Dementia-Friendly Communities (DFC) was launched in 2016. Neighbourhoods like Yishun, Bedok, and Hong Kah North train residents and businesses to assist persons with dementia.",
    },
    {
      question: "What is the primary role of CREST teams in Singapore?",
      options: [
        "A. Administer medications to persons with dementia",
        "B. Provide surgical interventions for dementia",
        "C. Proactively detect at-risk seniors and provide community support",
        "D. Build dementia-friendly housing",
      ],
      answer: "C",
      explanation:
        "CREST (Community Outreach Teams) proactively identify seniors at risk of dementia in the heartlands, provide education, early detection and emotional support.",
    },
    {
      question:
        "What percentage of caregivers in Singapore reported feeling overwhelmed by their caregiving responsibilities, according to a 2023 survey?",
      options: ["A. 38%", "B. 55%", "C. 74%", "D. 90%"],
      answer: "C",
      explanation:
        "A 2023 study by Milieu and Dementia Singapore found that 74% (more than 7 in 10) of caregivers reported feeling overwhelmed by their duties.",
    },
    {
      question:
        "The National Dementia Strategy 2023–2033 has how many strategic goals?",
      options: ["A. 3", "B. 4", "C. 5", "D. 6"],
      answer: "D",
      explanation:
        "The National Dementia Strategy 2023–2033 is guided by 6 strategic goals: reduce risk, improve detection, support caregivers, empower persons with dementia, build inclusive environments, and enhance research.",
    },
    {
      question:
        "Compared to older adults with dementia, the annual care cost for a younger person with dementia (YOD) is approximately:",
      options: [
        "A. The same cost",
        "B. Slightly lower due to better health",
        "C. Nearly double — about S$21,391 vs S$11,356",
        "D. Only marginally higher",
      ],
      answer: "C",
      explanation:
        "YOD costs approximately S$21,391 per year vs S$11,356 for older adults — nearly double — largely due to indirect costs such as lost income and long-term caregiving.",
    },
    {
      question: "Which of the following BEST describes dementia?",
      options: [
        "A. A single disease that only affects memory",
        "B. A normal part of the ageing process",
        "C. An umbrella term for symptoms caused by disorders affecting the brain",
        "D. A temporary condition that can always be reversed",
      ],
      answer: "C",
      explanation:
        "Dementia is an umbrella term — it is NOT a single disease, NOT normal ageing, and most forms are NOT reversible. It describes a group of symptoms from various brain disorders.",
    },
    {
      question:
        "Which type of dementia is the most common worldwide, accounting for approximately 60–80% of all cases?",
      options: [
        "A. Vascular dementia",
        "B. Frontotemporal dementia",
        "C. Alzheimer's disease",
        "D. Lewy body dementia",
      ],
      answer: "C",
      explanation:
        "Alzheimer's disease is the most common form of dementia, accounting for 60–80% of all cases. It involves amyloid plaques and tau tangles in the brain.",
    },
    {
      question:
        "Which of the following causes of dementia is REVERSIBLE with treatment?",
      options: [
        "A. Alzheimer's disease",
        "B. Vascular dementia",
        "C. Vitamin B12 deficiency",
        "D. Frontotemporal dementia",
      ],
      answer: "C",
      explanation:
        "Vitamin B12 deficiency can cause dementia-like symptoms that are reversible with appropriate treatment. Alzheimer's, vascular and frontotemporal dementias are irreversible.",
    },
    {
      question:
        "A patient scores 21 out of 30 on the MMSE. What does this indicate?",
      options: [
        "A. Normal cognition — no action needed",
        "B. Borderline — repeat test in 6 months",
        "C. Likely cognitive impairment — further assessment recommended",
        "D. Only mild forgetfulness typical of ageing",
      ],
      answer: "C",
      explanation:
        "An MMSE score of 23 or below is indicative of cognitive impairment. A score of 21 is clearly below the cut-off and warrants further clinical assessment and reporting to the nurse/supervisor.",
    },
    {
      question:
        "What is the key difference between the MMSE and the MoCA in terms of what they detect?",
      options: [
        "A. MMSE tests more domains than MoCA",
        "B. MoCA is only for severe dementia",
        "C. MoCA is better at detecting Mild Cognitive Impairment (MCI); MMSE may miss early cases",
        "D. They are identical in sensitivity",
      ],
      answer: "C",
      explanation:
        "The MoCA includes executive function and visuospatial domains and is more sensitive for detecting MCI. The MMSE has been criticised for missing mild or early-stage cases.",
    },
    {
      question:
        "Which type of dementia primarily causes changes in personality and behaviour BEFORE memory loss occurs?",
      options: [
        "A. Alzheimer's disease",
        "B. Vascular dementia",
        "C. Lewy body dementia",
        "D. Frontotemporal dementia (FTD)",
      ],
      answer: "D",
      explanation:
        "Frontotemporal dementia (also called Pick's disease) affects the frontal and temporal lobes, causing personality and behaviour changes first. It is more common in people under 65.",
    },
    {
      question:
        "Lewy body dementia is characterised by which of the following hallmark symptoms?",
      options: [
        "A. Sudden-onset memory loss after a stroke",
        "B. Visual hallucinations and Parkinson-like motor symptoms",
        "C. Personality changes only, with intact memory",
        "D. Complete reversal with B12 supplements",
      ],
      answer: "B",
      explanation:
        "Lewy body dementia is characterised by recurrent visual hallucinations, fluctuating alertness, and Parkinson-like motor symptoms (shuffling gait, rigidity), making it hard to distinguish from Alzheimer's or Parkinson's disease.",
    },
    {
      question: "Vascular dementia is caused by:",
      options: [
        "A. Abnormal protein deposits in the brain called Lewy bodies",
        "B. Reduced blood flow to the brain due to stroke or hypertension",
        "C. Vitamin deficiency causing brain cell death",
        "D. Inherited deterministic gene mutations only",
      ],
      answer: "B",
      explanation:
        "Vascular dementia results from reduced blood flow to the brain, often due to strokes or chronic conditions like hypertension and diabetes. It is the second most common type of dementia.",
    },
    {
      question:
        "According to the lecture, which gene is classified as a RISK gene (increases risk but does not guarantee dementia) for Alzheimer's disease?",
      options: [
        "A. Presenilin-1 (PS-1)",
        "B. Presenilin-2 (PS-2)",
        "C. APOE-e4",
        "D. APP gene",
      ],
      answer: "C",
      explanation:
        "APOE-e4 is a risk gene — having it increases the likelihood of developing Alzheimer's but does not guarantee it. APP, PS-1 and PS-2 are deterministic genes that directly cause early-onset Alzheimer's.",
    },
    {
      question:
        "Which assessment tool is described as informant-based — meaning a family member or close friend completes it on behalf of the patient?",
      options: ["A. MMSE", "B. MoCA", "C. GPCOG", "D. AD8"],
      answer: "D",
      explanation:
        "The AD8 is an informant-based interview completed by someone who knows the patient well (spouse, child, close friend). It is culturally sensitive, takes ~3 minutes, and is good for detecting early dementia.",
    },
    {
      question:
        "A normal older adult forgets where they placed their glasses, but remembers what glasses are for. What does this suggest?",
      options: [
        "A. Early sign of Alzheimer's disease",
        "B. Normal ageing process",
        "C. Moderate dementia requiring urgent assessment",
        "D. Vascular dementia after a minor stroke",
      ],
      answer: "B",
      explanation:
        "This is a classic example of NORMAL ageing. A person with dementia would forget not just where the item is, but its PURPOSE or what it is entirely. Forgetting the location alone is not dementia.",
    },
    {
      question:
        "In the context of dementia progression, what is 'preclinical dementia'?",
      options: [
        "A. When dementia symptoms are mild and person can still function",
        "B. A stage where brain changes occur but NO symptoms are visible yet",
        "C. The final stage where the patient is fully dependent",
        "D. The stage that can be reversed with treatment",
      ],
      answer: "B",
      explanation:
        "Preclinical dementia is the earliest, invisible stage where biological brain changes (amyloid plaques etc.) are occurring but no clinical symptoms are evident. This can last for years before symptoms appear.",
    },
    {
      question:
        "Hypothyroidism (underactive thyroid gland) causing cognitive decline is an example of:",
      options: [
        "A. Irreversible dementia requiring lifelong medication",
        "B. Reversible dementia-like symptoms treatable with thyroid hormones",
        "C. Frontotemporal dementia progression",
        "D. A stage 3 Alzheimer's complication",
      ],
      answer: "B",
      explanation:
        "Hypothyroidism is one of the reversible causes of dementia-like symptoms. Treating the thyroid condition with hormone replacement can improve or resolve cognitive symptoms.",
    },
    {
      question:
        "The GPCOG screening tool has which of the following limitations compared to MMSE or MoCA?",
      options: [
        "A. It takes too long to administer (over 30 minutes)",
        "B. It requires the patient to be able to write and draw",
        "C. It can only be used for patients over 80 years old",
        "D. It only tests memory and nothing else",
      ],
      answer: "B",
      explanation:
        "The GPCOG requires the patient to physically write/draw, which means it cannot be used for individuals with motor disabilities or those who cannot write. It is also a screening tool, not a diagnostic tool.",
    },
    {
      question:
        "Which of the following is a MODIFIABLE risk factor for dementia that a Healthcare Assistant can help address through patient education?",
      options: [
        "A. Age above 65 years",
        "B. Inherited APOE-e4 gene",
        "C. Family history of dementia",
        "D. Uncontrolled high blood pressure",
      ],
      answer: "D",
      explanation:
        "Uncontrolled hypertension is a modifiable risk factor — managing blood pressure reduces risk of vascular dementia. Age, genetics, and family history are non-modifiable risk factors that cannot be changed.",
    },
  ],

  level2: [
    // PART 5 — LEVEL 2 MCQs (Tricky — Requires Critical Thinking) Q31–Q50
    {
      question:
        "An HCA notices that Mr. Tan, who has been diagnosed with dementia, is crying and repeatedly asking for his deceased wife. What is the BEST response?",
      options: [
        "A. Firmly remind him that his wife has passed away to keep him grounded in reality",
        "B. Agree that his wife will come soon to calm him down temporarily",
        "C. Gently acknowledge his feelings, sit with him, and redirect with a familiar, comforting activity",
        "D. Leave him alone to process his emotions privately",
      ],
      answer: "C",
      explanation:
        "Correcting a person with dementia about a painful reality (wife's death) causes distress and serves no therapeutic purpose. Agreeing with false information is deceptive. The correct approach is to acknowledge the emotion ('You miss her very much'), offer comfort, and gently redirect.",
    },
    {
      question:
        "A resident with dementia refuses to bathe. After gently encouraging them twice, they remain adamant. What should the HCA do?",
      options: [
        "A. Insist firmly — hygiene is a clinical necessity and cannot be skipped",
        "B. Proceed with bathing anyway using the quickest method to minimise distress",
        "C. Document the refusal, inform the nurse, and attempt again at a different time with a different approach",
        "D. Leave it permanently — patient autonomy must always be respected without question",
      ],
      answer: "C",
      explanation:
        "Forcing care violates the patient's dignity and rights. Simply giving up also fails the duty of care. The correct approach is to document, inform the supervising nurse, and try again later — perhaps changing the time, caregiver, or approach (e.g. offering a sponge bath instead).",
    },
    {
      question:
        "Mrs. Lim with Alzheimer's disease scored 24 on MMSE last month. Today she scores 19. The HCA should:",
      options: [
        "A. Tell Mrs. Lim her score has dropped significantly so she can prepare mentally",
        "B. Assume this is normal day-to-day variation and not report it",
        "C. Document the change, report to the supervising nurse immediately, and observe for other changes",
        "D. Administer the MoCA immediately to double-check the result",
      ],
      answer: "C",
      explanation:
        "A drop of 5 points in MMSE in one month is a significant change that could indicate disease progression or an acute problem (UTI, dehydration, medication side effects). The HCA's role is to document, observe, and report — NOT to independently interpret results or administer additional tests.",
    },
    {
      question: "Which statement about young-onset dementia (YOD) is CORRECT?",
      options: [
        "A. YOD is caused exclusively by genetic factors and family history",
        "B. YOD is less expensive to manage than dementia in older adults",
        "C. YOD is more commonly linked to stroke and traumatic brain injury than in older adults",
        "D. YOD cannot be diagnosed before the age of 55",
      ],
      answer: "C",
      explanation:
        "Compared to older adults, YOD (under 65) is more frequently linked to stroke and traumatic brain injury. YOD is also MORE expensive (~S$21,391/year) due to indirect costs such as lost income during working years.",
    },
    {
      question:
        "An HCA is caring for a patient who suddenly exhibits unusual aggression, something very unlike their usual personality. The FIRST action should be:",
      options: [
        "A. Restrain the patient immediately to protect other residents",
        "B. Assume it is a behavioral symptom of dementia and continue with routine care",
        "C. Check for possible physical triggers (pain, UTI, discomfort), stay calm, and report to the nurse",
        "D. Increase dosage of prescribed sedatives as per protocol",
      ],
      answer: "C",
      explanation:
        "Sudden changes in behaviour in dementia patients can signal physical causes — UTI is a very common cause of sudden aggression or confusion in elderly patients. The HCA must observe, check for discomfort, stay calm, ensure safety, and REPORT to the nurse. HCAs do not modify medications.",
    },
    {
      question:
        "A colleague tells you: 'The patient is old and has dementia — they won't understand what we're saying, so we don't need to explain what we're doing before providing care.' What is your response?",
      options: [
        "A. Agree — explaining care to dementia patients is not necessary and takes too much time",
        "B. Agree only for patients with severe dementia (Stage 5)",
        "C. Disagree — regardless of cognitive level, patients must be spoken to with dignity and explanations given",
        "D. Disagree — but only if family members are present to supervise",
      ],
      answer: "C",
      explanation:
        "Every patient, regardless of cognitive ability, has the right to dignity and respectful communication. Explanations before care reduce anxiety, build trust, and can prevent agitated or resistive behaviours. This is a core principle of person-centred dementia care.",
    },
    {
      question:
        "Which of the following BEST distinguishes Alzheimer's disease from vascular dementia in terms of disease progression?",
      options: [
        "A. Alzheimer's progresses in sudden steps; vascular dementia is gradual",
        "B. Vascular dementia always progresses faster than Alzheimer's",
        "C. Alzheimer's shows gradual, continuous decline; vascular dementia often shows sudden onset with stepwise decline",
        "D. Both types always progress at the same rate depending on age",
      ],
      answer: "C",
      explanation:
        "Alzheimer's disease typically has gradual, insidious onset with continuous progression. Vascular dementia often begins suddenly (post-stroke) and progresses in a stepwise pattern (stable periods interrupted by sudden drops after new vascular events).",
    },
    {
      question:
        "A patient says, 'I am going home to cook dinner for my children,' but they live alone and their children are adults living independently. What should the HCA do?",
      options: [
        "A. Correct them firmly: 'You live here. Your children are grown up and do not need dinner.'",
        "B. Play along and say: 'Yes, your children will be very hungry. Shall we go together?'",
        "C. Acknowledge the feeling behind the statement: 'It sounds like you want to feel helpful at home. Tell me more about your family.'",
        "D. Ignore the comment and continue with the care task",
      ],
      answer: "C",
      explanation:
        "This is therapeutic communication. Correcting the patient creates distress. Playing along deceptively can escalate to confusion when the reality does not match. Acknowledging the EMOTION ('feeling useful, wanting to care for family') and redirecting is the person-centred approach.",
    },
    {
      question:
        "The WiSE 2023 study found that the proportion of undiagnosed dementia in Singapore improved from 70.6% to 51.5% compared to 2013. What does this improvement MOST LIKELY reflect?",
      options: [
        "A. Dementia is becoming less severe over time",
        "B. Better public awareness and access to diagnosis services have led to more cases being identified",
        "C. More older adults are moving into nursing homes and getting screened automatically",
        "D. The prevalence of dementia has dropped dramatically, reducing the number of undiagnosed cases",
      ],
      answer: "B",
      explanation:
        "The improvement in the diagnosis rate is attributed to increased public awareness campaigns, better access to memory clinics (now in 16 of 23 polyclinics), and CREST teams improving early detection in the community — not a reduction in severity.",
    },
    {
      question:
        "A patient with dementia is found trying to leave the ward at 2 am, saying they need to catch the bus to work. The HCA should:",
      options: [
        "A. Lock the ward doors and tell the patient firmly they cannot leave",
        "B. Let the patient out briefly, then follow them discreetly",
        "C. Calmly approach, do not block their path, engage them in conversation, gently guide them back with a distraction or comforting activity",
        "D. Wake up other patients to help restrain the person",
      ],
      answer: "C",
      explanation:
        "This is a 'wandering' behaviour. Physical restraint is never appropriate. Blocking the path directly can trigger aggression. The correct approach is calm engagement, distraction, and gentle redirection. The nurse must also be informed and safety protocols (bed alarms etc.) reviewed.",
    },
    {
      question:
        "A family caregiver asks you: 'My mother sometimes forgets the date but remembers everything else — is this dementia?' The MOST appropriate response is:",
      options: [
        "A. 'Yes, forgetting the date is always a sign of dementia.'",
        "B. 'Forgetting the date occasionally can be a normal part of ageing, but a doctor should be consulted if you are worried.'",
        "C. 'It is definitely dementia — you should prepare for long-term care now.'",
        "D. 'Do not worry — everyone forgets dates. There is no need to see a doctor.'",
      ],
      answer: "B",
      explanation:
        "HCAs should NOT diagnose. Occasional date forgetting can be normal ageing. However, dismissing all concerns without directing to a professional is also incorrect. The appropriate response is to provide balanced reassurance and encourage consultation with a doctor.",
    },
    {
      question:
        "Which of the following scenarios MOST strongly suggests dementia rather than normal ageing?",
      options: [
        "A. A 68-year-old who occasionally misplaces their phone but always finds it",
        "B. A 72-year-old who sometimes forgets a neighbour's name but recalls it later",
        "C. A 70-year-old who repeatedly asks the same question within minutes and cannot recall being told the answer",
        "D. A 65-year-old who takes slightly longer to recall a word than they used to",
      ],
      answer: "C",
      explanation:
        "Repeatedly asking the same question within minutes and being unable to retain the answer even after being told is a hallmark of dementia-related short-term memory failure. The other examples are consistent with normal ageing changes in recall speed.",
    },
    {
      question:
        "Why is the MoCA generally considered SUPERIOR to the MMSE for detecting Mild Cognitive Impairment (MCI)?",
      options: [
        "A. MoCA takes less time to administer",
        "B. MoCA tests executive function and visuospatial skills which MMSE does not adequately assess",
        "C. MoCA has a higher maximum score (40 vs 30)",
        "D. MoCA does not require a trained administrator",
      ],
      answer: "B",
      explanation:
        "MoCA includes domains like executive function, abstract thinking, and visuospatial ability — all of which are affected early in MCI. MMSE focuses more on memory and language, missing many MCI cases. MoCA's maximum score is also 30, not 40.",
    },
    {
      question:
        "A nursing home resident with late-stage dementia is no longer able to communicate verbally. During personal care, the HCA should:",
      options: [
        "A. Provide care silently and efficiently to avoid confusing the resident",
        "B. Use touch and non-verbal communication — speak softly, maintain eye contact, and proceed gently",
        "C. Ask a family member to be present for all care as the resident cannot consent",
        "D. Avoid providing care until the resident can communicate their preferences",
      ],
      answer: "B",
      explanation:
        "Even in late-stage dementia, patients respond to tone, touch, and facial expressions. Gentle verbal communication, eye contact, and a soft touch reduce anxiety and maintain dignity. Care cannot be withheld — it must continue with adapted communication methods.",
    },
    {
      question:
        "According to Singapore's National Dementia Strategy 2023–2033, which of the following falls under the strategic goal of 'Building Dementia-Inclusive Environments'?",
      options: [
        "A. Increasing the number of MMSE-trained nurses",
        "B. Making housing, transport, and neighbourhood amenities more accessible and supportive for persons with dementia",
        "C. Providing direct financial grants to persons with dementia only",
        "D. Expanding the CREST team to cover all 24 HDB regions",
      ],
      answer: "B",
      explanation:
        "Dementia-inclusive environments refers to physical and social environments — including housing design, public transport, and neighbourhood amenities — being adapted to support persons with dementia to live safely and meaningfully in the community.",
    },
    {
      question:
        "A caregiver tells you they have not slept properly in weeks and are feeling close to burnout. What is the MOST appropriate response from an HCA?",
      options: [
        "A. Tell them to push through — caring for family is a duty",
        "B. Suggest they try to sleep when the patient sleeps",
        "C. Acknowledge their distress, provide emotional support, and inform them about respite care and caregiver support services available in Singapore",
        "D. Advise them to place their loved one in a nursing home immediately",
      ],
      answer: "C",
      explanation:
        "Caregiver burnout is a serious and common issue in dementia care. The appropriate response is to acknowledge, support emotionally, and then actively signpost to respite services (e.g. day care centres), CTG training grants, and caregiver support programmes. Not acknowledging or dismissing the concern is inadequate.",
    },
    {
      question:
        "A patient scores 2 on the AD8 informant interview completed by their son. This result indicates:",
      options: [
        "A. Normal cognition — no further action needed",
        "B. Score is too low to be meaningful",
        "C. Possible cognitive impairment — further clinical assessment is recommended",
        "D. Definitive diagnosis of dementia — no further testing needed",
      ],
      answer: "C",
      explanation:
        "An AD8 score of 2 or more indicates possible cognitive impairment and warrants further clinical assessment. The AD8 is a SCREENING tool only — it cannot definitively diagnose dementia. The score of 0–1 indicates normal cognition.",
    },
    {
      question:
        "Frontotemporal dementia (FTD) is more commonly diagnosed in which age group, making it different from Alzheimer's disease?",
      options: [
        "A. People aged 80 and above",
        "B. People aged 75 to 85",
        "C. People aged 45 to 65 — more common in younger adults",
        "D. Only in people with a family history over 90 years old",
      ],
      answer: "C",
      explanation:
        "FTD (also called Pick's disease) is notably more common in people aged 45–65, making it a significant cause of young-onset dementia. Alzheimer's disease is more common in those over 65.",
    },
    {
      question:
        "Which of the following BEST explains why only 5% of caregivers in Singapore have received formal training, despite spending an average of 33 hours per week caregiving?",
      options: [
        "A. Caregivers prefer self-taught methods",
        "B. Most caregivers are unaware of the training opportunities and subsidies available to them",
        "C. The government has not created any training programmes for caregivers",
        "D. Training programmes are only offered in English, limiting accessibility",
      ],
      answer: "B",
      explanation:
        "The lecture highlighted that only 38% of caregivers are aware of the available subsidies for caregiver training courses. Low awareness is the primary barrier — the programmes exist (e.g. CTG) but caregivers do not know about them.",
    },
    {
      question:
        "A resident with moderate dementia is prescribed eye drops. She resists, turning her head away and becoming agitated. What is the MOST appropriate approach?",
      options: [
        "A. Hold the patient's head firmly in place and administer the drops quickly",
        "B. Delay the medication and document the refusal without further action",
        "C. Pause, speak calmly, explain what you are doing in simple terms, offer a moment to rest, and attempt again gently — escalate to nurse if persistent refusal",
        "D. Ask another HCA to hold the patient still while you administer",
      ],
      answer: "C",
      explanation:
        "Restraining a patient is never acceptable. Simply delaying without follow-up fails the patient's medical needs. The correct approach is gentle persistence with calm communication, brief pauses, simple explanations, and escalation to a nurse if the refusal continues — balancing medical necessity with dignity.",
    },
  ],

  cases: [
    // PART 6 — CLINICAL CASE-BASED MCQs
    {
      scenario:
        "Mr. Ahmad, 78, has moderate Alzheimer's disease. During the morning shift, he insists he is in a hotel and demands to check out. He becomes increasingly agitated when told he is in a nursing home. What is the MOST appropriate action for the HCA?",
      options: [
        "A. Show him the nursing home sign at the entrance to ground him in reality",
        "B. Calmly acknowledge his feeling, avoid correcting him directly, and redirect: 'It sounds like you want to go out — would you like to sit by the garden instead?'",
        "C. Call his family immediately and ask them to come and explain the situation to him",
        "D. Give him his usual morning medication early to calm him down",
      ],
      answer: "B",
      rationale:
        "Reality orientation can increase distress in moderate dementia. The therapeutic approach is validation + redirection — acknowledge the emotion behind the statement and redirect to something pleasant and familiar. Family calls or early medications are not the first-line HCA response.",
    },
    {
      scenario:
        "Madam Chen, 82, has vascular dementia following a stroke. At 4 pm she becomes very confused, agitated, and says 'dark, dark' repeatedly while appearing frightened. This presentation MOST likely represents which phenomenon and what should the HCA do?",
      options: [
        "A. A stroke — call an ambulance immediately without doing anything else",
        "B. Sundowning — maintain a calm environment, turn on lights, speak softly, and inform the nurse",
        "C. A medication overdose — check her medication chart and withhold evening medications",
        "D. Normal vascular dementia symptoms — document and continue with routine tasks",
      ],
      answer: "B",
      rationale:
        "Sundowning is common in vascular and Alzheimer's dementia — symptoms worsen in the late afternoon/evening. The HCA should provide a calm, well-lit environment, use soothing communication, and report to the nurse. While a nurse should be informed, this presentation is characteristic of sundowning, not a stroke (which has different signs: face drooping, arm weakness, speech difficulty).",
    },
    {
      scenario:
        "Mr. Lee, 69, was recently diagnosed with Alzheimer's disease. His daughter is distressed and says: 'Daddy doesn't look sick. Maybe the doctor made a mistake. He just forgot my birthday — that happens to everyone!' What is the MOST appropriate response from the HCA?",
      options: [
        "A. 'You're right, forgetting a birthday is very normal. Don't worry about it.'",
        "B. 'The doctor definitely made the right diagnosis. Your father is in denial.'",
        "C. 'I understand this is difficult to accept. There are differences between normal forgetting and dementia. The care team is here to support both your father and your family.'",
        "D. 'You should get a second opinion immediately from another specialist.'",
      ],
      answer: "C",
      rationale:
        "The HCA should provide emotional support, validate the family's distress, and gently reinforce that there are differences between normal ageing and dementia — without dismissing concerns or being harsh. Recommending a second opinion is not within the HCA's scope of practice.",
    },
    {
      scenario:
        "During bathing, a male resident with late-stage dementia becomes frightened and begins shouting. He cannot explain why but is clearly distressed. What should the HCA do FIRST?",
      options: [
        "A. Continue bathing quickly to get it over with and reduce total distress time",
        "B. Stop immediately, speak calmly, check for physical discomfort (is the water too cold? is there pain?), reassure him, and allow him to calm down before proceeding",
        "C. Ask a colleague to hold him still so bathing can be completed safely",
        "D. Document the behaviour and postpone bathing to the next day",
      ],
      answer: "B",
      rationale:
        "Fear during personal care is common in late-stage dementia. Stopping and checking for physical causes (water temperature, pain, fear of falling) is the first step. Forcing care causes trauma. Postponing indefinitely compromises hygiene. The right response is pause, check, reassure, then proceed gently.",
    },
    {
      scenario:
        "A new HCA colleague says: 'This lady has dementia so severe she can't even recognise her own daughter. There is no point talking to her or explaining what we are doing — she doesn't understand anything anyway.' Is this correct, and what should you tell your colleague?",
      options: [
        "A. Correct — communication with severe dementia patients wastes time and may confuse them further",
        "B. Partially correct — verbal communication is fine but no explanation before care is needed",
        "C. Incorrect — even in severe dementia, patients retain emotional memory and respond to tone, touch and familiar stimuli. Explaining care before doing it reduces fear and agitation",
        "D. Correct — clinical efficiency should take priority over communication in severe cases",
      ],
      answer: "C",
      rationale:
        "Even in severe dementia, emotional memory (how something made you feel) is often preserved when episodic memory (facts, names, events) is lost. Patients respond to tone of voice, gentle touch, and familiar sensory cues. Communication never becomes unnecessary — it should adapt to the patient's level.",
    },
    {
      scenario:
        "Mr. Rajan, 55, is diagnosed with frontotemporal dementia. His wife is surprised because 'he is too young for dementia and his memory is still quite good.' What explanation would be MOST accurate?",
      options: [
        "A. The doctor is likely mistaken — dementia cannot occur under 65",
        "B. Frontotemporal dementia typically affects behaviour and personality first, before memory loss becomes apparent, and can occur in people aged 45–65",
        "C. At age 55, this is normal age-related memory decline — no dementia is involved",
        "D. Only Alzheimer's disease can cause dementia in younger people",
      ],
      answer: "B",
      rationale:
        "FTD is one of the most common causes of young-onset dementia (ages 45–65). Unlike Alzheimer's, FTD primarily affects the frontal and temporal lobes, leading to personality changes, disinhibition, and language problems BEFORE significant memory loss occurs. This explains why the wife noticed personality changes but not memory problems.",
    },
    {
      scenario:
        "Mrs. Wong is found in the corridor at 11 pm, dressed in outdoor clothes, saying she needs to pick up her children from school. Her children are in their 40s. What is the CORRECT sequence of actions?",
      options: [
        "A. Lock her in her room to prevent wandering, then inform the nurse in the morning",
        "B. Argue that her children are adults and do not need picking up, until she accepts the truth",
        "C. Approach calmly, validate her concern, gently redirect her back to her room with a comforting activity, and immediately inform the nurse on duty about the wandering episode",
        "D. Allow her to leave the facility briefly as she appears determined and locking her up violates autonomy",
      ],
      answer: "C",
      rationale:
        "Wandering at night is a safety risk. Locking patients in rooms is a form of restraint and is not appropriate without specific medical orders. Arguing is counterproductive. Allowing a confused elderly patient to leave at 11 pm is dangerous. The correct response is calm redirection + immediate reporting to the nurse.",
    },
    {
      scenario:
        "An elderly resident scores 27 on the MoCA test. The nurse asks the HCA to document the result. The HCA notes the resident has been increasingly forgetting daily tasks. Which statement is CORRECT?",
      options: [
        "A. 27 is a normal score — no further observation is needed",
        "B. 27 is borderline — the HCA should independently retest with the MMSE to confirm",
        "C. 27 is above the MoCA cut-off of 26 — however, the HCA should continue to document and report any observed behavioural changes to the nurse for holistic assessment",
        "D. 27 is below the cut-off and indicates definite dementia",
      ],
      answer: "C",
      rationale:
        "A MoCA score of 27 is just above the abnormal cut-off of 26 — technically normal. However, screening scores alone do not capture the full picture. The HCA's role is to document and report observed functional changes (forgetting tasks), which combined with clinical assessment give a more complete picture. HCAs do NOT retest independently.",
    },
    {
      scenario:
        "During a home visit, a caregiver mentions she has been crying every day and has not left the house in three weeks because she is afraid to leave her husband with dementia alone. She says she has no idea there are any support services available. What is the MOST helpful response from the HCA?",
      options: [
        "A. Tell her she needs to be stronger — it is part of being a spouse",
        "B. Acknowledge her feelings, inform her about available support such as CTG, respite care, and the CREST team, and suggest she speak to the nurse or social worker",
        "C. Advise her to hire a private nurse to resolve the problem immediately",
        "D. Suggest she consider nursing home placement for her husband to relieve her burden",
      ],
      answer: "B",
      rationale:
        "Caregiver burnout is a serious concern. The HCA should acknowledge the caregiver's emotional distress, provide information about available resources (CTG, respite care, CREST, social workers), and encourage professional support. The HCA does not make clinical recommendations for nursing home placement or prescribe private nursing.",
    },
    {
      scenario:
        "A doctor asks an HCA to independently administer the MMSE to a new resident and provide a clinical diagnosis based on the results. What should the HCA do?",
      options: [
        "A. Administer the MMSE as instructed — following doctor's orders is the highest priority",
        "B. Administer the MMSE but not provide a diagnosis, just the score",
        "C. Politely clarify with the doctor that MMSE administration is beyond HCA scope of practice; cognitive assessments should be conducted or supervised by qualified clinical staff",
        "D. Refuse the request entirely and ask the doctor to do it themselves without any explanation",
      ],
      answer: "C",
      rationale:
        "HCAs work under supervision and have defined scope of practice. Administering formal cognitive assessment tools and providing diagnoses is beyond their role. The correct professional response is to politely and respectfully clarify this with the doctor and ensure the task is performed by appropriately qualified staff (nurse, physiotherapist, or doctor).",
    },
  ],

  goldenRules: [
    {
      number: 1,
      title: "Golden Rule 1: Safety First",
      detail:
        "In ANY scenario, if safety is at risk — remove the danger, then communicate, then report.",
    },
    {
      number: 2,
      title: "Golden Rule 2: Never Restrain",
      detail:
        "Physical restraint is NEVER the correct answer in an HCA exam question unless specifically stated as a last resort with clinical orders.",
    },
    {
      number: 3,
      title: "Golden Rule 3: Report, Don't Diagnose",
      detail:
        "HCAs observe and report. They do NOT diagnose, interpret test results independently, or change care plans on their own.",
    },
    {
      number: 4,
      title: "Golden Rule 4: Dignity Always",
      detail:
        "Even in severe dementia — communicate, explain, use the patient's name, and maintain privacy during all care.",
    },
    {
      number: 5,
      title: "Golden Rule 5: Validate Emotions",
      detail:
        "Do not correct or argue with dementia patients about their false beliefs. Validate the feeling behind the statement and redirect.",
    },
    {
      number: 6,
      title: "Golden Rule 6: Know Your Numbers",
      detail:
        "1 in 11 (60+), 1 in 2 (85+), 152,000 by 2030, 33 hrs/week, 74% overwhelmed, 5% trained, 40% more expensive.",
    },
    {
      number: 7,
      title: "Golden Rule 7: Know the Tools",
      detail:
        "MMSE <23 = impaired. MoCA <26 = abnormal. AD8 ≥2 = impaired. MoCA better for MCI. AD8 is informant-based.",
    },
    {
      number: 8,
      title: "Golden Rule 8: Know the Types",
      detail:
        "Alzheimer's = gradual memory loss first. Vascular = stroke-related, stepwise. Lewy Body = hallucinations. FTD = behaviour/personality first.",
    },
    {
      number: 9,
      title: "Golden Rule 9: Reversible vs Irreversible",
      detail:
        "B12, hypothyroidism, depression = REVERSIBLE. Alzheimer's, vascular, Lewy, FTD = IRREVERSIBLE.",
    },
    {
      number: 10,
      title: "Golden Rule 10: Caregiver Support",
      detail:
        "CTG = training. Respite = rest. CREST = community outreach. ElderFund/MediFund = financial. Always signpost to these.",
    },
  ],
};
