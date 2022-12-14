import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { cancelInProgressOrderForCustomerAction, cancelInProgressOrderForGuestAction } from '../../redux/action/order/OrderAction';

export default function GuestNotification(props) {
    console.log("ORDER NUMBER: ", props.match.params.orderNumber);
    console.log("ORDER CODE: ", props.match.params.orderCode);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cancelInProgressOrderForGuestAction(props.match.params.orderNumber, props.match.params.orderCode));
    }, [])

    return (
        <div></div>
    )
}
