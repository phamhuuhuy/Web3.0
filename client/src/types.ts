export type NavbarProp = {
  title: string;
  classprops?: {};
};

export const NavbarList: string[] = [
  "Market",
  "Exchange",
  "Tutorials",
  "Wallets",
];

export type InputProp = {
  placeholder: string;
  type: string;
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FormData = {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
};
