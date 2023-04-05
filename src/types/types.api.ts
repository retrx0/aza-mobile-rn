// API Responses and Request Types

export interface IVerifyBankResponse {
  data: {
    bank: string;
    bvn: string;
    name: string;
    number: string;
  };
  message: string | null;
  requestState: string | "Success";
  statusCode: string | "OK";
}
