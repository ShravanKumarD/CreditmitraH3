import React, {useState, useEffect, useRef } from "react";
import SectionHeading from "../../Components/SectionHeading";


function UserFeedback(props) {
  const sectionRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    rating: '',
  });
 
  const handleClose = () => {
      setOpen(false);
      console.log("closed")
      alert("response saved!")
  };

  const handleOpen = () => {
      setOpen(true);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {  
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current.querySelectorAll('.each-feedback-card');
            if (cards[0]) cards[0].classList.add('animate-left');
            if (cards[1]) cards[1].classList.add('animate-shake');
            if (cards[2]) cards[2].classList.add('animate-right');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function getFeedbackCard() {
    const feedbacks = [
      {
        comment: "No crazy paperwork, just a quick online application and the money was in my account the same day.",
        userName: "Kunal P.",
        img: require('./../../assets/images/avatar2.png'),
      },
      {
        comment: "Very simple and instructions were clearly present. No hidden charges were present and very low interest rates.",
        userName: "Rashmi.",
        img: require('./../../assets/images/avatar1.png'),
      },
      {
        comment: "I took the loan from CreditMitra many times. Very soft spoken and professional staff.",
        userName: "Nehal K.",
        img: require('./../../assets/images/avatar3.png'),
      },
    ];
    return feedbacks.map((each, index) => (
      <div key={index} className="card each-feedback-card text-center">
        <img
          className="rounded-circle"
          alt="avatar"
          height="64px"
          width="64px"
          src={each.img}
          loading="lazy"
        />
        <div className="card-body">
          <div className="feedback-ratings">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
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
            ))}
          </div>
          <p className="comment">{each.comment}</p>
          <p className="user-name">{each.userName}</p>
        </div>
      </div>
    ));
  }
  const handleChange = (e) => {
    const { name, value } = e.target; 
    if (name === 'contact') {
        const numericValue = value.replace(/\D/g, '');
        setFormData({
            ...formData,
            [name]: numericValue
        });
    } else {
        setFormData({
            ...formData,
            [name]: value
        });
    }
};


const handleSubmit = (e) => {
  e.preventDefault();
  let mobile = { contact: formData.contact };
  const mobileNumber = ((mobile) => {
    const mobileNumberPattern = /^[5-9]\d{9}$/; 
  if (mobileNumberPattern.test(mobile.contact)) {
      console.log("true");
      handleClose();
    } else {
      alert("enter a valid mobile number")
    }
  })(mobile)
};



  return (
    <div className="user-feedback-section" ref={sectionRef}>
      <SectionHeading heading={"What Our Users Say About Us?"} />
      <div className="feedback-card-container">{getFeedbackCard()}</div>
    </div>
  );
}

export default UserFeedback;
