// HomeScreen.js
import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

const emails = [
  { id: 1, subject: 'Meeting Tomorrow', from: 'john@example.com', thumbnail: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' },
  { id: 2, subject: 'React Native Project', from: 'jane@example.com', thumbnail: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' },
  // Add more emails as needed
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: '#000' }]}>Inbox</Text>
        <Text style={[styles.headerText, { color: '#000' }]}>Total Emails: {emails.length}</Text>
      </View>
      <FlatList
        data={emails}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.emailItem}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.emailDetails}>
              <Text style={[styles.emailSubject, { color: '#000' }]}>{item.subject}</Text>
              <Text style={[styles.emailFrom, { color: '#000' }]}>From: {item.from}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  emailDetails: {
    flex: 1,
  },
  emailSubject: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailFrom: {
    color: '#888',
  },
});

export default HomeScreen;
