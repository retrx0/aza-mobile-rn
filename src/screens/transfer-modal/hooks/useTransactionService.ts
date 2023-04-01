/// SOP

const sendMoney = () => {
  setScreenLoading(true);
  const transfer = await payAzaUserAPI({
    sourceAccount: azaAccountNumber,
    destinationAccount: beneficiary.azaAccountNumber,
    amount,
    transactionPin: "1111",
    description: transDescription ? transDescription : "Aza transaction",
    currency: NAIRA_CCY_CODE,
    destinationBankCode: PSB_BANK_CODE,
  })
    .then((res) => {
      console.log(res);
      transactionCompleted = true;
      setScreenLoading(false);
    })
    .catch(() => {
      setScreenLoading(false);
      toastError("There was a problem completing transaction!");
    });
};

const requestMoney = () => {
  requestMoneyAPI({
    amount: amount,
    decription: transDescription ? transDescription : "",
    initiatorAccountNumber: "" + azaAccountNumber,
    receipientAccountNumber: beneficiary.azaAccountNumber,
    recepientPhoneNumber: beneficiary.phone ? beneficiary.phone : "",
  })
    .then(() => {
      transactionCompleted = true;
    })
    .catch(() => {});
  toastError("There was a problem making the request!");
};

const makeTransaction = async () => {
  // do some validation

  if (!bvnVerified) {
    navigation.navigate("BvnVerification", {
      onVerifyNavigateBackTo:
        confirmationType === "send"
          ? "SendMoneyConfirmation"
          : "RequestMoneyConfirmation",
    });
  } else {
    dispatch(setTransactionDescription("" + transDescription));

    //make transaction
    let transactionCompleted = false;

    if (confirmationType === "send") {
      sendMoney();
    } else {
      requestMoney();
    }

    if (transactionCompleted) {
      navigation.navigate("StatusScreen", {
        status:
          confirmationType === "request"
            ? "Successful"
            : "Your transaction was \n successful",
        statusIcon: "Success",
        statusMessage: `You have successfully ${
          confirmationType === "request" ? "requested" : "sent"
        } ${NAIRA_UNICODE} ${amount} ${
          confirmationType === "request" ? "from" : "to"
        } ${beneficiary.fullName}`,
        statusMessage2:
          confirmationType === "send"
            ? "You can perform this transaction automatically by giving a Recurring Transfer order"
            : "",
        receiptDetails:
          confirmationType === "send"
            ? {
                amount: String(amount),
                beneficiaryName: beneficiary.fullName,
              }
            : undefined,
        recurringTransferBeneficiary:
          confirmationType === "send" ? beneficiary : undefined,
        navigateTo: "Home",
        // to disallow swoosh sound in request screen
        screenType: confirmationType === "send" ? "transaction" : undefined,
      });
    } else {
    }
  }
};

export default { makeTransaction };
