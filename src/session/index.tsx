import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import UserInactivity from "react-native-user-inactivity";

export default () => {
  const [active, setActive] = useState(true);
  const [timer, setTimer] = useState(2000);

  return (
    <View style={{ flex: 1 }}>
      <UserInactivity
        isActive={active}
        timeForInactivity={timer}
        onAction={(isActive) => {
          setActive(isActive);
        }}
        style={{ flex: 1, paddingTop: "10%" }}
      >
        <></>
      </UserInactivity>
      <View style={{ flex: 3, backgroundColor: "#fcfcaa" }}>
        <Text style={{ textAlign: "center" }}>
          {active ? "ACTIVE" : "NOT ACTIVE"}
        </Text>
        <Button
          title="Manually set to Active"
          onPress={() => {
            setActive(true);
          }}
        />
      </View>
    </View>
  );
};
