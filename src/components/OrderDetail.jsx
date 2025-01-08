import { useEffect } from "react";
import './OrderDetail.css';

function OrderDetail (props) {
    useEffect(() => {
        if (!props.showModal) {
            props.setOrderDetails({
                username: '',
                address: '',
                paymentMethod: 'COD'
            });
        }
    }, [props.showModal]);
    return(
        <>
            {props.showModal && (
                <div className="checkout">
                    <div className="checkoutContent"><br></br>
                        <h1>Order Details</h1><br></br>
                        <p><b>Item:</b> {props.selectedItem.name}</p><br></br>
                        <form onSubmit={props.handleOrderSubmit}>
                            <input
                                type="text"
                                value={props.orderDetails.name}
                                placeholder='Enter your Full Name'
                                onChange={props.setOrderDetailsUsername} required />
                            <input
                                type="text"
                                value={props.orderDetails.address}
                                placeholder='Enter your Full Address'
                                onChange={props.setOrderDetailsAddress} required />
                            <select
                                value={props.orderDetails.paymentMethod}
                                onChange={props.setOrderDetailsPayment} required >
                                <option value="COD">Cash Manually</option>
                            </select><br></br>

                            <button  type='submit' className="OrderDetailbtn">Confirm Order</button>
                            <button onClick={props.onClose} className="OrderDetailbtn">Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderDetail;