export type PageId =
  | 'home'
  | 'courses'
  | 'course-details'
  | 'about'
  | 'teachers'
  | 'gallery'
  | 'notices'
  | 'contact'
  | 'faq'
  | 'login'
  | 'register';

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  level: 'High School (Grades 9-10)' | 'Senior Secondary (Grades 11-12)' | 'Engineering Entrance' | 'Medical Admission' | 'O/A Levels & SAT';
  category: 'foundation' | 'secondary' | 'engineering' | 'medical' | 'international';
  duration: string;
  classesPerWeek: number;
  classDuration: string;
  batchSize: number;
  tuitionFee: string;
  leadInstructor: {
    name: string;
    title: string;
    institution: string;
  };
  overview: string;
  curriculum: {
    module: string;
    topics: string[];
    durationWeeks: number;
  }[];
  features: string[];
  schedule: string;
  badge?: string;
}

export interface Teacher {
  id: string;
  name: string;
  department: 'Mathematics' | 'Physics' | 'Chemistry' | 'Biology' | 'English & Humanities';
  title: string;
  education: string;
  institution: string;
  experienceYears: number;
  specialty: string[];
  bio: string;
  quote: string;
  achievements: string;
  emailPlaceholder: string;
}

export interface Notice {
  id: string;
  referenceNo: string;
  title: string;
  date: string;
  category: 'Exam Schedules' | 'Admissions' | 'Holiday Notices' | 'Results & Merit';
  isUrgent?: boolean;
  isPinned?: boolean;
  summary: string;
  content: string[];
  fileSize: string;
  targetAudience: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classrooms' | 'Science Labs' | 'Study Lounges' | 'Awards & Ceremonies';
  description: string;
  imageUrl: string;
  date: string;
  location: string;
}

export interface FAQItem {
  id: string;
  category: 'Admissions & Eligibility' | 'Tuition & Payment' | 'Classes & Attendance' | 'Mock Exams & Evaluation' | 'Parent Involvement';
  question: string;
  answer: string;
}

export interface CampusBranch {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  officeHours: string;
  features: string[];
}

export interface RegistrationFormData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  currentSchool: string;
  currentGrade: string;
  boardOrCurriculum: string;
  recentGpaOrMarks: string;
  targetCourseId: string;
  preferredBranch: string;
  preferredShift: string;
  guardianName: string;
  guardianRelation: string;
  guardianPhone: string;
  guardianEmail: string;
  address: string;
  emergencyContact: string;
  agreedToTerms: boolean;
}
