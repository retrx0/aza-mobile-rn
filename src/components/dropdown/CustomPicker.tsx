import React, { FC, ReactElement, useRef, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import { View, Text } from "../../theme/Themed";
import { Entypo } from "@expo/vector-icons";

interface Props {
  label: string;
  data: Array<{ label: string; value: number }>;
  onSelect: (item: { label: string; value: string }) => void;
}

const CustomPicker: FC<Props> = ({ label, data, onSelect }) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  const DropdownButton = useRef(0 as any);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState({ label: "Male", value: 0 });
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number
      ) => {
        setDropdownTop(py + h);
      }
    );
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }: any): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(!!selected && selected.label) || label}
      </Text>
      <Entypo name="chevron-down" size={18} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    height: 25,
    zIndex: 1,
    width: "100%",
  },
  buttonText: {
    flex: 1,
    textAlign: "left",
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: "absolute",
    width: "50%",
    shadowColor: "#888888",
    shadowRadius: 3,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.3,
    borderRadius: 5,
    marginLeft: 20,
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  item: {
    padding: 13,
  },
});

export default CustomPicker;
