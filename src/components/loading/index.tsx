import { ActivityIndicator, View } from 'react-native';
import { styles } from './style';
import { colors } from '@/styles/theme';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.blue.blue_light} size={40} />
    </View>
  );
};

export default Loading;
