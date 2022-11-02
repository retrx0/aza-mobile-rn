"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Themed_1 = require("../../../../components/Themed");
var SpacerWrapper_1 = require("../../../../common/util/SpacerWrapper");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var svg_1 = require("../../../../../assets/svg");
var ActivityComponents_1 = require("../components/ActivityComponents");
var VaultActivity = function () {
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={CommonStyles_1["default"].vaultcontainer}>
        <Themed_1.View>
          {ActivityComponents_1.ActivityList.map(function (item, index) {
            return (<ActivityComponents_1.ActivityCard key={index} send={item.send} status={item.status} price={item.price} due={item.due}/>);
        })}
          <Themed_1.View style={CommonStyles_1["default"].flightcontainer}>
            <react_native_1.TouchableOpacity style={CommonStyles_1["default"].flightIconContainer}>
              <svg_1.FlightIcon />
            </react_native_1.TouchableOpacity>
            <Themed_1.Text style={CommonStyles_1["default"].flightText}>
              Flight Ticket vault created
            </Themed_1.Text>
          </Themed_1.View>
        </Themed_1.View>
        <Themed_1.View style={CommonStyles_1["default"].line}/>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = VaultActivity;
