import { View, Text, ScrollView } from 'react-native';

import { images } from '@/constants/images'; // resimler
import ResourceCard from '@/components/ui/ResourceCard';

export default function LearningScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16 }}>
        React Öğrenmeye Başla 📚
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 24, color: '#555' }}>
        Aşağıdaki konuları öğrenerek React dünyasına sağlam bir giriş yapabilirsin:
      </Text>

      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Öğrenme Yol Haritası:</Text>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>🔹 JSX Yapısı</Text>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>🔹 Component Mantığı</Text>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>🔹 useState ve useEffect Kullanımı</Text>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>🔹 Routing ve Sayfa Yönetimi</Text>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>🔹 Context API ile Global State Yönetimi</Text>
      </View>

      <ResourceCard
        title="React Dokümantasyonu"
        description="Resmi dokümantasyon üzerinden React'ın tüm detaylarını öğrenebilirsin."
        image={images.reactlogo}
        link="https://react.dev/"
      />

      <ResourceCard
        title="Ücretsiz Youtube React Eğitimi"
        description="Sıfırdan ileri seviyeye ücretsiz bir React kursu izle."
        image={images.youtube}
        link="https://www.youtube.com/watch?v=bMknfKXIFA8"
      />

      <ResourceCard
        title="Başlangıç Proje Önerileri"
        description="Küçük projeler yaparak öğrendiklerini pekiştir."
        image={images.nodejs}
        link="https://github.com/florinpop17/app-ideas"
      />

    </ScrollView>
  );
}
