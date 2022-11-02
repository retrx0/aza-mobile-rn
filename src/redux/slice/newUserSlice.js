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
exports.selectNewUser = exports.setNewUser = exports.setGender = exports.setIsVerified = exports.setEmail = exports.setLastName = exports.setFirstName = exports.setPhone = exports.newUserSlice = exports.setPassword = exports.registerUser = exports.verifyOtp = exports.requestOtp = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var api_1 = require("../../api");
// Define the initial state using that type
var initialState = {
    phone: "",
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    isVerified: false,
    isUsePasscodeAsPin: false,
    loading: false,
    token: ""
};
//Create async function fro requesting otp
exports.requestOtp = toolkit_1.createAsyncThunk("user/requestOtp", function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var bodyData;
    return __generator(this, function (_a) {
        bodyData = {
            phoneNumber: 0,
            email: props.email
        };
        return [2 /*return*/, api_1["default"]
                .post("/api/v1/auth/request-otp", {
                phoneNumber: '',
                email: 'mubarakibrahim2015@gmail.com'
            })
                .then(function (response) {
                console.log(response.headers, "+++++");
            }, function (error) {
                console.log(error);
            })];
    });
}); });
//Async function to verify otp
exports.verifyOtp = toolkit_1.createAsyncThunk("user/verifyOtp", function (props) {
    var bodyData = {
        // phoneNumber: props.phone,
        email: 'mubarakibrahim2015@gmail.com',
        otp: props.otp,
        phoneNumber: props.phone,
        email: props.email,
        otp: props.otp
    };
    return api_1["default"]
        .post("/api/v1/auth/verify-otp", {
        phoneNumber: '',
        email: 'mubarakibrahim2015@gmail.com',
        otp: props.otp
    })
        .then(function (response) { return response.headers["access-token"]; }, function (error) {
        console.log(error);
    });
});
exports.registerUser = toolkit_1.createAsyncThunk("user/registerUser", function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var bodyData;
    return __generator(this, function (_a) {
        bodyData = {
            firstName: props.firstname,
            lastName: props.lastname,
            gender: 'Male',
            email: "mubarakibrahim2015@gmail.com",
            countryCode: 'Ng',
            phoneNumber: '',
            dateOfBirth: "2022-10-05T06:49:36.196Z",
            emailConfirmed: true,
            phoneNumberConfirmed: true
        };
        return [2 /*return*/, api_1["default"]({
                method: 'put',
                data: bodyData,
                headers: {
                    "Content-Type": 'application/json',
                    'access-token': "Bearer " + props.token
                },
                url: '/api/v1/user/register'
            })
                .then(function (response) { return response.headers["access-token"]; }, function (error) {
                console.log(error);
            })];
    });
}); });
exports.setPassword = toolkit_1.createAsyncThunk("user/setPassword", function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var bodyData;
    return __generator(this, function (_a) {
        bodyData = {
            newPassword: props.password
        };
        return [2 /*return*/, api_1["default"]({
                method: 'patch',
                data: bodyData,
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': "Bearer " + props.token
                },
                url: '/api/v1/user/set-password'
            })
                .then(function (response) {
                console.log(response);
            })["catch"](function (err) {
                console.log(err);
            })];
    });
}); });
//The below code is where i embbed the bearer token
//     api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
//     api
//       .put("/api/v1/user/register", {
//         firstName: props.firstname,
//         lastName: props.lastname,
//         gender: 1,
//         email: "",
//         countryCode: "Ng",
//         phoneNumber: props.phone,
//         dateOfBirth: "2022-10-05T06:49:36.196Z",
//         emailConfirmed: true,
//         phoneNumberConfirmed: true,
//       })
//       .then(
//         (response) => {
//           console.log(response);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//   }
// );
exports.newUserSlice = toolkit_1.createSlice({
    name: "user/new",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: initialState,
    reducers: {
        setPhone: function (state, action) {
            state.phone = action.payload;
        },
        setFirstName: function (state, action) {
            state.firstname = action.payload;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setLastName: function (state, action) {
            state.lastname = action.payload;
        },
        setEmail: function (state, action) {
            state.email = action.payload;
        },
        setGender: function (state, action) {
            state.gender = action.payload;
        },
        setIsVerified: function (state, action) {
            state.isVerified = action.payload;
        },
        setNewUser: function (state, action) {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.email = action.payload.email;
            state.isUsePasscodeAsPin = action.payload.isUsePasscodeAsPin;
            state.createdPasscode = action.payload.createdPasscode;
            state.gender = action.payload.gender;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(exports.requestOtp.pending, function (state, action) {
            state.loading = true;
        }),
            builder.addCase(exports.requestOtp.rejected, function (state, action) {
                state.otpSent = false;
                state.loading = false;
            }),
            builder.addCase(exports.requestOtp.fulfilled, function (state, action) {
                state.otpSent = true;
                state.loading = false;
            }),
            builder.addCase(exports.verifyOtp.pending, function (state, action) {
                state.loading = true;
            }),
            builder.addCase(exports.verifyOtp.rejected, function (state, action) {
                state.loading = false;
            }),
            builder.addCase(exports.verifyOtp.fulfilled, function (state, action) {
                state.loading = false;
                state.isVerified = true;
                state.token = action.payload;
                console.log(action.payload, "++++++++++ACCC");
            });
        builder.addCase(exports.registerUser.pending, function (state, action) {
            state.loading = true;
        }),
            builder.addCase(exports.registerUser.rejected, function (state, action) {
                state.loading = false;
            }),
            builder.addCase(exports.registerUser.fulfilled, function (state, action) {
                state.loading = false;
                state.token = action.payload;
            });
    }
});
exports.setPhone = (_a = exports.newUserSlice.actions, _a.setPhone), exports.setFirstName = _a.setFirstName, exports.setLastName = _a.setLastName, exports.setEmail = _a.setEmail, exports.setIsVerified = _a.setIsVerified, exports.setGender = _a.setGender, exports.setNewUser = _a.setNewUser;
// Other code such as selectors can use the imported `RootState` type
var selectNewUser = function (state) { return state.newUser; };
exports.selectNewUser = selectNewUser;
exports["default"] = exports.newUserSlice.reducer;
