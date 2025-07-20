export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface PropertyProps {
  name: string;
   description ?: string;
  reviews ?: {
    user: string;
    comment: string;
    rating: number;
  }[];
 
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick: () => void
}

export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  image: string;
}
export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  image: string;
}
