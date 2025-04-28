import ResourceCard from '@/components/ui/ResourceCard';
import { View, Text, ScrollView } from 'react-native';


export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f0f0f0' }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16, textAlign: 'center', color: '#333' }}>
        React Öğreniyorum 👨‍💻🚀
      </Text>

      {/* Başlangıç Mesajı */}
      <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 12, marginBottom: 24, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 8, color: '#555' }}>
          👋 Hoşgeldin!  
        </Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          Bu uygulamada React'i nasıl öğrenebileceğini adım adım göreceksin.  
          Başlamak için aşağıdaki kaynaklardan birini seçebilirsin! 🚀
        </Text>
      </View>

      {/* Kaynak Kartları */}
      <ResourceCard
        title="React Başlangıç Dokümantasyonu"
        description="React'i kurmak, öğrenmek ve ilk projenizi oluşturmak için resmi dökümantasyon."
        image={require('../assets/images/partial-react-logo.png')}
        link="https://react.dev/learn"
      />

      <ResourceCard
        title="YouTube Eğitim Videosu"
        description="React öğrenmek isteyenler için hazırlanan kapsamlı YouTube eğitim serisi."
        image={require('../assets/images/youtube.png')}
        link="https://www.youtube.com/watch?v=bMknfKXIFA8"
      />
    </ScrollView>
  );
}
