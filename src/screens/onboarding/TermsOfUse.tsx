import { View, Text, ScrollView } from "../../theme/Themed";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { hp } from "../../common/util/LayoutUtil";
import React from "react";
import { AZALogo, ZEAL } from "../../../assets/svg";
import Button from "../../components/buttons/Button";
import { CommonScreenProps } from "../../common/navigation/types";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";

import Colors from "../../constants/Colors";

const TermsOfUse = ({ navigation }: CommonScreenProps<"PrivacySettings">) => {
  const selectedTheme = useAppSelector(selectAppTheme);

  const appTheme = getAppTheme(selectedTheme);

  return (
    <>
      <SpacerWrapper>
        <ScrollView showsVerticalScrollIndicator>
          <View
            style={{
              marginBottom: hp(25),
              alignItems: "center",
              marginTop: hp(40),
            }}>
            <AZALogo
              color={
                appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
              }
              size={24}
            />
          </View>
          <View style={{ paddingHorizontal: 32 }}>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "justify",
                fontSize: hp(24),
                fontFamily: "Euclid-Circular-A-Bold",
                marginBottom: hp(15),
                fontWeight: "600",
                lineHeight: hp(30),
              }}>
              Terms of Use
            </Text>
            {/* <Text
              style={{
                alignSelf: "center",
                textAlign: "justify",
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A",
                marginBottom: hp(20),
                fontWeight: "400",
                lineHeight: hp(18),
              }}>
              Last updated Jan 22nd, 2023
            </Text> */}
            <Text
              style={{
                textAlign: "justify",
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A",
                lineHeight: hp(19),
                fontWeight: "400",
                maxWidth: 350,
                alignSelf: "center",
              }}>
              Welcome to Aza! These terms of use (the "Terms") apply to your use
              of Aza, a fintech app provided by{" "}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                Aza Innovations Limited
              </Text>{" "}
              ("Aza," "we," "us," or "our"){"\n"}
            </Text>
            <Text
              style={{
                textAlign: "justify",
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A",
                marginBottom: hp(35),
                fontWeight: "400",
                maxWidth: 350,
                alignSelf: "center",
                alignItems: "center",
              }}>
              Please read these Terms of Use and our Privacy Policy carefully.
              By using or accessing the Services, you represent that you have
              read and understand these Terms and our Privacy Policy and you
              agree to be bound by these Terms and our Privacy Policy. If you do
              not agree to all the terms and conditions of these Terms and our
              Privacy Policy, do not use or access the Services (Both the Aza
              App and the Aza website). {"\n"}
              {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                1. Eligibility
              </Text>
              {"\n"}
              You must be at least 18 years old to use Aza. By using Aza, you
              represent and warrant that you are at least 18 years old and that
              you have the legal capacity to enter into these Terms. If you are
              not at least 18 years old, or do not have the legal capacity to
              enter into these Terms, you may not use Aza. {"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                2. Account Registration
              </Text>
              {"\n"}In order to access certain features of Aza, you may be
              required to create an account. When you create an account, you
              must provide accurate and complete information. You are
              responsible for maintaining the confidentiality of your account
              and password, and you are solely responsible for all activities
              that occur under your account. You agree to immediately notify us
              of any unauthorized use of your account or password. {"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                3. Use of Aza
              </Text>
              {"\n"}Aza is intended for personal, non-commercial use. You may
              not use Aza for any illegal or unauthorized purpose. You may not
              use Aza to transmit helps us verify your identity and bank account
              information. When you register for the Services and from time to
              time thereafter, we may require you to provide and/or confirm
              information and documentation that will allow us to identify you,
              such as: {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                {" "}
                .
              </Text>{" "}
              a copy of your valid means of identification, such as a passport
              or driver’s licence; {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                {" "}
                .
              </Text>{" "}
              a copy of a utility bill, or other bill, dated within three months
              of our request, with your name and Nigerian street address on it;
              and {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                {" "}
                .
              </Text>{" "}
              such other information and documentation that we may require from
              time to time. {"\n"}
              {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                4. Prohibited Uses
              </Text>
              {"\n"}
              You shall not use your Aza Account to engage in the following
              categories of activities (“Prohibited Uses”). The specific types
              of use listed below are representative, but not exhaustive. If you
              are not clear on whether or not your use of the Services involves
              a Prohibited Use, please contact us at hello@azanaija.com. By
              accepting these Terms, you confirm that you shall not use your Aza
              Account for any of the following: {"\n"}
              {"\n"}{" "}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                  alignItems: "center",
                }}>
                {" "}
                .
              </Text>{" "}
              Unlawful activity: This includes any activity which violates, or
              assists in the violation of any law, statute, regulation or
              sanctions in Nigeria. {"\n"}{" "}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                {" "}
                .
              </Text>{" "}
              Fraud: This includes any activity which defrauds Aza or other Aza
              users or any other person; or providing any false, inaccurate or
              misleading information to Aza
              {"\n"}{" "}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                .
              </Text>{" "}
              Intellectual property infringement: This involves engaging in any
              activities that may infringe or violate any copyright, trademark,
              right of publicity or privacy or any other proprietary right under
              the law including but not limited to the use of Aza’s intellectual
              property, name or logo, without express consent from Aza or in a
              manner that otherwise harms the Aza brand. Any viruses or other
              malicious code. You may not use Aza to send spam or other
              unsolicited communications. You may use the Aza App, but not
              limited to, in the following ways: {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                .
              </Text>{" "}
              Make transfers between Aza users and other banks.{"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                .
              </Text>{" "}
              Pay utility bills (Electricity, Water, Cable Tv, Airtime/Data,
              Internet etc).
              {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                .
              </Text>{" "}
              Purchase Gift Cards.{"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                .
              </Text>{" "}
              Save your money in the Aza vault.
              {"\n"} {"\n"}To register, open, use and run an Aza Account, you
              may be required to submit certain information, including but not
              limited to your name, email address, phone number, online
              credentials for your bank account, and such other information as
              we may request from time to time (collectively, “User
              Information”). {"\n"} {"\n"}You represent and warrant that you own
              the email address or mobile phone number you register with and all
              information entered or collected in the course of creating your
              Aza Account and any information you subsequently add or update
              from your settings is true, accurate, current and complete, and
              you agree not to misrepresent your identity or your User
              Information. If we approve your registration, you will be
              authorised to use the Services, subject to these Terms. {"\n"}{" "}
              {"\n"}You will also need a mobile phone (Android or iOS), internet
              connection and a Bank Verification Number to use the Aza App and
              our Services therein. {"\n"} {"\n"}For our compliance purposes and
              in order to provide the Services to you, you hereby authorise us
              to, directly or through a third-party, obtain, verify, and record
              information and documentation that,{"\n"}
              {"\n"}{" "}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Bold",
                  fontSize: hp(25),
                }}>
                .
              </Text>{" "}
              Abuse other users: This includes any activity which interferes
              with another user’s access to the Services, including defamation,
              extorting, abusing, harassing, threating or violating the rights
              and privacy of other users.{"\n"}
              {"\n"}If you breach these prohibitions in any way, Aza may take
              such actions as it deems appropriate to deal with the breach,
              including suspending and prohibiting you access to your Aza
              Account, and/or instituting legal proceedings against you.{"\n"}
              {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                5. Third Party Affiliation
              </Text>
              {"\n"}
              Aza is using VFD Microfinance Banks’ API for its account creation
              and money transfer services. Aza does not directly hold user’s
              funds, rather VFD MFB’s services are used to hold user’s funds and
              initiate account creations. Therefore, Aza will not be liable for
              any issues or problems related to the errors of VFD Microfinance
              Bank’s API’s and services.{"\n"}
              {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                6. Intellectual Property
              </Text>
              {"\n"}Aza and all content and materials included on Aza, including
              but not limited to text, graphics, images, software, and
              trademarks, are the property of Aza or its licensors and are
              protected by Nigerian and international copyright and trademark
              laws. You may not use any content or materials on Aza for any
              commercial purpose without the express written consent of Aza.{" "}
              {"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                7. Disclaimer of Warranties
              </Text>
              {"\n"}
              Aza is provided on an "as is" and "as available" basis. Aza makes
              no representations or warranties of any kind, express or implied,
              as to the operation of Aza or the information, content, materials,
              or products included on Aza. Aza will not be liable for any
              damages of any kind arising from the use of Aza, including but not
              limited to direct, indirect, incidental, punitive, and
              consequential damages.{"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                8. Indemnification
              </Text>
              {"\n"}You agree to indemnify and hold Aza, and its subsidiaries,
              affiliates, officers, agents, and employees, harmless from any
              claim or demand, including reasonable attorneys' fees, made by any
              third party due to or arising out of your use of Aza, your
              violation of these Terms, or your violation of any rights of
              another.{"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                9. Force Majeure
              </Text>
              {"\n"}We shall not be liable for any delay or failure to perform
              as required by these Terms as a result of any cause or condition
              including but not limited to, an act of God, epidemic, pandemic,
              act of civil or military authorities, act of terrorists, civil
              disturbance, war, strike or other labor dispute, fire,
              interruption in telecommunications or internet services or network
              provider services, failure of equipment and/or software or any
              other occurrence which is beyond our reasonable control and shall
              not affect the validity and enforceability of any remaining
              provisions.{"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                10. Governing Law
              </Text>
              {"\n"}
              These Terms and your use of Aza shall be governed by and construed
              in accordance with the laws of the Federal Republic of Nigeria,
              without giving effect to any principles of conflicts of law.{" "}
              {"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                11. Dispute Resolution
              </Text>
              {"\n"}
              Any dispute arising out of or relating to these Terms or Aza shall
              be resolved through binding arbitration in accordance with the
              Rules of International Arbitration of the International Chamber of
              Commerce. The arbitration shall be conducted in Lagos, Nigeria.{" "}
              {"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                12. Changes to These Terms
              </Text>
              {"\n"}
              Aza reserves the right to update or modify these Terms at any time
              without prior notice. Any changes to these Terms will be effective
              immediately upon posting on Aza App. Your continued use of Aza
              following the posting of any changes to these Terms constitutes
              your acceptance of those changes. {"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                13. Change of Control
              </Text>
              {"\n"}In the event that Aza is acquired by or merged with a
              third-party entity, we reserve the right, in any of these
              circumstances, to transfer or assign the information we have
              collected from you as part of such merger, acquisition, sale, or
              other change of control.{"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                14. Termination
              </Text>
              {"\n"}Aza reserves the right to terminate this Agreement at any
              time and for any reason. Upon termination, you must immediately
              cease all use of the Services and destroy all copies of the
              Services in your possession or control. {"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                15. Complaints and Disputes
              </Text>
              {"\n"}If you have any feedback, questions or complaints, contact
              us via email at hello@azanaija.com. When you contact us, please
              provide us with the relevant information we need to verify your
              account.{"\n"} {"\n"}
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(14),
                }}>
                16. Entire Agreement
              </Text>
              {"\n"}These Terms, together with our Privacy Policy constitute the
              entire and sole agreement between You and Us with respect to the
              Services and supersedes all prior understandings, arrangements, or
              agreements, whether written or oral, regarding the Services.
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              alignSelf: "center",
            }}>
            <ZEAL
              color={
                appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
              }
              size={57}
            />
            <Text
              style={{
                alignSelf: "center",
                textAlign: "justify",
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A",
                marginBottom: hp(20),
                fontWeight: "400",
                marginTop: hp(10),
              }}>
              www.azanaija.com
            </Text>
          </View>
        </ScrollView>
      </SpacerWrapper>
    </>
  );
};

export default TermsOfUse;
