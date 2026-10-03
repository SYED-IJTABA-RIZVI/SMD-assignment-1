export const userProfile = {
  name: 'Syed Muhammad Ijtaba Rizvi',
  id: '23i-0112',
  degree: 'BS Computer Science',
  semester: 6,
  cgpa: 3.42,
  campus: 'Islamabad Campus',
  batch: '2023',
  dob: '15-Aug-2001',
  email: 'i230112@nu.edu.pk',
  phone: '+92 300 1234567',
  address: '123 Main St, Karachi'
};

export const mockAttendance = [
  { id: '1', course: 'Software Engineering', conducted: 20, attended: 18, absent: 2, percentage: 90 },
  { id: '2', course: 'Database Systems', conducted: 22, attended: 19, absent: 3, percentage: 86.4 },
  { id: '3', course: 'Computer Networks', conducted: 18, attended: 15, absent: 3, percentage: 83.3 },
  { id: '4', course: 'Operating Systems', conducted: 20, attended: 16, absent: 4, percentage: 80 },
  { id: '5', course: 'Mobile App Dev', conducted: 15, attended: 15, absent: 0, percentage: 100 },
];

export const mockCourses = [
  { id: 'c1', code: 'CS3001', name: 'Artificial Intelligence', credits: 3, prereq: 'CS2001' },
  { id: 'c2', code: 'CS3002', name: 'Machine Learning', credits: 3, prereq: 'CS3001' },
  { id: 'c3', code: 'CS3003', name: 'Information Security', credits: 3, prereq: 'CS2002' },
  { id: 'c4', code: 'CS3004', name: 'Human Computer Interaction', credits: 3, prereq: 'None' },
  { id: 'c5', code: 'CS3005', name: 'Data Science', credits: 3, prereq: 'CS2001' },
];

export const mockTranscript = [
  { semester: 'Fall 2022', courses: [
    { name: 'Data Structures', credits: 3, grade: 'A', points: 4.0 },
    { name: 'Database Systems', credits: 3, grade: 'B+', points: 3.5 },
    { name: 'Calculus', credits: 3, grade: 'A-', points: 3.67 },
  ], sgpa: 3.72 },
  { semester: 'Spring 2023', courses: [
    { name: 'Operating Systems', credits: 3, grade: 'B', points: 3.0 },
    { name: 'Software Engineering', credits: 3, grade: 'A', points: 4.0 },
  ], sgpa: 3.5 }
];

export const mockFees = {
  tuition: 150000,
  otherCharges: 5000,
  scholarship: -20000,
  status: 'Unpaid',
  dueDate: '10-Oct-2026'
};

export const mockSchedule = [
  { id: '1', day: 'Monday', time: '09:00 - 10:15', course: 'Database Systems', room: 'Lab 3' },
  { id: '2', day: 'Monday', time: '11:00 - 12:15', course: 'Operating Systems', room: 'Room 204' },
  { id: '3', day: 'Wednesday', time: '09:00 - 10:15', course: 'Database Systems', room: 'Lab 3' },
];

export const mockAnnouncements = [
  { id: '1', type: 'Important', title: 'Course registration closes tomorrow', date: '19-Sep' },
  { id: '2', type: 'Academic', title: 'Midterm examination schedule updated', date: '18-Sep' },
];
