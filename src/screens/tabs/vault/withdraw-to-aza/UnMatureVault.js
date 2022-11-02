"use strict";
exports.__esModule = true;
var Button_1 = require("../../../../components/buttons/Button");
var Themed_1 = require("../../../../components/Themed");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var svg_1 = require("../../../../../assets/svg");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var styles_1 = require("../styles");
var input_1 = require("../../../../components/input/input");
var VaultCard_1 = require("../components/VaultCard");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var Colors_1 = require("../../../../constants/Colors");
var UnMatureVault = function (_a) {
    var setMatured = _a.setMatured;
    var colorScheme = useColorScheme_1["default"]();
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles_1.VaultStyles.container}>
        <Themed_1.View style={CommonStyles_1["default"].flightContainer}>
          <Themed_1.Text style={CommonStyles_1["default"].ticket}>Flight Ticket Vault</Themed_1.Text>
          <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
            <svg_1.NairaIcon color={Colors_1["default"][colorScheme].text} size={0}/>
            <Themed_1.Text style={CommonStyles_1["default"].flightAmount}> 2,000</Themed_1.Text>
          </Themed_1.View>
        </Themed_1.View>

        <Themed_1.View>
          <Themed_1.View style={[
            CommonStyles_1["default"].lockContainer,
            { backgroundColor: Colors_1["default"][colorScheme].disabled },
        ]}>
            <svg_1.LockIcon color={Colors_1["default"][colorScheme].button}/>
            <Themed_1.View style={[
            CommonStyles_1["default"].timeContainer,
            { backgroundColor: Colors_1["default"][colorScheme].disabled },
        ]}>
              <Themed_1.Text style={CommonStyles_1["default"].time}>06</Themed_1.Text>
              <Themed_1.Text style={CommonStyles_1["default"].seconds}>Days : </Themed_1.Text>
              <Themed_1.Text style={CommonStyles_1["default"].time}>14</Themed_1.Text>
              <Themed_1.Text style={CommonStyles_1["default"].seconds}>Hours : </Themed_1.Text>
              <Themed_1.Text style={CommonStyles_1["default"].time}>48</Themed_1.Text>
              <Themed_1.Text style={CommonStyles_1["default"].seconds}>Mins</Themed_1.Text>
            </Themed_1.View>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.Text style={CommonStyles_1["default"].maturity}>until maturity</Themed_1.Text>
        <Themed_1.View style={CommonStyles_1["default"].vaultInputcontainer}>
          <input_1.Input label={"Top up Vault"} labelStyle={undefined} placeholder="Add more funds from your Aza balance" style={CommonStyles_1["default"].vaultInput} inputStyle={CommonStyles_1["default"].inputStyle} icon={undefined} containerStyle={{ marginBottom: 2 }}/>
        </Themed_1.View>
        <Themed_1.View style={CommonStyles_1["default"].percentageContainer}>
          {VaultCard_1.PercentageList.map(function (item, index) {
            return <VaultCard_1.PercentageCard key={index} percentage={item.percentage}/>;
        })}
        </Themed_1.View>

        <Themed_1.View style={[CommonStyles_1["default"].passwordContainer, { bottom: LayoutUtil_1.hp(45) }]}>
          <Button_1["default"] title="Continue" onPressButton={function () { return setMatured(); }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText
        }} style={[
            {
                backgroundColor: Colors_1["default"][colorScheme].button
            },
            CommonStyles_1["default"].button,
        ]}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = UnMatureVault;
