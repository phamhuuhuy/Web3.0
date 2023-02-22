export type navbarProp = {
  title: string;
  classprops?: {};
};

export const navbarList: string[] = [
  "Market",
  "Exchange",
  "Tutorials",
  "Wallets",
];

export type inputProp = {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  handleChange: (e: any, name: string) => void;
};

export type FormData = {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
};
