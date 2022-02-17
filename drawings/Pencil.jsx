import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export default function Pencil(props) {
    return (
        <Svg {...props} width="81" height="156" viewBox="0 0 81 156" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0246 142.811C12.4151 142.107 12.8087 141.399 13.2076 140.701C14.5073 138.406 15.7813 136.382 17.094 134.515C17.72 133.587 18.2899 132.621 18.8007 131.625C19.4117 130.397 20.1382 129.231 20.9705 128.142L21.0351 128.054C21.4399 127.567 22.0212 126.849 21.815 125.878C22.2804 125.636 22.6498 125.243 22.8631 124.764C23.4115 123.678 24.0616 122.648 24.8048 121.686C26.3889 119.509 27.8052 117.215 29.0415 114.824C29.6517 113.709 30.2854 112.552 30.9486 111.444C31.7745 110.062 32.5626 108.627 33.3282 107.239C34.0152 105.993 34.7246 104.7 35.4656 103.468C35.9977 102.572 36.5166 101.711 37.0406 100.835C38.2176 98.8811 39.4336 96.8657 40.5247 94.8099C41.1602 93.6163 41.8829 92.4356 42.5864 91.2986C43.1935 90.3096 43.821 89.2842 44.3914 88.2488C45.7609 85.6922 47.2921 83.2256 48.9755 80.8639C53.5633 74.575 57.6579 67.9406 61.2227 61.0202C62.1621 59.1874 63.0606 57.3052 63.9389 55.4854C65.4382 52.3518 66.9958 49.113 68.7646 46.0686C69.3886 44.9955 69.9074 43.864 70.4057 42.769C71.0228 41.3191 71.7609 39.9239 72.6123 38.598L72.7724 38.381C73.3297 37.664 73.7474 36.8488 74.0038 35.9776C74.8471 32.4309 75.3805 28.9198 75.9449 25.0256C76.2267 23.0879 76.5456 21.126 76.8434 19.2452C76.9992 18.2648 77.1623 17.2833 77.3151 16.3071C77.4137 15.6839 77.5901 15.0602 77.7334 14.4378C78.0909 13.2526 78.2696 12.0206 78.2634 10.7824C78.3761 10.7125 78.4576 10.602 78.4912 10.4737C78.5764 10.1048 78.6688 9.73483 78.7519 9.37737C79.3147 7.3381 79.6906 5.25169 79.875 3.144C79.8792 3.0093 79.8342 2.87765 79.7485 2.7736C80.0562 2.48916 80.3228 2.16315 80.5404 1.80501C80.6387 1.77041 80.7259 1.70998 80.7927 1.63009C80.8596 1.55019 80.9038 1.45377 80.9205 1.35092C80.943 1.21572 80.911 1.07709 80.8315 0.965338C80.752 0.853589 80.6316 0.777808 80.4965 0.754546C80.4218 0.741059 80.3451 0.744101 80.2717 0.763473C80.1984 0.782844 80.1302 0.818075 80.072 0.866664C79.9237 0.913383 79.7986 1.01435 79.7216 1.14938C79.2545 2.00971 78.4462 2.5023 77.5935 3.02011C77.0926 3.31087 76.6139 3.6383 76.1614 3.99975C74.8565 5.0691 73.4528 6.01192 71.9692 6.81547C71.5934 6.99688 71.2913 7.30155 71.1131 7.67874C71.1131 7.67874 71.1131 7.67873 71.0706 7.69254C70.1329 8.19475 69.254 8.79978 68.4502 9.49645C67.8441 10.0044 67.2046 10.4712 66.5361 10.8936C62.3163 13.3733 58.269 16.135 54.4216 19.1599C52.4347 20.8679 50.262 22.347 47.9443 23.5696C47.2091 23.9779 46.6335 24.6227 46.3108 25.3992L45.9875 26.0821C45.3421 27.4552 44.6712 28.8803 43.9354 30.2448C42.7147 32.5972 41.3506 34.8724 39.8508 37.0575C38.3303 39.3015 36.9972 41.6669 35.8649 44.1298C35.57 44.7306 35.272 45.3355 34.9657 45.9342C33.6957 48.5471 32.2466 51.0691 30.6289 53.4822C28.2182 56.9422 26.0714 60.062 24.0591 63.0169C23.2943 64.1409 22.5494 65.273 21.8045 66.4051C20.4744 68.4265 19.0982 70.5104 17.6392 72.4882C17.228 73.0346 16.8459 73.6022 16.4943 74.1886C15.5457 75.7891 14.4995 77.382 13.485 78.9145C12.2902 80.7263 11.0565 82.5997 9.97791 84.5424C9.24371 85.8435 8.45037 87.1461 7.67638 88.405C6.69263 90.0182 5.6761 91.6845 4.76047 93.3801C3.66606 95.4143 2.50636 97.4582 1.38142 99.4376C0.810804 100.447 0.236021 101.453 -0.338545 102.486C-1.69131 104.896 -3.08695 107.391 -4.69378 109.691C-4.90792 109.963 -5.02203 110.3 -5.01689 110.645C-5.52439 111.009 -5.9414 111.484 -6.23568 112.034C-6.52996 112.585 -6.69363 113.196 -6.71402 113.82C-7.04816 113.961 -7.32518 114.21 -7.50086 114.528C-8.16007 115.751 -8.88021 116.94 -9.65857 118.091C-10.3184 119.099 -11.0029 120.14 -11.603 121.225C-12.7018 123.23 -13.8687 125.275 -15.0649 127.298C-16.968 130.533 -18.5224 133.278 -19.9003 136.16C-19.9513 136.279 -19.996 136.401 -20.0343 136.525C-20.0563 136.605 -20.0841 136.684 -20.1174 136.76C-20.1542 136.761 -20.1908 136.754 -20.2244 136.739C-20.2901 136.72 -20.3589 136.714 -20.4269 136.722C-20.4948 136.729 -20.5606 136.75 -20.6204 136.784C-20.6802 136.817 -20.7329 136.861 -20.7753 136.915C-20.8178 136.968 -20.8493 137.03 -20.8679 137.096C-20.895 137.195 -20.8921 137.3 -20.8595 137.397C-20.827 137.495 -20.7662 137.58 -20.6849 137.643C-20.9486 138.672 -20.9386 139.752 -20.6559 140.776C-19.9284 144.741 -17.6911 148.269 -14.4148 150.619C-13.5284 151.272 -12.5898 151.85 -11.6085 152.348C-9.03736 153.661 -6.2697 154.548 -3.41422 154.972C1.05312 155.69 4.54808 154.248 7.24873 150.596C9.00528 148.106 10.6005 145.506 12.0246 142.811ZM2.05115 121.369C1.91457 121.08 1.67352 120.854 1.3767 120.736L1.26814 120.656C-1.31485 119.079 -3.22885 116.848 -4.90788 114.675C-5.01937 114.54 -5.14375 114.416 -5.27925 114.305C-5.53219 114.079 -5.62427 113.986 -5.6205 113.815C-5.60864 113.381 -5.50165 112.955 -5.3071 112.568C-5.11254 112.18 -4.83519 111.84 -4.49462 111.572C-4.29751 111.82 -4.10655 112.077 -3.91978 112.331C-3.35755 113.166 -2.68546 113.922 -1.92161 114.578C-1.26891 115.092 -0.646772 115.673 -0.045514 116.239C0.6851 116.95 1.45621 117.618 2.26395 118.239C2.60398 118.491 2.95746 118.724 3.32281 118.937C4.00799 119.36 4.66481 119.827 5.28907 120.336C5.92072 120.84 6.57773 121.312 7.25754 121.749C7.84257 122.11 8.46036 122.418 9.05729 122.71C10.0191 123.143 10.9269 123.687 11.762 124.332C12.3326 124.731 12.9741 125.019 13.6522 125.178L13.9559 125.274C15.4887 125.699 17.0701 125.923 18.6604 125.941C19.2842 125.97 19.959 126.017 20.5997 126.083C20.6803 126.092 20.7615 126.096 20.8426 126.095C20.9511 126.542 20.6751 126.925 20.2807 127.407L20.2161 127.495C19.9563 127.812 19.7128 128.142 19.4865 128.484C19.0416 128.19 18.499 128.084 17.9765 128.188C17.8495 128.203 17.7217 128.21 17.5939 128.209C16.2435 128.161 14.9082 127.908 13.6336 127.458C10.8811 126.543 8.22851 125.351 5.71689 123.899C5.15768 123.546 4.61707 123.164 4.09721 122.756C3.44469 122.242 2.75679 121.776 2.03862 121.359L2.05115 121.369ZM3.59145 110.759L3.68072 110.638C5.43257 107.555 7.27388 104.5 9.13889 101.552C10.0382 100.141 10.8799 98.6679 11.6764 97.2387C12.2523 96.2396 12.8444 95.2009 13.4462 94.2016L13.9529 93.3576C15.35 91.0442 16.7827 88.6476 18.3203 86.3799C18.7528 85.7325 19.1728 85.0758 19.5886 84.416C20.2267 83.4113 20.8863 82.3773 21.6055 81.3937C22.3773 80.3012 23.0861 79.1654 23.7282 77.9919L24.0565 77.4158C24.6621 76.3677 25.3081 75.3172 25.9398 74.2949C26.9104 72.7171 27.9106 71.0903 28.788 69.4115C29.1564 68.7557 29.5678 68.1251 30.0196 67.5237C30.5422 66.8308 31.0067 66.096 31.4083 65.3266C32.7007 62.6396 34.2197 60.0037 35.6896 57.4606C36.5826 55.9093 37.5145 54.2965 38.378 52.6977L39.0871 51.3781C40.1591 49.3919 41.2648 47.3338 42.4156 45.3543C42.8283 44.6493 43.2364 43.9387 43.64 43.2227C44.7629 41.2548 45.9373 39.2346 47.1841 37.2999C47.4668 36.8642 47.8147 36.3927 48.1379 35.9546C48.644 35.2956 49.1109 34.6073 49.536 33.8933C50.1827 32.6652 50.9473 31.5029 51.819 30.4229C51.9143 30.5722 51.9909 30.7325 52.0471 30.9004C52.3128 31.5859 52.767 32.1823 53.3572 32.6208C53.5825 32.7889 53.8315 32.9227 54.096 33.0177L54.0855 33.1194C54.0805 33.262 54.0418 33.4013 53.9726 33.5259C52.9794 34.8915 52.0949 36.3331 51.3272 37.8372C50.8571 38.7017 50.3727 39.5943 49.8474 40.4375C49.2203 41.4888 48.6474 42.5716 48.1311 43.6816C47.7364 44.5051 47.3232 45.3536 46.8702 46.1599C46.2301 47.2985 45.5566 48.4125 44.8728 49.5317C44.0058 50.9604 43.1133 52.4411 42.306 53.9461C41.3834 55.6688 40.4026 57.4002 39.4578 59.0742C39.0385 59.8087 38.6233 60.5463 38.2082 61.2838C37.6969 62.1953 37.114 63.099 36.5454 63.9746C35.9768 64.8503 35.4317 65.6853 34.9275 66.5698C34.4186 67.4253 33.8611 68.251 33.2578 69.0428C32.4206 70.1076 31.6905 71.2524 31.0781 72.4606C30.7632 73.0904 30.3995 73.6946 29.9902 74.2675C29.7778 74.5554 29.5862 74.8587 29.402 75.1609C27.8751 77.5976 26.2601 80.0402 24.7005 82.4077L22.6757 85.4757C21.7421 86.8811 20.7758 88.3396 19.9217 89.8293L19.2302 91.0202C18.2605 92.7017 17.2549 94.4406 16.3377 96.1995C15.85 97.1758 15.2772 98.1073 14.6259 98.983C13.3435 100.724 12.2017 102.564 11.2112 104.486C10.7952 105.242 10.375 105.995 9.94222 106.739L9.33334 107.765C8.56903 109.064 7.78118 110.402 7.03905 111.749C6.76507 112.243 6.49944 112.743 6.22963 113.24C5.41786 114.831 4.51286 116.373 3.51933 117.858C2.48622 117.163 1.52182 116.372 0.639333 115.494L0.580868 115.451C1.70351 113.966 2.70605 112.394 3.57893 110.749L3.59145 110.759ZM57.5004 32.6684L57.4937 33.1145C57.4289 34.2522 57.7456 35.3793 58.3938 36.3172C57.5487 37.2788 56.8423 38.3539 56.2953 39.5113C56.0818 39.9144 55.8682 40.3174 55.6391 40.7154C54.6782 42.3733 53.7263 44.0336 52.7834 45.6963L51.3423 48.2091C50.7767 49.203 50.2028 50.1907 49.6289 51.1784C48.4402 53.2267 47.2023 55.3417 46.0463 57.4593C42.815 63.3164 39.4628 69.2326 36.219 74.9581L35.6075 76.0405C33.692 79.4147 31.5915 82.7427 29.5567 85.9903C28.4466 87.7486 27.3098 89.5517 26.2093 91.3494L26.0578 91.5984C23.8475 95.2062 21.5625 98.9329 19.6344 102.788C18.1626 105.735 16.5757 108.682 15.0575 111.544L13.9919 113.548C12.5441 116.262 11.0442 119.073 9.45203 121.764C8.87072 121.477 8.31753 121.204 7.78568 120.876C7.13742 120.457 6.51072 120.005 5.90799 119.523C5.4111 119.157 4.92433 118.759 4.40061 118.411C5.40929 116.905 6.32829 115.342 7.15291 113.728C7.41964 113.235 7.68528 112.735 7.95619 112.246C8.686 110.915 9.47495 109.584 10.232 108.287L10.8409 107.26C11.2767 106.512 11.6989 105.748 12.1211 104.983C13.0911 103.114 14.2084 101.324 15.4624 99.6323C16.1533 98.7058 16.76 97.7195 17.2755 96.6852C18.1846 94.946 19.1851 93.2227 20.1517 91.5454L20.8391 90.3515C21.6799 88.897 22.637 87.4511 23.5614 86.0583L25.5821 82.9871C27.1489 80.6185 28.77 78.1676 30.2989 75.7195C30.4811 75.4287 30.6749 75.1399 30.8686 74.8511C31.3094 74.2344 31.7009 73.5839 32.0395 72.9056C32.6233 71.7591 33.3188 70.673 34.1158 69.6629C34.7454 68.8367 35.3272 67.9752 35.8583 67.0824C36.3471 66.2188 36.9076 65.363 37.4423 64.5332C37.977 63.7035 38.6153 62.7247 39.1451 61.7881C39.556 61.0475 39.9723 60.3172 40.3874 59.5797C41.3354 57.9014 42.3192 56.1659 43.248 54.4349C44.0398 52.9507 44.9304 51.4814 45.7881 50.0652C46.4627 48.9585 47.1536 47.8123 47.7998 46.6653C48.2713 45.834 48.6896 44.9699 49.0935 44.1339C49.5953 43.0581 50.1536 42.0096 50.766 40.9928C51.3148 40.109 51.7993 39.2164 52.2786 38.3393C53.0199 36.8841 53.8743 35.4893 54.8339 34.1677C55.0212 33.8984 55.1312 33.583 55.1521 33.2556L55.1768 33.0998C55.9631 33.0536 56.7399 32.9055 57.4879 32.6592L57.5004 32.6684ZM64.5392 37.7065C64.0267 38.556 63.5639 39.4343 63.1529 40.3372C62.9245 40.813 62.696 41.2888 62.4508 41.7522C61.3764 43.8204 60.194 45.8863 59.0454 47.8804L57.9961 49.7222C56.6215 52.1361 55.3753 54.6381 54.3214 56.7922C52.3897 60.7216 50.8733 63.9134 49.5188 66.8768C48.4435 69.2085 47.2758 71.6654 45.7541 74.602C43.9558 78.0885 42.0263 81.5168 39.993 84.8235L39.0236 86.4086C37.0785 89.587 35.071 92.8676 33.0107 96.0449C32.142 97.3885 31.338 98.7928 30.5577 100.157C29.9675 101.184 29.3599 102.243 28.7282 103.266C27.5754 105.134 26.4691 107.115 25.3419 109.324C24.0942 111.767 22.6865 114.182 21.3228 116.52C20.2455 118.374 19.1294 120.289 18.0933 122.218C17.9618 122.454 17.8183 122.684 17.6632 122.905C17.232 123.456 16.9391 124.101 16.8093 124.788C15.9428 124.716 15.0863 124.553 14.2539 124.301L13.9418 124.2C13.3988 124.07 12.8814 123.849 12.4113 123.548C11.7822 123.04 11.1003 122.602 10.3773 122.24C11.9653 119.546 13.4632 116.746 14.9007 114.038L15.9705 112.037C17.5 109.177 19.0817 106.22 20.5586 103.257C22.4704 99.4416 24.7431 95.7316 26.938 92.1447L27.0895 91.8956C28.1746 90.1188 29.3268 88.2948 30.4319 86.5521C32.475 83.3107 34.594 79.9577 36.5134 76.5606L37.1249 75.4782C40.3729 69.7558 43.7282 63.8355 46.9625 57.9742C48.1207 55.8711 49.3472 53.7541 50.5329 51.7099C51.1078 50.7208 51.6799 49.7297 52.2493 48.7365L53.6894 46.2164C54.635 44.5558 55.5883 42.8965 56.5492 41.2386C56.7845 40.8323 57.0031 40.4136 57.2258 39.9981C57.725 38.9353 58.3664 37.9453 59.1324 37.0554C59.1908 37.0985 59.2409 37.1355 59.2994 37.1786L59.3453 37.2125C61.2107 38.5822 63.062 38.2405 64.5266 37.6973L64.5392 37.7065ZM67.8753 45.5608C66.0831 48.6458 64.5173 51.9044 63.0057 55.0547C62.1377 56.8692 61.2381 58.7442 60.3038 60.5614C56.7658 67.429 52.6991 74.011 48.1404 80.2478C46.4232 82.6467 44.8608 85.1527 43.4628 87.7506C42.9006 88.7662 42.2823 89.7792 41.6772 90.7567C40.9687 91.9093 40.2367 93.1025 39.5838 94.3284C38.507 96.3561 37.2972 98.3631 36.1325 100.3C35.592 101.19 35.0639 102.072 34.5482 102.946C33.8105 104.199 33.0981 105.497 32.3955 106.738C31.6391 108.113 30.8468 109.545 30.0302 110.914C29.3619 112.039 28.7221 113.203 28.1057 114.327C26.9035 116.672 25.5254 118.923 23.9831 121.06C23.198 122.078 22.5108 123.167 21.9308 124.314C21.8415 124.568 21.6643 124.782 21.431 124.918C21.1977 125.053 20.9238 125.1 20.6586 125.051C19.992 124.984 19.3183 124.945 18.6716 124.912L17.8111 124.864C17.9334 124.357 18.1658 123.884 18.4917 123.478C18.6702 123.236 18.831 122.974 18.9781 122.696C20.0061 120.787 21.1119 118.878 22.1902 117.031C23.5559 114.682 24.9687 112.251 26.2432 109.789C27.3603 107.611 28.4666 105.631 29.5886 103.804C30.2265 102.773 30.8433 101.701 31.4385 100.658C32.22 99.3017 33.0116 97.9141 33.866 96.5986C35.9283 93.4099 37.942 90.121 39.8901 86.9384L40.8638 85.3564C42.899 82.0383 44.849 78.5735 46.6627 75.0661C48.1844 72.1295 49.3705 69.6476 50.4551 67.3034C51.7941 64.3608 53.3137 61.1648 55.2391 57.2438C56.2912 55.1011 57.5292 52.6188 58.8853 50.23C59.2371 49.6133 59.59 49.0038 59.9387 48.3913C61.0894 46.3858 62.2915 44.328 63.3646 42.2267C63.6056 41.7601 63.8299 41.2813 64.0769 40.7805C64.4635 39.9767 64.8624 39.1563 65.3281 38.3852L65.7476 38.8043C66.1335 39.2134 66.5504 39.5921 66.9947 39.9369C67.4649 40.322 68.0339 40.5668 68.6367 40.6434C69.2394 40.7199 69.8514 40.6251 70.4025 40.3698C70.0717 41.0278 69.7608 41.6941 69.4632 42.3508C68.9647 43.4199 68.4602 44.5233 67.8837 45.567L67.8753 45.5608ZM72.4934 7.73058C74.0327 6.89212 75.4901 5.91153 76.8466 4.80162C77.2567 4.47479 77.6905 4.17888 78.1445 3.91635C78.3685 3.77877 78.5925 3.6412 78.8155 3.49637C78.6069 5.40412 78.245 7.29186 77.7332 9.14127C77.6721 9.39898 77.6109 9.6567 77.5425 9.9155L77.3611 9.9428C77.0119 9.98796 76.6927 10.036 76.3788 10.0944C74.888 10.367 73.5961 9.84564 72.3187 8.43934C72.0737 8.16837 72.074 8.0719 72.074 8.0719C72.074 8.0719 72.1276 7.91175 72.4932 7.70464L72.4934 7.73058ZM55.0603 19.9984C58.8818 16.9831 62.9033 14.2303 67.0973 11.7587C67.8059 11.3115 68.4833 10.8167 69.1248 10.2777C69.8037 9.69972 70.5324 9.18293 71.3023 8.7333C71.384 8.85822 71.4762 8.97586 71.5781 9.08494C71.9268 9.47486 72.3134 9.82916 72.7323 10.1426C73.2744 10.5654 73.901 10.867 74.5697 11.0268C75.2383 11.1866 75.9334 11.2009 76.6078 11.0688C76.8202 11.0257 77.0378 10.9929 77.2596 10.9633C77.2341 12.048 77.0625 13.1243 76.7496 14.163C76.5857 14.796 76.4345 15.4641 76.3155 16.1237C76.1637 17.0986 76.0062 18.0755 75.8427 19.0546C75.5295 20.9562 75.2117 22.9254 74.931 24.8704C74.3705 28.7417 73.8411 32.23 73.0016 35.7279C72.7734 36.4736 72.4099 37.1708 71.9291 37.7847L71.766 38.0058C71.472 38.4357 71.2 38.8802 70.9511 39.3377C70.7159 39.2473 70.4559 39.2456 70.2196 39.3328C68.6239 40.0886 67.7743 39.3522 66.5166 38.0765C66.2499 37.8088 65.9736 37.5277 65.6915 37.2809C65.537 37.1669 65.2776 36.924 66.1112 35.8379C66.1928 35.7273 66.2271 35.5887 66.2065 35.4527C66.1859 35.3166 66.1122 35.1943 66.0014 35.1126C65.8907 35.0309 65.752 34.9965 65.616 35.017C65.48 35.0375 65.3577 35.1112 65.276 35.2218C64.9384 35.6301 64.6881 36.1033 64.5405 36.6122C64.5405 36.6122 64.5196 36.5968 64.497 36.6187C62.5984 37.383 61.2376 37.3134 59.9506 36.3833C58.9819 35.6686 58.5465 34.703 58.5521 33.1221L58.5595 32.3866L58.5666 32.1148C58.8354 31.9254 59.0784 31.7018 59.2895 31.4496C59.3327 31.3969 59.3651 31.3361 59.3848 31.2708C59.4045 31.2055 59.4112 31.137 59.4044 31.0691C59.3975 31.0012 59.3774 30.9353 59.3451 30.8752C59.3127 30.8151 59.2689 30.762 59.216 30.7189C59.1632 30.6756 59.1024 30.6431 59.0371 30.6234C58.9718 30.6036 58.9032 30.5969 58.8353 30.6037C58.7674 30.6105 58.7015 30.6306 58.6415 30.6629C58.5814 30.6951 58.5282 30.7389 58.4851 30.7918C57.6028 31.8741 56.231 31.9768 54.9038 32.0801L54.7161 32.0898C54.2402 32.1318 53.3418 31.3917 53.0444 30.5537C52.932 30.2344 52.7703 29.9346 52.565 29.6652C52.7971 29.4429 53.0417 29.234 53.2975 29.0394C53.4081 28.9578 53.4817 28.8356 53.5022 28.6997C53.5226 28.5638 53.4883 28.4252 53.4067 28.3146C53.3659 28.2597 53.3147 28.2134 53.2559 28.1784C53.1972 28.1433 53.1321 28.1202 53.0644 28.1104C52.9968 28.1006 52.9278 28.1043 52.8616 28.1212C52.7954 28.1381 52.7331 28.168 52.6785 28.209C52.3611 28.4484 52.0596 28.7081 51.776 28.9866C51.4905 28.8323 51.1861 28.716 50.8705 28.6407C49.094 28.2257 48.6742 27.7807 48.5091 26.1254C48.4962 25.9878 48.4926 25.8496 48.4984 25.7116C48.5199 25.3275 48.4579 24.9433 48.3169 24.5854C48.3566 24.5553 48.3983 24.528 48.4417 24.5035C50.8164 23.2404 53.0431 21.7172 55.0808 19.962L55.0603 19.9984ZM2.26447 99.9537C3.38525 97.9713 4.5511 95.919 5.65167 93.8765C6.55608 92.2048 7.56336 90.551 8.55745 88.9326C9.33033 87.6664 10.1268 86.3597 10.8733 85.0418C11.947 83.1407 13.1757 81.2829 14.3582 79.4878C15.3777 77.9397 16.4342 76.3415 17.3971 74.7129C17.7303 74.1578 18.0923 73.6205 18.4815 73.1032C19.956 71.1046 21.3372 69.005 22.6765 66.9711C23.4184 65.8432 24.1602 64.7152 24.923 63.6027C26.9353 60.6478 29.079 57.5322 31.4866 54.0764C33.1375 51.6185 34.6154 49.0487 35.9095 46.3856C36.2189 45.7827 36.5168 45.1778 36.8179 44.5687C37.9215 42.1633 39.2207 39.8527 40.7024 37.66C42.2293 35.4388 43.6174 33.1252 44.8587 30.7326C45.6026 29.3484 46.288 27.9211 46.9363 26.5179L47.2565 25.8392C47.3095 25.7236 47.3719 25.6215 47.4271 25.5205C47.4318 25.5795 47.4334 25.6387 47.4317 25.6978C47.4321 25.8721 47.4325 26.0464 47.4474 26.2184C47.6681 28.3142 48.3959 29.1282 50.607 29.6447C50.7424 29.6764 50.8753 29.7184 51.0044 29.7704C50.0948 30.8934 49.2975 32.1029 48.624 33.3815C48.2162 34.0594 47.7703 34.7135 47.2882 35.3407C46.9589 35.7872 46.6172 36.2503 46.3006 36.7319C45.0229 38.6824 43.8559 40.7274 42.7237 42.7078C42.3198 43.4214 41.9148 44.1278 41.5055 44.8311C40.3465 46.8304 39.2347 48.8968 38.1566 50.8914L37.4505 52.2068C36.5859 53.7983 35.6633 55.3986 34.7734 56.9457C33.2984 59.5045 31.7702 62.1528 30.4542 64.8805C30.0789 65.5989 29.6442 66.2847 29.1545 66.9307C28.6716 67.5718 28.2345 68.2462 27.8463 68.9487C26.9821 70.5921 25.9941 72.2022 25.0317 73.7602C24.4042 74.7857 23.752 75.8445 23.1526 76.8843L22.8182 77.4687C22.1982 78.607 21.5127 79.7084 20.7651 80.7673C20.0294 81.7645 19.3658 82.8213 18.7185 83.8386C18.3047 84.4869 17.8828 85.155 17.4615 85.7785C15.9199 88.0691 14.4665 90.4762 13.0674 92.801L12.5638 93.6409C11.9528 94.6527 11.3576 95.6955 10.7828 96.7019C9.97579 98.1104 9.14329 99.571 8.273 100.978C6.39457 103.935 4.5482 107.006 2.78712 110.101L2.69786 110.222C1.85674 111.79 0.89286 113.29 -0.184755 114.706C-0.546468 114.375 -0.91435 114.052 -1.30597 113.744C-1.99599 113.147 -2.60169 112.46 -3.10636 111.7C-3.35818 111.36 -3.61 111.019 -3.87413 110.696C-4.00202 110.537 -4.01983 110.517 -3.82502 110.236C-2.19049 107.898 -0.789802 105.387 0.595729 102.924C1.14911 101.923 1.71527 100.917 2.29416 99.9047L2.26447 99.9537ZM-3.27399 153.986C-6.01144 153.56 -8.66195 152.692 -11.1224 151.418C-15.9049 148.959 -18.6858 145.413 -19.6263 140.57C-19.8474 139.427 -19.9729 138.548 -19.5828 137.67C-19.3012 137.464 -19.1042 137.163 -19.0285 136.822C-19.0078 136.746 -18.9807 136.671 -18.9474 136.599C-17.5807 133.741 -16.0386 131.013 -14.159 127.818C-12.9577 125.779 -11.7877 123.73 -10.6755 121.715C-10.1001 120.664 -9.4279 119.64 -8.77728 118.644C-7.9743 117.464 -7.23289 116.243 -6.55602 114.986C-6.4993 114.9 -6.41783 114.832 -6.32211 114.792C-6.22369 114.898 -6.11928 114.999 -6.00939 115.093C-5.91956 115.166 -5.83659 115.246 -5.76152 115.334C-4.01855 117.587 -2.03643 119.899 0.700857 121.564L0.890518 121.666L0.965676 121.721C0.886955 121.827 0.851866 121.96 0.86761 122.091C0.883356 122.223 0.948734 122.343 1.05037 122.428L1.07542 122.446C1.17311 122.521 1.29406 122.558 1.41675 122.552C1.53943 122.546 1.65589 122.496 1.74539 122.412C2.33486 122.776 2.90281 123.173 3.4464 123.603C3.99143 124.03 4.55816 124.429 5.14434 124.797C7.71792 126.286 10.4348 127.511 13.2538 128.454C14.6259 128.935 16.0626 129.206 17.5154 129.259C17.6914 129.264 17.8674 129.256 18.0423 129.235C18.5109 129.194 18.7184 129.193 18.8922 129.386C18.5402 129.976 18.2152 130.574 17.8994 131.16C17.4111 132.121 16.863 133.051 16.2582 133.944C14.924 135.84 13.6357 137.892 12.3144 140.216C11.9166 140.921 11.523 141.63 11.1325 142.334C9.72294 144.98 8.14681 147.534 6.41362 149.98C3.96538 153.29 0.80739 154.581 -3.25354 153.95L-3.27399 153.986Z" />
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
