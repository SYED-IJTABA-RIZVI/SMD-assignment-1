import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { mockAttendance } from '../data/mockData';

const AttendanceDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.infoText}>A minimum of 75% attendance is required to sit in the final exams.</Text>
      {mockAttendance.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.courseName}>{item.course}</Text>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Conducted</Text>
              <Text style={styles.statValue}>{item.conducted}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Attended</Text>
              <Text style={styles.statValue}>{item.attended}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Absent</Text>
              <Text style={[styles.statValue, {color: 'red'}]}>{item.absent}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Percentage</Text>
              <Text style={[styles.statValue, {color: item.percentage < 75 ? 'red' : 'green'}]}>{item.percentage}%</Text>
            </View>
          </View>
        </View>
      ))}
      <View style={{height: 50}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  infoText: { backgroundColor: '#e8f4fd', color: '#0056D2', padding: 10, borderRadius: 8, marginBottom: 15, fontWeight: 'bold' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, elevation: 2 },
  courseName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statBox: { alignItems: 'center' },
  statLabel: { fontSize: 12, color: '#777', marginBottom: 4 },
  statValue: { fontSize: 16, fontWeight: 'bold', color: '#333' }
});

export default AttendanceDetails;
