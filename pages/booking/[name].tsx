import { useRouter } from "next/router";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function BookingPage() {
  const router = useRouter();
  const { name } = router.query;

  if (!name) return <p>Loading...</p>;

  // Match the property by name
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === name);

  if (!property) return <p>Property not found</p>;

  const bookingDetails = {
    propertyName: property.name,
    price: property.price,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}
