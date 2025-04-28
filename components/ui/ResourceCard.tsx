import { View, Text, Image, Pressable, Linking } from 'react-native';

type ResourceCardProps = {
  title: string;
  description: string;
  image: any; // resim dosyası için any kullanıyoruz (istersen daha özel tanımlanabilir)
  link: string;
};

export default function ResourceCard({ title, description, image, link }: ResourceCardProps) {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <Pressable onPress={handlePress} style={{ marginBottom: 24 }}>
      <View style={{ backgroundColor: 'white', borderRadius: 12, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8 }}>
        <Image source={image} style={{ width: '100%', height: 250 }} resizeMode="contain" />
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{title}</Text>
          <Text style={{ fontSize: 14, color: '#666' }}>{description}</Text>
        </View>
      </View>
    </Pressable>
  );
}
