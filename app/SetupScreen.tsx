import { View, Text, ScrollView } from 'react-native';

import { images } from '@/constants/images'; // resim sabitleri burada olacak
import ResourceCard from '@/components/ui/ResourceCard';

export default function SetupScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16 }}>
        React Kurulumu 🚀
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 24, color: '#555' }}>
        React uygulaması geliştirmeye başlamak için aşağıdaki adımları takip edebilirsin:
      </Text>

      <ResourceCard
        title="Node.js İndir"
        description="React projeleri oluşturmak için önce Node.js kurulumunu yapman gerekiyor."
        image={images.nodejs}
        link="https://nodejs.org/"
      />

      <ResourceCard
        title="React Proje Başlatma"
        description="Terminal üzerinden 'npx create-react-app my-app' komutu ile React projesi başlatabilirsin."
        image={images.reactlogo}
        link="https://react.dev/learn/start-a-new-react-project"
      />

      <ResourceCard
        title="React Kurulum Videosu"
        description="Kısa bir Youtube videosu ile React kurulumu adımlarını öğren."
        image={images.youtube}
        link="https://www.youtube.com/watch?v=Ke90Tje7VS0"
      />

    </ScrollView>
  );
}
