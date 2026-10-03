# FLEX Reimagined - Student Portal

This is a comprehensive mobile-first application developed as a solution for the Software for Mobile Devices Assignment 1. It reimagines the university student portal (FAST NUCES FLEX) by focusing on usability, dynamic data-driven UI, and an interactive experience, strictly adhering to the assignment constraints.

## Features (Mapped to FLEX)

- **Authentication System**: Secure login screen interface representing the portal's entry point.
- **Home Dashboard**: Central hub displaying announcements and providing quick links to all academic modules.
- **Student Profile**: Personal and academic information overview.
- **Course Registration**: An interactive form allowing students to search for available courses, register, and drop them, with constraints and validations.
- **Attendance**: Detailed breakdown of conducted vs attended classes.
- **Transcript & Results**: View semester-wise grades and SGPA.
- **Fee & Financial Information**: Track tuition, scholarships, and fee statuses.
- **Class Schedule**: Weekly timetable view.
- **Analytics Dashboard**: Features interactive Bar and Pie charts to visualize attendance using `react-native-chart-kit`.
- **Custom Navigation**: Uses state-based view switching instead of navigation libraries, strictly adhering to assignment requirements ("Do not use any side or bottom bars").
- **Dynamic State Handling**: Empty states, dynamic rendering from objects/arrays, and interactive components.

## Tech Stack

- React Native (Expo)
- react-native-chart-kit
- react-native-svg

## Setup Instructions

1. Ensure you have Node.js and npm installed.
2. Open a terminal and navigate to the project directory:
   ```bash
   cd "StudentPortal"
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the Expo development server:
   ```bash
   npx expo start
   ```
5. Use the Expo Go app on your mobile device (iOS/Android) or an emulator to run the application.

*Login Credentials for Testing: `23i0112` / `password123`*
