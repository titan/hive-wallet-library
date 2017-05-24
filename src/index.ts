import { Person } from "person-library";
import { Vehicle } from "vehicle-library";

export interface Account {
  id: string;
  vid: string;
  uid: string;
  balance0: number;
  balance1: number;
  paid: number;
  bonus: number;
  frozen_balance0: number;
  frozen_balance1: number;
  cashable_balance: number;
  evtid: string;
  created_at: Date;
  updated_at: Date;
  vehicle?: any;
  license?: string; // useful for project = 2 or project = 3
  owner?: Person; // only used for project = 2 or project = 3
  project: number;
};

export interface Wallet {
  uid?: string;
  frozen: number;
  cashable: number;
  balance: number;
  accounts: Account[];
  project: number;
};

export interface Transaction {
  id: string;
  type: number;
  aid: string;
  uid: string;
  title: string;
  license?: string;
  amount: number;
  occurred_at: Date;
  oid?: string;
  maid?: string;
  sn?: string;
  project: number;
};
