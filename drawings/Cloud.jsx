import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

export default function Cloud (props) {
    return (
        <Svg {...props} width="151" height="85" viewBox="0 0 151 85" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M99.0778 25.8395C98.591 26.1923 98.1359 26.5098 97.6667 26.8167C95.61 28.1608 93.3593 28.3266 90.9957 27.9844C89.4565 27.77 87.9775 27.243 86.6496 26.4357C86.3016 26.2417 85.9969 25.9785 85.7542 25.6625C85.5116 25.3464 85.3361 24.9841 85.2385 24.5978C85.1996 24.2633 85.036 23.9558 84.7803 23.7367C84.5246 23.5176 84.1956 23.4031 83.8591 23.416C83.1037 23.3191 82.3586 23.1538 81.6331 22.9221C80.8673 22.7019 80.193 22.2404 79.7105 21.6062C79.6306 21.4901 79.5446 21.3782 79.453 21.2711C78.1583 19.9517 78.2288 18.4489 79.0579 16.9955C79.6825 15.9894 80.4007 15.0445 81.2027 14.1733C82.0423 13.1961 83.2347 12.8998 84.4483 12.7199C84.921 12.6493 85.4043 12.6528 85.8841 12.6246C86.9424 12.5647 87.9125 12.7058 88.7521 13.3937C88.8631 13.4768 88.9811 13.55 89.1049 13.6124C89.8739 14.0357 89.9304 14.0392 90.516 13.3796C92.6785 10.9701 96.5978 10.3351 99.3777 11.7286C99.8833 12.0276 100.33 12.4161 100.697 12.8751C101.026 13.2975 101.331 13.738 101.611 14.1945C101.963 14.6707 102.122 14.706 102.553 14.2897C103.609 13.1888 104.985 12.4472 106.486 12.1693C107.986 11.8915 109.536 12.0915 110.917 12.741C111.784 13.1748 112.48 13.8881 112.892 14.766C113.069 15.1187 113.245 15.4715 113.39 15.8243C113.484 16.0741 113.637 16.2973 113.837 16.4743C114.037 16.6514 114.277 16.777 114.536 16.8403C115.366 17.1254 116.1 17.6374 116.653 18.3184C117.401 19.1545 117.415 20.2093 117.193 21.2041C116.819 22.939 115.78 24.4585 114.3 25.4374C113.922 25.7132 113.483 25.8948 113.02 25.9672C112.558 26.0396 112.085 26.0007 111.64 25.8536C111.076 25.6773 110.518 25.4726 109.968 25.261C109.829 25.1897 109.668 25.1741 109.518 25.2174C109.368 25.2606 109.24 25.3595 109.16 25.4938C108.941 25.7866 108.666 26.0406 108.455 26.3475C108.255 26.6391 107.999 26.8868 107.7 27.0755C107.402 27.2642 107.068 27.3898 106.719 27.4447C105.616 27.741 104.481 27.8975 103.339 27.9103C102.406 27.8832 101.501 27.584 100.736 27.0495C100.164 26.6615 99.6316 26.2452 99.0778 25.8395ZM101.935 16.0254C101.632 15.5597 101.378 15.1646 101.117 14.7765C100.739 14.2192 100.383 13.6406 99.9527 13.122C99.6933 12.8276 99.3779 12.5878 99.0249 12.4165C97.534 11.6965 95.8252 11.5704 94.2448 12.0637C93.3013 12.2717 92.4313 12.7298 91.726 13.3901C91.3732 13.7523 91.0287 14.1239 90.6924 14.5049C90.1561 15.1223 90.0644 15.1364 89.3659 14.6672C89.2707 14.6037 89.186 14.5261 89.0872 14.4696C88.2335 14.004 87.4715 13.2702 86.4132 13.3478C85.3549 13.4254 84.3424 13.5595 83.3158 13.7394C82.6392 13.8662 82.0355 14.2443 81.6261 14.7977C80.8829 15.7549 80.1656 16.7309 79.4741 17.7257C79.3039 17.9556 79.1922 18.2235 79.1486 18.5062C79.1049 18.7889 79.1307 19.078 79.2237 19.3485C79.7987 20.8478 80.6348 22.1072 82.3246 22.5481C82.5682 22.6023 82.8049 22.684 83.0301 22.7916C83.5125 23.0357 84.0639 23.1079 84.5929 22.9962C85.4748 22.8515 85.5207 22.9115 85.6759 23.7829C85.7853 24.4108 85.8064 25.1375 86.3815 25.5467C87.108 26.0776 87.8884 26.5304 88.7098 26.8979C90.456 27.6246 92.3575 27.554 94.1989 27.7974C94.2815 27.8149 94.3668 27.8149 94.4494 27.7974C96.238 27.3106 97.9771 26.7391 98.9614 24.9752C98.9967 24.9117 99.0954 24.887 99.2118 24.813C99.3494 24.9435 99.5329 25.0493 99.607 25.2081C100.048 26.15 100.856 26.6403 101.766 26.9931C103.177 27.5328 104.588 27.3459 105.999 27.0601C106.667 26.946 107.296 26.6636 107.824 26.2396C108.353 25.8156 108.766 25.2639 109.022 24.6366C109.227 24.1744 109.425 24.1886 109.887 24.432C110.546 24.7996 111.238 25.1055 111.954 25.3457C112.387 25.4687 112.848 25.4452 113.266 25.2786C115.411 24.3261 116.494 22.6293 116.565 20.308C116.587 20.0096 116.528 19.7106 116.392 19.4437C115.852 18.4771 115.108 17.7398 113.954 17.5317C113.584 17.4647 113.213 17.3624 112.854 17.2777C112.924 16.8473 113.097 16.484 113.005 16.2194C112.451 14.5684 111.538 13.1397 109.199 12.8574C106.962 12.5893 104.941 13.122 103.272 14.7166C102.863 15.1046 102.468 15.5033 101.928 16.0254H101.935Z"
            />
            <path
                d="M124.785 78.0548C124.619 78.1713 124.584 78.1818 124.576 78.203C123.557 81.191 118.766 82.2035 116.216 80.7536C115.358 80.2703 114.452 79.8681 113.746 79.1343C113.288 78.6737 112.941 78.1136 112.734 77.4975C112.674 77.3105 112.61 77.1235 112.54 76.9401C112.208 76.0969 112.141 76.0723 111.227 76.1146C110.139 76.1978 109.049 75.9825 108.075 75.4921C107.1 75.0016 106.278 74.2545 105.696 73.3312C104.878 72.1282 105.096 70.8124 105.562 69.5883C106.296 67.648 107.64 66.2581 109.718 65.7078C111.262 65.2407 112.885 65.0954 114.487 65.2809C114.791 65.3268 115.101 65.3197 115.528 65.3444C115.528 64.9705 115.581 64.6389 115.56 64.3249C115.433 62.6386 116.11 61.1852 116.872 59.76C117.038 59.4469 117.282 59.182 117.581 58.991C117.879 58.8 118.222 58.6894 118.576 58.6699C120.638 58.4299 122.724 58.863 124.52 59.9046C125.726 60.5855 126.951 61.2134 127.776 62.5434C128.081 62.2555 128.369 61.9492 128.637 61.6262C129.163 60.9206 129.586 60.1445 130.168 59.5095C132.927 56.4862 137.132 54.9587 141.294 56.7614C142.452 57.2588 143.598 57.8374 144.254 59.0333C144.776 59.9928 145.08 60.9347 144.448 61.9789C144.184 62.4446 143.965 62.9349 143.796 63.4429C143.707 63.7526 143.642 64.0687 143.602 64.3884C144.159 64.4836 144.625 64.593 145.094 64.6389C146.893 64.8117 148.336 65.7289 149.627 66.8931C150.332 67.5281 150.47 68.3747 150.234 69.3061C149.937 70.4843 149.137 71.3839 148.597 72.4246C147.86 73.8357 146.614 74.3366 145.147 74.4883C143.657 74.601 142.158 74.5132 140.691 74.2272C139.986 74.1144 139.329 73.8745 138.529 74.0262C138.486 74.4107 138.433 74.7917 138.398 75.1762C138.233 76.7349 137.507 78.1806 136.356 79.2437C135.944 79.6312 135.448 79.9164 134.906 80.0762C132.083 80.9017 129.332 80.7818 126.69 79.3989C126.377 79.2098 126.078 79 125.794 78.771L124.785 78.0548ZM113.249 75.1092C113.369 75.2715 113.397 75.2926 113.401 75.3173C113.429 75.4831 113.446 75.6489 113.475 75.8147C113.676 77.0036 113.99 78.136 115.041 78.8909C116.033 79.6439 117.163 80.1941 118.368 80.5101C119.098 80.6861 119.857 80.7013 120.594 80.5545C121.33 80.4076 122.026 80.1024 122.633 79.66C123.592 79.0144 123.934 77.9949 124.217 76.9507C124.308 76.5979 124.397 76.2663 124.813 76.2451C125.229 76.224 125.3 76.5379 125.49 76.7849C125.882 77.2928 126.242 77.889 126.764 78.2171C129.071 79.667 131.565 80.2667 134.281 79.5824C135.271 79.366 136.159 78.8233 136.803 78.0415C137.448 77.2598 137.81 76.2842 137.834 75.2715C137.89 74.9366 137.869 74.5933 137.773 74.2676C137.677 73.9419 137.508 73.6422 137.28 73.3912C137.219 73.347 137.169 73.2901 137.132 73.2246C137.096 73.1591 137.074 73.0865 137.068 73.0117C137.063 72.9369 137.073 72.8617 137.099 72.7914C137.126 72.7212 137.167 72.6574 137.22 72.6045C137.441 72.4488 137.713 72.3821 137.982 72.4175C138.311 72.492 138.629 72.6107 138.927 72.7703C141.2 73.737 143.706 74.0226 146.138 73.5923C146.706 73.5041 147.292 73.3559 147.616 72.855C148.282 71.8837 148.872 70.8623 149.38 69.7999C149.81 68.8333 149.465 68.0925 148.607 67.4469C148.343 67.2459 148.11 67.0024 147.856 66.7872C147.698 66.6281 147.516 66.4948 147.316 66.3921C145.785 65.7889 144.244 65.2633 142.561 65.796C142.458 65.8147 142.353 65.8104 142.252 65.7836C142.152 65.7567 142.058 65.708 141.979 65.6407C141.93 65.5987 141.891 65.5461 141.865 65.4868C141.839 65.4276 141.827 65.3633 141.83 65.2987C141.833 65.2342 141.85 65.1711 141.881 65.1143C141.911 65.0574 141.955 65.0082 142.007 64.9705C142.072 64.9147 142.129 64.8507 142.176 64.78C142.882 63.7216 143.587 62.6633 143.848 61.3898C143.952 61.0156 143.95 60.6202 143.844 60.2469C143.737 59.8736 143.53 59.5367 143.245 59.2732C141.961 58.2011 140.425 57.4728 138.783 57.1565C137.338 56.8633 135.838 57.0298 134.493 57.6328C132.998 58.238 131.697 59.2394 130.729 60.529C129.974 61.545 129.286 62.6139 128.559 63.6511C128.394 63.9094 128.197 64.1464 127.974 64.3566C127.93 64.4059 127.874 64.442 127.811 64.4608C127.748 64.4796 127.681 64.4805 127.617 64.4632C127.554 64.446 127.496 64.4113 127.451 64.3632C127.407 64.3151 127.376 64.2554 127.363 64.1908C127.314 64.0292 127.278 63.8641 127.254 63.6969C127.011 62.6951 126.57 61.8519 125.511 61.478C125.194 61.3594 124.892 61.2005 124.615 61.0053C123.084 59.936 121.233 59.423 119.37 59.5519C119.059 59.5424 118.753 59.6243 118.489 59.7874C118.225 59.9505 118.015 60.1875 117.884 60.4691C117.68 60.8994 117.532 61.3545 117.306 61.7814C116.981 62.4097 116.818 63.1095 116.833 63.8169C116.854 64.4942 116.879 65.1715 116.882 65.8489C116.882 66.6109 116.484 66.9072 115.806 66.5721C114.698 66.0611 113.467 65.8751 112.258 66.0358C110.6 66.2122 109.083 66.6744 107.901 68.0008C107.018 68.9652 106.49 70.2023 106.405 71.5074C106.392 71.9821 106.514 72.4507 106.758 72.8585C107.463 74.0614 108.606 74.7282 109.894 75.155C110.62 75.4039 111.404 75.4285 112.145 75.2256C112.509 75.1575 112.878 75.1186 113.249 75.1092Z"
            />
            <path
                d="M39.6107 82.8032C39.4647 82.8984 39.3298 83.0096 39.2085 83.1348C38.2737 84.366 36.9367 84.7681 35.4974 84.8669C34.224 84.9181 32.9529 84.7216 31.7544 84.2884C30.7313 83.9301 29.8859 83.1908 29.3944 82.2246C29.225 81.9354 29.0628 81.6425 28.844 81.2615C28.3502 81.5155 27.888 81.7625 27.4329 81.9883C25.528 82.9055 23.6477 82.7785 22.0108 81.505C20.5997 80.4149 20.0071 78.8062 20 77.0318C20 76.231 20.4657 75.6207 21.0372 75.0668C21.2382 74.8763 21.4534 74.6964 21.6968 74.4777C21.4852 74.2061 21.2735 73.9838 21.1148 73.7298C20.8391 73.308 20.5962 72.8658 20.388 72.4069C20.2954 72.1555 20.2625 71.886 20.2919 71.6197C20.3213 71.3534 20.4122 71.0975 20.5574 70.8724C21.5346 68.9744 23.1926 68.1172 25.1858 67.6762C26.6752 67.3483 28.2166 67.3339 29.7119 67.6339C30.6044 67.8032 30.6079 67.7715 30.9254 66.9283C31.2867 65.975 31.9504 65.1663 32.815 64.626C33.6795 64.0858 34.6973 63.8437 35.7125 63.9368C37.2324 64.0693 38.7244 64.4259 40.1399 64.9951C40.8454 65.2809 41.4663 65.8206 42.2212 66.3075C42.3786 66.1163 42.5213 65.9134 42.6481 65.7007C43.3159 64.5522 44.1749 63.5262 45.188 62.6668C46.2076 61.7214 47.5481 61.5027 48.8534 61.3192C51.0265 61.0123 52.9985 61.672 54.7659 62.8856C55.2845 63.2383 55.5702 63.9439 55.9477 64.4871C56.032 64.6417 56.0995 64.8049 56.1487 64.974C56.6708 64.8223 57.1506 64.6741 57.6375 64.5507C60.6149 63.7781 63.2572 64.5507 65.6666 66.3145C65.846 66.4513 65.9899 66.6292 66.0864 66.8331C66.6755 68.1525 66.8484 69.5177 66.1428 70.8194C65.6745 71.5693 64.956 72.1291 64.1144 72.3999C63.7792 72.5269 63.4582 72.6891 63.1619 72.8197C63.3736 73.5993 63.6099 74.2837 63.7404 74.9892C63.896 75.8304 63.7366 76.6994 63.2924 77.4304C62.9644 77.9198 62.521 78.3208 62.0013 78.5981C60.3798 79.5687 58.5807 80.2056 56.7097 80.4713C55.7591 80.6051 54.7914 80.5488 53.8628 80.3055C53.1572 80.1186 52.8362 79.9775 52.6104 81.0111C52.5099 81.3913 52.32 81.7421 52.0566 82.0341C51.0223 83.2435 49.6104 84.0688 48.0491 84.3765C45.9113 84.8034 43.7805 84.8246 41.6991 84.0979C41.1311 83.8523 40.5907 83.5472 40.087 83.1877C39.9215 83.0681 39.7625 82.9397 39.6107 82.8032ZM62.541 66.2228C62.2623 66.029 61.9699 65.8557 61.6661 65.7042C60.4485 65.2117 59.0858 65.2193 57.8738 65.7254C57.1365 66.0076 56.4204 66.3463 55.6796 66.6109C55.4714 66.6849 55.0975 66.692 54.9952 66.5685C54.9202 66.4582 54.8692 66.3334 54.8455 66.2021C54.8218 66.0709 54.8259 65.9361 54.8576 65.8065C55.1433 64.7482 54.9176 64.1697 53.9404 63.6899C53.4606 63.4641 52.9491 63.2912 52.4869 63.0337C51.2235 62.333 49.7588 62.0841 48.3348 62.3282C47.317 62.4449 46.3803 62.9397 45.7102 63.7146C44.9482 64.6177 44.0945 65.4396 43.6182 66.5579C43.5014 66.7832 43.3568 66.993 43.1878 67.1823C42.6763 67.8279 42.4399 67.8491 41.8367 67.3093C41.6658 67.1632 41.5066 67.004 41.3605 66.8331C40.9074 66.2854 40.2882 65.9003 39.5966 65.736C38.51 65.4502 37.427 65.1468 36.3405 64.8576C36.2025 64.828 36.0618 64.8126 35.9207 64.8117C34.185 64.7235 32.2377 66.3392 31.9696 68.0925C31.8179 69.0626 31.1124 69.4225 30.3116 68.9603C29.4367 68.4594 28.516 68.0678 27.4718 68.2266C26.6943 68.3342 25.923 68.4826 25.1611 68.671C23.9348 69.0255 22.8566 69.7682 22.0884 70.7877C21.1994 71.8919 21.3829 72.8373 22.547 73.6346C22.7552 73.7792 22.995 73.8815 23.1891 74.0403C23.2716 74.0966 23.3381 74.1734 23.3819 74.2631C23.4257 74.3529 23.4454 74.4526 23.439 74.5523C23.4326 74.6519 23.4003 74.7483 23.3453 74.8317C23.2904 74.9151 23.2146 74.9828 23.1256 75.028C22.9506 75.1181 22.7676 75.1913 22.5788 75.2468C22.2462 75.371 21.9478 75.5723 21.7081 75.8342C21.4683 76.096 21.294 76.4109 21.1994 76.7531C20.7973 78.1219 21.7956 80.3973 23.0727 81.0675C24.9706 82.0623 26.7662 81.8436 28.4877 80.6336C29.6307 79.8293 29.726 79.8716 30.2022 81.1945C30.5232 82.0941 30.9889 82.8878 31.9026 83.3112C33.3201 83.9704 34.9002 84.1986 36.4463 83.9673C37.9562 83.7486 38.6935 82.9513 38.9157 81.4168C38.9581 81.1381 39.0392 80.8735 39.332 80.877C39.572 80.9015 39.7981 81.0016 39.9776 81.1628C40.1185 81.3366 40.237 81.5274 40.3304 81.7307C40.7405 82.4099 41.3592 82.9383 42.0942 83.2371C44.1117 84.0254 46.339 84.0952 48.4018 83.4346C49.2826 83.1393 50.0999 82.681 50.8113 82.0835C51.665 81.378 52.0918 80.3655 51.672 79.1943C51.5937 79.0577 51.5709 78.8961 51.6083 78.7431C51.6458 78.5901 51.7405 78.4574 51.8731 78.3723C52.0068 78.2916 52.1635 78.2575 52.3186 78.2754C52.4737 78.2933 52.6185 78.3621 52.7304 78.4711C52.7727 78.5064 52.8115 78.5487 52.8574 78.584C53.7112 79.2955 54.7801 79.6982 55.8912 79.727C58.1454 79.7517 60.1245 78.9297 61.9166 77.6103C62.8479 76.9048 63.042 74.8552 62.3823 73.8709C62.2739 73.7153 62.116 73.6008 61.9342 73.5464C61.5427 73.4441 61.137 73.4018 60.7842 73.3418C60.8336 72.421 61.3028 72.1706 62.1142 72.0965C62.864 71.9811 63.5934 71.7589 64.2802 71.4368C64.6462 71.306 64.964 71.0675 65.1919 70.7527C65.4198 70.4378 65.5472 70.0615 65.5572 69.6729C65.5949 69.0284 65.5547 68.3817 65.4373 67.7468C65.3485 67.4283 65.1399 67.1565 64.8552 66.9883C64.3646 66.7264 63.8509 66.5103 63.3206 66.3427C63.0655 66.2738 62.8045 66.2289 62.541 66.2087V66.2228Z"
            />
            <path
                d="M43.1841 21.4703C43.0642 22.2147 42.9478 22.8391 42.8631 23.467C42.7185 24.5747 42.0411 25.2908 41.0992 25.7812C39.7234 26.5114 38.277 27.0829 36.7037 27.1464C35.6983 27.1888 34.6929 27.3193 33.691 27.3475C31.948 27.3857 30.2317 26.9149 28.7521 25.9929C28.5687 25.8835 28.3994 25.7777 28.0889 25.6119C27.8493 25.9146 27.6335 26.2354 27.4433 26.5714C26.452 28.6881 24.8046 29.6864 22.4692 29.7182C19.2856 29.7948 16.1421 28.9955 13.3818 27.4075C12.7574 27.0547 12.2988 26.3986 11.7625 25.88C10.9794 26.1657 10.1539 26.4903 9.31782 26.769C7.47282 27.3863 5.75481 26.8113 4.09324 26.0916C3.30023 25.7471 2.55453 25.3025 1.87429 24.7687C0.463194 23.6469 0.110413 21.9995 0.0151645 20.3238C-0.0800845 18.6481 0.251532 17.1488 1.63441 16.0552C2.10007 15.7025 2.16356 15.3003 1.93426 14.7359C1.48271 13.6246 1.22871 12.4746 1.62734 11.2646C2.77386 7.77562 4.20965 6.44213 8.24186 6.234C9.91753 6.1458 11.5438 6.4386 13.1807 6.73846C13.4559 6.79138 13.7345 6.82313 14.105 6.87605C14.2284 6.52327 14.3202 6.1705 14.4577 5.84948C14.6588 5.3944 14.8105 4.85465 15.1386 4.52304C16.4121 3.28833 17.5904 1.79257 19.6294 1.91252C20.483 1.97457 21.3242 2.15137 22.1306 2.43815C22.8857 2.75165 23.6188 3.11584 24.3248 3.52823C24.4166 3.48589 24.5153 3.47178 24.54 3.42592C25.4396 1.64088 27.14 0.903582 28.8297 0.169812C29.1319 0.0515776 29.4543 -0.00595544 29.7787 0.000486991C32.6009 0.0216534 35.0209 1.03058 37.2787 2.92851C37.8608 2.54751 38.5346 2.08185 39.2331 1.65852C41.4802 0.300338 43.8191 -0.405207 46.412 0.635476C47.1993 0.88814 47.9546 1.23146 48.6627 1.65852C49.8727 2.51576 50.8852 3.5635 51.1039 5.18626C51.2662 6.36805 50.8076 7.37346 50.3419 8.38945C50.1796 8.74223 49.9891 9.0703 49.7669 9.47952C49.9358 9.58715 50.1186 9.6714 50.3102 9.72999C52.0352 9.86404 53.4216 10.813 54.8574 11.6244C55.5974 12.0644 56.3134 12.5437 57.0023 13.0602C57.2598 13.2401 57.5738 13.4976 57.6302 13.7657C57.8207 14.6724 58.1276 15.6354 57.983 16.5068C57.7329 17.8907 57.1879 19.2045 56.3849 20.3591C56.1348 20.7033 55.7975 20.9748 55.4077 21.1458C53.0179 22.1754 50.4312 22.668 47.8302 22.5886C46.6307 22.5639 45.4701 22.4475 44.3941 21.8337C44.0062 21.6662 43.6001 21.5443 43.1841 21.4703ZM10.5878 7.35935C9.02148 7.16179 7.56806 7.69096 6.09346 7.99082C5.7355 8.05055 5.40234 8.21222 5.13392 8.45647C4.01915 9.62768 3.22541 10.9894 3.10547 12.6404C3.06843 13.0543 3.12747 13.4711 3.278 13.8585C3.42853 14.2458 3.66647 14.5932 3.97329 14.8734C4.7247 15.6037 4.57301 16.147 3.65227 16.6126C3.36098 16.7482 3.08731 16.9187 2.83736 17.1206C1.20401 18.5493 1.09113 21.8689 2.65745 23.4705C4.00857 24.864 5.71953 25.566 7.61745 25.8941C9.18729 26.1657 10.4396 25.6048 11.5297 24.5465C12.3164 23.7774 12.6692 23.7598 13.1348 24.7052C13.6567 25.7429 14.5095 26.577 15.5584 27.0759C17.9185 28.2753 20.4725 28.6845 23.076 28.7974C24.1343 28.8433 25.0021 28.2259 25.6301 27.3863C26.3949 26.4207 26.9142 25.2841 27.1435 24.0738C27.214 23.6575 27.1893 23.1601 27.7291 23.0155C28.2688 22.8708 28.5546 23.3259 28.8368 23.6998C28.9673 23.8727 29.1084 24.035 29.2425 24.2043C29.9783 25.1566 31.022 25.8237 32.1952 26.0916C35.0166 26.7985 38.0012 26.4076 40.5454 24.998C40.979 24.772 41.3436 24.4331 41.6007 24.0171C41.8577 23.6011 41.9977 23.1234 42.0059 22.6345C42.0482 21.809 42.147 20.9905 41.579 20.2532C41.5061 20.1209 41.4679 19.9722 41.4679 19.8211C41.4679 19.67 41.5061 19.5213 41.579 19.3889C41.8402 19.2177 42.1567 19.1521 42.4645 19.2055C42.7043 19.2726 42.9285 19.3865 43.1241 19.5406C43.9643 20.0859 44.8334 20.5852 45.7276 21.0364C46.4488 21.3645 47.2231 21.5605 48.0136 21.6149C49.8473 21.7012 51.6823 21.4733 53.4393 20.9411C55.4642 20.3555 56.6142 18.9938 56.9988 17.0112C57.1893 16.0658 57.2139 15.0216 56.3708 14.2984C55.5337 13.5189 54.6187 12.8274 53.6403 12.2347C51.7918 11.2187 49.8974 10.171 47.6432 11.1764C47.5467 11.2309 47.4383 11.261 47.3275 11.2641C47.2167 11.2672 47.1067 11.2432 47.0073 11.1942C46.9079 11.1452 46.8219 11.0726 46.7569 10.9828C46.6919 10.893 46.6498 10.7887 46.6343 10.679C46.5037 10.1745 46.7895 10.0016 47.2163 9.8323C47.7031 9.6418 48.3135 9.44072 48.571 9.04914C49.1304 8.22015 49.5588 7.3099 49.841 6.35042C50.0632 5.52846 49.9821 4.53715 49.2659 3.93744C48.3675 3.22522 47.4104 2.59032 46.4049 2.03952C46.0128 1.81382 45.579 1.66994 45.1297 1.61659C44.6804 1.56323 44.225 1.6015 43.7909 1.72908C43.2053 1.8843 42.5879 1.91252 41.9882 2.02188C41.7031 2.06024 41.4265 2.14609 41.1698 2.27587C40.4219 2.6992 39.6775 3.12959 38.972 3.61642C38.4413 3.98693 37.9454 4.40492 37.4904 4.86523C37.1164 5.23917 36.8589 5.87769 36.2063 5.57078C35.6418 5.30267 35.8111 4.69238 35.9064 4.21966C35.9998 3.8867 35.9677 3.53102 35.8162 3.22016C35.6647 2.90931 35.4043 2.66492 35.0844 2.5334C34.396 2.1433 33.6674 1.82869 32.9113 1.59502C31.5708 1.274 30.1773 0.787163 28.8932 1.84196C28.7098 1.99365 28.417 2.00071 28.1877 2.09949C27.9503 2.17856 27.7284 2.29789 27.5315 2.45226C26.759 3.20367 25.9511 3.93039 26.0464 5.17921C26.0816 5.66251 25.2068 6.39627 24.6353 6.44213C23.9685 6.49858 23.9297 5.95531 23.8062 5.51787C23.7657 5.30573 23.6747 5.10647 23.5408 4.93699C23.4069 4.7675 23.2342 4.63277 23.0372 4.54421C22.6844 4.37488 22.374 4.1103 22.0247 3.93038C21.0687 3.44003 19.9575 3.07667 19.012 3.51763C17.3011 4.32196 15.7524 5.41203 15.6219 7.6204C15.6059 7.80793 15.5482 7.98953 15.4529 8.15188C15.3577 8.31424 15.2274 8.45326 15.0716 8.55878C14.8609 8.66648 14.6194 8.69758 14.3883 8.64673C14.1573 8.59589 13.9511 8.46626 13.8051 8.28008C13.5917 8.04072 13.3095 7.87316 12.9973 7.80031C12.2106 7.60276 11.3957 7.4934 10.5878 7.35935Z"
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
