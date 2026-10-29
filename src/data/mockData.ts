import { Course, Teacher, Notice, GalleryItem, FAQItem, CampusBranch } from '../types';

export const ASSET_IMAGES = {
  heroCampus: '/src/assets/images/hero_academic_campus_1793253350211.jpg',
  classroom: '/src/assets/images/classroom_lecture_session_1793253349380.jpg',
  lab: '/src/assets/images/science_lab_experiment_1793253350584.jpg',
  library: '/src/assets/images/library_study_lounge_1793253351122.jpg',
  awards: '/src/assets/images/awards_ceremony_winners_1793253351879.jpg',
};

export const COURSES_DATA: Course[] = [
  {
    id: 'engineering-admission-prep',
    title: 'Pre-Engineering Admission Mastery',
    subtitle: 'Comprehensive preparation for BUET, IUT, DU Tech, and Top University Engineering Entrance Exams.',
    level: 'Engineering Entrance',
    category: 'engineering',
    duration: '8 Months Intensive',
    classesPerWeek: 4,
    classDuration: '2.5 Hours',
    batchSize: 30,
    tuitionFee: '$180 / month [Placeholder: Tuition Fee]',
    schedule: 'Mon, Wed, Fri & Sat (Shift: 4:00 PM - 6:30 PM)',
    badge: 'Flagship Program',
    leadInstructor: {
      name: 'Engr. Tareq Mahmud',
      title: 'Senior Faculty & Olympiad Coach',
      institution: 'Ex-BUET Gold Medalist'
    },
    overview: 'Designed for ambitious Grade 12 & HSC examinees aiming for top-percentile ranks in competitive engineering universities. Combines calculus-heavy analytical physics, multi-step chemistry equilibria, and high-speed problem-solving drills with weekly computer-scored mock examinations.',
    features: [
      'Over 2,400 curated competitive practice problems solved live',
      '16 Full-Length Simulated Admission Tests mirroring actual entrance patterns',
      'Exclusive printed Formula Almanacs and Chapterwise Question Banks',
      'Dedicated 1-on-1 doubt resolution clinic after every lecture',
      'Bi-weekly performance analytics report sent directly to parents'
    ],
    curriculum: [
      {
        module: 'Advanced Newtonian & Relativistic Mechanics',
        durationWeeks: 4,
        topics: [
          'Variable mass systems and rotational dynamics of rigid bodies',
          'Gravitational potential wells and orbital mechanics',
          'Simple harmonic motion and forced resonance damping',
          'Fluid dynamics: Bernoulli applications and viscous drag'
        ]
      },
      {
        module: 'Electromagnetism & Circuit Topology',
        durationWeeks: 5,
        topics: [
          'Gauss law with continuous charge distributions',
          'Kirchhoff mesh analysis with inductors and AC transients',
          'Faraday-Lenz induction in non-uniform magnetic fields',
          'Maxwell displacement current and electromagnetic wave Poynting vector'
        ]
      },
      {
        module: 'Calculus, Vectors & Coordinate Geometry',
        durationWeeks: 6,
        topics: [
          'Limits, continuity, and L’Hopital multi-variable adaptations',
          'Techniques of integration: reduction formulas and contour tricks',
          'Conic sections: Tangents, normals, and polar coordinate systems',
          '3D vector spaces and matrix transformations in entrance testing'
        ]
      },
      {
        module: 'Physical & Organic Reaction Mechanisms',
        durationWeeks: 5,
        topics: [
          'Chemical thermodynamics, Gibbs energy, and phase equilibria',
          'Electrochemistry: Nernst equation and electrolytic conductance',
          'Stereochemistry and nucleophilic substitution mechanisms (SN1, SN2, E1, E2)',
          'Carbonyl condensations and aromatic electrophilic substitutions'
        ]
      }
    ]
  },
  {
    id: 'medical-admission-prep',
    title: 'Pre-Medical & Life Sciences Entrance',
    subtitle: 'High-yield conceptual coaching for National Medical College Admissions & Dental Faculties.',
    level: 'Medical Admission',
    category: 'medical',
    duration: '7 Months Intensive',
    classesPerWeek: 4,
    classDuration: '2 Hours',
    batchSize: 32,
    tuitionFee: '$170 / month [Placeholder: Tuition Fee]',
    schedule: 'Sun, Tue, Thu & Sat (Shift: 9:00 AM - 11:00 AM)',
    badge: 'High Success Rate',
    leadInstructor: {
      name: 'Dr. Nusrat Jahan, MBBS',
      title: 'Chief Medical Academics Coordinator',
      institution: 'Ex-Dhaka Medical College'
    },
    overview: 'Our medical preparation cohort emphasizes deep biological memory retention, organic chemical pathways, conceptual physics fundamentals, and rigorous time-management under negative-marking exam pressures.',
    features: [
      'Comprehensive coverage of Zoology, Botany, Organic Chemistry, and Physics',
      '30 Subject-wise Speed Tests and 14 Grand Medical Mocks',
      'Mnemonics and high-yield summary sheets for human physiology',
      'Weekly negative marking diagnostic assessments',
      'Mentorship sessions with current top-ranking medical students'
    ],
    curriculum: [
      {
        module: 'Human Physiology & Systemic Biology',
        durationWeeks: 4,
        topics: [
          'Circulatory mechanics, cardiac cycle, and hemodynamics',
          'Neuroendocrine coordination and hormonal feedback loops',
          'Renal filtration mechanisms and acid-base homeostasis',
          'Genetics, chromosomal aberrations, and Mendelian inheritance patterns'
        ]
      },
      {
        module: 'Cell Biology, Genetics & Plant Physiology',
        durationWeeks: 4,
        topics: [
          'Cell organelles, membrane transport, and mitotic checkpoints',
          'Photosynthetic photophosphorylation and Calvin cycle regulation',
          'Cellular respiration: Glycolysis, Krebs cycle, and electron transport',
          'Plant ecology, economic botany, and taxonomy'
        ]
      },
      {
        module: 'Organic Functional Groups & Biochemistry',
        durationWeeks: 4,
        topics: [
          'Isomerism: Structural, optical, and conformational',
          'Reactions of hydrocarbons, alcohols, aldehydes, and carboxylic acids',
          'Amino acids, peptide bonds, and enzymatic kinetics',
          'Biomolecules and environmental chemistry for entrance questions'
        ]
      },
      {
        module: 'Medical Physics & Dimensional Analysis',
        durationWeeks: 4,
        topics: [
          'Wave optics, interference, and laser optics in medicine',
          'Radioactivity, nuclear decay laws, and medical imaging physics',
          'Thermal physics, heat conduction, and calorimetry',
          'Current electricity and potentiometer calculations'
        ]
      }
    ]
  },
  {
    id: 'higher-secondary-stem',
    title: 'Senior Secondary STEM Masterclass (Grades 11-12 / HSC)',
    subtitle: 'Year-round academic mastery covering Physics, Chemistry, Higher Math, and Biology.',
    level: 'Senior Secondary (Grades 11-12)',
    category: 'secondary',
    duration: '1 Year Full Academic Cycle',
    classesPerWeek: 5,
    classDuration: '2 Hours',
    batchSize: 28,
    tuitionFee: '$150 / month [Placeholder: Tuition Fee]',
    schedule: 'Sun to Thu (Shift: 3:30 PM - 5:30 PM)',
    badge: 'Popular',
    leadInstructor: {
      name: 'Prof. Anisur Rahman',
      title: 'Department Chair of Physics',
      institution: 'Ex-Notre Dame College Senior Faculty'
    },
    overview: 'Synchronized with official board curricula, this program ensures student mastery of textbook concepts, creative question (CQ) drafting, multiple-choice precision, and hands-on laboratory experiment skills.',
    features: [
      'Full syllabus coverage aligned with board textbook standards',
      'Weekly chapter assessment exams with detailed faculty correction',
      'Complete lab practical demonstrations and viva-voce coaching',
      'Small batch limit of 28 students ensuring active teacher attention',
      'Term-end board simulation test with answer script evaluations'
    ],
    curriculum: [
      {
        module: 'HSC Paper 1 Physics & Chemistry Foundations',
        durationWeeks: 12,
        topics: [
          'Vector algebra, Newton laws of motion, Work, Energy, and Power',
          'Structural atomic theory, periodic trends, and chemical bonding',
          'Quantitative chemistry: Stoichiometry, gas laws, and ideal gas equation',
          'Matrices, Determinants, Straight lines, and Circles'
        ]
      },
      {
        module: 'HSC Paper 2 Calculus, Organic & Modern Physics',
        durationWeeks: 12,
        topics: [
          'Differential and integral calculus applications in geometry and physics',
          'Organic chemistry: Hydrocarbons, functional groups, and synthesis',
          'Thermodynamics, static electricity, and wave optics',
          'Modern physics: Photoelectric effect, Compton scattering, and nuclear reactions'
        ]
      }
    ]
  },
  {
    id: 'high-school-foundation',
    title: 'High School Foundation & Board Accelerator (Grades 9-10 / SSC)',
    subtitle: 'Core conceptual grounding in General Science, Higher Mathematics, Physics, and Chemistry.',
    level: 'High School (Grades 9-10)',
    category: 'foundation',
    duration: '10 Months Structured',
    classesPerWeek: 4,
    classDuration: '1.5 Hours',
    batchSize: 25,
    tuitionFee: '$120 / month [Placeholder: Tuition Fee]',
    schedule: 'Mon, Wed, Fri & Sat (Shift: 4:30 PM - 6:00 PM)',
    leadInstructor: {
      name: 'Ms. Farhana Haque, M.Sc.',
      title: 'Lead Mathematics Specialist',
      institution: 'University of Dhaka (1st Class 1st)'
    },
    overview: 'Builds ironclad fundamental intuition in mathematics and natural sciences for middle-school and high-school students, preparing them for top GPAs in board examinations and setting up seamless transition into higher secondary studies.',
    features: [
      'Visual interactive demonstrations for physics and geometry',
      'Weekly homework reviews and personalized feedback notes',
      'Early Olympiad problem-solving exposure',
      'Friendly, approachable faculty dedicated to removing math phobia',
      'Monthly parent consultations'
    ],
    curriculum: [
      {
        module: 'Algebraic Foundations & Coordinate Geometry',
        durationWeeks: 8,
        topics: [
          'Polynomials, factor theorem, and algebraic identities',
          'Linear and quadratic equations with graphical solutions',
          'Trigonometric ratios, heights, and distance problems',
          'Circle theorems and geometric constructions'
        ]
      },
      {
        module: 'Basic Physics & Chemical Principles',
        durationWeeks: 8,
        topics: [
          'Kinematics, forces, and pressure in everyday phenomena',
          'States of matter, atomic structure, and chemical reactions',
          'Acids, bases, salts, and electricity in chemistry',
          'Light reflection, refraction, and optical lenses'
        ]
      }
    ]
  },
  {
    id: 'cambridge-edexcel-olevel-alevel',
    title: 'Cambridge & Edexcel (O-Level & A-Level) International Track',
    subtitle: 'Specialized syllabus delivery for Pure Mathematics, Mechanics, Physics 9702, and Chemistry 9701.',
    level: 'O/A Levels & SAT',
    category: 'international',
    duration: 'Year-Round Modular',
    classesPerWeek: 3,
    classDuration: '2 Hours',
    batchSize: 20,
    tuitionFee: '$200 / month [Placeholder: Tuition Fee]',
    schedule: 'Sat, Mon & Wed (Shift: 6:00 PM - 8:00 PM)',
    leadInstructor: {
      name: 'Tanvir Chowdhury, B.Sc. (Hons)',
      title: 'International Curriculum Lead',
      institution: 'Cambridge International Certified'
    },
    overview: 'Specialist coaching tailored strictly to Cambridge Assessment International Education (CAIE) and Pearson Edexcel criteria. Emphasizes structured past-paper dissection, mark scheme analysis, and precision examiner keywords.',
    features: [
      'Systematic 15-year past paper topical classification',
      'Mark-scheme alignment workshops teaching exact keyword phrasing',
      'Paper 3 & Paper 5 practical and alternative-to-practical preparation',
      'Strictly small class limit of 20 students for individual paper checking',
      'Predicted grade evaluations matching official standards'
    ],
    curriculum: [
      {
        module: 'Pure Mathematics P1 & P3',
        durationWeeks: 10,
        topics: [
          'Quadratics, functions, coordinate geometry, and circular measure',
          'Trigonometry, series, differentiation, and integration',
          'Vectors in 3D and complex numbers',
          'Differential equations and numerical solutions'
        ]
      },
      {
        module: 'Advanced Physics (CAIE 9702)',
        durationWeeks: 10,
        topics: [
          'Kinematics, dynamics, and deformation of solids',
          'Waves, superposition, and quantum physics',
          'Capacitance, magnetic fields, and alternating currents',
          'Nuclear physics and medical applications'
        ]
      }
    ]
  }
];

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 'prof-anisur-rahman',
    name: 'Prof. Anisur Rahman',
    department: 'Physics',
    title: 'Head of Physics Department',
    education: 'M.Sc. in Theoretical Physics',
    institution: 'Ex-Senior Faculty, Notre Dame College',
    experienceYears: 24,
    specialty: ['Electromagnetism', 'Classical Mechanics', 'Olympiad Training'],
    bio: 'Renowned for transforming daunting physics equations into intuitive mental models. Over his 24-year teaching career, Prof. Rahman has mentored more than 1,200 students who achieved top 50 ranks in engineering entrance examinations.',
    quote: 'Physics is not the art of memorizing equations; it is the art of asking how nature behaves when tested.',
    achievements: 'National Physics Olympiad Lead Trainer (2018-2024)',
    emailPlaceholder: 'anisur.physics@omega-coaching.placeholder'
  },
  {
    id: 'engr-tareq-mahmud',
    name: 'Engr. Tareq Mahmud',
    department: 'Mathematics',
    title: 'Senior Faculty & Entrance Strategist',
    education: 'B.Sc. in Electrical Engineering (Gold Medalist)',
    institution: 'Bangladesh University of Engineering and Technology (BUET)',
    experienceYears: 14,
    specialty: ['Calculus', 'Coordinate Geometry', 'Combinatorics'],
    bio: 'Author of three entrance prep math handbooks, Tareq specializes in speed arithmetic, clever substitution techniques, and multi-step geometric insights required for elite entrance tests.',
    quote: 'When you understand why a formula holds true, you never fear an unexpected exam problem.',
    achievements: 'Top 10 National Ranker; Author of "Calculus for Aspirants"',
    emailPlaceholder: 'tareq.math@omega-coaching.placeholder'
  },
  {
    id: 'dr-nusrat-jahan',
    name: 'Dr. Nusrat Jahan',
    department: 'Biology',
    title: 'Director of Pre-Medical Studies',
    education: 'MBBS (Honors in Anatomy & Pathology)',
    institution: 'Dhaka Medical College & Hospital',
    experienceYears: 11,
    specialty: ['Human Physiology', 'Cell Genetics', 'Medical Entrance Strategy'],
    bio: 'Dr. Jahan brings clinical clarity and rigorous mnemonic frameworks to biological sciences. Her diagnostic speed-drills prepare medical applicants to tackle 100 questions within the 60-minute limit with near-zero negative marks.',
    quote: 'Precision and speed in biology come from visualizing living mechanisms, not cramming static text.',
    achievements: 'Mentored 380+ students into public medical colleges',
    emailPlaceholder: 'dr.nusrat@omega-coaching.placeholder'
  },
  {
    id: 'dr-kamal-hossain',
    name: 'Dr. Kamal Hossain, PhD',
    department: 'Chemistry',
    title: 'Chair of Chemical Sciences',
    education: 'PhD in Organic Synthesis',
    institution: 'University of Tokyo / Ex-DU Faculty',
    experienceYears: 18,
    specialty: ['Organic Reaction Mechanisms', 'Equilibria', 'Stereochemistry'],
    bio: 'Dr. Hossain breaks down complex organic multi-step reactions into intuitive electron pushes and energy landscapes. His laboratory workshops connect theoretical chemistry with physical reality.',
    quote: 'Chemistry becomes fascinating the moment you see electrons as players dancing to energy rules.',
    achievements: 'Published 22 peer-reviewed papers; Coach for International Chemistry Olympiad',
    emailPlaceholder: 'kamal.chem@omega-coaching.placeholder'
  },
  {
    id: 'ms-farhana-haque',
    name: 'Ms. Farhana Haque',
    department: 'Mathematics',
    title: 'High School Program Coordinator',
    education: 'M.Sc. in Applied Mathematics',
    institution: 'University of Dhaka (1st Class 1st)',
    experienceYears: 9,
    specialty: ['Trigonometry', 'Algebraic Modeling', 'Board Exam CQ Writing'],
    bio: 'Celebrated for her patience and structured rubric guidance, Farhana has helped hundreds of middle and high school students conquer math anxiety and attain perfect GPA 5.0 marks.',
    quote: 'Every student can excel in mathematics with patient mentorship and consistent daily practice.',
    achievements: 'Best Educator Award 2024, Omega Academic Board',
    emailPlaceholder: 'farhana.math@omega-coaching.placeholder'
  },
  {
    id: 'tanvir-chowdhury',
    name: 'Tanvir Chowdhury',
    department: 'English & Humanities',
    title: 'Head of International Curricula & English',
    education: 'B.A. (Hons), Cambridge International Certified Educator',
    institution: 'University of London External Program',
    experienceYears: 12,
    specialty: ['Critical Reading', 'IELTS/SAT Verbal', 'Scientific Essay Writing'],
    bio: 'Tanvir trains students in high-level analytical comprehension, scientific essay clarity, and English language communication required for international board examinations and university admission interviews.',
    quote: 'Clear thinking produces clear prose. Academic success begins with linguistic precision.',
    achievements: 'Trained over 900 O/A Level candidates with 85% A/A* achievement',
    emailPlaceholder: 'tanvir.english@omega-coaching.placeholder'
  }
];

