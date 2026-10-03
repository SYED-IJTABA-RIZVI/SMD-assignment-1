import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { userProfile } from '../data/mockData';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Personal Information</Text>
        <View style={styles.row}><Text style={styles.label}>Name:</Text><Text style={styles.value}>{userProfile.name}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Reg No:</Text><Text style={styles.value}>{userProfile.id}</Text></View>
        <View style={styles.row}><Text style={styles.label}>DOB:</Text><Text style={styles.value}>{userProfile.dob}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Phone:</Text><Text style={styles.value}>{userProfile.phone}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Email:</Text><Text style={styles.value}>{userProfile.email}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Address:</Text><Text style={styles.value}>{userProfile.address}</Text></View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Academic Information</Text>
        <View style={styles.row}><Text style={styles.label}>Degree:</Text><Text style={styles.value}>{userProfile.degree}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Campus:</Text><Text style={styles.value}>{userProfile.campus}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Batch:</Text><Text style={styles.value}>{userProfile.batch}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Semester:</Text><Text style={styles.value}>{userProfile.semester}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Status:</Text><Text style={styles.value}>Good Standing</Text></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20, elevation: 2 },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', color: '#0056D2', borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10, marginBottom: 15 },
  row: { flexDirection: 'row', marginBottom: 10 },
  label: { flex: 1, fontWeight: 'bold', color: '#555' },
  value: { flex: 2, color: '#333' }
});

export default Profile;
