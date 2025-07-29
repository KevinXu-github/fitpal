import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
  // Mock user data - in a real app, this would come from state management
  const userProfile = {
    name: 'Alex',
    goal: 'Gain Muscle',
    streak: 7,
    weeklyGoal: 4,
    completedWorkouts: 3,
  };

  const quickActions = [
    { id: 'upload', title: 'Upload Research', icon: '📄', color: '#34C759' },
    { id: 'chat', title: 'AI Coach', icon: '🤖', color: '#007AFF' },
    { id: 'workout', title: 'Start Workout', icon: '💪', color: '#FF9500' },
    { id: 'progress', title: 'View Progress', icon: '📊', color: '#AF52DE' },
  ];

  const recentActivity = [
    { id: 1, type: 'research', title: 'Uploaded: "High-Intensity Training Benefits"', time: '2 hours ago' },
    { id: 2, type: 'workout', title: 'Completed: Upper Body Strength', time: '1 day ago' },
    { id: 3, type: 'chat', title: 'Asked AI about protein intake', time: '2 days ago' },
  ];

  const handleQuickAction = (actionId: string) => {
    // Navigate to different screens based on action
    switch (actionId) {
      case 'upload':
        // router.push('/upload');
        console.log('Navigate to upload screen');
        break;
      case 'chat':
        // router.push('/chat');
        console.log('Navigate to AI chat screen');
        break;
      case 'workout':
        // router.push('/workout');
        console.log('Navigate to workout screen');
        break;
      case 'progress':
        // router.push('/progress');
        console.log('Navigate to progress screen');
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>{userProfile.name}! 👋</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{userProfile.streak}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
            <Text style={styles.statEmoji}>🔥</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{userProfile.completedWorkouts}/{userProfile.weeklyGoal}</Text>
            <Text style={styles.statLabel}>Weekly Goal</Text>
            <Text style={styles.statEmoji}>🎯</Text>
          </View>
        </View>

        {/* Current Goal */}
        <View style={styles.goalCard}>
          <Text style={styles.goalLabel}>Current Goal</Text>
          <Text style={styles.goalTitle}>{userProfile.goal}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
          <Text style={styles.progressText}>75% Complete</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                style={[styles.actionCard, { backgroundColor: action.color }]}
                onPress={() => handleQuickAction(action.id)}
              >
                <Text style={styles.actionIcon}>{action.icon}</Text>
                <Text style={styles.actionTitle}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityContainer}>
            {recentActivity.map((item) => (
              <View key={item.id} style={styles.activityItem}>
                <View style={styles.activityDot} />
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>{item.title}</Text>
                  <Text style={styles.activityTime}>{item.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* AI Insight Card */}
        <View style={styles.insightCard}>
          <Text style={styles.insightIcon}>💡</Text>
          <Text style={styles.insightTitle}>AI Insight</Text>
          <Text style={styles.insightText}>
            Based on your recent uploads, consider increasing your protein intake to 1.8g per kg of body weight for optimal muscle growth.
          </Text>
          <TouchableOpacity style={styles.insightButton}>
            <Text style={styles.insightButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeSection: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: '#8e8e93',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  profileButton: {
    width: 44,
    height: 44,
    backgroundColor: '#2d2d44',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    fontSize: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 25,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#2d2d44',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    position: 'relative',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#8e8e93',
    textAlign: 'center',
  },
  statEmoji: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 20,
  },
  goalCard: {
    backgroundColor: '#2d2d44',
    padding: 20,
    borderRadius: 16,
    marginBottom: 25,
  },
  goalLabel: {
    fontSize: 14,
    color: '#8e8e93',
    marginBottom: 5,
  },
  goalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#3a3a52',
    borderRadius: 4,
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#8e8e93',
    textAlign: 'right',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  actionCard: {
    width: (width - 55) / 2,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    minHeight: 100,
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  activityContainer: {
    gap: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,
  },
  activityDot: {
    width: 8,
    height: 8,
    backgroundColor: '#007AFF',
    borderRadius: 4,
    marginTop: 8,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  activityTime: {
    fontSize: 14,
    color: '#8e8e93',
  },
  insightCard: {
    backgroundColor: '#2d2d44',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  insightIcon: {
    fontSize: 24,
    marginBottom: 10,
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  insightText: {
    fontSize: 14,
    color: '#8e8e93',
    lineHeight: 20,
    marginBottom: 15,
  },
  insightButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  insightButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});