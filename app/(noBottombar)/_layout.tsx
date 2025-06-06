import { Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout(){
    return <SafeAreaView>
        <View style={{ backgroundColor: 
            "red"
         }}> 
            <Text>Go Back</Text>
        </View>
        <Slot />
    </SafeAreaView>
}