import { DownloadPicture } from "@/components/BottomSheet";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore(){

    return <SafeAreaView>
        <Text>Explore page</Text>
        <DownloadPicture />
        <Link href={"/accountInfo"}>Account Info</Link>
    </SafeAreaView>
}