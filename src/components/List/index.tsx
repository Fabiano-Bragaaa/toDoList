import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props = {
  task: string;
  onRemove: () => void;
  onComplete: () => void;
  isCompleted: boolean;
};

export function List({ task, onRemove, onComplete }: Props) {
  const [isCheckbox, setIsCheckbox] = useState(false);

  function handleDisabled() {
    setIsCheckbox(!isCheckbox);
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity
          onPress={() => {
            handleDisabled();
            onComplete();
          }}
          style={styles.buttonCheck}
        >
          {isCheckbox ? (
            <Image source={require("../../Img/check.png")} />
          ) : (
            <Image source={require("../../Img/checkDe.png")} />
          )}
        </TouchableOpacity>
        <Text style={styles.listText}>
          {isCheckbox ? <Text style={styles.disable}>{task}</Text> : task}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Image source={require("../../Img/lixeira.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
