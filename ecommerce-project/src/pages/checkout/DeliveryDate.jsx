import dayjs from 'dayjs';
export function DeliveryDate({ selectedDeliveryOption }) {
    return (
        <div className="delivery-date">
            Delivery date: {dayjs(selectedDeliveryOption).format('dddd, MMMM D')}
        </div>
    )
}