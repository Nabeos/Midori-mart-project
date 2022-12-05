import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { refundOrderForGuestAction } from '../../redux/action/order/OrderAction';

export default function GuestNotificationRefund(props) {
    console.log("ORDER NUMBER: ", props.match.params.orderNumber);
    console.log("ORDER CODE: ", props.match.params.orderCode);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refundOrderForGuestAction(props.match.params.orderNumber, props.match.params.orderCode));
    }, [])

    return (
        <div></div>
    )
}
