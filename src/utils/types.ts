export type CardData = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export type FormState = {
  errors: { [key: string]: string };
  isFormDataValid: boolean;
};

export interface FormData {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  promo: boolean;
  gender: string;
  file: string;
}

export interface ValidationErrors {
  [x: string]: string;
}
