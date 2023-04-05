export const ENV_DEVELOPMENT = "developement";
export const ENV_TESTING = "testing";
export const ENV_PRODUCTION = "production";
export const PREFERENCE_STORAGE_KEY = "@settings";

export const NAIRA_UNICODE = "\u20A6";
export const NAIRA_CCY_CODE = "NGN";

export const CEO_MESSAGE_STORAGE_KEY = "CEO_MESSAGE";

export const PSB_BANK_CODE = "120001";

export const QR_CODE_SCAN_ISO = "org.iso.QRCode";

// Tier 0, Tier 1, Tier 2 and Tier 3. New Azarians would be classified under Tier 0 in which they won’t be able to perform any transaction until they verify their BVNs. Upon verifying the BVN, the user will be promoted to Tier 1 where there is a daily transaction limit of N50,000 and a maximum account balance of N200,000. A user will then have a daily transaction limit of N1,000,000 and a maximum account balance of N5,000,000 upon verifying their ID (NIN card, International Passport, University ID, Driver’s license or Voters Card). Finally, a user will be able to enjoy the full benefits of Aza after they verify their Proof of Address (Utility bill, etc), this comes with a daily transaction limit of N5,000,000 and an unlimited maximum account balance.

interface Tier {
  currentTier: number;
  upgradeTier: string;
  dailyTransactionLimit: "50000" | "";
  maximumBalance: "200000" | "";
  upgradeComment:
    | "Verify BVN"
    | "NIN card, International Passport, University ID, Driver's license or Voters Card";
}

const Tiers = {
  tier0: {
    currentTier: "Tier 0",
    upgradeTier: "Tier 1",
    dailyTransactionLimit: "50000",
    maximumBalance: "200000",
    upgradeComment: "Verify BVN",
  },
};
