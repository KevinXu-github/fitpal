import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Alert,
  ScrollView,
  SafeAreaView 
} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

const GOALS = [
  { id: 'lose_weight', label: 'Lose Weight', icon: '⚖️' },
  { id: 'gain_muscle', label: 'Gain Muscle', icon: '💪' },
  { id: 'get_fit', label: 'Get Fit', icon: '🏃' },
  { id: 'endurance', label: 'Endurance', icon: '🚴' },
];

const ACTIVITY_LEVELS = [
  { id: 'sedentary', label: 'Sedentary', desc: 'Desk job, little exercise' },
  { id: 'lightly_active', label: 'Light Activity', desc: '1-3 days per week' },
  { id: 'moderately_active', label: 'Moderate', desc: '3-5 days per week' },
  { id: 'very_active', label: 'Very Active', desc: '6-7 days per week' },
];

export default function ProfileScreen() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    age: '',
    weight: '',
    height: '',
    goal: '',
    activityLevel: '',
    gender: '',
  });

  const updateProfile = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      saveProfile();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const saveProfile = () => {
    // Validate required fields
    if (!profile.age || !profile.weight || !profile.goal) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    
    // For now, just show success and go back
    Alert.alert(
      'Profile Saved! 🎉', 
      'Welcome to FitPal! Your AI coach is ready to help.',
      [{ text: 'Start Coaching', onPress: () => router.back() }]
    );
  };

  const renderStep1 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Tell us about yourself</Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Age *</Text>
        <TextInput
          style={styles.input}
          value={profile.age}
          onChangeText={(value) => updateProfile('age', value)}
          placeholder="25"
          placeholderTextColor="#666"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Weight (lbs) *</Text>
        <TextInput
          style={styles.input}
          value={profile.weight}
          onChangeText={(value) => updateProfile('weight', value)}
          placeholder="150"
          placeholderTextColor="#666"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Height (inches)</Text>
        <TextInput
          style={styles.input}
          value={profile.height}
          onChangeText={(value) => updateProfile('height', value)}
          placeholder="68"
          placeholderTextColor="#666"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioGroup}>
          {['male', 'female'].map((gender) => (
            <TouchableOpacity
              key={gender}
              style={[
                styles.radioButton,
                profile.gender === gender && styles.radioButtonActive
              ]}
              onPress={() => updateProfile('gender', gender)}
            >
              <Text style={[
                styles.radioText,
                profile.gender === gender && styles.radioTextActive
              ]}>
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>What's your main goal?</Text>
      
      <View style={styles.optionGrid}>
        {GOALS.map((goal) => (
          <TouchableOpacity
            key={goal.id}
            style={[
              styles.optionCard,
              profile.goal === goal.id && styles.optionCardActive
            ]}
            onPress={() => updateProfile('goal', goal.id)}
          >
            <Text style={styles.optionIcon}>{goal.icon}</Text>
            <Text style={[
              styles.optionText,
              profile.goal === goal.id && styles.optionTextActive
            ]}>
              {goal.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Activity Level</Text>
      
      <View style={styles.activityOptions}>
        {ACTIVITY_LEVELS.map((level) => (
          <TouchableOpacity
            key={level.id}
            style={[
              styles.activityCard,
              profile.activityLevel === level.id && styles.activityCardActive
            ]}
            onPress={() => updateProfile('activityLevel', level.id)}
          >
            <Text style={[
              styles.activityLabel,
              profile.activityLevel === level.id && styles.activityLabelActive
            ]}>
              {level.label}
            </Text>
            <Text style={styles.activityDesc}>{level.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Progress indicator */}
        <View style={styles.progressBar}>
          {[1, 2, 3].map((i) => (
            <View
              key={i}
              style={[
                styles.progressDot,
                i <= step && styles.progressDotActive
              ]}
            />
          ))}
        </View>

        {/* Step content */}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </ScrollView>

      {/* Navigation buttons */}
      <View style={styles.navigation}>
        {step > 1 && (
          <TouchableOpacity style={styles.backButton} onPress={prevStep}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
          <Text style={styles.nextButtonText}>
            {step === 3 ? 'Complete Setup' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
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
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    gap: 10,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2d2d44',
  },
  progressDotActive: {
    backgroundColor: '#007AFF',
  },
  stepContent: {
    flex: 1,
    minHeight: 400,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#2d2d44',
    color: '#fff',
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3a3a52',
  },
  radioGroup: {
    flexDirection: 'row',
    gap: 15,
  },
  radioButton: {
    flex: 1,
    padding: 15,
    backgroundColor: '#2d2d44',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3a3a52',
  },
  radioButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  radioText: {
    color: '#8e8e93',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  radioTextActive: {
    color: '#fff',
  },
  optionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  optionCard: {
    width: '47%',
    padding: 20,
    backgroundColor: '#2d2d44',
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3a3a52',
  },
  optionCardActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  optionText: {
    color: '#8e8e93',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  optionTextActive: {
    color: '#fff',
  },
  activityOptions: {
    gap: 15,
  },
  activityCard: {
    padding: 20,
    backgroundColor: '#2d2d44',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#3a3a52',
  },
  activityCardActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  activityLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
  },
  activityLabelActive: {
    color: '#fff',
  },
  activityDesc: {
    fontSize: 14,
    color: '#8e8e93',
  },
  navigation: {
    flexDirection: 'row',
    padding: 20,
    gap: 15,
  },
  backButton: {
    flex: 1,
    padding: 16,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    flex: 2,
    backgroundColor: '#007AFF',
    padding: 18,
    borderRadius: 25,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});