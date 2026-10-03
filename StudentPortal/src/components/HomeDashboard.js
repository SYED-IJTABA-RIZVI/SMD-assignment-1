import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { userProfile, mockAnnouncements } from '../data/mockData';

const HomeDashboard = ({ navigate }) => {
  const menuItems = [
    { title: 'Profile', view: 'profile', icon: '👤' },
    { title: 'Course Registration', view: 'registration', icon: '📝' },
    { title: 'Attendance', view: 'attendance', icon: '✅' },
    { title: 'Transcript', view: 'transcript', icon: '📄' },
    { title: 'Fee & Financials', view: 'fees', icon: '💰' },
    { title: 'Class Schedule', view: 'schedule', icon: '📅' },
    { title: 'Dashboard Analytics', view: 'analytics', icon: '📊' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.details}>{userProfile.id} | {userProfile.degree}</Text>
        <Text style={styles.details}>Semester: {userProfile.semester} | CGPA: {userProfile.cgpa}</Text>
      </View>

      <Text style={styles.sectionTitle}>Announcements</Text>
      <View style={styles.announcementsContainer}>
        {mockAnnouncements.map(ann => (
          <View key={ann.id} style={styles.annCard}>
            <Text style={styles.annType}>[{ann.type}] {ann.date}</Text>
            <Text style={styles.annTitle}>{ann.title}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Quick Links</Text>
      <View style={styles.grid}>
        {menuItems.map(item => (
          <TouchableOpacity 
            key={item.view} 
            style={styles.gridItem}
            onPress={() => navigate(item.view)}
          >
            <Text style={styles.gridIcon}>{item.icon}</Text>
            <Text style={styles.gridText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{height: 50}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  headerCard: { backgroundColor: '#0056D2', padding: 20, borderRadius: 12, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  details: { fontSize: 14, color: '#e0e0e0', marginTop: 5 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  announcementsContainer: { marginBottom: 20 },
  annCard: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, borderLeftWidth: 4, borderLeftColor: '#f39c12', elevation: 2 },
  annType: { fontSize: 12, color: '#666', fontWeight: 'bold' },
  annTitle: { fontSize: 14, color: '#333', marginTop: 4 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { backgroundColor: '#fff', width: '48%', padding: 20, borderRadius: 12, alignItems: 'center', marginBottom: 15, elevation: 2 },
  gridIcon: { fontSize: 32, marginBottom: 10 },
  gridText: { fontSize: 14, fontWeight: 'bold', color: '#444', textAlign: 'center' }
});

export default HomeDashboard;
