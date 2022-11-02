"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
exports.__esModule = true;
exports.deposit = exports.transfer = exports.withdrawal = exports.recurringTransferThunk = exports.requestThunk = exports.transferThunk = exports.transferSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var api_1 = require("../../api");
// Define the initial state using that type
var initialState = {
    amount: 0,
    sourceChannel: 0,
    destinationChannel: 0,
    currency: "NGN"
};
exports.transferSlice = toolkit_1.createSlice({
    name: "transfer",
    initialState: initialState,
    reducers: {
        withdrawal: function (state, action) { },
        transfer: function (state, action) { },
        deposit: function (state, action) { }
    }
});
exports.transferThunk = toolkit_1.createAsyncThunk("transfer", function (props) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        api_1["default"]
            .post("/api/v1/payment/transfer", {
            amount: props.amount,
            sourceChannel: props.sourceChannel,
            destinationChannel: props.destinationChannel,
            currency: props.currency,
            description: props.description,
            destinationPhoneNumber: props.destinationPhoneNumber,
            sourceAccount: props.sourceAccount
        })
            .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        return [2 /*return*/];
    });
}); });
exports.requestThunk = toolkit_1.createAsyncThunk("transfer", function (props) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        api_1["default"]
            .post("/api/v1/payment/request", {
            amount: props.amount,
            sourceChannel: props.sourceChannel,
            destinationChannel: props.destinationChannel,
            currency: props.currency,
            description: props.description,
            intiatorAccount: "string",
            receipientAccount: "string",
            recepientPhoneNumber: "string"
        })
            .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        return [2 /*return*/];
    });
}); });
exports.recurringTransferThunk = toolkit_1.createAsyncThunk("transfer", function (props) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        api_1["default"]
            .post("/api/v1/payment/recurring", {
            amount: props.amount,
            currency: props.currency,
            sourceAccount: props.sourceAccount
        })
            .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
        return [2 /*return*/];
    });
}); });
exports.withdrawal = (_a = exports.transferSlice.actions, _a.withdrawal), exports.transfer = _a.transfer, exports.deposit = _a.deposit;
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
exports["default"] = exports.transferSlice.reducer;
