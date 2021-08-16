import { useFonts as useExpoFonts } from 'expo-font'

export default function useFonts() {
  const [fontsLoaded] = useExpoFonts({
		'SFProDisplay-Black': require('./SF-Pro-Display-Black.ttf'),
		'SFProDisplay-BlackItalic': require('./SF-Pro-Display-BlackItalic.ttf'),
		'SFProDisplay-Bold': require('./SF-Pro-Display-Bold.ttf'),
		'SFProDisplay-BoldItalic': require('./SF-Pro-Display-BoldItalic.ttf'),
		'SFProDisplay-Heavy': require('./SF-Pro-Display-Heavy.ttf'),
		'SFProDisplay-HeavyItalic': require('./SF-Pro-Display-HeavyItalic.ttf'),
		'SFProDisplay-Light': require('./SF-Pro-Display-Light.ttf'),
		'SFProDisplay-LightItalic': require('./SF-Pro-Display-LightItalic.ttf'),
		'SFProDisplay-Medium': require('./SF-Pro-Display-Medium.ttf'),
		'SFProDisplay-MediumItalic': require('./SF-Pro-Display-MediumItalic.ttf'),
		'SFProDisplay-Regular': require('./SF-Pro-Display-Regular.ttf'),
		'SFProDisplay-RegularItalic': require('./SF-Pro-Display-RegularItalic.ttf'),
		'SFProDisplay-Semibold': require('./SF-Pro-Display-Semibold.ttf'),
		'SFProDisplay-SemiboldItalic': require('./SF-Pro-Display-SemiboldItalic.ttf'),
		'SFProDisplay-Thin': require('./SF-Pro-Display-Thin.ttf'),
		'SFProDisplay-ThinItalic': require('./SF-Pro-Display-ThinItalic.ttf'),
		'SFProDisplay-Ultralight': require('./SF-Pro-Display-Ultralight.ttf'),
		'SFProDisplay-UltralightItalic': require('./SF-Pro-Display-UltralightItalic.ttf'),
	})

	return fontsLoaded
}
