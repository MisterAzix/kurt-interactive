import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

export default function Pen (props) {
    return (
        <Svg {...props} width="170" height="52" viewBox="0 0 170 52" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M164.03 0.422608C162.494 -0.25534 161.173 0.0223075 159.89 0.293487L159.239 0.422608C158.419 0.577568 157.605 0.719629 156.792 0.861675C154.546 1.26199 152.235 1.66875 149.97 2.26922C147.874 2.81804 145.706 3.28291 143.616 3.73487C142.51 3.96731 141.407 4.20836 140.309 4.45801L136.924 5.22636C133.162 6.07864 129.276 6.96321 125.461 7.88005C121.191 8.90666 116.608 10.0301 112.006 11.3021C105.887 12.9873 100.178 14.298 94.5664 15.3052L92.3336 15.6926C89.8144 16.1317 87.2105 16.5772 84.6848 17.2035C83.4415 17.5134 82.1786 17.8491 80.9678 18.1978C78.67 18.8434 76.294 19.4891 73.931 19.8959C68.2155 20.8902 62.6498 22.3042 57.4812 23.6859C56.3355 23.9894 55.1963 24.3316 54.0571 24.6544C51.5604 25.453 49.0169 26.0999 46.4408 26.5914C46.0893 26.6495 45.7313 26.7464 45.3863 26.8303C44.3252 27.108 43.5636 27.2629 42.8736 26.9013C43.9384 26.0389 45.1166 25.3243 46.3758 24.7771L46.7012 24.6221C50.8372 22.55 55.1423 20.8286 59.5708 19.4762C60.6461 19.2292 61.6215 18.6668 62.3699 17.862C62.6788 17.5609 62.893 17.1774 62.9866 16.7579C63.0801 16.3385 63.0491 15.9012 62.8972 15.4989C62.6965 15.0805 62.3879 14.7223 62.0026 14.4603C61.6174 14.1984 61.1692 14.0422 60.7034 14.0074C59.3246 13.9426 57.9479 14.1739 56.6675 14.6853C56.3159 14.8016 55.9709 14.9113 55.6194 15.0082C52.4102 15.9186 49.1554 16.8806 46.0112 17.8104C41.6888 19.1017 37.2168 20.393 32.7967 21.6069L32.3801 21.7231C27.8234 22.9628 23.1495 24.2412 18.5537 25.5971C17.1151 26.0297 15.6048 26.3783 14.1402 26.7141C12.4607 27.1079 10.7226 27.5083 9.04963 28.0442C7.37666 28.5801 5.6907 28.9933 4.03075 29.4065C1.74236 29.9213 -0.5138 30.5681 -2.72623 31.3435C-3.10322 31.4408 -3.4318 31.6705 -3.6509 31.9899C-3.87001 32.3094 -3.96474 32.6968 -3.9175 33.0804V33.7906C-3.93582 34.6021 -3.8901 35.4138 -3.78079 36.2183C-4.5359 36.4313 -5.26498 36.6444 -5.93547 36.8639C-7.34154 37.2901 -8.04458 38.6783 -8.53931 39.9825C-9.84123 43.4239 -8.25943 49.1122 -5.35614 51.2494C-4.64363 51.7604 -3.7809 52.0237 -2.902 51.9983C-2.07882 51.9698 -1.26179 51.8463 -0.467416 51.6303C1.57009 51.146 3.61411 50.5714 5.59303 50.0161C8.56141 49.1832 11.6274 48.3245 14.7065 47.7692L17.3884 47.2914C20.0444 46.8201 22.7915 46.3359 25.4799 45.7677C27.1464 45.419 28.8063 44.9541 30.4077 44.5086C31.6705 44.16 32.9725 43.7984 34.2549 43.4949C34.7366 43.3787 35.2118 43.2689 35.6935 43.1656C37.4315 42.7653 39.2347 42.3586 40.9793 41.771H41.0509C41.2666 41.8184 41.492 41.7957 41.6936 41.7061C41.8953 41.6166 42.0625 41.465 42.1705 41.2738C43.0689 39.5822 44.7744 39.2787 46.506 38.9559C46.9096 38.8784 47.3066 38.8074 47.6972 38.717C50.8934 37.9874 54.2068 37.3353 57.3444 36.709C60.4821 36.0827 63.6132 35.4629 66.7313 34.772L69.8299 34.0618C74.2824 33.0351 78.8848 31.9827 83.4415 31.1498L85.466 30.7753C89.8534 29.9747 94.3972 29.1418 98.8758 28.4574C102.443 27.915 106.036 27.1661 109.454 26.3848L112.67 25.6939C121.868 23.7569 128.944 22.4656 135.583 21.4648C138.402 21.0516 141.169 20.477 143.753 19.9152C146.012 19.431 148.264 18.9274 150.523 18.4238C154.038 17.6425 157.684 16.829 161.257 16.1058C161.952 15.9733 162.654 15.8827 163.36 15.8346C163.842 15.783 164.323 15.7378 164.799 15.6732C164.829 15.6793 164.86 15.6793 164.89 15.6732C164.956 15.716 165.025 15.7527 165.098 15.783C165.376 15.853 165.667 15.858 165.947 15.7975C166.227 15.737 166.489 15.6126 166.712 15.4343L166.862 15.3439C167.848 14.8472 168.668 14.0782 169.224 13.1297C169.779 12.1811 170.047 11.0935 169.993 9.99783C169.811 5.76872 168.73 2.51456 164.03 0.422608ZM-2.61558 33.8487V33.1256C-2.61558 32.7575 -2.61556 32.7511 -2.27055 32.6155C-0.103104 31.8443 2.1073 31.1976 4.34971 30.6785C6.02919 30.2588 7.76073 29.8262 9.45323 29.2903C11.1457 28.7544 12.7862 28.3735 14.4396 27.999C15.9173 27.6568 17.4535 27.3016 18.9312 26.8561C23.4879 25.4873 28.1944 24.2089 32.7251 22.9821L33.1417 22.8659C37.5748 21.6585 42.0534 20.3349 46.3823 19.0565C49.5264 18.1332 52.7747 17.1712 55.9774 16.2672C56.342 16.1639 56.7065 16.0477 57.0711 15.925C58.1758 15.4626 59.3682 15.2424 60.5667 15.2794C60.8121 15.2905 61.0498 15.368 61.254 15.5034C61.4583 15.6388 61.6213 15.827 61.7254 16.0477C61.8296 16.2479 61.6798 16.6546 61.3674 17.0291C60.7763 17.6313 60.0205 18.0487 59.1932 18.2301C54.7023 19.5861 50.3341 21.3139 46.1349 23.3954L45.8094 23.5568C44.3971 24.1683 43.0815 24.9795 41.9037 25.9651C41.817 26.0501 41.7561 26.1575 41.7279 26.275C41.0218 26.4203 40.2993 26.4702 39.5797 26.4235C38.5993 26.3509 37.6137 26.4537 36.6699 26.727C32.9234 27.9348 29.0947 28.8756 25.213 29.5421C22.5376 30.0522 19.8426 30.6849 17.2387 31.2983L14.8757 31.8471L10.0001 33.0029C6.84289 33.7583 3.57505 34.5395 0.346286 35.211C-0.630156 35.4177 -1.60657 35.6565 -2.5114 35.8954C-2.59105 35.2162 -2.62587 34.5325 -2.61558 33.8487ZM41.0965 40.5378C40.9238 40.5164 40.7484 40.5318 40.5822 40.583C38.8712 41.1295 37.133 41.5886 35.3745 41.9582L33.9294 42.2875C32.6275 42.5974 31.3255 42.9655 30.0236 43.3206C28.4418 43.7596 26.8014 44.2181 25.174 44.5603C22.5115 45.1156 19.771 45.5998 17.1281 46.0711L14.4396 46.5489C11.3215 47.1171 8.22292 47.9823 5.2285 48.8281C3.27561 49.3769 1.23161 49.9516 -0.779864 50.4229C-2.08179 50.7264 -3.50087 51.0686 -4.58797 50.268C-7.00955 48.4859 -8.44168 43.3722 -7.33505 40.499C-6.94447 39.4853 -6.43019 38.4136 -5.56441 38.1488C-3.76125 37.6 -1.65866 36.9802 0.60017 36.5153C3.85498 35.8373 7.10979 35.0561 10.293 34.3006C11.9161 33.9089 13.5369 33.5237 15.1557 33.1449L17.5252 32.5896C20.129 31.9827 22.7914 31.35 25.4473 30.8463C29.3907 30.1686 33.2803 29.2128 37.0865 27.986C37.6918 27.8052 38.323 27.7245 38.9548 27.7472H39.6513C39.0984 28.5684 38.7243 29.495 38.5528 30.4678C38.3813 31.4405 38.4163 32.4381 38.6554 33.3967C39.0808 35.7458 40.0999 37.9494 41.6172 39.8017C41.4213 40.0308 41.247 40.2771 41.0965 40.5378ZM166.231 14.2334L166.003 14.3625C165.863 14.4556 165.712 14.5315 165.554 14.5885C165.516 14.5165 165.485 14.4408 165.463 14.3625C165.416 14.1984 165.305 14.0594 165.155 13.9759C165.005 13.8925 164.828 13.8713 164.662 13.917C164.533 13.9526 164.418 14.0268 164.333 14.1297C164.248 14.2326 164.197 14.359 164.187 14.4917L163.21 14.5885C162.459 14.6458 161.711 14.7449 160.971 14.8855C157.371 15.6151 153.732 16.4286 150.211 17.2099C147.958 17.7135 145.706 18.2171 143.454 18.7014C140.85 19.2502 138.148 19.8249 135.369 20.2316C128.69 21.2195 121.594 22.5237 112.37 24.4801L109.115 25.171C105.691 25.9199 102.144 26.6883 98.6219 27.2242C94.1173 27.915 89.567 28.7479 85.173 29.555L83.1486 29.923C78.5918 30.7624 73.944 31.8213 69.4784 32.8479L66.3863 33.5581C63.2812 34.2619 60.1045 34.8882 57.032 35.4951C53.8488 36.1408 50.5614 36.7865 47.3457 37.5096C46.9746 37.5935 46.5971 37.6646 46.213 37.7356C44.9245 37.8828 43.681 38.2939 42.5611 38.943C41.2019 37.2555 40.2889 35.2581 39.9052 33.132C39.4626 30.9496 39.9052 29.1676 41.2071 27.8376C41.2554 27.7924 41.2932 27.7373 41.3178 27.6761L41.6498 27.6245C42.9973 28.7286 44.4815 28.3476 45.6792 28.0377C46.0112 27.9538 46.3302 27.8698 46.6231 27.8246C49.2503 27.3322 51.8457 26.6854 54.3956 25.8876C55.5218 25.5583 56.6544 25.242 57.7871 24.9256C62.9232 23.5503 68.4564 22.1492 74.1262 21.1614C76.5478 20.7352 78.9564 20.0767 81.2868 19.431C82.4976 19.1017 83.7474 18.753 84.9778 18.4496C87.4579 17.8362 90.0357 17.3907 92.5289 16.9581L94.7682 16.5642C100.425 15.5505 106.167 14.2334 112.344 12.5353C116.901 11.2762 121.497 10.1528 125.754 9.12618C129.562 8.20934 133.442 7.33123 137.204 6.47895L140.589 5.71061C141.683 5.4588 142.783 5.22636 143.877 4.98746C145.986 4.5355 148.16 4.06416 150.289 3.50889C152.417 2.95361 154.793 2.52103 157.007 2.12717L159.467 1.68813L160.118 1.55252C161.296 1.30071 162.312 1.08765 163.458 1.59772C167.559 3.4185 168.477 6.18841 168.626 10.0624C168.679 10.9134 168.481 11.7612 168.055 12.502C167.63 13.2428 166.996 13.8445 166.231 14.2334Z"
            />
        </Svg>
    )
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
`
