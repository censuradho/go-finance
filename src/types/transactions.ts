export interface CreateTransaction {
  id: string;
  name: string;
  amount: number;
  type: string;
  category_key: string;
  created_at: string;
  icon: string
}

export type GetCategory = CreateTransaction