export const NOTICES_DATA: Notice[] = [
  {
    id: 'notice-adm-2026-04',
    referenceNo: 'OAC/ADM/2026/04',
    title: 'Admission Open for Summer Intensive & Pre-Engineering Batch 2026',
    date: 'March 28, 2026',
    category: 'Admissions',
    isUrgent: true,
    isPinned: true,
    targetAudience: 'HSC 2026 Candidates & A-Level Students',
    fileSize: '410 KB',
    summary: 'Registrations are now open for the Summer Intensive Cohorts across all three campuses. Early bird diagnostic assessments scheduled for April 10.',
    content: [
      'Applications for the Summer Intensive Cohorts (Pre-Engineering and Pre-Medical Tracks) for the academic year 2026-2027 are officially open.',
      'Students who complete registration before April 8, 2026, will be eligible for a complimentary 1-month Diagnostic Foundation Kit and an Early Bird tuition concession of 15%.',
      'The mandatory Diagnostic & Scholarship Assessment will be held simultaneously across Dhanmondi, Uttara, and Gulshan branches on April 10, 2026, at 10:00 AM.',
      'Seats in each batch are strictly capped at 30 students to maintain pedagogical quality.'
    ]
  },
  {
    id: 'notice-exam-2026-11',
    referenceNo: 'OAC/EXAM/2026/11',
    title: 'Schedule for Phase-II Central Mock Assessment (Physics & Calculus)',
    date: 'March 24, 2026',
    category: 'Exam Schedules',
    isUrgent: false,
    isPinned: true,
    targetAudience: 'Batch A1, A2, and B1 Engineering Prep',
    fileSize: '320 KB',
    summary: 'The Phase-II Central Mock Assessment will take place on Saturday, April 4, 2026. Hall tickets and roll allocations have been uploaded to student portals.',
    content: [
      'All students enrolled in Batches A1, A2, and B1 are hereby notified that the Phase-II Mock Examination will commence on Saturday, April 4, 2026.',
      'Exam Duration: 9:00 AM to 12:00 PM (Reporting time: 8:30 AM sharp).',
      'Subjects: Paper I: Advanced Mechanics & Fluid Statics (100 Marks); Paper II: Differential & Integral Calculus (100 Marks).',
      'Admit cards must be printed from the student portal and presented with student ID card at the examination hall entrance.'
    ]
  },
  {
    id: 'notice-merit-2026-02',
    referenceNo: 'OAC/RES/2026/02',
    title: 'Merit List Publication: Omega Annual STEM Scholarship 2026',
    date: 'March 18, 2026',
    category: 'Results & Merit',
    isUrgent: false,
    isPinned: false,
    targetAudience: 'All Registered Candidates',
    fileSize: '580 KB',
    summary: 'The official merit list and scholarship awardees for the Omega STEM Foundation Scholarship have been published. Top 20 rankers receive full tuition waivers.',
    content: [
      'The Academic Council is pleased to publish the final merit ranking of the 2026 STEM Scholarship Examination conducted on March 10, 2026.',
      'Top 20 candidates have been awarded 100% full tuition scholarships for the upcoming academic year.',
      'Candidates ranked 21 to 60 will receive a 50% merit grant, and candidates ranked 61 to 120 will receive a 25% grant.',
      'Awardees are requested to report to the Central Dhanmondi Campus with their original academic transcripts by April 2, 2026, to finalize their batch confirmation.'
    ]
  },
  {
    id: 'notice-hol-2026-05',
    referenceNo: 'OAC/GEN/2026/05',
    title: 'Academic Recess Notice for Eid-ul-Fitr Holidays',
    date: 'March 15, 2026',
    category: 'Holiday Notices',
    isUrgent: false,
    isPinned: false,
    targetAudience: 'All Students, Faculty & Parents',
    fileSize: '190 KB',
    summary: 'All classroom lectures and offline campus offices will remain closed from April 18 through April 24, 2026. Regular sessions resume on Saturday, April 25.',
    content: [
      'This is to inform all students, faculty members, and guardians that the coaching premises will observe academic recess for the holy occasion of Eid-ul-Fitr.',
      'Recess dates: Saturday, April 18, 2026 to Friday, April 24, 2026.',
      'Regular batch schedules, lab hours, and doubt clearing sessions will resume smoothly from Saturday, April 25, 2026.',
      'During the vacation, students may continue to access recorded lectures, revision problem sets, and practice tests on the online student portal.'
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-campus-main',
    title: 'Central Campus Study Atrium',
    category: 'Study Lounges',
    description: 'Bright, expansive collaborative study atrium at our Central Campus designed with natural wood, natural light, and quiet academic focus.',
    imageUrl: ASSET_IMAGES.heroCampus,
    date: 'Academic Term 2026',
    location: 'Main Dhanmondi Campus'
  },
  {
    id: 'gal-lecture-physics',
    title: 'Smart Classroom Physics Lecture',
    category: 'Classrooms',
    description: 'Senior faculty conducting unified physics problem solving using high-definition interactive smartboards in our 30-seat amphitheater.',
    imageUrl: ASSET_IMAGES.classroom,
    date: 'Spring Cohort 2026',
    location: 'Lecture Hall 3, North Campus'
  },
  {
    id: 'gal-science-lab',
    title: 'Advanced Science & Spectroscopy Lab',
    category: 'Science Labs',
    description: 'Students performing precise titration and optical diffraction experiments in our research-grade educational science laboratory.',
    imageUrl: ASSET_IMAGES.lab,
    date: 'Practical Lab Week 2026',
    location: 'Central Laboratory Complex'
  },
  {
    id: 'gal-library-study',
    title: 'Quiet Reference Library & Reading Cubicles',
    category: 'Study Lounges',
    description: 'Curated university-level reference textbooks, individual reading stations, and silent study chambers accessible 7 days a week.',
    imageUrl: ASSET_IMAGES.library,
    date: 'Term 2026',
    location: '2nd Floor, Gulshan Center'
  },
  {
    id: 'gal-awards-ceremony',
    title: 'Annual Academic Merit & Olympiad Felicitation',
    category: 'Awards & Ceremonies',
    description: 'Celebrating our top university admission rankers, board exam GPA 5.0 achievers, and national olympiad medalists.',
    imageUrl: ASSET_IMAGES.awards,
    date: 'Annual Gala 2026',
    location: 'Grand Auditorium'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-adm-1',
    category: 'Admissions & Eligibility',
    question: 'How do I apply for admission to Omega Academic Coaching?',
    answer: 'You can apply directly online through our Registration portal or visit any of our three campus locations in person. After submitting the application, students are invited to take a short diagnostic baseline test to identify their current conceptual strength and assign the optimal batch level.'
  },
  {
    id: 'faq-adm-2',
    category: 'Admissions & Eligibility',
    question: 'Is there an entrance screening test for admission?',
    answer: 'Yes, our diagnostic assessment is non-punitive. Its primary purpose is to group students into batches with compatible learning pacing and identify any fundamental knowledge gaps that our bridge classes will immediately address.'
  },
  {
    id: 'faq-fee-1',
    category: 'Tuition & Payment',
    question: 'What payment options and installment plans are available?',
    answer: 'Tuition can be paid monthly, quarterly, or on a full-term basis. We accept bank transfers, credit/debit cards, and mobile banking. A 10% fee concession is granted for full upfront single-payment term enrollments, and sibling discounts are available.'
  },
  {
    id: 'faq-fee-2',
    category: 'Tuition & Payment',
    question: 'Are merit scholarships available for high-achieving students?',
    answer: 'Yes. Omega awards the "Omega Foundation Merit Scholarship" every year. Students who scored GPA 5.0 in SSC/JSC, or top 5% in our diagnostic assessment receive up to 100% full tuition fee waivers.'
  },
  {
    id: 'faq-cls-1',
    category: 'Classes & Attendance',
    question: 'What is the maximum student capacity per batch?',
    answer: 'We strictly cap batches between 25 to 30 students depending on the program. This guarantees that our mentors can track each student individual question-answering rate and maintain eye contact during every conceptual session.'
  },
  {
    id: 'faq-cls-2',
    category: 'Classes & Attendance',
    question: 'What happens if a student misses a lecture due to illness or school events?',
    answer: 'All master lectures are digitally indexed. Students can view high-definition class recordings, lecture whiteboards, and class notes via their Student Portal. In addition, students can book a 30-minute 1-on-1 backup session with our teaching assistants.'
  },
  {
    id: 'faq-exam-1',
    category: 'Mock Exams & Evaluation',
    question: 'How frequently are exams and diagnostic evaluations conducted?',
    answer: 'Every course includes weekly chapter quizzes, bi-weekly cumulative tests, and monthly full-length mock examinations under strict timed hall conditions with negative marking.'
  },
  {
    id: 'faq-prt-1',
    category: 'Parent Involvement',
    question: 'How are parents kept informed regarding student progress?',
    answer: 'Attendance is recorded biometrically upon entry and departure with automatic SMS notifications sent to guardians. Parents also receive a detailed monthly diagnostic progress report and can attend our bi-monthly Parent-Teacher Mentorship meetings.'
  }
];

export const BRANCHES_DATA: CampusBranch[] = [
  {
    id: 'branch-dhanmondi',
    name: 'Main Campus (Dhanmondi)',
    type: 'Central Headquarters & Research Labs',
    address: 'House 42, Road 9/A, Dhanmondi, Dhaka 1209 [Placeholder: Address]',
    phone: '+880 1711-000001 [Placeholder: Phone]',
    email: 'dhanmondi@omega-coaching.placeholder',
    officeHours: 'Saturday - Thursday: 8:00 AM - 8:30 PM (Friday: 9:00 AM - 6:00 PM)',
    features: [
      'Central Physics & Chemistry Laboratories',
      '200-Seat Lecture Auditorium',
      'Air-conditioned 30-seat smart classrooms',
      'Central Academic Counseling Office'
    ]
  },
  {
    id: 'branch-uttara',
    name: 'North Campus (Uttara)',
    type: 'Senior Secondary & Pre-Engineering Wing',
    address: 'Sector 4, Road 18, Plot 15, Uttara, Dhaka 1230 [Placeholder: Address]',
    phone: '+880 1711-000002 [Placeholder: Phone]',
    email: 'uttara@omega-coaching.placeholder',
    officeHours: 'Saturday - Thursday: 8:30 AM - 8:00 PM',
    features: [
      'Dedicated Olympiad training lounge',
      'Digital interactive smartboards in all rooms',
      'Cafeteria and student quiet study pods',
      'Parent meeting conference room'
    ]
  },
  {
    id: 'branch-gulshan',
    name: 'Academic Center (Gulshan)',
    type: 'International O/A Level & Medical Wing',
    address: 'Avenue 2, Block B, Gulshan-1, Dhaka 1212 [Placeholder: Address]',
    phone: '+880 1711-000003 [Placeholder: Phone]',
    email: 'gulshan@omega-coaching.placeholder',
    officeHours: 'Saturday - Thursday: 9:00 AM - 8:30 PM',
    features: [
      'Cambridge International past paper resource archive',
      'Anatomy & Biology specimen demonstration corner',
      'High-speed Wi-Fi & tablet learning stations',
      'Biometric attendance and 24/7 CCTV surveillance'
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 'test-1',
    studentName: 'Zubair Hossain',
    achievement: 'BUET Mechanical Engineering (Rank 14, Admission 2025)',
    program: 'Pre-Engineering Masterclass',
    quote: 'The weekly mock tests at Omega were tougher than the actual BUET admission test. When I sat for the real exam, every calculus problem felt familiar. Engr. Tareq sir’s mechanics problem-solving sessions gave me an immense competitive advantage.',
    year: 'Batch of 2025'
  },
  {
    id: 'test-2',
    studentName: 'Sumaiya Akter',
    achievement: 'Dhaka Medical College (Merit Rank 28, 2025)',
    program: 'Pre-Medical Entrance Cohort',
    quote: 'Dr. Nusrat madam’s memory frameworks for human physiology eliminated the fear of negative marking. Omega’s small batch size meant I could ask questions freely after every single class.',
    year: 'Batch of 2025'
  },
  {
    id: 'test-3',
    studentName: 'Dr. Mahbubul Alam (Parent)',
    achievement: 'Father of Abrar Alam (GPA 5.0, Golden in HSC 2025)',
    program: 'Senior Secondary STEM Masterclass',
    quote: 'What sets Omega apart is the transparency. I received attendance alerts the moment my son tapped his card, and the monthly progress breakdown showed exactly where he needed improvement before board exams.',
    year: 'Guardian Review'
  }
];
