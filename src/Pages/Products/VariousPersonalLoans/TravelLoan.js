import React from "react";
import Header from "./../../../Components/Header/Header";
import Footer from "./../../../Components/Footer/Footer";
import ProductsHeroSection from "./../ProductsHeroSection";
import DescriptionSection from "./../DescriptionSection";
import StepsImg from "./../../../assets/images/mobile.png";
import StepsImg2 from "./../../../assets/images/pad.png";
import { Link } from "react-router-dom";
import SEO from "../../../Components/SEO/SEO";

const TravelLoan = (props) => {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Affordable Travel Loans & Holiday Financing | Travel Now, Pay Later"
        description="Turn your travel dreams into reality with a travel loan (personal travel loan) for your next adventure. Get competitive rates, flexible repayment options, and easy online application. Explore holiday loans today!"
        keywords="travel loan, Personal Loan for Travel, holiday loans"
        name="CreditMitra"
        type="LendingService"
      />
      <section>
        <div className="page-container products-page">
          {/* <ProductsHeroSection /> */}
          <div className="products-hero-section ">
            <div className="productHeader">Travel Loan</div>
            {/* <small>
      Get Ready to Say "I Do" to Your Dream Wedding

      </small> */}
            <p>
              Do you dream of exotic beaches, bustling cities, or awe-inspiring
              landscapes? Let your travel desires take flight with our
              convenient travel loan! This isn't just a holiday loan, it's an
              investment in unforgettable memories and experiences that enrich
              your life. Travel loans are unsecured personal loans for travel
              specifically designed to finance your travel adventures.
            </p>
            <div className="btn-container">
              <div className="row productsDiv">
                <div className="col-12 col-sm-4 productsDivBtn">
                  <button className="btn primary-gradient-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_399_1714)">
                        <path
                          d="M30.8611 20.9402C31.519 21.0212 32.1527 21.2392 32.7211 21.5802H32.7711C33.3616 18.7886 33.1502 15.8868 32.1611 13.2102C32.0689 12.9628 31.8825 12.7619 31.6427 12.6514C31.4029 12.5409 31.1291 12.5297 30.8811 12.6202C30.6337 12.7125 30.4328 12.8988 30.3223 13.1386C30.2117 13.3784 30.2005 13.6522 30.2911 13.9002C31.1176 16.1515 31.3146 18.5854 30.8611 20.9402ZM26.3311 28.5802C24.5886 30.0339 22.4959 31.0061 20.2611 31.4002C20.1298 31.4114 20.0019 31.4483 19.8849 31.5089C19.7678 31.5695 19.6639 31.6525 19.5789 31.7532C19.4939 31.854 19.4296 31.9705 19.3897 32.0961C19.3498 32.2217 19.3349 32.3539 19.3461 32.4852C19.3573 32.6166 19.3942 32.7444 19.4548 32.8615C19.5153 32.9785 19.5984 33.0825 19.6991 33.1674C19.7999 33.2524 19.9164 33.3167 20.042 33.3566C20.1675 33.3966 20.2998 33.4114 20.4311 33.4002H20.6111C23.2747 32.9304 25.7641 31.7565 27.8211 30.0002V29.9302C27.2323 29.5938 26.7239 29.1331 26.3311 28.5802ZM15.6211 31.3402C14.1081 31.058 12.6562 30.5131 11.3311 29.7302C10.7647 29.3953 10.2202 29.0246 9.70111 28.6202C9.31983 29.1803 8.82174 29.6511 8.24111 30.0002C8.89046 30.5481 9.58267 31.043 10.3111 31.4802C11.8385 32.3799 13.5097 33.0092 15.2511 33.3402H15.4411C15.7063 33.3641 15.9702 33.2816 16.1746 33.111C16.379 32.9403 16.5072 32.6955 16.5311 32.4302C16.555 32.165 16.4725 31.9012 16.3019 31.6968C16.1312 31.4924 15.8863 31.3641 15.6211 31.3402ZM4.56111 21.1502C4.76304 21.135 4.96358 21.1049 5.16111 21.0602C4.68441 18.7023 4.87134 16.2583 5.70111 14.0002C5.79261 13.7509 5.78132 13.4755 5.66974 13.2345C5.55815 12.9935 5.35541 12.8067 5.10611 12.7152C4.8568 12.6237 4.58136 12.635 4.34038 12.7466C4.09939 12.8582 3.91261 13.0609 3.82111 13.3102C2.8306 16.0085 2.63622 18.9346 3.26111 21.7402C3.66239 21.4795 4.10063 21.2806 4.56111 21.1502Z"
                          fill="white"
                        />
                        <path
                          d="M31.9002 23.0005C31.5431 22.7732 31.1444 22.6191 30.7273 22.547C30.3102 22.4749 29.8829 22.4863 29.4702 22.5805C28.9471 22.7174 28.466 22.982 28.0702 23.3505L24.2002 21.1105C24.8097 19.6047 24.8659 17.9316 24.3588 16.3883C23.8517 14.845 22.8141 13.5313 21.4302 12.6805L21.3202 12.6105C20.5739 12.1856 19.7519 11.9105 18.9002 11.8005V8.00047C19.6971 7.76205 20.3708 7.22452 20.7802 6.50047C21.222 5.75263 21.3511 4.86077 21.1395 4.01836C20.928 3.17594 20.3929 2.45089 19.6502 2.00047C19.2884 1.7888 18.888 1.65147 18.4725 1.59652C18.0569 1.54157 17.6346 1.57011 17.2302 1.68047C16.8133 1.78675 16.4217 1.97502 16.0783 2.23428C15.7349 2.49353 15.4466 2.81859 15.2302 3.19047C14.8009 3.9347 14.6788 4.81701 14.8898 5.64986C15.1008 6.48272 15.6283 7.20044 16.3602 7.65047C16.5888 7.80201 16.838 7.91989 17.1002 8.00047V11.8005C16.0931 11.9387 15.1312 12.3063 14.2886 12.875C13.446 13.4437 12.7452 14.1982 12.2402 15.0805C11.7183 15.9827 11.4092 16.9921 11.3365 18.0319C11.2637 19.0717 11.4291 20.1143 11.8202 21.0805L7.82021 23.3705C7.67887 23.2461 7.52845 23.1325 7.37021 23.0305C7.00582 22.8209 6.60371 22.6852 6.18685 22.6311C5.77 22.577 5.34657 22.6055 4.94075 22.7151C4.53493 22.8247 4.15468 23.0132 3.82172 23.2697C3.48875 23.5263 3.2096 23.846 3.00021 24.2105C2.56823 24.9511 2.44148 25.8308 2.6468 26.6633C2.85212 27.4958 3.37338 28.2156 4.10021 28.6705C4.59839 28.9704 5.1687 29.1294 5.75021 29.1305C6.01353 29.1323 6.27589 29.0987 6.53021 29.0305C6.95685 28.9216 7.35682 28.7269 7.70569 28.4583C8.05457 28.1896 8.34503 27.8527 8.55934 27.4681C8.77365 27.0834 8.90731 26.6592 8.95216 26.2211C8.99702 25.7831 8.95212 25.3406 8.82021 24.9205L12.7002 22.6805C13.2213 23.3604 13.8617 23.9398 14.5902 24.3905C15.9883 25.272 17.6699 25.5869 19.2922 25.271C20.9145 24.9551 22.3551 24.0321 23.3202 22.6905L27.1502 24.9005C26.9697 25.5825 27.0132 26.3044 27.2743 26.9599C27.5353 27.6153 28.0002 28.1694 28.6002 28.5405C29.0943 28.8415 29.6617 29.0006 30.2402 29.0005C30.7996 29.0026 31.3497 28.8566 31.8344 28.5773C32.3192 28.298 32.7214 27.8955 33.0002 27.4105C33.4169 26.6745 33.5351 25.8066 33.3304 24.9859C33.1258 24.1653 32.6138 23.4545 31.9002 23.0005ZM7.00021 26.6205C6.90032 26.7837 6.76803 26.9247 6.61152 27.0347C6.455 27.1448 6.27758 27.2216 6.09021 27.2605C5.9081 27.3128 5.71707 27.3264 5.52937 27.3006C5.34166 27.2748 5.16143 27.21 5.00021 27.1105C4.67319 26.9075 4.43806 26.5852 4.34472 26.2118C4.25138 25.8385 4.30715 25.4434 4.50021 25.1105C4.59473 24.9467 4.72144 24.8039 4.87268 24.6904C5.02392 24.577 5.19657 24.4954 5.38021 24.4505C5.49091 24.4192 5.6052 24.4024 5.72021 24.4005C5.98603 24.4011 6.24617 24.4774 6.47021 24.6205C6.80231 24.8185 7.04371 25.1387 7.14276 25.5125C7.24181 25.8862 7.19065 26.2839 7.00021 26.6205ZM16.7802 4.09047C16.8747 3.92674 17.0014 3.78385 17.1527 3.67042C17.3039 3.55699 17.4766 3.47536 17.6602 3.43047C17.7709 3.39917 17.8852 3.38236 18.0002 3.38047C18.2538 3.38166 18.5024 3.45071 18.7202 3.58047C19.0472 3.78339 19.2824 4.10572 19.3757 4.47909C19.4691 4.85247 19.4133 5.24753 19.2202 5.58047C19.1257 5.7442 18.999 5.88708 18.8477 6.00052C18.6965 6.11395 18.5239 6.19557 18.3402 6.24047C18.1626 6.28848 17.977 6.29994 17.7948 6.27415C17.6126 6.24837 17.4376 6.18588 17.2802 6.09047C16.9532 5.88755 16.7181 5.56522 16.6247 5.19184C16.5314 4.81846 16.5872 4.42341 16.7802 4.09047ZM19.1902 23.4105C18.5718 23.5704 17.9276 23.605 17.2957 23.5122C16.6637 23.4195 16.0566 23.2013 15.5102 22.8705C14.382 22.1779 13.5695 21.0715 13.2462 19.7878C12.9229 18.504 13.1146 17.1448 13.7802 16.0005C14.2093 15.2614 14.8249 14.6479 15.5655 14.2215C16.306 13.795 17.1456 13.5705 18.0002 13.5705C18.8656 13.5685 19.7154 13.7999 20.4602 14.2405C21.5884 14.9331 22.4009 16.0394 22.7242 17.3232C23.0475 18.6069 22.8558 19.9662 22.1902 21.1105C21.8691 21.6748 21.4383 22.1691 20.923 22.5641C20.4077 22.9591 19.8185 23.2469 19.1902 23.4105ZM31.4402 26.4905C31.2469 26.8213 30.9305 27.0622 30.5602 27.1605C30.3819 27.207 30.196 27.2168 30.0138 27.1893C29.8316 27.1618 29.6568 27.0976 29.5002 27.0005C29.1732 26.7975 28.9381 26.4752 28.8447 26.1018C28.7514 25.7285 28.8071 25.3334 29.0002 25.0005C29.09 24.8231 29.2168 24.667 29.3721 24.5428C29.5273 24.4186 29.7074 24.3291 29.9002 24.2805C30.0133 24.2705 30.1271 24.2705 30.2402 24.2805C30.4834 24.2785 30.7223 24.3443 30.9302 24.4705C31.2643 24.672 31.5053 24.9972 31.6009 25.3755C31.6964 25.7538 31.6386 26.1545 31.4402 26.4905ZM8.05021 10.0005C9.48285 8.30811 11.3246 7.01031 13.4002 6.23047C13.1993 5.55997 13.1414 4.85476 13.2302 4.16047C10.6299 5.02984 8.3143 6.58856 6.53021 8.67047C6.35385 8.87203 6.26477 9.1354 6.28259 9.40264C6.3004 9.66988 6.42365 9.9191 6.62521 10.0955C6.82678 10.2718 7.09015 10.3609 7.35739 10.3431C7.62463 10.3253 7.87385 10.202 8.05021 10.0005Z"
                          fill="white"
                        />
                        <path
                          d="M24.6716 7.22992C25.9026 7.96854 27.0039 8.90433 27.9316 9.99992C28.0169 10.0997 28.1211 10.1817 28.2382 10.2413C28.3552 10.3008 28.4829 10.3367 28.6138 10.3469C28.7447 10.3572 28.8764 10.3415 29.0012 10.3008C29.1261 10.2601 29.2418 10.1953 29.3416 10.1099C29.4414 10.0246 29.5234 9.92038 29.5829 9.80333C29.6425 9.68627 29.6784 9.55863 29.6886 9.4277C29.6988 9.29677 29.6831 9.16511 29.6425 9.04024C29.6018 8.91537 29.5369 8.79973 29.4516 8.69992C28.3836 7.43289 27.113 6.35158 25.6916 5.49992C24.7593 4.95785 23.7742 4.51221 22.7516 4.16992C22.852 4.85933 22.8008 5.56233 22.6016 6.22992C23.3176 6.50636 24.0099 6.8408 24.6716 7.22992Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_399_1714">
                          <rect width="36" height="36" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    100% Digital Journey
                  </button>
                </div>
                <div className="col-12 col-sm-4 productsDivBtn">
                  <button className="btn primary-gradient-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="32"
                      viewBox="0 0 24 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_399_1721)">
                        <path
                          d="M1.5 32H22.5C23.327 32 24 31.327 24 30.5V9.5C24 9.483 23.992 9.469 23.991 9.453C23.989 9.43 23.983 9.41 23.978 9.388C23.9623 9.31853 23.9316 9.25334 23.888 9.197C23.881 9.188 23.882 9.177 23.875 9.168L15.875 0.168C15.872 0.165 15.868 0.165 15.865 0.162C15.804 0.0982104 15.727 0.051939 15.642 0.028C15.623 0.022 15.606 0.02 15.586 0.017C15.557 0.012 15.53 0 15.5 0H1.5C0.673 0 0 0.673 0 1.5V30.5C0 31.327 0.673 32 1.5 32ZM16 1.815L22.387 9H16.5C16.28 9 16 8.58 16 8.25V1.815ZM1 1.5C1 1.36739 1.05268 1.24021 1.14645 1.14645C1.24021 1.05268 1.36739 1 1.5 1H15V8.25C15 9.059 15.655 10 16.5 10H23V30.5C23 30.6326 22.9473 30.7598 22.8536 30.8536C22.7598 30.9473 22.6326 31 22.5 31H1.5C1.22 31 1 30.78 1 30.5V1.5Z"
                          fill="white"
                        />
                        <path
                          d="M5.5 14H18.5C18.6326 14 18.7598 13.9473 18.8536 13.8536C18.9473 13.7598 19 13.6326 19 13.5C19 13.3674 18.9473 13.2402 18.8536 13.1464C18.7598 13.0527 18.6326 13 18.5 13H5.5C5.36739 13 5.24021 13.0527 5.14645 13.1464C5.05268 13.2402 5 13.3674 5 13.5C5 13.6326 5.05268 13.7598 5.14645 13.8536C5.24021 13.9473 5.36739 14 5.5 14ZM5.5 18H18.5C18.6326 18 18.7598 17.9473 18.8536 17.8536C18.9473 17.7598 19 17.6326 19 17.5C19 17.3674 18.9473 17.2402 18.8536 17.1464C18.7598 17.0527 18.6326 17 18.5 17H5.5C5.36739 17 5.24021 17.0527 5.14645 17.1464C5.05268 17.2402 5 17.3674 5 17.5C5 17.6326 5.05268 17.7598 5.14645 17.8536C5.24021 17.9473 5.36739 18 5.5 18ZM5.5 10H11.5C11.6326 10 11.7598 9.94732 11.8536 9.85355C11.9473 9.75979 12 9.63261 12 9.5C12 9.36739 11.9473 9.24021 11.8536 9.14645C11.7598 9.05268 11.6326 9 11.5 9H5.5C5.36739 9 5.24021 9.05268 5.14645 9.14645C5.05268 9.24021 5 9.36739 5 9.5C5 9.63261 5.05268 9.75979 5.14645 9.85355C5.24021 9.94732 5.36739 10 5.5 10ZM5.5 22H18.5C18.6326 22 18.7598 21.9473 18.8536 21.8536C18.9473 21.7598 19 21.6326 19 21.5C19 21.3674 18.9473 21.2402 18.8536 21.1464C18.7598 21.0527 18.6326 21 18.5 21H5.5C5.36739 21 5.24021 21.0527 5.14645 21.1464C5.05268 21.2402 5 21.3674 5 21.5C5 21.6326 5.05268 21.7598 5.14645 21.8536C5.24021 21.9473 5.36739 22 5.5 22ZM5.5 26H18.5C18.6326 26 18.7598 25.9473 18.8536 25.8536C18.9473 25.7598 19 25.6326 19 25.5C19 25.3674 18.9473 25.2402 18.8536 25.1464C18.7598 25.0527 18.6326 25 18.5 25H5.5C5.36739 25 5.24021 25.0527 5.14645 25.1464C5.05268 25.2402 5 25.3674 5 25.5C5 25.6326 5.05268 25.7598 5.14645 25.8536C5.24021 25.9473 5.36739 26 5.5 26Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_399_1721">
                          <rect width="24" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    0 Collateral or documents
                  </button>
                </div>
                <div className="col-12 col-sm-4 productsDivBtn">
                  <button className="btn primary-gradient-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M28.3346 16.0002H11.8613M6.04664 16.0002H3.66797M6.04664 16.0002C6.04664 15.2293 6.35287 14.49 6.89798 13.9449C7.44308 13.3998 8.18241 13.0935 8.9533 13.0935C9.7242 13.0935 10.4635 13.3998 11.0086 13.9449C11.5537 14.49 11.86 15.2293 11.86 16.0002C11.86 16.7711 11.5537 17.5104 11.0086 18.0555C10.4635 18.6006 9.7242 18.9068 8.9533 18.9068C8.18241 18.9068 7.44308 18.6006 6.89798 18.0555C6.35287 17.5104 6.04664 16.7711 6.04664 16.0002ZM28.3346 24.8095H20.6706M20.6706 24.8095C20.6706 25.5806 20.3637 26.3207 19.8184 26.866C19.2732 27.4112 18.5337 27.7175 17.7626 27.7175C16.9917 27.7175 16.2524 27.4099 15.7073 26.8648C15.1622 26.3197 14.856 25.5804 14.856 24.8095M20.6706 24.8095C20.6706 24.0384 20.3637 23.2996 19.8184 22.7544C19.2732 22.2092 18.5337 21.9028 17.7626 21.9028C16.9917 21.9028 16.2524 22.2091 15.7073 22.7542C15.1622 23.2993 14.856 24.0386 14.856 24.8095M14.856 24.8095H3.66797M28.3346 7.19085H24.1946M18.38 7.19085H3.66797M18.38 7.19085C18.38 6.41995 18.6862 5.68063 19.2313 5.13552C19.7764 4.59042 20.5157 4.28418 21.2866 4.28418C21.6683 4.28418 22.0463 4.35936 22.399 4.50544C22.7516 4.65151 23.072 4.86561 23.342 5.13552C23.6119 5.40543 23.826 5.72586 23.972 6.07851C24.1181 6.43117 24.1933 6.80914 24.1933 7.19085C24.1933 7.57256 24.1181 7.95053 23.972 8.30318C23.826 8.65583 23.6119 8.97626 23.342 9.24617C23.072 9.51608 22.7516 9.73018 22.399 9.87626C22.0463 10.0223 21.6683 10.0975 21.2866 10.0975C20.5157 10.0975 19.7764 9.79128 19.2313 9.24617C18.6862 8.70106 18.38 7.96174 18.38 7.19085Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </svg>
                    Low Interest & Flexi tenures
                  </button>
                </div>
              </div>

              <div className="row productsDiv">
                <div className="col-sm-2"></div>
                <div className="col-sm-4 productsDivBtn">
                  <button className="btn primary-gradient-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_399_1732)">
                        <path
                          d="M6.75 15.75V15.375C6.75 14.6788 7.02656 14.0111 7.51884 13.5188C8.01113 13.0266 8.67881 12.75 9.375 12.75C10.0712 12.75 10.7389 13.0266 11.2312 13.5188C11.7234 14.0111 12 14.6788 12 15.375V15.51C12 16.1505 11.778 16.77 11.37 17.265L6.75 22.875V23.25H12.75M20.25 20.25H14.25V19.875C15.7171 17.6744 16.5 15.0888 16.5 12.444V12M20.25 20.25V15M20.25 20.25V24M24 12V19.125M24 19.125C24 18.4288 24.2766 17.7611 24.7688 17.2688C25.2611 16.7766 25.9288 16.5 26.625 16.5C27.3212 16.5 27.9889 16.7766 28.4812 17.2688C28.9734 17.7611 29.25 18.4288 29.25 19.125V24M24 19.125V24M18 35.25C8.4735 35.25 0.75 27.5265 0.75 18C0.75 8.4735 8.4735 0.75 18 0.75C27.5265 0.75 35.25 8.4735 35.25 18C35.25 27.5265 27.5265 35.25 18 35.25Z"
                          stroke="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_399_1732">
                          <rect width="36" height="36" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Available 24*7
                  </button>
                </div>
                <div className="col-sm-4 productsDivBtn">
                  {" "}
                  <button className="btn primary-gradient-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M34.0481 8.91413C33.9671 8.86346 33.8744 8.83429 33.779 8.82937C33.6835 8.82445 33.5883 8.84394 33.5025 8.886C27.263 11.9348 22.8473 10.5229 18.1744 9.02663C13.5014 7.53038 8.65266 5.97929 2.0025 9.22632C1.90783 9.2727 1.8281 9.34476 1.77241 9.43427C1.71671 9.52378 1.68729 9.62714 1.6875 9.73257V26.6076C1.68731 26.7032 1.71148 26.7972 1.75774 26.8809C1.804 26.9645 1.87081 27.035 1.95188 27.0857C2.03294 27.1364 2.12558 27.1655 2.22104 27.1704C2.31651 27.1754 2.41166 27.1559 2.4975 27.1138C8.73703 24.0651 13.1527 25.4769 17.8256 26.9732C20.4778 27.8169 23.1806 28.6874 26.235 28.6874C28.5708 28.6874 31.1133 28.1812 33.9947 26.7735C34.0894 26.7271 34.1691 26.6551 34.2248 26.5655C34.2805 26.476 34.3099 26.3727 34.3097 26.2673V9.39225C34.3102 9.29692 34.2864 9.20303 34.2407 9.1194C34.1949 9.03576 34.1287 8.96513 34.0481 8.91413ZM33.1875 25.9129C27.1139 28.7633 22.7672 27.3726 18.1716 25.9016C15.5194 25.0579 12.8166 24.1888 9.76219 24.1888C7.65281 24.1888 5.36344 24.6107 2.8125 25.7273V10.0869C8.88609 7.23647 13.2328 8.62725 17.8284 10.0982C22.3172 11.5312 26.9536 13.0176 33.1875 10.2726V25.9129ZM18 14.0624C17.2212 14.0624 16.46 14.2933 15.8124 14.726C15.1649 15.1587 14.6602 15.7736 14.3622 16.4931C14.0642 17.2126 13.9862 18.0043 14.1382 18.7681C14.2901 19.5319 14.6651 20.2335 15.2158 20.7841C15.7664 21.3348 16.468 21.7098 17.2318 21.8618C17.9956 22.0137 18.7873 21.9357 19.5068 21.6377C20.2263 21.3397 20.8413 20.835 21.2739 20.1875C21.7066 19.54 21.9375 18.7787 21.9375 17.9999C21.9375 16.9556 21.5227 15.9541 20.7842 15.2157C20.0458 14.4773 19.0443 14.0624 18 14.0624ZM18 20.8124C17.4437 20.8124 16.9 20.6475 16.4375 20.3384C15.9749 20.0294 15.6145 19.5901 15.4016 19.0762C15.1887 18.5623 15.133 17.9968 15.2415 17.4512C15.3501 16.9056 15.6179 16.4045 16.0113 16.0112C16.4046 15.6178 16.9057 15.35 17.4513 15.2415C17.9969 15.1329 18.5624 15.1886 19.0763 15.4015C19.5902 15.6144 20.0295 15.9749 20.3385 16.4374C20.6476 16.8999 20.8125 17.4437 20.8125 17.9999C20.8125 18.7458 20.5162 19.4612 19.9887 19.9886C19.4613 20.5161 18.7459 20.8124 18 20.8124ZM7.3125 13.4999V20.2499C7.3125 20.3991 7.25324 20.5422 7.14775 20.6477C7.04226 20.7531 6.89919 20.8124 6.75 20.8124C6.60082 20.8124 6.45774 20.7531 6.35225 20.6477C6.24676 20.5422 6.1875 20.3991 6.1875 20.2499V13.4999C6.1875 13.3507 6.24676 13.2077 6.35225 13.1022C6.45774 12.9967 6.60082 12.9374 6.75 12.9374C6.89919 12.9374 7.04226 12.9967 7.14775 13.1022C7.25324 13.2077 7.3125 13.3507 7.3125 13.4999ZM28.6875 22.4999V15.7499C28.6875 15.6007 28.7468 15.4577 28.8523 15.3522C28.9577 15.2467 29.1008 15.1874 29.25 15.1874C29.3992 15.1874 29.5423 15.2467 29.6478 15.3522C29.7532 15.4577 29.8125 15.6007 29.8125 15.7499V22.4999C29.8125 22.6491 29.7532 22.7922 29.6478 22.8977C29.5423 23.0031 29.3992 23.0624 29.25 23.0624C29.1008 23.0624 28.9577 23.0031 28.8523 22.8977C28.7468 22.7922 28.6875 22.6491 28.6875 22.4999Z"
                        fill="white"
                      />
                    </svg>
                    Loan Disbursal in minutes
                  </button>
                </div>
                <div className="col-sm-2"></div>
              </div>
            </div>
          </div>
          <DescriptionSection
            heading="Why CreditMitra for Your Travel Loan?"
            points={[
              "Flexible Repayment: Choose a loan term that aligns with your budget, allowing comfortable repayment.",
              "Competitive Rates: We offer competitive interest rates on personal loans for travel, making your dream vacation an affordable reality.",
              "Quick and Easy Approval: Apply online for a travel loan and get a fast decision to jumpstart your travel planning.",
              "Minimal Documents: We require only the essential documents to get your travel loan approved quickly.",
            ]}
            img={StepsImg}
          />
          <DescriptionSection
            heading="Get Travel Loan with Ease: A Simple 4-Step Loan Process"
            points={[
              "Quick Application: Provide your basic personal details online in minutes.",
              "Seamless Verification: Securely provide your bank details for us to verify your information.",
              "Easy Approval: Review and accept the loan offer that fits your travel budget.",
              "Funds in Reach: Get the holiday loan amount deposited directly into your account.",
            ]}
            img={StepsImg2}
          />
          <div className="uncolored-heading">Travel Loan Details</div>
          <div className="row rowProduct">
            <div className="col-sm-12">
              <p className="table-data-products">
                CreditMitra provides clear information regarding interest fees
                and additional expenses linked to extending credit. Below table
                is a basic summary of what you can anticipate.
              </p>
              <p className="table-data-products">
                CreditMitra offers appealing rates for individuals requiring
                immediate personal loans. Remember to factor in the total
                expenses of the loan, such as interest rates and processing
                fees, when determining your choice.
              </p>
            </div>
            <div className="col-sm-10">
              <table border="1" cellspacing="0" cellpadding="5">
                <thead>
                  <tr>
                    <th className="th-products-header">Parameter</th>
                    <th className="th-products-header">Amount payable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="th-products">Loan Amount </td>
                    <td className="th-products-desc">
                      5,000 to 2,00,000 depending upon the requirement and
                      profile
                    </td>
                  </tr>
                  <tr>
                    <td className="th-products">Interest Rate</td>
                    <td className="th-products-desc">
                      Starting as low as 3% per month
                    </td>
                  </tr>
                  <tr>
                    <td className="th-products">Age</td>
                    <td className="th-products-desc">21 - 55 Years</td>
                  </tr>
                  <tr>
                    <td className="th-products">Processing Fee</td>
                    <td className="th-products-desc">
                      Varies from 2% to 10% on every loan
                    </td>
                  </tr>
                  <tr>
                    <td className="th-products">Loan Tenure</td>
                    <td className="th-products-desc">3 - 18 Months</td>
                  </tr>
                  <tr>
                    <td className="th-products">Late Payment Fee</td>
                    <td className="th-products-desc">
                      Penal charges & late fees will be charged to your total
                      outstanding loan or 50 rupees on a daily basis
                    </td>
                  </tr>
                  <tr>
                    <td className="th-products">Pre closure charges</td>
                    <td className="th-products-desc">
                      5% to 10% of the outstanding amount
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* old code */}
          <div className="btn-container text-center"></div>

          <div className="uncolored-heading eligibility">
            Eligibility Criteria
          </div>
          <div className="products-hero-section ">
            <div className="btn-container">
              <div className="row productsDiv">
                <div className="col-12 col-sm-4 productsDivBtn">
                  <button className="btn primary-gradient-btn">
                    Indian Citizen
                  </button>
                </div>
                <div className="col-12 col-sm-4 productsDivBtn">
                  <button className="btn primary-gradient-btn">
                    Age Limit: 21- 55 Years
                  </button>
                </div>
                <div className="col-12 col-sm-4 productsDivBtn">
                  <button className="btn primary-gradient-btn">
                    Salaried Individual
                  </button>
                </div>
              </div>
              <div className="row productsDiv">
                <div className="col-sm-2"></div>
                <div className="col-sm-4 productsDivBtn">
                  <button className="btn primary-gradient-btn">
                    Monthly Income: {">"}INR 15,000
                  </button>
                </div>
                <div className="col-sm-4 productsDivBtn">
                  {" "}
                  <button className="btn primary-gradient-btn">
                    A good credit score
                  </button>
                </div>
                <div className="col-sm-2"></div>
              </div>
            </div>
          </div>
          {/* new from here */}
          {/* new class */}
          <div
            className="product-apply-button"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* margin-left: 0 for fixing this */}
            <Link
              to="https://creditmitra.cloudbankin.com/onboard/#/login"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <buttton
                style={{ marginLeft: "0px" }}
                className="btn brand-primary py-3 px-4"
              >
                {" "}
                Apply Now
              </buttton>
            </Link>
          </div>

          <h6
            style={{
              color: "#fff",
              fontSize: "18px",
              fontFamily: "poppins",
              marginTop: "3rem",
              textAlign: "center",
              fontWeight: "normal",
              marginBottom: "-60px",
            }}
          >
            Get our travel loans with a simple application process. We'll ensure
            a smooth journey, both financially and physically, so you can set
            off on your dream adventure!
          </h6>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default TravelLoan;
