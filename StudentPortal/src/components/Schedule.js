import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { mockSchedule } from '../data/mockData';

const Schedule = () => {
  return (
    <ScrollView style={styles.container}>
      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => {
        const dayClasses = mockSchedule.filter(s => s.day === day);
        if (dayClasses.length === 0) return null;
        return (
          <View key={day} style={styles.dayCard}>
            <Text style={styles.dayTitle}>{day}</Text>
            {dayClasses.map(cls => (
              <View key={cls.id} style={styles.classRow}>
                <View style={styles.timeBox}>
                  <Text style={styles.timeText}>{cls.time}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.courseText}>{cls.course}</Text>
                  <Text style={styles.roomText}>{cls.room}</Text>
                </View>
              </View>
            ))}
          </View>
        );
      })}
      <View style={{height: 50}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  dayCard: { backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 15, elevation: 2 },
  dayTitle: { fontSize: 18, fontWeight: 'bold', color: '#0056D2', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 5 },
  classRow: { flexDirection: 'row', marginBottom: 10, alignItems: 'center' },
  timeBox: { flex: 1, backgroundColor: '#f0f4f8', padding: 8, borderRadius: 5, alignItems: 'center', marginRight: 10 },
  timeText: { fontWeight: 'bold', color: '#333', fontSize: 12 },
  infoBox: { flex: 2 },
  courseText: { fontWeight: 'bold', fontSize: 15, color: '#333' },
  roomText: { color: '#666', fontSize: 13 }
});

export default Schedule;
