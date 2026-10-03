import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { mockAttendance, userProfile } from '../data/mockData';

const screenWidth = Dimensions.get('window').width - 40;

const Dashboard = () => {
  // Process data for charts
  const attendancePercentages = mockAttendance.map(item => (item.attended / item.conducted) * 100);
  
  const barChartData = {
    labels: mockAttendance.map(item => item.course.substring(0, 4)),
    datasets: [{ data: attendancePercentages }]
  };

  const pieChartData = mockAttendance.map((item, index) => ({
    name: item.course.substring(0, 10),
    attendance: item.attended,
    color: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'][index % 5],
    legendFontColor: '#7F7F7F',
    legendFontSize: 12
  }));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome, {userProfile.name}</Text>
        <Text style={styles.subText}>CGPA: {userProfile.cgpa} | Semester: {userProfile.semester}</Text>
      </View>

      <Text style={styles.chartTitle}>Attendance Percentage</Text>
      <View style={styles.chartCard}>
        <BarChart
          data={barChartData}
          width={screenWidth}
          height={220}
          yAxisLabel=""
          yAxisSuffix="%"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 86, 210, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>

      <Text style={styles.chartTitle}>Classes Attended (Pie)</Text>
      <View style={styles.chartCard}>
        <PieChart
          data={pieChartData}
          width={screenWidth}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor={"attendance"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 0]}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { marginBottom: 20, padding: 15, backgroundColor: '#f0f4f8', borderRadius: 10 },
  greeting: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  subText: { fontSize: 16, color: '#666', marginTop: 5 },
  chartTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: '#444' },
  chartCard: { backgroundColor: '#fff', borderRadius: 10, padding: 10, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  chart: { borderRadius: 10 }
});

export default Dashboard;
