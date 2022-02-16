import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

export default function Brush (props) {
    return (
        <Svg {...props} width="143" height="237" viewBox="0 0 143 237" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M54.1088 189.109C51.7148 192.982 49.1669 196.721 46.6959 200.527C46.5196 200.806 46.3643 201.102 46.2316 201.413C45.4757 203.142 45.4373 203.152 46.8355 204.465C48.0729 205.616 49.3637 206.707 50.6667 207.765C52.5093 209.266 54.3483 210.752 56.2467 212.147C58.145 213.542 60.2143 214.887 62.2127 216.219C62.5104 216.447 62.8618 216.559 63.2096 216.538C64.0352 216.339 64.93 216.458 65.68 215.945C65.9128 215.764 66.2027 215.693 66.4923 215.746C66.7818 215.798 67.0501 215.97 67.2438 216.227C68.0054 217.102 68.8316 217.901 69.7122 218.616C71.413 219.864 73.1835 220.98 74.94 222.122C77.0973 223.525 79.2668 224.893 81.4317 226.27L81.3591 226.419C81.9513 226.883 82.5645 227.309 83.1956 227.697C83.8046 228.046 84.4506 228.296 85.1127 228.437C85.894 228.59 86.277 228.212 86.4603 227.339C86.6435 226.467 86.7718 225.817 86.9511 225.069C87.4626 223.027 88.005 221 88.5066 218.944C89.5972 214.246 91.051 209.688 92.8519 205.32C93.2846 204.303 93.6084 203.227 94.0184 202.199C94.9712 199.795 95.9548 197.407 96.9076 195.003C97.1923 194.299 97.399 193.553 97.6756 192.844C98.1801 191.562 98.7382 190.305 99.2182 189.006C99.6982 187.706 100.17 186.091 100.74 184.684C102.052 181.466 103.081 178.084 104.585 174.959C105.665 172.718 106.494 170.305 107.462 167.99C107.868 167.002 108.399 166.085 108.795 165.084C109.414 163.434 109.929 161.715 110.55 160.072C110.826 159.332 111.273 158.683 111.563 157.948C112.326 156.023 113.034 154.064 113.781 152.128C114.824 149.426 115.875 146.722 116.931 144.017C117.712 142.026 118.434 139.986 119.311 138.026C120.709 134.966 121.867 131.754 123.139 128.592C124.57 125.082 125.97 121.548 127.48 118.082C128.787 115.066 130.301 112.155 131.637 109.148C132.543 107.112 133.313 104.991 134.131 102.898C134.432 102.121 134.688 101.325 134.976 100.551C135.431 99.3191 135.893 98.0857 136.365 96.8653C136.983 95.2926 137.644 93.7326 138.226 92.1529C138.727 90.8251 139.126 89.4441 139.651 88.1336C140.945 84.8965 142.279 81.6811 143.612 78.4656C144.701 75.8198 145.805 73.1831 146.926 70.5556C148.22 67.4888 149.511 64.4073 150.91 61.3776C152.012 58.703 153.241 56.1031 154.591 53.5884C155.56 51.9856 156.223 50.2083 157.018 48.5002C158.266 45.8316 159.538 43.1804 160.731 40.4787C161.924 37.777 163.105 34.8303 164.297 32.0127C165.002 30.2952 165.771 28.6783 166.473 26.977C167.788 23.7118 169.086 20.4351 170.341 17.1456C171.595 13.8561 172.81 10.5142 174.012 7.19885C174.274 6.48565 174.472 5.7335 174.773 5.0419C175.761 2.49476 176.598 -0.131787 177.279 -2.82135C177.677 -4.20022 177.958 -5.62575 178.118 -7.07954C178.351 -8.73109 178.702 -10.3507 179.169 -11.9227C179.286 -12.3235 179.371 -12.7375 179.421 -13.1598C179.636 -15.0849 179.73 -17.0043 178.989 -18.9089C178.939 -19.1139 178.925 -19.3427 178.838 -19.5385C178.622 -20.2714 178.342 -20.9824 178.003 -21.6608C177.522 -22.4571 176.985 -23.2113 176.399 -23.9158C175.548 -25.0617 174.437 -25.9289 173.2 -26.415C171.962 -26.9011 170.647 -26.9859 169.412 -26.6595C168.075 -26.3385 166.733 -25.9469 165.848 -24.728C164.586 -23.0471 163.404 -21.2905 162.306 -19.4649C161.05 -17.3057 159.984 -15.0368 158.834 -12.748C157.527 -10.1581 156.298 -7.4942 154.952 -4.94939C153.095 -1.4069 151.178 2.05696 149.324 5.58328C148.055 7.99371 146.834 10.4388 145.63 12.8956C144.548 15.0985 143.508 17.3377 142.492 19.5634C141.948 20.7082 141.397 21.8546 140.91 23.0399C139.891 25.452 138.951 27.9074 137.914 30.3007C136.878 32.6939 135.681 35.0948 134.573 37.4741C134.004 38.6867 133.41 39.8747 132.808 41.0641C132.207 42.2536 131.34 43.4062 130.983 44.7384C130.625 46.0705 129.693 47.0066 129.141 48.2073C129.069 48.3563 128.984 48.5084 128.913 48.6647C128.468 49.6309 128.086 50.636 127.576 51.5559C126.385 53.7306 125.403 56.0411 124.119 58.1611C121.745 62.0907 119.558 66.1769 117.294 70.1963C116.753 71.1004 116.16 72.0167 115.692 73.0271C114.82 74.8389 114.125 76.7632 112.906 78.3409C112.822 78.4884 112.749 78.6433 112.686 78.8041C112.008 80.1823 111.356 81.5851 110.638 82.9343C109.348 85.3729 107.999 87.7636 106.71 90.2021C105.42 92.6407 104.191 94.964 103.021 97.3969C101.012 101.549 99.056 105.75 97.0896 109.938C95.9692 112.32 94.8575 114.739 93.7709 117.121C93.6415 117.4 93.4731 117.657 93.3274 117.925C92.9953 118.515 92.6487 119.102 92.3411 119.71C90.9262 122.472 89.5357 125.253 88.0963 127.998C86.3875 131.257 84.6118 134.463 82.9118 137.758C82.3453 138.839 81.9257 140.023 81.3936 141.134C80.8615 142.245 80.3505 143.049 79.8834 144.036C78.0805 147.805 76.1553 151.488 74.018 155.02C72.0799 158.226 70.1277 161.373 68.4064 164.806C66.2429 169.103 63.7531 173.169 61.3874 177.329C59.078 181.413 56.5232 185.209 54.1088 189.109ZM55.1972 207.746C54.7915 208.114 54.4672 208.06 54.279 207.502C53.954 206.542 53.3751 206.302 52.5606 206.18C52.1805 206.104 51.8191 205.916 51.5138 205.635C51.2085 205.355 50.9703 204.992 50.8238 204.584C50.7312 204.427 50.6943 204.24 50.721 204.061C50.7477 203.883 50.8358 203.728 50.9667 203.628C52.5021 202.156 53.8091 200.408 54.8407 198.448C56.3147 196.022 57.9315 193.716 59.6813 191.542C61.2116 189.626 62.676 187.634 64.1765 185.679C64.3807 185.417 64.5996 185.171 64.832 184.941C65.5677 184.199 66.3198 183.469 67.0538 182.72C68.2621 181.375 69.3649 179.914 70.3511 178.352C70.675 177.97 70.8851 177.482 70.9547 176.948C71.0242 176.415 70.9502 175.86 70.7419 175.355C70.6819 175.215 70.6531 175.063 70.6582 174.912C70.6633 174.761 70.7022 174.616 70.7712 174.491C70.8402 174.366 70.9372 174.264 71.0532 174.195C71.1691 174.126 71.3004 174.092 71.435 174.097C71.6588 174.088 71.8848 174.122 72.1027 174.2C72.8481 174.485 73.5988 174.793 74.4962 175.12C74.4178 175.509 74.3043 175.887 74.1574 176.246C73.7774 176.973 73.3629 177.674 72.9155 178.348C71.2893 180.767 69.6749 183.206 67.9834 185.578C66.8049 187.239 65.5151 188.803 64.2841 190.414C61.39 194.206 58.5891 198.075 56.0324 202.173C55.4522 202.987 54.8286 203.759 54.1646 204.487C53.9329 204.713 53.7443 204.989 53.6087 205.301C53.5736 205.443 53.5701 205.595 53.5986 205.743C53.6271 205.891 53.6867 206.032 53.7724 206.152C53.8909 206.226 54.0222 206.266 54.154 206.268C54.2859 206.27 54.4141 206.235 54.5267 206.165C55.1181 205.6 55.6611 204.975 56.1496 204.297C57.0121 203.068 57.7942 201.757 58.6241 200.505C59.0126 199.924 59.4682 199.397 59.8794 198.826C62.4596 195.249 64.9791 191.618 67.628 188.102C68.8148 186.532 69.9282 184.91 71.0742 183.311C72.4381 181.435 73.8847 179.594 75.2876 177.74C75.5222 177.42 75.7126 177.057 75.9438 176.723C76.1749 176.389 76.323 176.16 76.8357 176.463C76.7654 176.743 76.6691 177.013 76.5481 177.267C75.0309 179.745 73.5545 182.251 71.9766 184.674C69.1996 188.925 66.4388 193.187 63.505 197.321C61.3502 200.385 58.9855 203.252 56.6913 206.187C56.2314 206.751 55.7319 207.272 55.1972 207.746V207.746ZM68.1098 178.038L68.2625 178.195L66.8408 180.309C66.6928 179.439 67.1736 178.65 68.1098 178.038V178.038ZM65.2104 209.221C64.4506 210.286 63.6909 211.351 62.8915 212.364C62.2472 213.176 61.8544 213.232 60.9416 212.7C60.1109 212.2 59.3017 211.653 58.5173 211.06C58.2078 210.795 57.9416 210.471 57.7325 210.103C57.4653 209.694 57.2551 209.242 56.9592 208.686C57.8894 209.12 58.4468 208.623 58.9074 207.947C59.9342 206.415 60.961 204.884 61.9779 203.339C63.2574 201.375 64.5313 199.397 65.7995 197.405C66.9522 195.58 68.0857 193.76 69.2255 191.938C70.7323 189.501 72.2147 187.048 73.7215 184.611C74.4874 183.375 75.2568 182.152 76.0652 180.952C76.3945 180.463 76.8695 180.101 77.246 179.639C77.5086 179.303 77.7511 178.948 77.972 178.574C78.1543 178.291 78.269 177.922 78.5016 177.735C78.6176 177.666 78.7462 177.625 78.8796 177.615C79.013 177.604 79.1486 177.624 79.2785 177.672C79.3479 177.703 79.4114 177.75 79.4641 177.81C79.5168 177.871 79.5574 177.943 79.5828 178.022C79.6082 178.101 79.6178 178.184 79.6109 178.265C79.6039 178.347 79.5807 178.424 79.5428 178.492C79.3405 179.045 79.1076 179.582 78.8455 180.099C77.8705 182.044 76.8501 183.969 75.906 185.929C74.0486 189.782 72.2855 193.689 70.3838 197.497C69.208 199.847 67.9053 202.118 66.5483 204.333C65.5792 205.935 64.3917 207.39 63.302 208.913C63.0145 209.323 62.7188 209.726 62.9019 210.348C64.2259 210.224 64.5215 208.636 65.4946 208.178L65.691 208.347C65.5498 208.652 65.3892 208.944 65.2104 209.221V209.221ZM68.4032 203.911C69.2854 202.228 70.2003 200.568 71.0417 198.857C71.8832 197.145 72.5386 195.618 73.2615 194.004C73.2911 193.905 73.3296 193.81 73.3763 193.721C74.9796 191.207 75.843 188.205 77.3013 185.595C78.1093 184.139 78.8766 182.654 79.7371 181.248C80.1282 180.711 80.5729 180.228 81.0632 179.807C81.1617 179.691 81.2979 179.625 81.4442 179.621C81.5904 179.618 81.7358 179.677 81.8507 179.788C81.9969 179.877 82.1144 180.018 82.1835 180.187C82.2525 180.357 82.2689 180.545 82.2298 180.719C82.1802 180.997 82.0786 181.256 81.9317 181.479C80.7237 182.876 80.1281 184.738 79.1684 186.323C77.1449 189.681 75.5165 193.331 73.3036 196.549C71.6309 198.971 70.1039 201.521 68.5081 204.009L68.4032 203.911ZM85.5893 216.462C85.0671 218.359 84.2383 220.114 83.143 221.64C83.0443 221.764 82.913 221.951 82.94 222.091C82.9612 222.367 83.0654 222.631 83.235 222.841C83.3338 222.883 83.4389 222.896 83.5404 222.88C83.6418 222.864 83.7364 222.819 83.8152 222.748C84.1603 222.348 84.4834 221.924 84.783 221.479C84.9724 221.224 85.1454 220.958 85.4782 220.483C85.5409 220.791 85.5705 221.104 85.5663 221.415C85.359 222.525 85.168 223.647 84.8797 224.73C84.6384 225.671 84.2392 225.728 83.5997 225.037C83.493 224.896 83.3715 224.769 83.2383 224.66L79.1658 222.3C78.2805 221.837 77.4141 221.324 76.57 220.763C76.1914 220.375 75.8579 219.934 75.5786 219.453C75.4218 219.251 75.1902 218.935 75.0249 218.951C73.8144 219.04 72.9442 218.15 72.0677 217.431C70.9373 216.604 69.9042 215.612 68.9978 214.483C68.4786 213.915 67.8644 213.471 67.1963 213.181C66.866 213.058 66.517 213.045 66.1922 213.143C65.6994 213.261 65.2329 213.489 64.7448 213.599C64.4109 213.618 64.0739 213.595 63.7401 213.53C63.8081 213.308 63.8925 213.094 63.9923 212.889C64.9262 211.535 65.8881 210.212 66.7976 208.84C67.7895 207.333 68.7709 205.781 69.7593 204.259C70.2535 203.498 70.7371 202.692 71.2436 201.983C72.7668 199.733 74.1573 197.37 75.407 194.906C76.3997 193.119 77.3731 191.337 78.3466 189.555L79.5697 187.319C79.7264 187.041 79.8977 186.768 80.0498 186.499L80.2752 186.592C80.2651 186.841 80.2285 187.086 80.1663 187.323C79.5006 189.062 78.8232 190.798 78.1339 192.533C76.7231 196.131 75.3711 199.776 73.8741 203.325C72.6821 206.143 71.3014 208.851 70.0069 211.608C69.8944 211.844 69.7917 212.093 69.6455 212.415C70.1736 212.528 70.3384 212.171 70.5108 211.874C70.9195 211.18 71.3265 210.479 71.7108 209.767C73.0168 207.34 74.4044 204.971 75.1308 202.188C75.213 201.922 75.3286 201.673 75.4742 201.447C76.297 199.926 76.9986 198.32 77.5713 196.647C78.3822 194.385 79.3336 192.229 80.2279 190.033C80.4418 189.486 80.7239 188.969 80.8861 188.404C81.4496 186.465 82.5036 184.849 83.3182 183.082C83.4597 182.77 83.536 182.411 83.6974 182.124C83.8352 181.97 83.9983 181.847 84.1788 181.761C84.2827 181.968 84.4967 182.211 84.4632 182.382C84.3502 183.153 84.1757 183.908 83.9415 184.636C83.4443 186.118 82.8463 187.546 82.3491 189.028C81.6925 190.974 81.1023 192.943 80.4748 194.897C79.7078 197.342 78.9565 199.853 78.0515 202.23C77.0363 204.998 75.7574 207.62 74.2361 210.051C73.8816 210.623 73.5567 211.218 73.2626 211.833C73.1162 212.14 73.0282 212.481 73.0039 212.835C72.9796 213.19 73.0195 213.55 73.1213 213.896C73.3679 213.662 73.596 213.406 73.8034 213.128C75.1677 210.718 76.804 208.483 77.5536 205.655C77.5713 205.55 77.6046 205.451 77.6521 205.361C79.2849 203.111 79.9449 200.305 80.6871 197.587C81.3367 195.217 82.1342 192.928 82.87 190.606C83.465 188.714 84.1525 186.869 84.8011 185.002C84.8811 184.772 84.9828 184.553 85.1046 184.349C85.3112 183.997 85.5365 183.61 86.0095 183.861C86.4825 184.111 86.4068 184.501 86.3521 184.893C86.3074 185.247 86.2393 185.594 86.1481 185.933C85.6027 187.891 85.0591 189.857 84.481 191.791C82.8499 197.122 81.0721 202.388 79.1477 207.587C78.1054 210.408 76.8859 213.139 75.7335 215.924C75.5618 216.337 75.41 216.776 75.2575 217.184C75.1653 217.357 75.1341 217.565 75.1696 217.77C75.2052 217.975 75.305 218.163 75.4506 218.299C75.6688 218.281 75.8737 218.191 76.0407 218.041C76.2077 217.891 76.3296 217.687 76.3917 217.454C77.3338 215.316 78.2904 213.181 79.1545 211C79.9373 209.016 80.6613 206.984 81.3207 204.937C82.1875 202.259 82.9698 199.54 83.7912 196.842C84.1526 195.641 84.5086 194.435 84.8591 193.226C85.1898 192.094 85.4652 190.928 85.8558 189.82C86.2409 188.742 86.6806 187.693 87.173 186.678C87.5322 185.919 87.7539 185.912 88.2974 186.625C89.2311 187.864 90.1444 189.132 91.0037 190.427C91.2956 190.962 91.5378 191.527 91.7261 192.112C91.3469 192.39 91.0251 192.754 90.7793 193.183C90.5336 193.611 90.3688 194.095 90.2945 194.608C89.4269 198.749 88.532 202.889 87.7954 207.068C87.2352 210.259 86.4984 213.397 85.5893 216.462ZM92.8208 198.817C91.7436 201.266 90.7235 203.756 89.6852 206.227L89.1012 207.63C88.8882 206.855 88.8616 206.043 89.0244 205.279C89.4937 202.344 90.1354 199.459 90.9453 196.643C91.3152 195.603 91.7532 194.601 92.2557 193.642C92.508 193.875 92.6152 193.927 92.6491 194.012C93.1706 195.621 93.5309 197.207 92.8208 198.817V198.817ZM120.995 127.387C121.109 127.805 121.09 128.246 120.941 128.631C120.504 129.913 120.006 131.164 119.452 132.38C118.684 133.86 118.022 135.411 117.472 137.02C117.056 138.155 116.584 139.26 116.06 140.332C115.672 141.253 115.315 142.19 114.95 143.122C114.35 144.628 113.741 146.122 113.164 147.638C112.706 148.832 112.309 150.058 111.851 151.251C110.885 153.77 109.909 156.283 108.922 158.79C108.882 158.924 108.829 159.051 108.763 159.169C107.076 161.842 106.447 165.144 105.118 168.01C103.866 170.719 102.897 173.591 101.695 176.311C99.3933 181.415 97.4757 186.737 95.4865 192.015C95.3231 192.605 94.9814 193.103 94.5183 193.424C94.3311 193.141 94.1586 192.846 94.0019 192.541C92.9365 190.177 91.6888 187.914 90.274 185.779C88.8555 183.747 87.2705 181.866 85.5419 180.164C85.1805 179.786 84.8127 179.41 84.4623 179.022C82.7726 177.256 80.8965 175.736 78.8827 174.5C76.3048 172.895 73.5671 171.677 70.744 170.88C70.2739 170.737 69.8118 170.555 69.3615 170.336C68.6969 169.993 68.6267 169.785 68.9388 169.083C69.5009 167.787 70.063 166.491 70.7224 165.233C71.5441 163.58 72.4229 161.968 73.2791 160.346C73.5794 159.897 73.7449 159.347 73.7534 158.769C73.7506 158.441 73.8325 158.126 73.989 157.861C75.2222 155.807 76.4735 153.773 77.7231 151.731C78.0593 151.186 78.42 150.658 78.7235 150.09C79.8653 147.965 81.0053 145.834 82.1144 143.686C82.6124 142.715 82.9886 141.688 83.4877 140.694C83.9868 139.699 84.4348 138.802 84.9369 137.876C86.2569 135.423 87.624 132.996 88.9113 130.52C90.0204 128.372 91.0346 126.139 92.0843 123.998C92.8678 122.44 93.702 120.924 94.479 119.367C95.7076 116.928 96.9525 114.5 98.1304 112.018C98.2894 111.579 98.5741 111.218 98.9417 110.99C99.3093 110.762 99.7401 110.68 100.169 110.755C101.155 110.859 102.143 110.8 103.124 110.913C103.986 111.005 104.843 111.18 105.687 111.436C106.815 111.792 107.914 112.256 109.018 112.68C109.745 112.991 110.425 113.445 111.024 114.018C111.977 114.858 113.084 115.467 114.064 116.277C115.047 117.078 115.978 117.96 116.849 118.914C117.222 119.432 117.515 120.014 117.716 120.634C118.307 122.221 119.052 123.738 119.938 125.156C120.38 125.846 120.736 126.597 120.995 127.387V127.387ZM122.359 124.327C122.189 124.511 122.001 124.673 121.798 124.81C120.474 123.153 119.397 121.269 118.614 119.242C118.294 118.396 117.783 117.649 117.134 117.081C116.452 116.47 115.861 115.838 115.199 115.223C114.153 114.271 113.093 113.338 112.016 112.425C110.396 111.088 108.568 110.127 106.648 109.603C104.953 109.112 103.222 108.869 101.499 108.88C100.924 108.878 100.382 108.792 100.12 108.096C99.9586 107.678 100.454 107.063 101.116 106.773C101.357 106.699 101.588 106.594 101.805 106.46C103.108 105.428 104.597 105.682 106.04 106.055C107.891 106.548 109.702 107.213 111.549 107.83C111.859 107.943 112.156 108.1 112.434 108.299C113.706 109.201 114.976 110.112 116.244 111.031C117.965 112.385 119.4 114.165 120.427 116.221C120.606 116.571 120.801 116.912 121.01 117.242C121.329 117.749 121.536 118.33 121.612 118.932C121.804 119.774 122.096 120.59 122.478 121.357C123.047 122.567 123.056 123.37 122.359 124.327V124.327ZM124.624 119.185C124.565 119.31 124.496 119.427 124.417 119.536C123.916 120.268 123.565 120.244 123.181 119.376C122.84 118.662 122.567 117.912 122.367 117.141C121.817 115.028 120.746 113.102 119.283 111.595C117.616 109.806 115.785 108.225 113.826 106.881C112.72 106.024 111.478 105.435 110.183 105.154C109.587 104.988 108.997 104.783 108.418 104.54C106.958 104.036 105.454 103.774 103.953 103.762C103.648 103.821 103.331 103.804 103.024 103.71C102.718 103.616 102.429 103.449 102.178 103.22C102.305 102.748 102.454 102.286 102.625 101.835C103.141 100.604 103.72 99.4047 104.212 98.1563C104.323 97.8266 104.505 97.5368 104.742 97.3115C104.979 97.0862 105.264 96.932 105.573 96.8619C106.317 96.5883 107.079 96.3717 107.855 96.2137C108.675 96.1732 109.502 96.2343 110.322 96.3958C111.28 96.5327 112.234 96.7382 113.177 97.0112C113.958 97.2584 114.719 97.5946 115.448 98.0145C116.948 98.8469 118.424 99.7236 119.877 100.645C120.345 101.001 120.776 101.417 121.162 101.884C121.89 102.631 122.644 103.348 123.307 104.164C124.263 105.328 125.278 106.424 125.815 107.96C126.235 109.035 126.713 110.084 127.246 111.1C127.452 111.482 127.566 111.913 127.576 112.348C127.586 112.782 127.492 113.205 127.304 113.571L124.624 119.185ZM112.429 81.854C112.804 80.9899 113.249 80.1089 113.662 79.2355C113.781 79.0289 113.878 78.8057 113.949 78.5705C114.554 75.9015 116.092 73.8757 117.416 71.6922C118.476 70.0528 119.448 68.341 120.328 66.565C121.488 64.0647 122.986 61.847 124.308 59.4859C125.523 57.3285 126.801 55.2101 127.857 52.9517C128.67 51.2081 129.527 49.5315 130.437 47.8809C131.061 46.7557 131.875 45.7783 132.548 44.6879C133.376 43.3434 134.19 41.9711 134.939 40.5526C135.962 38.5499 136.933 36.5052 137.857 34.4331C139.382 31.0556 140.826 27.6276 142.359 24.2559C143.352 22.0745 144.455 19.9593 145.51 17.8095C146.564 15.6597 147.697 13.2434 148.826 10.9827C149.734 9.12363 150.735 7.2885 151.709 5.45218C153.672 1.76031 155.659 -1.92152 157.621 -5.62071C159.92 -9.94292 161.933 -14.4749 164.542 -18.5773C165.177 -19.5734 165.812 -20.5621 166.489 -21.5219C167.938 -23.5805 171.405 -24.2501 173.081 -23.0497C174.901 -21.7833 176.251 -20.1641 176.56 -17.6912C176.603 -17.2624 176.607 -16.8324 176.57 -16.4084C176.522 -15.6226 176.406 -14.9213 176.349 -14.1721C176.14 -12.4081 176.026 -10.6252 176.005 -8.83303C176.077 -6.41928 175.374 -4.29962 174.806 -2.09629C174.042 0.866524 172.9 3.64104 171.975 6.5263C170.348 11.562 168.381 16.4238 166.493 21.3361C165.814 23.1017 164.994 24.7925 164.264 26.5162C163.692 27.8844 163.112 29.2468 162.618 30.6582C161.363 34.1844 159.926 37.6153 158.316 40.9345C156.584 44.5784 154.838 48.2181 153.117 51.8751C152.031 54.2029 150.992 56.558 149.914 58.8915C148.836 61.2251 147.829 63.2628 146.844 65.5043C146.049 67.2976 145.339 69.1326 144.606 70.9576C144.512 71.2563 144.439 71.5637 144.386 71.8773C144.329 72.1157 144.327 72.418 144.195 72.5736C143.138 73.8104 142.869 75.5086 142.193 76.9249C141.261 78.9061 140.45 80.9432 139.583 82.9707C139.247 83.8256 138.974 84.6651 138.657 85.5154C138.34 86.3657 137.944 87.3122 137.591 88.2099C137.075 89.5261 136.552 90.8439 136.051 92.1717C134.696 95.8028 133.373 99.457 131.987 103.072C131.276 104.907 130.465 106.689 129.683 108.479C129.613 108.759 129.471 109.006 129.276 109.19C129.08 109.374 128.838 109.488 128.579 109.518C128.445 109.272 128.301 109.036 128.184 108.777C127.585 107.465 126.981 106.163 126.4 104.839C125.461 102.971 124.198 101.32 122.692 99.9921C121.804 99.1136 120.794 98.4037 119.864 97.574C118.469 96.3915 116.916 95.4829 115.274 94.8899C113.262 94.0668 111.163 93.6132 109.062 93.5471C108.613 93.5374 108.166 93.5544 107.721 93.5981C107.357 93.6313 107.019 93.6349 106.761 93.1782C106.868 92.594 107.154 92.0822 107.57 91.7297C108.542 90.7445 109.301 89.522 109.797 88.1451C110.713 86.0672 111.542 83.9404 112.428 81.8467L112.429 81.854ZM57.1957 189.336C58.163 187.726 59.2293 186.162 60.2357 184.573C60.5986 183.998 60.9243 183.409 61.2645 182.824C62.3519 180.953 63.4474 179.087 64.5249 177.203C65.163 176.082 65.7701 174.945 66.4156 173.8C67.0612 172.654 67.2182 172.546 68.4201 172.986C68.7172 173.117 69.0085 173.267 69.2927 173.434C68.9891 174.003 68.7814 174.463 68.5184 174.89C67.6718 176.27 66.8415 177.661 65.9425 178.992C63.6357 182.41 61.5246 185.967 59.0727 189.288C56.6208 192.61 54.2647 196.218 51.8789 199.701C51.2504 200.745 50.4818 201.667 49.5984 202.439C49.2658 202.689 48.9433 203.038 48.4899 202.643C48.292 202.442 48.1632 202.17 48.1284 201.879C48.0937 201.589 48.1555 201.3 48.3019 201.07C48.5508 200.628 48.85 200.226 49.1924 199.874C52.2278 196.74 54.9125 193.202 57.1939 189.329L57.1957 189.336Z"
            />
            <path
                d="M83.5273 213.148C84.1868 210.791 84.8381 208.428 85.4376 206.047C85.8479 204.4 86.1813 202.771 86.5234 201.095C86.6621 200.403 86.7571 199.699 86.8748 199.005C86.9156 198.726 86.9767 198.452 87.0575 198.187C87.5889 196.565 88.0975 194.934 88.6825 193.338C88.8928 192.878 89.1743 192.467 89.5147 192.124C89.6966 191.892 89.8228 191.611 89.8824 191.304C89.942 190.997 89.9332 190.673 89.8567 190.362C89.6574 189.813 89.2073 189.658 88.9012 190.103C88.5214 190.64 88.2092 191.236 87.9726 191.875C87.4544 193.354 87.0253 194.866 86.5444 196.359C85.8149 198.842 85.2122 201.377 84.739 203.954C83.6209 208.935 82.2187 213.813 80.5407 218.556C80.4132 218.927 80.3538 219.329 80.259 219.723L80.4995 219.851C80.6331 219.779 80.7538 219.682 80.857 219.564C81.4074 218.716 81.9007 217.822 82.3332 216.887C82.7984 215.673 83.1971 214.424 83.5273 213.148V213.148Z"
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
