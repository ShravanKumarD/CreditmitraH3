import React from 'react';
import SectionHeading from '../../Components/SectionHeading';

function UserFeedback(props) {
    function getFeedbackCard(){
        let feedbacks = [
            {
                comment : "hshssjs hshsh sjsjsjsj sjsj[o[sc kdkdklan sskk",
                userName : "Riya S."
            },
            {
                comment : "hshssjs hshsh sjsjsjsj sjsj[o[sc kdkdklan sskk",
                userName : "Riya S."
            },
            {
                comment : "hshssjs hshsh sjsjsjsj sjsj[o[sc kdkdklan sskk",
                userName : "Riya S."
            }
        ];
        return (
        feedbacks.map((each)=>{
            return<>
                <div class="card each-feedback-card">
                    <div class="card-body">
                        <img src={each.src} alt="Card image cap" />
                        <div className='feedback-ratings'></div>
                        <p class="comment">{each.comment}</p>
                        <p className='user-name'>{each.userName}</p>
                    </div>
                </div>
            </>
        }) )
    }
    return (
        <div className='user-feedback-section'>
            <SectionHeading heading={"What Our Users Say About Us?"} />
            <div className='feedback-card-container'>
                {getFeedbackCard()}
            </div>
        </div>
    );
}

export default UserFeedback;