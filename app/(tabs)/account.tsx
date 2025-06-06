import { DownloadPicture } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const [pictureOpen, setPictureopen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{ flex: 1 }}>
        <Text>Account page</Text>

        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            setPictureopen(true);
          }}
        >
         
        </Button>
        {pictureOpen && <DownloadPicture onClose={() => setPictureopen(false)} />}
      </View>
    </SafeAreaView>
  );
}
