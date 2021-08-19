import { useFonts as useExpoFonts } from 'expo-font'

export default function useFonts() {
  const [fontsLoaded] = useExpoFonts({
		'SFProDisplay-Bold': require('./SF-Pro-Display-Bold.ttf'),
		'SFProDisplay-Medium': require('./SF-Pro-Display-Medium.ttf'),
		'SFProDisplay-Regular': require('./SF-Pro-Display-Regular.ttf'),
		'SFProDisplay-Semibold': require('./SF-Pro-Display-Semibold.ttf'),
	})

	return fontsLoaded
}
