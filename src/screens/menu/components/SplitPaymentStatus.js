"use strict";
exports.__esModule = true;
var Themed_1 = require("../../../components/Themed");
var SplitPaymentStatus = function (_a) {
    var paid = _a.paid;
    return (<Themed_1.View style={{
            backgroundColor: paid ? "#2A9E17" : "#A6A6A6",
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 2
        }}>
      <Themed_1.Text style={{ color: "white", fontSize: 10 }}>
        {paid ? "Paid" : "Pending"}
      </Themed_1.Text>
    </Themed_1.View>);
};
exports["default"] = SplitPaymentStatus;
