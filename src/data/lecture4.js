export const lecture4 = {
  id: 4,
  title: "Management of Dementia",
  colour: "#C07A1A",

  revision: {
    sections: [
      {
        type: "keyDefinition",
        label: "KEY PRINCIPLE",
        text: "Management of dementia residents is built on PCC. Every care decision must be guided by the puzzle of the WHOLE person: NI + H + B + P + SP.",
      },
      {
        type: "bulletList",
        heading: "1. How People with Dementia Experience the World",
        items: [
          "May interpret things differently to those around them — their reality is their reality",
          "Have unanticipated periods of lucidity AND periods of confusion — both are real",
          "May not recognise familiar people or places — this is neurological, not deliberate",
          "May become frustrated when they cannot communicate their fears, anxieties or needs",
          "Live with unpredictability — time, place, and identity can shift without warning",
          "BPSD occur in up to 90% of residents — they are COMMUNICATIONS of unmet needs, not bad behaviour",
        ],
      },
      {
        type: "statTable",
        heading:
          "2. The PCC Care Puzzle — Gathering Information for Care Planning",
        rows: [
          {
            label: "NI — Neurological Impairment",
            value:
              "When was dementia diagnosed? Current cognitive score (MMSE/AMT)? Type and stage?",
          },
          {
            label: "H — Health (Comorbidities)",
            value:
              "Chronic diseases (hypertension, diabetes, asthma). Current medications. Clinical health status including pain, UTI, dehydration.",
          },
          {
            label: "B — Life History / Biography",
            value:
              "Current or past occupation. When did they retire? Significant life events, cultural background, family history, faith/religion.",
          },
          {
            label: "P — Personality",
            value:
              "Likes and dislikes. Hobbies and interests. Usual home routine — early riser? Night owl? Active or sedentary?",
          },
          {
            label: "SP — Social Psychology",
            value:
              "Family structure. Quality of relationships among family members. Who is the primary caregiver? Are family dynamics supportive or strained?",
          },
        ],
      },
      {
        type: "statTable",
        heading: "3. Creating a Therapeutic Environment — 6 Core Principles",
        rows: [
          {
            label: "Personal Worth & Uniqueness",
            value:
              "Every resident has value. Use their preferred name. Know their history. Treat them as a VIP.",
          },
          {
            label: "Respect",
            value:
              "Communicate with dignity. Knock before entering. Explain before acting. Never talk over the person.",
          },
          {
            label: "Independence",
            value:
              "Support the person to do as much as they can. Only assist — do not take over. Preserve remaining abilities.",
          },
          {
            label: "Social Confidence",
            value:
              "Create opportunities for positive social interaction. Reduce isolation. Involve in group activities.",
          },
          {
            label: "Truthfulness",
            value:
              "Be honest. Do not deceive or make false promises. Validate feelings without lying.",
          },
          {
            label: "Engagement",
            value:
              "Provide meaningful activities matched to the person biography, abilities, and interests.",
          },
        ],
      },
      {
        type: "statTable",
        heading: "4. Daily Care Tips — Person-Centred Practice",
        rows: [
          {
            label: "Encourage involvement in daily life",
            value:
              "Participation preserves dignity, identity, and sense of purpose.",
          },
          {
            label: "Help maintain independence",
            value:
              "Doing things FOR the person unnecessarily removes their sense of competence and self-worth.",
          },
          {
            label: "Offer opportunities for choice",
            value:
              "Even small choices (tea or coffee?) restore a sense of control. Choice reduces agitation.",
          },
          {
            label: "Establish a familiar routine",
            value:
              "Predictable daily schedules reduce anxiety, confusion, and BPSD. Routine = emotional security.",
          },
        ],
      },
      {
        type: "comparisonTable",
        heading: "5. Pharmacological Management — Medications HCAs Must Know",
        columns: [
          "Drug Class",
          "Drugs (Brand Names)",
          "Stage",
          "Key Side Effects",
        ],
        rows: [
          {
            col1: "Cholinesterase Inhibitors (ChIs)",
            col2: "Donepezil (Aricept), Rivastigmine (Exelon), Galantamine (Razadyne)",
            col3: "Early to Moderate",
            col4: "Nausea, vomiting, diarrhoea, loss of appetite, dizziness, headache, vivid dreams (if taken at night). GI effects most common.",
          },
          {
            col1: "NMDA Receptor Antagonist",
            col2: "Memantine (Namenda), Namzaric (Memantine + Donepezil combo)",
            col3: "Moderate to Severe",
            col4: "Headache, constipation, confusion, dizziness, drowsiness. Generally better tolerated than ChIs.",
          },
        ],
      },
      {
        type: "statTable",
        heading: "6. Non-Pharmacological Management — First-Line for BPSD",
        rows: [
          {
            label: "Meaningful Activities",
            value:
              "Reminiscence, music therapy, arts, gardening, life-skills tasks. Reduces apathy, agitation, and depression.",
          },
          {
            label: "Structured Routine",
            value:
              "Predictable daily schedule reduces anxiety and BPSD. Same wake, meal, activity, and bedtime sequences.",
          },
          {
            label: "Environmental Modifications",
            value:
              "Improved lighting (reduces sundowning), clear signage, safe walking paths, reduced noise, familiar objects.",
          },
          {
            label: "Reality Orientation",
            value:
              "Calendars, clocks, name boards, and gentle reminders to help orient the person to time and place.",
          },
          {
            label: "Reminiscence Therapy",
            value:
              "Photos, music, familiar objects from the person's past — stimulates positive memories and identity.",
          },
          {
            label: "Validation Therapy",
            value:
              "Acknowledging emotional content of what the person says, even if factually incorrect. Reduces distress.",
          },
          {
            label: "Music Therapy",
            value:
              "Personalised music from the person's era or preferences. Highly effective for agitation and depression.",
          },
          {
            label: "Exercise / Physical Activity",
            value:
              "Reduces agitation, improves sleep, supports cardiovascular health. Chair exercises, walking programmes.",
          },
        ],
      },
      {
        type: "statTable",
        heading: "7. Managing the Three Key BPSD",
        rows: [
          {
            label: "Repetitive Behaviour (repeated questions, actions)",
            value:
              "Stay calm. Answer each time as if the first. Identify the underlying emotion. Redirect to meaningful activity. Check for pain or UTI. Establish routine.",
          },
          {
            label: "Neglected Self-Care (refusing to bathe, eat)",
            value:
              "Break into small steps. Offer choices. Use familiar routines and preferred products. Be patient. Maintain dignity. Report persistent refusal to nurse.",
          },
          {
            label: "Depression (withdrawal, tearfulness, appetite loss)",
            value:
              "Acknowledge feelings. Encourage meaningful activity. Monitor for worsening signs (weight loss, sleep changes). Report to nurse. Do NOT say 'just cheer up'.",
          },
        ],
      },
      {
        type: "bulletList",
        heading: "8. Eating and Feeding Issues in Dementia",
        items: [
          "Common issues: forgetting to eat, not recognising food, dysphagia (difficulty swallowing), refusing food",
          "HCA role: calm distraction-free meal environment; adapted utensils; offer finger foods where appropriate",
          "Monitor food and fluid intake and report concerns — dehydration is a major trigger for BPSD",
          "Respect cultural and religious food preferences — this is part of PCC",
          "Never force-feed — if persistent refusal, escalate to nurse and dietitian",
        ],
      },
      {
        type: "bulletList",
        heading: "9. Evaluating Effectiveness of PCC Management",
        items: [
          "Reduction in frequency and severity of BPSD (agitation, wandering, refusal)",
          "Resident appears calmer, more engaged, participates in activities",
          "Resident accepts personal care with less resistance",
          "Family members report feeling informed and involved",
          "Less need for PRN (as-needed) medication for agitation",
        ],
      },
      {
        type: "examTip",
        label: "EXAM GOLDEN RULE",
        text: 'When a resident shows BPSD — STOP. Ask "What is this person trying to COMMUNICATE?" BPSD = an unmet need. Identify the need, meet the need, THEN report and document.',
      },
    ],
  },

  qa: [
    {
      question:
        "What does BPSD stand for, and what percentage of dementia residents are affected?",
      answer:
        "BPSD = Behavioural and Psychological Symptoms of Dementia. Up to 90% of persons with dementia experience BPSD at some point. Common symptoms: agitation, depression, anxiety, repetitive behaviour, wandering, aggression, and sleep disturbances.",
    },
    {
      question:
        "What are the five puzzle pieces an HCA collects to plan person-centred care?",
      answer:
        "NI (Neurological Impairment), H (Health/comorbidities), B (Biography/life history), P (Personality/likes-dislikes), SP (Social Psychology/family relationships). Based on Kitwood Enriched Model D = NI + H + B + P + SP.",
    },
    {
      question:
        "What are the 6 principles of a therapeutic environment for dementia residents?",
      answer:
        "Personal worth and uniqueness, Respect, Independence, Social confidence, Truthfulness, Engagement. All six underpin daily HCA practice.",
    },
    {
      question:
        "Name the three cholinesterase inhibitors used in early-to-moderate Alzheimer's.",
      answer:
        "Donepezil (Aricept), Rivastigmine (Exelon), and Galantamine (Razadyne). They prevent breakdown of acetylcholine, increasing levels of this neurotransmitter to support memory and cognition.",
    },
    {
      question:
        "What medication is used for moderate-to-severe Alzheimer's and how does it work?",
      answer:
        "Memantine (Namenda). It blocks NMDA receptors, reducing excessive glutamate activity that causes neuronal damage. Also available as Namzaric (combined with Donepezil).",
    },
    {
      question: "Is there a cure for Alzheimer's disease?",
      answer:
        "NO. There is currently no cure for Alzheimer's or any progressive dementia. Medications manage symptoms only — they do not stop, reverse, or cure the disease.",
    },
    {
      question:
        "What are the most common side effects of cholinesterase inhibitors?",
      answer:
        "Nausea, vomiting, diarrhoea, loss of appetite, dizziness, headache, muscle cramps. Vivid dreams if taken at night. GI side effects are most common, usually subside within 1–2 weeks. Take with food to reduce them.",
    },
    {
      question:
        "Why are non-pharmacological interventions preferred as first-line for BPSD?",
      answer:
        "They address underlying unmet needs, are safer (no harmful side effects), and have equal or better outcomes than medications. Antipsychotics carry serious risks: falls, cognitive worsening, increased stroke risk.",
    },
    {
      question: "What is the HCA approach to repetitive behaviour?",
      answer:
        "Stay calm. Answer each time patiently as if the first. Identify the underlying emotion. Redirect to a meaningful activity. Check for physical triggers (pain, UTI). Document and report to nurse.",
    },
    {
      question: "What should an HCA do if a resident refuses to bathe?",
      answer:
        "Stop — do not force. Explore the reason (cold? fear? embarrassment?). Offer alternatives (bed bath, different time, different carer). Use preferred products and familiar routines. Report persistent refusal to nurse.",
    },
    {
      question: "What are the signs that a dementia resident may be depressed?",
      answer:
        "Withdrawal from activities, sleep changes, appetite loss or weight change, persistent sadness or crying, increased agitation, hopeless statements. Report all signs to the nurse.",
    },
    {
      question: "What is the purpose of a familiar routine in dementia care?",
      answer:
        "Routine provides predictability and emotional security. Predictable daily schedules reduce anxiety, confusion, and BPSD. Same wake, meal, activity, and bedtime sequences help the person feel safe.",
    },
    {
      question: "What is reminiscence therapy and how is it used?",
      answer:
        "Using meaningful objects, photos, music, or stories from the person's past to stimulate positive memories and engagement. Based on biography. Reduces withdrawal, depression, and agitation. Supports identity and self-worth.",
    },
    {
      question: "What is the HCA role in monitoring dementia medications?",
      answer:
        "Administer as directed under supervision. Observe and document side effects. Report changes to nurse. NEVER adjust doses independently. Ensure medication is taken with food if GI side effects are a concern.",
    },
    {
      question:
        "How should an HCA help a resident with neglected self-care such as refusing to eat?",
      answer:
        "Break the task into small simple steps. Create a calm familiar environment. Offer meaningful choices. Use preferred foods and routines. Monitor intake and document. Report persistent refusal to nurse and dietitian.",
    },
  ],

  level1: [
    {
      question: "What proportion of persons with dementia experience BPSD?",
      options: [
        "A. Less than 10%",
        "B. About 50%",
        "C. Up to 90% of persons with dementia",
        "D. Only those in the severe stage",
      ],
      answer: "C",
      explanation:
        "Research shows BPSD occur in up to 90% of people with dementia at some point. Common BPSD include agitation, depression, anxiety, repetitive behaviour, wandering, psychosis, aggression, and sleep disturbances. They are a core clinical feature, not an exception.",
    },
    {
      question:
        "In Kitwood's Enriched Model (D = NI + H + B + P + SP), which component refers to the person's occupation, retirement history, and significant life events?",
      options: [
        "A. NI — Neurological Impairment",
        "B. H — Health and comorbidities",
        "C. B — Biography and life history",
        "D. SP — Social Psychology",
      ],
      answer: "C",
      explanation:
        "B = Biography includes the person's occupation, retirement, cultural background, significant relationships and life events. This life history puzzle piece allows care to be personalised to the individual's unique history.",
    },
    {
      question:
        "Which of the following is NOT one of the six principles of a therapeutic dementia care environment?",
      options: [
        "A. Respect",
        "B. Independence",
        "C. Social Confidence",
        "D. Diagnosis-focused treatment",
      ],
      answer: "D",
      explanation:
        "The 6 principles are: Personal Worth and Uniqueness, Respect, Independence, Social Confidence, Truthfulness, and Engagement. Diagnosis-focused treatment is the biomedical approach — the OPPOSITE of what PCC advocates.",
    },
    {
      question: "Donepezil (Aricept) belongs to which class of medications?",
      options: [
        "A. NMDA receptor antagonists",
        "B. Cholinesterase inhibitors",
        "C. Antipsychotics",
        "D. Benzodiazepines",
      ],
      answer: "B",
      explanation:
        "Donepezil (Aricept), Rivastigmine (Exelon), and Galantamine (Razadyne) are all cholinesterase inhibitors. They work by preventing the breakdown of acetylcholine, increasing levels of this neurotransmitter to support memory and cognitive function.",
    },
    {
      question:
        "Memantine (Namenda) is approved primarily for which stage of Alzheimer's disease?",
      options: [
        "A. Early stage only",
        "B. Early to moderate stage",
        "C. Moderate to severe stage",
        "D. Preclinical stage before symptoms appear",
      ],
      answer: "C",
      explanation:
        "Memantine is approved for moderate-to-severe Alzheimer's disease. It works by blocking NMDA receptors to reduce excessive glutamate activity that causes neuronal damage. Cholinesterase inhibitors are used for early-to-moderate stages.",
    },
    {
      question:
        "Which is the MOST accurate statement about the current treatment of Alzheimer's disease?",
      options: [
        "A. A cure exists but is too expensive",
        "B. Cholinesterase inhibitors cure mild Alzheimer's in 30% of patients",
        "C. There is currently no cure — medications only manage symptoms",
        "D. Memantine reverses memory loss in moderate dementia",
      ],
      answer: "C",
      explanation:
        "There is NO cure for Alzheimer's or any progressive dementia. Cholinesterase inhibitors and Memantine manage symptoms and may modestly slow decline, but do not cure, reverse, or stop the disease.",
    },
    {
      question:
        "Which non-pharmacological intervention uses meaningful objects, photographs, and music from a person's past to stimulate positive memories?",
      options: [
        "A. Reality Orientation",
        "B. Validation Therapy",
        "C. Reminiscence Therapy",
        "D. Cognitive Stimulation Therapy",
      ],
      answer: "C",
      explanation:
        "Reminiscence Therapy uses photos, familiar objects, music, and stories from the person's biographical past. It supports identity, reduces withdrawal and depression, and promotes engagement. It is closely linked to the Biography component of Kitwood's model.",
    },
    {
      question:
        "A resident repeatedly asks 'When is my son coming?' every few minutes. The BEST PCC approach is:",
      options: [
        "A. Firmly tell the resident their son visited yesterday and to stop asking",
        "B. Answer calmly and patiently each time as if the first time, then gently redirect",
        "C. Ignore the question to avoid reinforcing the behaviour",
        "D. Give the resident a sedative to reduce repetitive questioning",
      ],
      answer: "B",
      explanation:
        "Repetitive questioning expresses underlying anxiety or unmet need. The PCC approach is to respond calmly each time, validate the feeling, and gently redirect. Ignoring, dismissing, or sedating are inappropriate first responses.",
    },
    {
      question:
        "Which BEST demonstrates supporting a resident's independence as one of the six therapeutic environment principles?",
      options: [
        "A. Doing all morning care tasks quickly to save time",
        "B. Asking the resident which shirt they would like and allowing them to put it on with minimal assistance",
        "C. Choosing all meal options for the resident to reduce decision-making burden",
        "D. Moving the resident to a locked unit to prevent wandering",
      ],
      answer: "B",
      explanation:
        "Supporting independence means enabling the person to do as much as possible for themselves. Allowing the resident to choose their shirt AND participate in putting it on preserves both choice and independence. Doing everything for them is disempowerment (MSP).",
    },
    {
      question:
        "What is the PRIMARY reason non-pharmacological interventions are recommended as first-line for BPSD?",
      options: [
        "A. They are cheaper and easier than medications",
        "B. They address underlying unmet needs, are safer, and have equal or better outcomes without serious side effects",
        "C. They work faster than medications in emergencies",
        "D. They are required by Singapore law before any medication can be given",
      ],
      answer: "B",
      explanation:
        "Non-pharmacological approaches are first-line because: BPSD is caused by unmet needs — addressing the need treats the cause; antipsychotics carry significant risks (falls, cognitive worsening, stroke); and evidence shows PCC-based non-drug approaches have comparable or better outcomes.",
    },
    {
      question: "The Social Psychology (SP) component asks the HCA to assess:",
      options: [
        "A. The resident's MMSE score and cognitive stage",
        "B. The resident's medical comorbidities and medications",
        "C. The family structure, quality of relationships, and support network around the resident",
        "D. The resident's physical exercise capacity",
      ],
      answer: "C",
      explanation:
        "SP = Social Psychology includes family structure, how family members interact with the resident, who provides emotional support, and whether family dynamics are supportive or strained. This is the factor most within the HCA's power to influence positively.",
    },
    {
      question:
        "What is the MOST common early side effect of cholinesterase inhibitors that an HCA should monitor?",
      options: [
        "A. Bradycardia and low blood pressure",
        "B. Nausea, vomiting, and diarrhoea (gastrointestinal effects)",
        "C. Sudden confusion and hallucinations",
        "D. Severe headache and seizures",
      ],
      answer: "B",
      explanation:
        "GI side effects — nausea, vomiting, diarrhoea, loss of appetite — are the most common side effects of cholinesterase inhibitors. They are dose-dependent and usually transient (subside within 1–2 weeks). Taking with food can reduce them.",
    },
    {
      question:
        "A resident refuses to eat or bathe for several days. In the context of Lecture 4 this MOST likely indicates:",
      options: [
        "A. Deliberate non-compliance requiring firmer boundaries",
        "B. An unmet need — possibly depression, physical discomfort, or fear — that requires a person-centred response",
        "C. A medication interaction requiring pharmacological review",
        "D. A security concern to be managed through restraint",
      ],
      answer: "B",
      explanation:
        "Self-neglect in dementia is BPSD — a communication of unmet need, not deliberate non-compliance. It could signal depression, pain, embarrassment, or cognitive decline. The PCC response is to explore the cause with empathy and offer choices and alternatives.",
    },
    {
      question:
        "Which of the following is a modifiable lifestyle factor that may help reduce dementia risk?",
      options: [
        "A. Family history of Alzheimer's disease",
        "B. The APOE-e4 genetic risk factor",
        "C. Managing hypertension and diabetes through a healthy lifestyle",
        "D. Age above 65 years",
      ],
      answer: "C",
      explanation:
        "Managing hypertension and diabetes through healthy lifestyle choices are modifiable risk factors for vascular dementia and may reduce overall dementia risk. Family history, APOE-e4 gene, and age are non-modifiable.",
    },
    {
      question:
        "Namzaric is a medication used in moderate-to-severe Alzheimer's. It is BEST described as:",
      options: [
        "A. A new-generation cholinesterase inhibitor with fewer side effects",
        "B. A combination of memantine AND donepezil in one capsule",
        "C. A pure NMDA antagonist taken as a once-weekly injection",
        "D. An antipsychotic approved for dementia-related agitation",
      ],
      answer: "B",
      explanation:
        "Namzaric is a combination drug containing both memantine (NMDA antagonist) and donepezil (cholinesterase inhibitor) in one capsule. Used for moderate-to-severe Alzheimer's, combining the benefits of both drug classes.",
    },
  ],

  level2: [
    {
      question:
        "Mr. Lim is prescribed Donepezil 5mg. Three days after starting, he reports nausea and has reduced food intake. The HCA's MOST appropriate action is:",
      options: [
        "A. Stop giving the medication immediately as it is causing harm",
        "B. Ensure Mr. Lim takes Donepezil with food, monitor intake closely, document symptoms, and report to the nurse — GI side effects are expected and usually temporary",
        "C. Crush the tablet and hide it in his food so he does not know he is taking it",
        "D. Reassure Mr. Lim the nausea is in his imagination and continue as normal",
      ],
      answer: "B",
      explanation:
        "GI side effects from cholinesterase inhibitors are expected, common, and usually temporary (1–2 weeks). Taking with food reduces nausea. The HCA should NOT stop medication independently. Hiding medication in food without consent is unethical.",
    },
    {
      question:
        "Mrs. Tan with moderate dementia paces the corridor and becomes agitated daily around 4–5 pm. Which puzzle piece would MOST guide the HCA intervention?",
      options: [
        "A. NI — check if her MMSE score has dropped",
        "B. H — check if she has an undiagnosed UTI or pain",
        "C. B — explore her biography (was she active at that time? a school pick-up parent?) to understand the pattern",
        "D. SP — check if there is a family conflict causing stress",
      ],
      answer: "C",
      explanation:
        "The 4–5 pm pattern suggests sundowning, but Biography (B) is the key puzzle piece. Understanding her past daily routine at that time allows the HCA to provide a meaningful, familiar activity at that hour — far more effective than medication for this pattern of BPSD.",
    },
    {
      question:
        "A resident has not bathed in 5 days and says 'I am clean enough, leave me alone.' Which is the CORRECT documentation approach?",
      options: [
        "A. Write: 'Resident is uncooperative and refuses personal hygiene'",
        "B. Write: 'Resident refused bathing on [date/time]. Stated \"I am clean enough\". Offered alternatives — declined. Mood appeared flat and withdrawn. Nurse informed.'",
        "C. Write: 'Resident has dementia and cannot make hygiene decisions — family should be consulted'",
        "D. Write: 'No concerns today — resident appeared calm during morning rounds'",
      ],
      answer: "B",
      explanation:
        "Accurate PCC documentation must include: exact statement from the resident, alternatives offered, behavioural observations (flat mood, withdrawal — possible depression signs), and confirmation nurse was informed. Option A is judgemental. Options C and D are inaccurate.",
    },
    {
      question:
        "Which describes the CORRECT order of interventions when managing BPSD?",
      options: [
        "A. Medication first, then identify the cause, then try non-pharmacological approaches",
        "B. Restrain the resident first to ensure safety, then call the nurse",
        "C. Identify potential triggers and unmet needs first, try non-pharmacological strategies, escalate to nurse if ineffective, consider medication only as last resort",
        "D. Immediately call the family and wait for their instructions",
      ],
      answer: "C",
      explanation:
        "Evidence-based BPSD management: (1) Identify the trigger and unmet need, (2) Implement non-pharmacological person-centred strategies, (3) Report to nurse if ineffective, (4) Medication as last resort. This is internationally recommended.",
    },
    {
      question:
        "A colleague tells a resident repeatedly asking for her deceased mother: 'She died 30 years ago — you keep asking the same thing!' What should the HCA have done instead?",
      options: [
        "A. Nothing — correcting with facts is essential for reality orientation",
        "B. Used simpler language and repeated the correction more slowly",
        "C. Acknowledged the feeling: 'It sounds like you are missing someone you love. Tell me about your mother.'",
        "D. Spoken louder as the resident may have hearing difficulties",
      ],
      answer: "C",
      explanation:
        "Correcting someone with dementia about a painful loss causes distress — the person cannot retain the information. This is Invalidation (MSP). The PCC approach is to acknowledge the EMOTION behind the request and redirect with warmth and curiosity.",
    },
    {
      question:
        "Mr. Hassan with severe dementia refuses all meals. The HCA has tried standard approaches. What should happen NEXT?",
      options: [
        "A. Force feed Mr. Hassan to ensure adequate nutrition",
        "B. Accept the refusal entirely — at severe stage nutrition is no longer important",
        "C. Document the refusal and interventions attempted, observe for other signs of decline, and escalate urgently to the nurse and dietitian",
        "D. Ask the family what they want done without involving the clinical team",
      ],
      answer: "C",
      explanation:
        "Persistent refusal to eat in severe dementia requires escalation to nurse AND dietitian. Possible causes include dysphagia, dental pain, depression, medication side effects, or end-of-life decline. Force feeding violates dignity. Accepting without escalation fails the duty of care.",
    },
    {
      question:
        "Which is NOT an appropriate non-pharmacological strategy for managing wandering?",
      options: [
        "A. Providing a safe supervised walking area within the facility",
        "B. Using door alarms and tracking devices to alert staff",
        "C. Physically restraining the resident with a vest at bedtime to prevent night wandering",
        "D. Identifying and addressing the trigger for wandering",
      ],
      answer: "C",
      explanation:
        "Physical restraints are NEVER appropriate first-line management for wandering. They cause significant harm: increased agitation, falls, pressure injury, loss of dignity, and psychological distress. Safe walking areas, door alarms, and identifying triggers are appropriate evidence-based strategies.",
    },
    {
      question:
        "A resident's family asks: 'Will Rivastigmine cure her?' The MOST appropriate HCA response is:",
      options: [
        "A. Yes, this medication will help her recover her memory",
        "B. I cannot provide medical advice — the nurse or doctor can best explain that medications manage symptoms though there is no cure for Alzheimer's.",
        "C. No, nothing works for dementia.",
        "D. It depends on her stage — let me check her MMSE and advise you.",
      ],
      answer: "B",
      explanation:
        "The HCA scope does not include providing medical counselling. The correct response is to redirect to the nurse or doctor while being supportive. The HCA should NOT give false hope or negative prognosis. Clinical information about medications must come from the clinical team.",
    },
    {
      question:
        "An HCA notices a resident is more confused than usual, has strong-smelling urine in the catheter bag, and is more agitated. The HCA's MOST appropriate FIRST action is:",
      options: [
        "A. Assume the increased confusion is dementia progression and continue with routine care",
        "B. Immediately inform the nurse, document observations (increased confusion, strong-smelling urine, agitation), and suspect a possible UTI",
        "C. Increase the resident's fluid intake independently and monitor for 24 hours before reporting",
        "D. Administer PRN sedation as the agitation requires immediate management",
      ],
      answer: "B",
      explanation:
        "This is a clinical red flag: strong-smelling urine + sudden increased confusion + agitation = possible UTI. UTI is one of the most common causes of acute confusion in elderly patients. The HCA must IMMEDIATELY inform the nurse with specific documented observations. HCAs do not diagnose or administer PRN independently.",
    },
    {
      question:
        "Which scenario BEST demonstrates the Truthfulness principle from the six therapeutic environment principles?",
      options: [
        "A. Telling a resident their favourite meal is being served to encourage them to the dining room even though it is not on the menu",
        "B. Avoiding all difficult topics to prevent upsetting the resident",
        "C. Calmly telling a resident 'I do not know when your family is visiting, but I will find out and let you know' when genuinely unsure",
        "D. Telling a resident their family has been contacted and is on the way even though no contact has been made",
      ],
      answer: "C",
      explanation:
        "Truthfulness means being honest even when the truth is uncertain. Option C is honest — 'I do not know, but I will find out'. Options A and D involve deception (treachery, MSP). Option B is avoidance. Truthfulness builds trust, the foundation of the therapeutic relationship.",
    },
    {
      question:
        "A resident who was previously a keen gardener is becoming withdrawn, losing interest in activities, and sleeping more than usual. What does this MOST likely suggest?",
      options: [
        "A. Wandering — increase environmental safety measures",
        "B. Agitation — reduce stimulation and provide a quiet room",
        "C. Depression — acknowledge feelings, engage with meaningful activity (gardening-related), monitor closely, and report to nurse",
        "D. Psychosis — report immediately for antipsychotic medication",
      ],
      answer: "C",
      explanation:
        "Withdrawal, loss of interest, and increased sleep are classic signs of depression in dementia. The PCC response: acknowledge feelings, re-engage through the person biography (gardening was meaningful), monitor closely, and report to nurse. This is a non-pharmacological, biography-informed response.",
    },
    {
      question:
        "A resident with Lewy Body Dementia is prescribed a cholinesterase inhibitor. What should the HCA know?",
      options: [
        "A. Cholinesterase inhibitors are completely contraindicated in Lewy Body Dementia",
        "B. Cholinesterase inhibitors are more effective in Lewy Body Dementia and Parkinson's dementia than in vascular dementia",
        "C. Cholinesterase inhibitors cause more severe side effects in Lewy Body Dementia and must be stopped",
        "D. Lewy Body Dementia does not respond to any medication",
      ],
      answer: "B",
      explanation:
        "Research shows cholinesterase inhibitors (especially Rivastigmine) are MORE effective in Lewy Body Dementia and Parkinson's Disease Dementia than in vascular dementia. Rivastigmine has a specific indication for Parkinson's Disease Dementia.",
    },
    {
      question:
        "The lecture states care should respond from the person's point of view. In practice this means the HCA should:",
      options: [
        "A. Complete all care tasks based on the nursing home schedule regardless of the resident's preferences",
        "B. Always ask the resident's family what they prefer",
        "C. Observe the resident's non-verbal cues, respect expressed preferences, and adapt care to the resident's current emotional and physical state even if this means modifying a scheduled task",
        "D. Follow the care plan exactly as written without deviation regardless of the resident's state",
      ],
      answer: "C",
      explanation:
        "Responding from the person's point of view means constantly reading and responding to the resident's expressed needs and state — not just following a rigid schedule. Care plans are guides, not scripts. Adapting to the person IS implementation of PCC. Rigid adherence without attention to the person is task-focused care.",
    },
    {
      question:
        "A resident with dementia suddenly becomes physically aggressive toward the HCA during dressing. The HCA's IMMEDIATE response should be:",
      options: [
        "A. Restrain the resident's arms and complete the dressing to avoid leaving them undressed",
        "B. Step back calmly, give the resident space, speak in a gentle voice, assess for pain or trigger, and ensure safety without physical restraint",
        "C. Call for backup immediately and wait for 3 staff before attempting to continue",
        "D. Document the incident and return only when the resident has calmed down completely on their own",
      ],
      answer: "B",
      explanation:
        "Sudden aggression during personal care is almost always triggered by pain, fear, or loss of control. IMMEDIATE response: step back, stay calm, speak gently, give space. Do NOT restrain. Assess for pain. Resume care when the resident is calmer. Report and document.",
    },
    {
      question:
        "According to the lecture daily care tips, why is offering choices important in managing dementia residents?",
      options: [
        "A. Choice is a legal requirement under the Mental Capacity Act",
        "B. Offering choices is a time-saving measure for busy HCAs",
        "C. Even small choices restore a sense of control and autonomy, reducing agitation and preserving dignity in a person who has lost control of much of their daily life",
        "D. Choice is only appropriate for residents in early-stage dementia with full cognitive capacity",
      ],
      answer: "C",
      explanation:
        "Offering choices — even small ones like tea or coffee or which shirt — is a powerful PCC tool because dementia progressively strips a person of control. Restoring even micro-choices preserves autonomy, reduces agitation, and affirms the person's status as an individual with preferences and rights. Choice matters across ALL stages.",
    },
  ],

  cases: [
    {
      scenario:
        "Mr. Ahmad, 75, has been prescribed Donepezil 5mg. On Day 4, the night HCA reports he was awake all night, very restless, and had terrible dreams. What should the day HCA do?",
      options: [
        "A. Continue the medication schedule and wait — this will pass naturally",
        "B. Document the vivid dreams and sleep disturbance, inform the nurse immediately, and suggest the nurse consider whether Donepezil should be taken in the morning instead of at night",
        "C. Stop the Donepezil immediately to prevent further sleep disruption",
        "D. Tell Mr. Ahmad the dreams are not real and encourage him to ignore them",
      ],
      answer: "B",
      rationale:
        "Vivid dreams and sleep disturbance are known side effects of cholinesterase inhibitors when taken at night. A simple clinical adjustment — switching the dose to morning — can resolve this. The HCA role is to document, report to the nurse, and provide the clinical information. HCAs never stop or adjust medications independently.",
    },
    {
      scenario:
        "Madam Chen, 80, with vascular dementia, repeatedly asks 'Where am I? I want to go home' every 10–15 minutes. Other residents are becoming frustrated. What is the MOST appropriate PCC management?",
      options: [
        "A. Give Madam Chen a sedative so she stops disturbing others",
        "B. Tell Madam Chen repeatedly: 'You are in the nursing home. This is your home now.'",
        "C. Each time Madam Chen asks, calmly acknowledge her feeling, engage her with a familiar biographical activity such as looking at family photos, and create a calm space with familiar objects near her",
        "D. Move Madam Chen to an isolated room to prevent her from disturbing other residents",
      ],
      answer: "C",
      rationale:
        "This repetitive behaviour is driven by anxiety and disorientation. PCC management: respond calmly each time (validate the emotion), use biography (familiar objects, photos of home), redirect to a meaningful activity. Sedation is a last resort. Repeatedly correcting causes more distress. Isolating is banishment (MSP).",
    },
    {
      scenario:
        "Mr. Raju, 72, a retired army officer with early Alzheimer's, has not shaved or bathed independently for 2 weeks. His family reports this is completely out of character — he was obsessively neat. Using the P (Personality) puzzle piece, what does this MOST likely indicate?",
      options: [
        "A. This is normal and expected in early Alzheimer's — personal care always declines at this stage",
        "B. His personality has permanently changed and his previous standards no longer apply",
        "C. This significant change from his baseline personality likely indicates depression, significant cognitive decline, or loss of initiation — all requiring prompt reporting to the nurse",
        "D. He is being deliberately non-compliant and needs firmer encouragement",
      ],
      answer: "C",
      rationale:
        "A significant departure from a well-established personality pattern is a clinical red flag. It may indicate depression, loss of initiation, significant cognitive decline, or physical illness. The HCA must document the change, compare to the person baseline (Biography and Personality puzzle pieces), and report to the nurse for assessment.",
    },
    {
      scenario:
        "During handover, the incoming HCA is told: 'Mrs. Wong is difficult today — she threw her breakfast tray and hit the care assistant.' The HCA's FIRST thought when approaching Mrs. Wong should be:",
      options: [
        "A. Mrs. Wong is being aggressive and needs to be managed firmly",
        "B. Mrs. Wong has dementia and this is inevitable — nothing can be done",
        "C. Mrs. Wong's behaviour is a communication — she is likely in pain, frightened, or has an unmet need. I need to calmly approach, check for physical discomfort, and understand what triggered this",
        "D. Mrs. Wong should be placed in restraints for the safety of staff",
      ],
      answer: "C",
      rationale:
        "BPSD like throwing objects is NEVER just dementia or inevitable. It is a communication. The HCA must approach with curiosity and empathy: What triggered this? Pain? Fear? Loss of dignity? The approach: ensure safety, assess for physical causes, identify unmet needs, implement non-pharmacological strategies, and report to nurse.",
    },
    {
      scenario:
        "A new HCA asks: 'Why do we spend so much time gathering life history when the resident cannot even remember their own name?' What is the MOST accurate response?",
      options: [
        "A. For residents with severe dementia, life history is irrelevant to care",
        "B. Life history helps the clinical team complete documentation requirements only",
        "C. Life history is essential at ALL stages — even in severe dementia, biographical information guides meaningful activities, comfort strategies, and communication approaches — helping staff see the person's full humanity",
        "D. Life history is only collected for legal reasons in case of complaints",
      ],
      answer: "C",
      rationale:
        "Biography (B in Kitwood's formula) is foundational to PCC at every stage. Even when episodic memory is lost, people with dementia retain emotional memory — they respond to familiar music, tastes, smells, and objects from their past. Biographical knowledge enables meaningful engagement and reduces BPSD even in advanced stages.",
    },
    {
      scenario:
        "Mrs. Lim, 84, with late-stage Alzheimer's, cannot speak or walk. During the midday activities session, the HCA leaves her in her room because 'she won't understand or enjoy it anyway.' Which of the six therapeutic environment principles is being violated?",
      options: [
        "A. Independence — she is capable of attending activities herself",
        "B. Truthfulness — the HCA is being dishonest about her capabilities",
        "C. Social Confidence and Engagement — she is being excluded and denied meaningful stimulation even though she can still respond to music, familiar voices, and sensory stimulation",
        "D. Respect — the HCA has not knocked before entering her room",
      ],
      answer: "C",
      rationale:
        "Social Confidence and Engagement are both violated. Even in late-stage dementia, residents respond to music, warm social presence, tactile stimulation, and familiar voices. Leaving someone isolated because they 'won't understand' is banishment (MSP) — one of Kitwood's 17 harmful interactions.",
    },
    {
      scenario:
        "Mr. Tan, 77, is on Memantine for moderate-to-severe Alzheimer's. His wife asks whether he should also take Donepezil as she read combining them may help. What should the HCA do?",
      options: [
        "A. Advise the wife to buy Donepezil and add it to his medications",
        'B. Tell the wife: "Yes, studies show combination therapy helps — ask the doctor to add it immediately"',
        "C. Acknowledge her concern, explain that medication decisions are made by the doctor and nurse, and suggest she raises this at the next medical review",
        "D. Tell the wife that Memantine is enough and no other medication is needed",
      ],
      answer: "C",
      rationale:
        "Medication advice — including whether to combine drugs — is entirely outside the HCA scope. The HCA should validate the wife's concern, explain the HCA role, and direct her to the appropriate clinical staff. The combination Memantine + Donepezil (Namzaric) is clinically available, but this decision belongs to the medical team.",
    },
    {
      scenario:
        "Care notes show Mrs. Fernandez has refused 3 meals in a row, lost 2kg in 2 weeks, and appears increasingly withdrawn and tearful. Applying the three BPSD case categories from Lecture 4, what does this pattern MOST suggest?",
      options: [
        "A. Repetitive behaviour — she is fixated on not eating",
        "B. Wandering — she is searching for something",
        "C. Depression combined with self-neglect — the pattern of withdrawal, tearfulness, and appetite loss are hallmarks requiring prompt clinical review",
        "D. Psychosis — she is having hallucinations about her food",
      ],
      answer: "C",
      rationale:
        "Weight loss + food refusal + withdrawal + tearfulness = the classic presentation of depression in dementia combined with self-neglect. This is a clinical concern requiring urgent nurse notification. It may also indicate physical illness (dental pain, dysphagia, UTI, constipation). The HCA documents all observations and reports immediately.",
    },
    {
      scenario:
        "Mr. Lee has moderate dementia, refuses to let the HCA help him change his clothes and shouts: 'Do not touch me — I can do it myself!' The HCA's BEST response is:",
      options: [
        "A. Override his objection and proceed — changing clothes is a hygiene necessity",
        "B. Apologise and leave him entirely alone without follow-up",
        "C. Step back, acknowledge his wish for independence ('Of course, Mr. Lee — let me be here if you need me'), observe closely while allowing him to attempt the task, and offer to help only when genuinely needed",
        "D. Document his refusal and inform the nurse that Mr. Lee is being non-compliant",
      ],
      answer: "C",
      rationale:
        "Mr. Lee is expressing a need for independence and autonomy — a core PCC principle. He may still be capable of some aspects of dressing. The PCC response is to support independence by stepping back, verbalising respect for his capability, and offering help as a backup only. This reduces agitation and maintains functional abilities.",
    },
    {
      scenario:
        "After 6 weeks of a structured routine, biography-informed activities (Mr. Ahmad was a hawker — he now helps fold napkins and organise condiment trays), and consistent staffing, his agitation episodes reduced from 8 to 2 per day, food intake improved, and he greets familiar HCAs by name. How should the team interpret these outcomes?",
      options: [
        "A. The improvement is coincidental — dementia always fluctuates",
        "B. Mr. Ahmad should now be reviewed for medication reduction since his behaviour has improved",
        "C. These outcomes indicate the PCC management plan is EFFECTIVE — structured routine, meaningful occupation, and social connection are meeting his psychological needs. Continue, document, and share as a positive practice example.",
        "D. These results suggest Mr. Ahmad's dementia is reversing — a new cognitive assessment should be ordered",
      ],
      answer: "C",
      rationale:
        "This demonstrates all PCC effectiveness indicators: (1) reduced BPSD frequency, (2) improved engagement, (3) improved nutrition, and (4) positive social responses. This is PCC success — biography-informed occupation, routine, and consistency meeting needs for Identity, Occupation, Attachment, and Inclusion. Document, celebrate, and use as a practice model.",
    },
  ],

  goldenRules: [
    {
      number: 1,
      title: "Golden Rule 1: BPSD Is a Communication, Not Bad Behaviour",
      detail:
        "When you see agitation, refusal, repetitive behaviour, aggression, or self-neglect — STOP. Ask: What is this person trying to tell me? BPSD = unmet need. Identify the need, meet the need, document and report.",
    },
    {
      number: 2,
      title: "Golden Rule 2: Use the Puzzle (NI + H + B + P + SP)",
      detail:
        "Before you can manage any resident effectively, you must know them through all five puzzle pieces. Biography tells you WHY they behave as they do. Health tells you if a physical trigger (UTI, pain) is involved. SP tells you who matters to them.",
    },
    {
      number: 3,
      title: "Golden Rule 3: Non-Pharmacological First, Always",
      detail:
        "For every BPSD, try person-centred non-drug strategies first: meaningful activities, routine, validation, reminiscence, environmental modification, music. Medications are the last resort — not the first line.",
    },
    {
      number: 4,
      title: "Golden Rule 4: Know Your Drugs (But Know Your Limits)",
      detail:
        "ChIs (Donepezil, Rivastigmine, Galantamine) = early-moderate. Memantine = moderate-severe. No cure. Side effects to monitor: nausea/vomiting/diarrhoea (ChIs); headache/confusion/dizziness (Memantine). Report to nurse — NEVER adjust or stop medications independently.",
    },
    {
      number: 5,
      title: "Golden Rule 5: Independence Over Efficiency",
      detail:
        "Never do for a resident what they can still do for themselves. Offering help unnecessarily is disempowerment (MSP). Support, guide, and step back. Preserve every remaining ability — it preserves dignity and slows functional decline.",
    },
    {
      number: 6,
      title: "Golden Rule 6: Choice Reduces Agitation",
      detail:
        "Giving even micro-choices (tea or coffee? which shirt?) restores a sense of control. Residents who feel they have some agency are less agitated, more cooperative, and more engaged.",
    },
    {
      number: 7,
      title: "Golden Rule 7: Routine Is Medicine",
      detail:
        "A predictable daily schedule is one of the most powerful non-pharmacological tools. Same wake time, meal times, activity times, bedtime. Predictability = emotional security. Inconsistency = confusion and BPSD.",
    },
    {
      number: 8,
      title:
        "Golden Rule 8: Report These Immediately — UTI, Weight Loss, Sudden Confusion",
      detail:
        "Sudden increased confusion + strong-smelling urine = possible UTI. Consistent meal refusal + weight loss + withdrawal = possible depression or dysphagia. These require urgent nurse notification. Your observations are clinical data.",
    },
    {
      number: 9,
      title: "Golden Rule 9: Scope of Practice in Management",
      detail:
        "You OBSERVE: behaviour, food intake, side effects, mood changes, physical signs. You IMPLEMENT: PCC strategies, routine, meaningful activities. You REPORT: to nurse. You DO NOT: diagnose, prescribe, adjust medications, or change care plans independently.",
    },
    {
      number: 10,
      title: "Golden Rule 10: Evaluate and Adapt",
      detail:
        "PCC is not a one-time fix. Observe whether your strategies reduce BPSD, improve engagement, and make the person calmer. If not — try a different approach. Discuss with the team. Review the biography. The puzzle is never complete.",
    },
  ],
};
