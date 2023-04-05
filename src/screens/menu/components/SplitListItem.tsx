import { Image } from "react-native";

import { View, Text } from "../../../theme/Themed";

import CommonStyles from "../../../common/styles/CommonStyles";
import { numberWithCommas } from "../../../common/util/NumberUtils";
import Colors from "../../../constants/Colors";
import { ArrowRightIcon, ChevronRightIcon } from "../../../../assets/svg";
import { hp } from "../../../common/util/LayoutUtil";
import { NAIRA_UNICODE } from "../../../constants/AppConstants";
import { IBeneficiary } from "../../../types/types.redux";

interface SplitItem {
  splitImage: string;
  name: string;
  amount: string;
  date: string;
  showChevron?: boolean;
  showCreatorAndRecipients?: boolean;
  requestor: IBeneficiary;
  requestees: IBeneficiary[];
}

const SplitListItem = ({
  splitImage,
  name,
  amount,
  date,
  showChevron,
  showCreatorAndRecipients,
  requestees,
  requestor,
}: SplitItem) => {
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
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
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
            style={{
              fontSize: hp(14),
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
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
                source={{ uri: requestor.pictureUrl }}
              />
              <View style={{ marginHorizontal: 5 }}>
                <ArrowRightIcon size={14} color={Colors["general"].grey} />
              </View>
            </View>
            <View style={[CommonStyles.row, { position: "relative" }]}>
              {requestees.map(({ pictureUrl }) => {
                return (
                  <Image
                    style={{
                      borderColor: "white",
                      borderWidth: 0.5,
                      resizeMode: "cover",
                      borderRadius: 50,
                      width: 20,
                      height: 20,
                    }}
                    source={{ uri: pictureUrl }}
                  />
                );
              })}
              {requestees.length > 3 && (
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 10,
                  }}
                >
                  +{requestees.length - 3} more
                </Text>
              )}
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
              fontFamily: "Euclid-Circular-A-Medium",
              fontWeight: "500",
              fontSize: hp(16),
              color: Colors.light.error,
            }}
          >
            {NAIRA_UNICODE}
            {numberWithCommas(amount)}
          </Text>
          <Text
            style={{
              marginTop: 3,
              fontFamily: "Euclid-Circular-A",
              fontWeight: "300",
              fontSize: hp(10),
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
