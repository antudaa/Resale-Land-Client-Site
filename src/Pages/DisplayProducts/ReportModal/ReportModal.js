import React from 'react';
import toast from 'react-hot-toast';

const ReportModal = ({ selectReport }) => {


    const handleBookAppointment = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.productName.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;
        const reportText = form.reportDetails.value;
        // const iD = id;

        const report = {
            productId: selectReport._id,
            reportedProductName: name,
            sellerEmail: email,
            sellerName: sellerName,
            reportText: reportText,
        }

        console.log(report);

        fetch(`http://localhost:5000/reportedItems`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(report)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast("Your report sent to admin Successfully. Thanks.")
                }
            })
            .catch(err => console.log(err.message));
    };


    return (
        <div>
            <input type="checkbox" id="ReportModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="ReportModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-lg">Report Any Issue..</h3>
                    <div className='mt-10'>
                        <form onSubmit={handleBookAppointment} className="card-body">
                            <div className="form-control">
                                <input name='productName' type="text" disabled value={selectReport.productName} className="input font-bold bg-white input-bordered text-black text-center" />
                            </div>
                            <div className="form-control">
                                <input name='email' type="text" disabled value={selectReport.email} className="input font-bold bg-white input-bordered text-black text-center" />
                            </div>
                            <div className="form-control">
                                <input name='sellerName' type="text" disabled value={selectReport?.sellerInfo?.name} className="input font-bold bg-white input-bordered text-black text-center" />
                            </div>
                            <div className="form-control">
                                <textarea name='reportDetails' className="textarea textarea-success" placeholder="Bio"></textarea>
                            </div>
                            <button htmlFor="ReportModal" type='submit' className='btn btn-primary w-full'>Book</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportModal;