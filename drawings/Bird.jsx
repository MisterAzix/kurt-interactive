import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export default function Bird(props) {
    return (
        <Svg {...props} width="73" height="43" viewBox="0 0 73 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M72.2983 29.8465C70.931 29.9217 69.5876 30.2369 68.3296 30.7778C67.3559 31.1502 66.3618 31.4671 65.3522 31.7268C63.2355 32.2842 61.3588 33.346 59.5208 34.549C57.4606 35.893 55.8202 37.6675 54.0811 39.3538C53.7777 39.6466 53.499 39.964 53.2097 40.2745C52.3737 41.1811 52.3736 41.1811 52.1831 42.3629L51.1566 42.497C50.5992 40.0593 48.9482 38.4083 47.4595 36.6586C46.8774 35.9706 46.2001 35.3674 45.5686 34.7218C45.4284 34.583 45.3009 34.4319 45.1876 34.2703C45.0289 34.0339 44.6479 33.787 45.0007 33.4907C45.297 33.2402 45.5898 33.5295 45.8085 33.7341C47.7734 35.5579 49.7243 37.3959 51.153 39.703C51.2836 39.9111 51.4494 40.1016 51.654 40.3733L52.5324 39.5196C54.0423 38.0379 55.4604 36.4504 57.0832 35.1099C58.6063 33.8998 60.2236 32.8134 61.9197 31.8608C62.9184 31.3375 63.9728 30.9281 65.0629 30.6402C66.8656 30.0899 68.6929 29.6137 70.5133 29.1233C70.8418 29.0417 71.1808 29.0108 71.5187 29.0316C72.0372 29.0528 72.1995 29.2432 72.2983 29.8465Z"
                fill="black"
            />
            <path
                d="M23.5626 17.4289C23.7939 17.4119 24.0254 17.4577 24.2328 17.5613C24.4402 17.665 24.6157 17.8228 24.7409 18.018C25.8521 19.3656 26.9986 20.6779 28.1204 22.0149C28.9883 23.0521 29.8349 24.1033 30.6957 25.1476C30.8686 25.3592 31.0485 25.5603 31.2813 25.8249C31.6682 25.5122 32.0391 25.1802 32.3926 24.8301C34.2199 22.8016 36.5412 21.4893 38.8977 20.2052C41.1173 19.0276 43.5336 18.266 46.0272 17.958C47.4806 17.7086 48.9737 17.8374 50.3628 18.332C50.5733 18.4101 50.7773 18.5045 50.9731 18.6142C51.0354 18.6372 51.0915 18.6743 51.1373 18.7224C51.183 18.7706 51.2171 18.8286 51.2368 18.892C51.2566 18.9553 51.2615 19.0224 51.2513 19.088C51.241 19.1536 51.2159 19.216 51.1778 19.2704C51.0238 19.2987 50.866 19.2987 50.7121 19.2704C49.1599 18.6354 47.5583 18.6918 45.9673 18.9705C44.2775 19.2668 42.563 19.5349 41.0285 20.3251C39.4939 21.1154 37.8535 21.9197 36.326 22.8263C34.9396 23.6483 33.8566 24.8653 32.7312 26.0013C32.3396 26.3999 31.9904 26.8444 31.6306 27.2571L30.6252 26.9679C29.7997 25.398 28.565 24.0822 27.4008 22.7134C26.4166 21.5563 25.3794 20.4416 24.4058 19.2739C24.0863 18.8466 23.8131 18.3866 23.5908 17.9016C23.5062 17.7816 23.5626 17.5982 23.5626 17.4289Z"
                fill="black"
            />
            <path
                d="M7.94181 41.6151C7.5079 41.5939 7.21509 41.3469 6.88349 40.8531C5.96627 39.442 4.92207 38.1085 3.89197 36.7715C2.89762 35.5436 1.76741 34.4324 0.522963 33.4589C0.145495 33.1485 -0.20726 32.831 0.145514 32.1537C3.17937 34.295 5.55705 36.9796 7.62783 40.0346C7.83406 39.8895 8.03194 39.7329 8.22051 39.5654C9.36703 38.4048 10.4959 37.2265 11.653 36.073C12.0622 35.688 12.4908 35.3241 12.9371 34.9829C14.2459 33.9246 15.5547 32.8663 16.8811 31.8079C17.271 31.4829 17.6944 31.2003 18.144 30.9648C19.7315 30.1781 21.3402 29.4302 22.9453 28.6683C23.0688 28.6048 23.224 28.4954 23.3333 28.5271C23.5355 28.5685 23.7174 28.6781 23.8484 28.8376C23.9119 28.9399 23.8237 29.208 23.7178 29.3279C23.5666 29.4534 23.3931 29.5492 23.2063 29.6102C22.0845 30.1393 20.9627 30.6685 19.8409 31.1941C18.6616 31.7373 17.572 32.457 16.6095 33.3284C15.7769 34.0833 14.8209 34.7007 13.9707 35.445C13.2052 36.1047 12.5067 36.8385 11.7871 37.5617C10.9863 38.3519 10.1855 39.1456 9.40583 39.9605C8.94017 40.4368 8.50272 40.9942 7.94181 41.6151Z"
                fill="black"
            />
            <path
                d="M28.6849 0.813204C28.3099 0.891869 27.9306 0.948425 27.5489 0.98255C24.1068 1.05078 20.7971 2.32127 18.1934 4.57379C17.6748 5.01122 17.1351 5.43102 16.6623 5.90374C16.0747 6.43417 15.5449 7.02543 15.0819 7.66761C14.14 9.13162 13.0817 10.5462 12.6442 12.2819C12.5826 12.4468 12.5046 12.6052 12.4114 12.7546C11.8534 12.6897 11.3361 12.4298 10.951 12.0208C9.56455 10.4228 8.16754 8.84587 6.78467 7.24428C6.57469 7.01632 6.39992 6.75831 6.2661 6.47876C6.11794 6.14363 6.34723 5.89668 6.69295 6.02015C6.92069 6.11648 7.12254 6.26514 7.28209 6.45407C8.40744 7.67466 9.51869 8.92348 10.644 10.1335C10.9968 10.5215 11.3813 10.8849 11.854 11.3647C12.2068 10.7367 12.4855 10.2358 12.743 9.72075C14.0215 7.16811 15.8781 4.94909 18.1652 3.24029C20.8698 1.11634 24.2159 -0.0255646 27.6548 0.00182851C28.2898 -0.0122824 28.3674 0.0371016 28.6849 0.813204Z"
                fill="black"
            />
        </Svg>
    );
}

const Svg = styled.svg`
    position: absolute;
    ${(props) =>
        props.top &&
        css`
            top: ${props.top}%;
        `}
    ${(props) =>
        props.bottom &&
        css`
            bottom: ${props.bottom}%;
        `}
    ${(props) =>
        props.left &&
        css`
            left: ${props.left}%;
        `}
    ${(props) =>
        props.right &&
        css`
            right: ${props.right}%;
        `}
`;