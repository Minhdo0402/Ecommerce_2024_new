import React from 'react';
import paymentIcon1 from '../assets/google-pay.png';
import paymentIcon2 from '../assets/paypal.png';
import paymentIcon3 from '../assets/visa.png';
import paymentIcon4 from '../assets/apple-pay.png';
import paymentIcon5 from '../assets/stripe.png';
import paymentIcon6 from '../assets/card2.png';
import paymentIcon7 from '../assets/card3.png';
import paymentIcon8 from '../assets/discover.png';

type PaymentIconsProps = {
    className?: string; // Chấp nhận className như một thuộc tính tùy chọn
};

const PaymentIcons: React.FC<PaymentIconsProps> = ({ className }) => {
    return (
        <div className={`payment-container ${className}`}>
            <label className="payment-option">
                <input type="radio" name="payment" value="payment1" className="payment-radio" />
                <img src={paymentIcon1} alt="Payment Icon 1" className="payment-icon" />
            </label>
            <div className="divider"></div>
            <label className="payment-option">
                <input type="radio" name="payment" value="payment2" className="payment-radio" />
                <img src={paymentIcon2} alt="Payment Icon 2" className="payment-icon" />
            </label>
            <div className="divider"></div>
            <label className="payment-option">
                <input type="radio" name="payment" value="payment3" className="payment-radio" />
                <img src={paymentIcon3} alt="Payment Icon 3" className="payment-icon" />
            </label>
            <div className="divider"></div>
            <label className="payment-option">
                <input type="radio" name="payment" value="payment4" className="payment-radio" />
                <img src={paymentIcon4} alt="Payment Icon 4" className="payment-icon" />
            </label>
            <div className="divider"></div>
            <label className="payment-option">
                <input type="radio" name="payment" value="payment5" className="payment-radio" />
                <img src={paymentIcon5} alt="Payment Icon 5" className="payment-icon" />
            </label>
            <div className="divider"></div>
            <label className="payment-option">
                <input type="radio" name="payment" value="payment6" className="payment-radio" />
                <img src={paymentIcon6} alt="Payment Icon 6" className="payment-icon" />
            </label>
            <div className="divider"></div>
            <label className="payment-option">
                <input type="radio" name="payment" value="payment7" className="payment-radio" />
                <img src={paymentIcon7} alt="Payment Icon 7" className="payment-icon" />
            </label>
            <div className="divider"></div>
            <label className="payment-option">
                <input type="radio" name="payment" value="payment8" className="payment-radio" />
                <img src={paymentIcon8} alt="Payment Icon 8" className="payment-icon" />
            </label>
        </div>
    );
};

export default PaymentIcons;
