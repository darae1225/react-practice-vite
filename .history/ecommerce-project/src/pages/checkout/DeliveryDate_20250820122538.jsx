import dayjs from "dayjs";

export function DeliveryDate() {
  return (
    <div className="delivery-date">
      Delivery date:
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
}
