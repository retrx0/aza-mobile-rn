import { Image } from "react-native";

import { Text, View } from "../../../components/Themed";

import CommonStyles from "../../../common/styles/CommonStyles";
import { numberWithCommas } from "../../../common/util/NumberUtils";
import Colors from "../../../constants/Colors";

import useColorScheme from "../../../hooks/useColorScheme";
import { ArrowRightIcon, ChevronRightIcon } from "../../../../assets/svg";

interface SplitItem {
  splitImage: string;
  name: string;
  amount: string;
  date: string;
  showChevron?: boolean;
  showCreatorAndRecipients?: boolean;
}

const SplitListItem = ({
  splitImage,
  name,
  amount,
  date,
  showChevron,
  showCreatorAndRecipients,
}: SplitItem) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        CommonStyles.row,
        {
          alignItems: showCreatorAndRecipients ? "flex-start" : "center",
          alignSelf: "stretch",
          paddingVertical: 10,
        },
      ]}
    >
      <Image
        style={{
          borderRadius: 50,
          width: 45,
          height: 45,
          resizeMode: "cover",
        }}
        source={{
          uri: splitImage,
        }}
      />
      <View
        style={{
          display: "flex",
          marginRight: "auto",

          marginLeft: 20,
        }}
      >
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
        >
          {name}
        </Text>
        <View
          style={[
            CommonStyles.row,
            {
              marginTop: 3,
              alignSelf: "flex-start",
            },
          ]}
        >
          <Text
            lightColor={Colors.light.secondaryText}
            darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: 12,
            }}
          >
            Payments
          </Text>
        </View>
        {showCreatorAndRecipients && (
          <View
            style={[CommonStyles.row, { alignSelf: "stretch", marginTop: 8 }]}
          >
            <View style={[CommonStyles.row]}>
              <Image
                style={{
                  borderRadius: 50,
                  width: 20,
                  height: 20,
                  resizeMode: "cover",
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1587085580271-cf1389892268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNlbGZpZSUyMG1hbiUyMGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                }}
              />
              <View style={{ marginHorizontal: 5 }}>
                <ArrowRightIcon
                  size={14}
                  color={Colors[colorScheme].secondaryText}
                />
              </View>
            </View>
            <View style={[CommonStyles.row, { position: "relative" }]}>
              <Image
                style={{
                  borderColor: "white",
                  borderWidth: 0.5,
                  resizeMode: "cover",
                  borderRadius: 50,
                  width: 20,
                  height: 20,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1612601006505-1254db3e290d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VsZmllJTIwbWFuJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                }}
              />
              <Image
                style={{
                  borderColor: "white",
                  borderWidth: 0.5,
                  borderRadius: 50,
                  width: 20,
                  resizeMode: "cover",
                  height: 20,
                  marginLeft: -10,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1606459249576-f00b2e5e0917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNlbGZpZSUyMG1hbiUyMGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                }}
              />
              <Image
                style={{
                  borderColor: "white",
                  borderWidth: 0.5,
                  borderRadius: 50,
                  width: 20,
                  resizeMode: "cover",
                  height: 20,
                  marginLeft: -10,
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VsZmllJTIwbWFuJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                }}
              />
              <Text
                style={{
                  color: Colors[colorScheme].secondaryText,
                  marginLeft: 5,
                  fontSize: 10,
                }}
              >
                +2 more
              </Text>
            </View>
          </View>
        )}
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "flex-end",

            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: 14,
              color: Colors.light.error,
            }}
          >
            {"\u20A6"} {numberWithCommas(amount)}
          </Text>
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: 10,
              marginTop: 3,
              fontFamily: "Euclid-Circular-A-Light",
            }}
          >
            {date}
          </Text>
        </View>
        {showChevron && <ChevronRightIcon color={"#2A9E17"} size={20} />}
      </View>
    </View>
  );
};

export default SplitListItem;
