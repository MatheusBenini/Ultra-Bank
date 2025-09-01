import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  return (
    <View style={styles.navbar}>

      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="home" size={22} color="blue" />
        <Text style={[styles.navText, styles.activeText]}>Home</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="card" size={22} color="gray" />
        <Text style={styles.navText}>Cards</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.navItem, styles.centerItem]}>
        <View style={styles.centerButton}>
          <Ionicons name="swap-horizontal" size={22} color="white" />
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="bar-chart" size={22} color="gray" />
        <Text style={styles.navText}>Activity</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="settings" size={22} color="gray" />
        <Text style={styles.navText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  activeText: {
    color: 'blue',
    fontWeight: '600',
  },
  centerItem: {
    marginTop: -25,
  },
  centerButton: {
    backgroundColor: '#111',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navbar;
