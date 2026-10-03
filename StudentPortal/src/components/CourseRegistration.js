import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import CustomButton from './CustomButton';
import { mockCourses } from '../data/mockData';

const CourseRegistration = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [error, setError] = useState('');

  const filteredCourses = mockCourses.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleRegister = (course) => {
    if (registeredCourses.find(c => c.id === course.id)) {
      setError(`You are already registered for ${course.name}.`);
      return;
    }
    if (registeredCourses.length >= 3) {
      setError('You can only register for up to 3 courses.');
      return;
    }
    setRegisteredCourses([...registeredCourses, course]);
    setError('');
  };

  const handleDrop = (courseId) => {
    setRegisteredCourses(registeredCourses.filter(c => c.id !== courseId));
    setError('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Course Registration</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Search Courses</Text>
        <TextInput 
          style={styles.input}
          placeholder="e.g. Artificial Intelligence"
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            setError('');
          }}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Text style={styles.sectionTitle}>Available Courses</Text>
      {filteredCourses.length === 0 ? (
        <Text style={styles.emptyText}>No courses found.</Text>
      ) : (
        <View style={styles.listContainer}>
          {filteredCourses.map(item => (
             <View key={item.id} style={styles.card}>
               <View style={styles.cardInfo}>
                 <Text style={styles.courseName}>{item.name}</Text>
                 <Text style={styles.credits}>{item.credits} Credits</Text>
               </View>
               <CustomButton 
                 title="Register" 
                 onPress={() => handleRegister(item)} 
                 style={{ paddingVertical: 8, paddingHorizontal: 12 }} 
               />
             </View>
          ))}
        </View>
      )}

      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>My Registered Courses</Text>
      {registeredCourses.length === 0 ? (
        <Text style={styles.emptyText}>You haven't registered for any courses yet.</Text>
      ) : (
        <View style={styles.listContainer}>
          {registeredCourses.map(item => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardInfo}>
                <Text style={styles.courseName}>{item.name}</Text>
              </View>
              <CustomButton 
                title="Drop" 
                type="secondary"
                onPress={() => handleDrop(item.id)} 
                style={{ paddingVertical: 8, paddingHorizontal: 12 }} 
              />
            </View>
          ))}
        </View>
      )}
      <View style={{height: 50}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  inputContainer: { marginBottom: 15 },
  label: { fontSize: 16, marginBottom: 5, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, backgroundColor: '#fff' },
  errorText: { color: 'red', marginBottom: 10, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#444' },
  emptyText: { fontStyle: 'italic', color: '#888', marginBottom: 10 },
  listContainer: { marginBottom: 10 },
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  cardInfo: { flex: 1 },
  courseName: { fontSize: 16, fontWeight: 'bold' },
  credits: { fontSize: 14, color: '#666' }
});

export default CourseRegistration;
