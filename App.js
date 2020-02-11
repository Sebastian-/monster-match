import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import MonsterPart from "./components/MonsterPart";
import head1 from "./assets/monster1_head.png";
import head2 from "./assets/monster2_head.png";
import head3 from "./assets/monster3_head.png";
import body1 from "./assets/monster1_body.png";
import body2 from "./assets/monster2_body.png";
import body3 from "./assets/monster3_body.png";
import feet1 from "./assets/monster1_feet.png";
import feet2 from "./assets/monster2_feet.png";
import feet3 from "./assets/monster3_feet.png";

const heads = [head1, head2, head3];
const body = [body1, body2, body3];
const feet = [feet1, feet2, feet3];

export default function App() {
  const [headNum, setHeadNum] = useState(randInt(0, heads.length));
  const [bodyNum, setBodyNum] = useState(randInt(0, body.length));
  const [feetNum, setFeetNum] = useState(randInt(0, feet.length));
  const [matchStatus, setMatchStatus] = useState("");

  function randInt(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }

  function randomizeParts() {
    const headNum = randInt(0, heads.length);
    const bodyNum = randInt(0, body.length);
    const feetNum = randInt(0, feet.length);

    setHeadNum(headNum);
    setBodyNum(bodyNum);
    setFeetNum(feetNum);

    if (headNum === bodyNum && bodyNum === feetNum) {
      setMatchStatus("Monster Matched!");
    } else {
      setMatchStatus("");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <MonsterPart imgSrc={heads[headNum]} />
      <MonsterPart imgSrc={body[bodyNum]} />
      <MonsterPart imgSrc={feet[feetNum]} />
      <Text>{matchStatus}</Text>
      <Button
        onPress={() => {
          randomizeParts();
        }}
        title="Match Monsters!"
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
