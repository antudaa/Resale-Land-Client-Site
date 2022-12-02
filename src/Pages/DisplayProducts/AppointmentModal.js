import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const AppointmentModal = ({ selectBook }) => {

    const { user } = useContext(AuthContext);

    console.log(selectBook.productName);


    const handleBookAppointment = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const askingPrice = form.price.value;
        const sellerEmail = form.sellerEmail.value;
        const sellerName = form.name.value;
        const buyerEmail = form.email.value;
        const offerPrice = form.offeringPrice.value;
        const userContactNo = form.phone.value;
        const meetLocation = form.location.value;

        const meetingInfo = {
            productName: productName,
            askingPrice: askingPrice,
            sellerEmail: sellerEmail,
            sellerName: sellerName,
            buyerEmail: buyerEmail,
            offerPrice: offerPrice,
            userContactNo: userContactNo,
            meetingLocation: meetLocation,
        }
        console.log(meetingInfo);

        fetch('http://localhost:5000/buyerInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(meetingInfo)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Your message successfully sent to the seller. Seller will contact with you soon.');
                    form.reset();
                } else {
                    toast.error(data.message);
                }
            });

    }

    return (
        <div>
            <input type="checkbox" id="appointmentModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="appointmentModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-lg">Contact With Seller.</h3>
                    <div className='mt-10'>
                        <form onSubmit={handleBookAppointment} className="card-body">
                            <div className="form-control">
                                <input name='productName' type="text" disabled value={selectBook.productName} className="input font-bold bg-white input-bordered text-black text-center" />
                            </div>
                            <div className="form-control">
                                <input name='price' type="text" disabled value={selectBook.price} className="input font-bold bg-white input-bordered text-black text-center" />
                            </div>
                            <div className="form-control">
                                <input name='sellerEmail' type="text" disabled value={selectBook.email} className="input font-bold bg-white input-bordered text-black text-center" />
                            </div>

                            <div className="form-control">
                                <input name='name' value={user?.name} placeholder='Name' type="text" className="input bg-white input-bordered text-center text-black" />
                            </div>
                            <div className="form-control">
                                <input name='email' value={user?.email} type="text" placeholder="Email" className="input bg-white input-bordered text-center text-black" />
                            </div>
                            <div className="form-control">
                                <input name='offeringPrice' type="number" placeholder="Price You Are Offering" className="input bg-white input-bordered text-center text-black" required />
                            </div>
                            <div className="form-control">
                                <input name='location' type="text" placeholder="Location" className="input bg-white input-bordered text-center text-black" required />
                            </div>
                            <div className="form-control">
                                <input name='phone' type="number" placeholder="Contact No" className="input bg-white input-bordered text-center text-black" required />
                            </div>
                            <button type='submit' className='btn btn-primary w-full'>Book</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;