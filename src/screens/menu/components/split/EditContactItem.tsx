import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { EditIcon, TrashIcon } from "../../../../../assets/svg";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import { numberWithCommas } from "../../../../common/util/NumberUtils";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";
import Colors from "../../../../constants/Colors";
import { Text, View } from "../../../../theme/Themed";

const EditContactItem = ({
  amount,
  firstName,
  pictureUrl,
  editable,
  deleteable,
  navigation,
  onClickDelete,
  onClickEdit,
}: {
  amount: number;
  firstName: string;
  editable: boolean;
  pictureUrl: string;
  navigation: any;
  deleteable: boolean;
  onClickDelete?: () => void;
  onClickEdit?: () => void;
}) => {
  return (
    <View>
      <View style={{ paddingHorizontal: hp(20) }}>
        <View
          style={[
            CommonStyles.row,
            {
              alignSelf: "stretch",
              justifyContent: "space-between",
              marginTop: hp(25),
            },
          ]}
        >
          <Image
            style={{ borderRadius: 50, width: 45, height: 45 }}
            source={{ uri: pictureUrl }}
          />
          <View
            style={[CommonStyles.col, { marginLeft: 20, marginRight: "auto" }]}
          >
            <Text
              style={{
                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A-Medium",
                fontWeight: "500",
              }}
            >
              {firstName}
            </Text>
            <Text
              style={{
                fontSize: hp(14),
                marginTop: 5,
                color: Colors.general.red,
                fontWeight: "400",
              }}
            >
              {NAIRA_UNICODE}
              {numberWithCommas(amount.toFixed())}
            </Text>
          </View>
          <View style={[CommonStyles.row]}>
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() =>
                navigation.navigate("SplitEditContact", {
                  contactName: firstName,
                  contactImage: pictureUrl,
                  contactSplitAmount: amount.toFixed().toString(),
                })
              }
            >
              {editable && <EditIcon color={Colors.general.grey} size={20} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={onClickDelete}>
              {deleteable && <TrashIcon color={Colors.general.red} size={20} />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default EditContactItem;
