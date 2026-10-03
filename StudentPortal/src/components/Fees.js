import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { mockFees } from '../data/mockData';
import CustomButton from './CustomButton';

const Fees = () => {
  const total = mockFees.tuition + mockFees.otherCharges + mockFees.scholarship;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Status:</Text>
          <Text style={[styles.statusValue, { color: mockFees.status === 'Paid' ? 'green' : 'red' }]}>{mockFees.status}</Text>
        </View>
        <Text style={styles.dueDate}>Due Date: {mockFees.dueDate}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Fee Breakdown</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Tuition Fee</Text>
          <Text style={styles.value}>PKR {mockFees.tuition}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Other Charges</Text>
          <Text style={styles.value}>PKR {mockFees.otherCharges}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Scholarship/Discount</Text>
          <Text style={[styles.value, {color: 'green'}]}>PKR {mockFees.scholarship}</Text>
        </View>
        <View style={[styles.row, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total Payable</Text>
          <Text style={styles.totalValue}>PKR {total}</Text>
        </View>
      </View>

      {mockFees.status !== 'Paid' && (
        <CustomButton title="Pay Now / Print Voucher" onPress={() => alert('Voucher printed!')} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20, elevation: 2 },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  statusLabel: { fontSize: 18, fontWeight: 'bold', marginRight: 10 },
  statusValue: { fontSize: 18, fontWeight: 'bold' },
  dueDate: { color: '#666', fontStyle: 'italic' },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', color: '#0056D2', borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10, marginBottom: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  label: { color: '#555', fontSize: 16 },
  value: { color: '#333', fontSize: 16, fontWeight: 'bold' },
  totalRow: { borderTopWidth: 1, borderTopColor: '#ddd', paddingTop: 10, marginTop: 10 },
  totalLabel: { fontSize: 18, fontWeight: 'bold' },
  totalValue: { fontSize: 18, fontWeight: 'bold', color: '#0056D2' }
});

export default Fees;
