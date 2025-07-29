import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>🤖 FitPal</Text>
          <Text style={styles.subtitle}>Your AI Fitness Research Assistant</Text>
        </View>
        
        <View style={styles.features}>
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>📚</Text>
            <Text style={styles.featureTitle}>Upload Research</Text>
            <Text style={styles.featureText}>Add papers, articles, and studies</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🧠</Text>
            <Text style={styles.featureTitle}>AI Coaching</Text>
            <Text style={styles.featureText}>Get science-backed advice</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>📊</Text>
            <Text style={styles.featureTitle}>Track Progress</Text>
            <Text style={styles.featureText}>Monitor your journey</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <Link href="/profile" asChild>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
          
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#8e8e93',
    textAlign: 'center',
    lineHeight: 24,
  },
  features: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  featureCard: {
    backgroundColor: '#2d2d44',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
    color: '#8e8e93',
    textAlign: 'center',
  },
  actions: {
    gap: 15,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});