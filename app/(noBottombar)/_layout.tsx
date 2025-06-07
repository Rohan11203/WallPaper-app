import { Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout(){
    return <SafeAreaView>
        <View style={{ 
         }}> 
         
        </View>
        <Slot />
    </SafeAreaView>
}