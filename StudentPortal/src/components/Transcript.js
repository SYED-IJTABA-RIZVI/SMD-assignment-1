import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { mockTranscript } from '../data/mockData';

const Transcript = () => {
  return (
    <ScrollView style={styles.container}>
      {mockTranscript.map((sem, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.semHeader}>
            <Text style={styles.semTitle}>{sem.semester}</Text>
            <Text style={styles.sgpa}>SGPA: {sem.sgpa}</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={[styles.th, {flex: 3}]}>Course</Text>
            <Text style={[styles.th, {flex: 1}]}>Cr</Text>
            <Text style={[styles.th, {flex: 1}]}>Grade</Text>
            <Text style={[styles.th, {flex: 1}]}>Pts</Text>
          </View>
          {sem.courses.map((c, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={[styles.td, {flex: 3, fontWeight: 'bold'}]}>{c.name}</Text>
              <Text style={[styles.td, {flex: 1}]}>{c.credits}</Text>
              <Text style={[styles.td, {flex: 1, color: '#0056D2', fontWeight: 'bold'}]}>{c.grade}</Text>
              <Text style={[styles.td, {flex: 1}]}>{c.points}</Text>
            </View>
          ))}
        </View>
      ))}
      <View style={{height: 50}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  card: { backgroundColor: '#fff', borderRadius: 10, marginBottom: 20, elevation: 2, overflow: 'hidden' },
  semHeader: { backgroundColor: '#0056D2', padding: 15, flexDirection: 'row', justifyContent: 'space-between' },
  semTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  sgpa: { color: '#ffd700', fontSize: 16, fontWeight: 'bold' },
  tableHeader: { flexDirection: 'row', backgroundColor: '#f0f0f0', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  th: { fontWeight: 'bold', color: '#555' },
  tableRow: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  td: { color: '#333' }
});

export default Transcript;
