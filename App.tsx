import { View, StatusBar, SafeAreaView } from 'react-native';
import Farmacia from './src/pages/Farmacia';
import { useFonts,
Montserrat_400Regular,
Montserrat_700Bold,
Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';


export default function App() {
  const[fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratItalic": Montserrat_400Regular_Italic
  })
  if(!fontCarregada){
    <View/>
  }
  return (
    <SafeAreaView>
       <StatusBar/>
      <Farmacia></Farmacia>
    </SafeAreaView>
  );
}