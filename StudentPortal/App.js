import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Platform, TouchableOpacity } from 'react-native';

// Components
import Login from './src/components/Login';
import HomeDashboard from './src/components/HomeDashboard';
import Profile from './src/components/Profile';
import CourseRegistration from './src/components/CourseRegistration';
import AttendanceDetails from './src/components/AttendanceDetails';
import Transcript from './src/components/Transcript';
import Fees from './src/components/Fees';
import Schedule from './src/components/Schedule';
import DashboardAnalytics from './src/components/Dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState('login'); // Starts at login

  const renderView = () => {
    switch (currentView) {
      case 'login': return <Login onLogin={() => setCurrentView('home')} />;
      case 'home': return <HomeDashboard navigate={setCurrentView} />;
      case 'profile': return <Profile />;
      case 'registration': return <CourseRegistration />;
      case 'attendance': return <AttendanceDetails />;
      case 'transcript': return <Transcript />;
      case 'fees': return <Fees />;
      case 'schedule': return <Schedule />;
      case 'analytics': return <DashboardAnalytics />;
      default: return <HomeDashboard navigate={setCurrentView} />;
    }
  };

  const getTitle = () => {
    switch (currentView) {
      case 'home': return 'Dashboard';
      case 'profile': return 'Student Profile';
      case 'registration': return 'Course Registration';
      case 'attendance': return 'Attendance';
      case 'transcript': return 'Transcript & Results';
      case 'fees': return 'Fee & Financials';
      case 'schedule': return 'Class Schedule';
      case 'analytics': return 'Analytics Dashboard';
      default: return 'FLEX';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0043a6" />
      
      {currentView !== 'login' && (
        <View style={styles.header}>
          {currentView !== 'home' ? (
            <TouchableOpacity onPress={() => setCurrentView('home')} style={styles.backBtn}>
              <Text style={styles.backText}>{'< Back'}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.backBtnPlaceholder} />
          )}
          <Text style={styles.headerTitle}>{getTitle()}</Text>
          <View style={styles.backBtnPlaceholder} />
        </View>
      )}

      <View style={styles.content}>
        {renderView()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#0056D2',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  backBtn: {
    padding: 5,
  },
  backText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backBtnPlaceholder: {
    width: 60,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  }
});
