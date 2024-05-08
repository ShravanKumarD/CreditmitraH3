import React from "react";
import SectionHeading from "../../Components/SectionHeading";

function UserFeedback(props) {
  function getFeedbackCard() {
    let feedbacks = [
      {
        comment: " No crazy paperwork, just a quick online application and the money was in my account the same day.",
        userName: "Kunal P.",
        img : "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
      },
      {
        comment: "Very simple and instructions were clearly present. No hidden charges were present and very low interest rates.",
        userName: "Rashmi.",
        img : "https://mdbcdn.b-cdn.net/img/new/avatars/10.webp"
      },
      {
        comment: "I took the loan from Creditmitra many times. Very soft spoken and professional staff.",
        userName: "Neha K.",
        img : "https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
      },
    ];
    return feedbacks.map((each) => {
      return (
        <>
          <div className="card each-feedback-card text-center">
          <img className="rounded-circle " alt="avatar1" height="64px" width="64px" src={each.img} />

            <div className="card-body">
              <div className="feedback-ratings">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7979 2.17539C11.3966 0.332767 14.0034 0.33277 14.6021 2.17539L16.0004 6.47874C16.2681 7.30279 17.036 7.86071 17.9025 7.86071H22.4273C24.3647 7.86071 25.1703 10.3399 23.6028 11.4787L19.9422 14.1384C19.2412 14.6476 18.9479 15.5504 19.2157 16.3744L20.6139 20.6778C21.2126 22.5204 19.1036 24.0526 17.5362 22.9138L13.8756 20.2542C13.1746 19.7449 12.2254 19.7449 11.5244 20.2542L7.86378 22.9138C6.29635 24.0526 4.1874 22.5204 4.7861 20.6778L6.18434 16.3744C6.45209 15.5504 6.15877 14.6476 5.4578 14.1384L1.79715 11.4787C0.229722 10.3399 1.03528 7.86071 2.97272 7.86071H7.49753C8.36399 7.86071 9.1319 7.30278 9.39964 6.47874L10.7979 2.17539Z"
                  fill="#F3D057"
                />
              </svg>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7979 2.17539C11.3966 0.332767 14.0034 0.33277 14.6021 2.17539L16.0004 6.47874C16.2681 7.30279 17.036 7.86071 17.9025 7.86071H22.4273C24.3647 7.86071 25.1703 10.3399 23.6028 11.4787L19.9422 14.1384C19.2412 14.6476 18.9479 15.5504 19.2157 16.3744L20.6139 20.6778C21.2126 22.5204 19.1036 24.0526 17.5362 22.9138L13.8756 20.2542C13.1746 19.7449 12.2254 19.7449 11.5244 20.2542L7.86378 22.9138C6.29635 24.0526 4.1874 22.5204 4.7861 20.6778L6.18434 16.3744C6.45209 15.5504 6.15877 14.6476 5.4578 14.1384L1.79715 11.4787C0.229722 10.3399 1.03528 7.86071 2.97272 7.86071H7.49753C8.36399 7.86071 9.1319 7.30278 9.39964 6.47874L10.7979 2.17539Z"
                  fill="#F3D057"
                />
              </svg>
              
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7979 2.17539C11.3966 0.332767 14.0034 0.33277 14.6021 2.17539L16.0004 6.47874C16.2681 7.30279 17.036 7.86071 17.9025 7.86071H22.4273C24.3647 7.86071 25.1703 10.3399 23.6028 11.4787L19.9422 14.1384C19.2412 14.6476 18.9479 15.5504 19.2157 16.3744L20.6139 20.6778C21.2126 22.5204 19.1036 24.0526 17.5362 22.9138L13.8756 20.2542C13.1746 19.7449 12.2254 19.7449 11.5244 20.2542L7.86378 22.9138C6.29635 24.0526 4.1874 22.5204 4.7861 20.6778L6.18434 16.3744C6.45209 15.5504 6.15877 14.6476 5.4578 14.1384L1.79715 11.4787C0.229722 10.3399 1.03528 7.86071 2.97272 7.86071H7.49753C8.36399 7.86071 9.1319 7.30278 9.39964 6.47874L10.7979 2.17539Z"
                  fill="#F3D057"
                />
              </svg>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7979 2.17539C11.3966 0.332767 14.0034 0.33277 14.6021 2.17539L16.0004 6.47874C16.2681 7.30279 17.036 7.86071 17.9025 7.86071H22.4273C24.3647 7.86071 25.1703 10.3399 23.6028 11.4787L19.9422 14.1384C19.2412 14.6476 18.9479 15.5504 19.2157 16.3744L20.6139 20.6778C21.2126 22.5204 19.1036 24.0526 17.5362 22.9138L13.8756 20.2542C13.1746 19.7449 12.2254 19.7449 11.5244 20.2542L7.86378 22.9138C6.29635 24.0526 4.1874 22.5204 4.7861 20.6778L6.18434 16.3744C6.45209 15.5504 6.15877 14.6476 5.4578 14.1384L1.79715 11.4787C0.229722 10.3399 1.03528 7.86071 2.97272 7.86071H7.49753C8.36399 7.86071 9.1319 7.30278 9.39964 6.47874L10.7979 2.17539Z"
                  fill="#F3D057"
                />
              </svg>
              </div>
              <p className="comment">{each.comment}</p>
              <p className="user-name">{each.userName}</p>
            </div>
          </div>
        </>
      );
    });
  }
  return (
    <div className="user-feedback-section">
      <SectionHeading heading={"What Our Users Say About Us?"} />
      <div className="feedback-card-container">{getFeedbackCard()}</div>
    </div>
  );
}

export default UserFeedback;
