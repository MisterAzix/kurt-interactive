import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export default function Tree(props) {
    return (
        <Svg {...props} width="170" height="177" viewBox="0 0 170 177" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M110.295 70.9894C109.255 78.3094 108.215 85.6194 107.215 92.5794C108.785 93.9294 110.195 95.1594 111.625 96.3694C111.955 96.6494 112.345 96.9894 112.735 97.0194C115.195 97.2294 117.665 97.5194 120.135 97.4794C122.285 97.4494 123.315 95.7994 123.885 93.9394C124.125 93.1694 124.255 92.2994 124.165 91.5094C124.095 90.8894 123.625 90.3094 123.295 89.7394C123.055 89.3394 122.615 89.0094 122.495 88.5894C122.395 88.2294 122.495 87.6794 122.725 87.3894C122.845 87.2394 123.495 87.3394 123.795 87.5094C125.465 88.4594 127.035 89.6394 128.775 90.4294C131.685 91.7594 134.805 92.4394 138.035 92.1894C140.255 92.0194 142.066 90.8494 143.686 89.3894C144.566 88.5994 145.385 87.7394 146.205 86.8894C147.395 85.6594 147.305 84.4994 146.505 83.5394C145.545 82.3994 144.575 81.2594 143.545 80.1794C142.695 79.2894 141.745 78.4994 140.895 77.6194C140.725 77.4394 140.645 76.9894 140.755 76.7794C140.855 76.5894 141.365 76.4094 141.525 76.5094C144.005 78.0094 146.916 77.5994 149.566 78.3494C151.266 78.8294 153.145 78.8794 154.925 78.1694C156.985 77.3394 159.265 76.8994 161.105 75.7394C163.455 74.2594 165.525 72.2694 166.775 69.6694C167.025 69.1394 167.025 68.3494 166.855 67.7694C166.135 65.3694 164.735 63.3994 162.765 61.8394C162.055 61.2794 161.346 60.6894 160.686 60.0694C159.715 59.1694 159.185 59.1494 158.135 59.9094C157.615 60.2794 156.995 60.4994 156.425 60.7894C156.305 60.6494 156.186 60.5094 156.055 60.3694C156.445 59.8594 156.775 59.2994 157.225 58.8394C158.085 57.9594 159.156 57.2394 159.876 56.2594C160.906 54.8494 161.725 53.2894 162.585 51.7594C163.175 50.7094 163.665 49.6094 164.255 48.5494C165.125 46.9594 165.256 45.2594 165.436 43.4794C165.626 41.7194 165.535 40.0394 165.415 38.3094C165.185 35.0494 163.345 32.7694 161.015 30.7694C158.865 28.9194 156.296 27.7794 153.626 26.9594C152.436 26.5894 151.175 26.2594 149.775 26.5794C148.436 26.8894 146.945 26.7094 145.535 26.5994C144.385 26.5094 143.925 26.7594 143.735 27.9094C143.695 28.1194 143.655 28.3494 143.545 28.5294C143.435 28.7094 143.235 28.8394 143.075 28.9894C142.965 28.8194 142.805 28.6494 142.765 28.4694C142.565 27.4694 142.555 26.4094 142.195 25.4794C141.745 24.3494 141.255 22.9194 140.335 22.3694C139.075 21.6194 137.415 21.5094 135.895 21.2494C135.405 21.1594 134.565 21.2894 134.375 21.6094C133.895 22.3994 133.735 23.3694 133.385 24.2494C132.995 25.2294 132.695 26.2994 132.085 27.1294C131.715 27.6394 130.845 27.7894 130.195 28.0994C130.075 27.9994 129.955 27.9094 129.845 27.8094C130.175 26.7694 130.405 25.6794 130.865 24.6994C132.035 22.1994 132.645 19.5694 132.535 16.8494C132.405 13.6594 130.955 10.9794 128.675 8.74942C127.145 7.24942 125.326 6.23942 123.315 5.51942C122.605 5.26942 122.015 4.66942 121.295 4.44942C119.505 3.88942 117.665 3.49942 115.865 2.96942C114.275 2.50942 112.695 2.10942 111.005 2.45942C110.715 2.51942 110.365 2.31942 110.045 2.26942C108.455 2.02942 106.885 2.20942 105.325 2.51942C104.205 2.73942 103.025 2.77942 101.965 3.13942C99.9455 3.81942 97.8855 4.25942 96.0855 5.66942C94.4755 6.92942 93.2755 8.40942 92.0455 9.94942C91.6655 10.4194 91.1155 10.7594 90.6455 11.1594C90.5355 11.0894 90.4355 11.0094 90.3255 10.9394C90.4455 10.2494 90.5755 9.55942 90.7055 8.80942C88.9955 9.05942 88.2155 7.68942 87.2855 6.71942C85.8455 5.22942 84.2755 3.96942 82.3355 3.26942C81.0755 2.81942 79.7755 2.48942 78.4655 2.22942C78.0055 2.13942 77.4755 2.43942 76.9755 2.50942C75.7855 2.67942 74.5755 2.97942 73.3955 2.92942C71.8755 2.85942 70.5855 3.43942 69.2355 3.89942C67.6755 4.42942 66.0955 4.94942 64.6155 5.66942C63.0455 6.42942 61.5555 7.35942 60.1155 8.32942C59.7055 8.59942 59.4655 9.23942 59.3055 9.75942C58.7855 11.4294 58.3155 13.1194 58.6155 14.9094C58.6655 15.1794 58.4255 15.4994 58.3155 15.7994C58.0555 15.6094 57.7655 15.4494 57.5355 15.2194C57.3855 15.0694 57.2555 14.8494 57.2355 14.6394C57.0455 12.6094 55.5455 11.6094 53.9855 10.8494C53.0655 10.3994 51.8755 10.1494 50.8755 10.2994C47.7655 10.7594 45.3455 12.5994 43.5655 15.0494C42.6955 16.2394 42.9855 17.9494 43.4455 19.4394C43.9455 21.0394 44.4255 22.6494 44.9255 24.3094C43.8155 24.6394 43.4255 23.8394 42.8955 23.2994C42.4655 22.8594 42.0255 22.4394 41.5855 22.0094C40.9855 22.6694 40.3455 23.2894 39.8155 23.9994C39.5955 24.2894 39.5355 24.7794 39.5755 25.1594C39.6755 26.1594 39.0655 26.4194 38.4155 26.5494C35.3255 24.4094 32.7955 21.5694 28.9555 20.9194C27.2655 20.6294 25.6655 20.5794 23.9155 21.2994C20.6055 22.6494 18.1555 24.7794 16.4755 27.8494C15.3055 29.9894 15.4155 32.3294 15.4055 34.7094C15.3955 37.4894 16.7055 39.6294 17.8555 41.9194C17.9155 42.0494 17.9355 42.1994 18.0055 42.4694C16.7655 42.0994 15.6655 41.6394 15.1055 40.5494C13.7555 37.9294 12.9555 35.1894 13.1355 32.1394C13.2655 29.8894 13.9655 27.8694 15.1055 26.0594C16.7055 23.5294 18.7555 21.4094 21.5655 20.0494C24.2055 18.7694 26.8355 18.2794 29.7355 18.8194C32.8555 19.3894 35.3255 21.0594 37.6355 23.0794C37.7155 23.1494 37.7955 23.2194 37.9955 23.3894C38.2055 23.0994 38.4155 22.8194 38.6055 22.5394C38.9355 22.0694 39.1555 21.3994 39.6055 21.1394C41.3155 20.1494 41.2155 18.6394 41.0655 17.0194C40.8855 15.1194 41.8555 13.6294 43.0855 12.3594C44.7155 10.6794 46.6055 9.34942 48.8855 8.62942C51.4255 7.82942 53.8855 7.55942 56.1255 9.42942C56.3755 9.63942 56.6755 9.76942 57.0255 9.96942C57.1955 9.71942 57.4155 9.52942 57.4455 9.30942C57.7255 7.55942 59.0455 6.75942 60.3755 5.92942C61.1555 5.44942 61.8255 4.77942 62.6455 4.36942C67.2455 2.07942 72.0155 0.409421 77.2355 0.249421C81.5255 0.119421 85.2255 1.29942 88.3055 4.42942C89.4555 5.59942 90.5755 6.67942 90.8155 8.67942C91.2955 8.08942 91.6155 7.76942 91.8555 7.38942C93.5655 4.60942 96.0055 2.80942 99.0655 1.71942C103.555 0.119421 108.146 -0.380579 112.845 0.289421C115.506 0.669421 118.235 0.939421 120.755 1.80942C125.475 3.43942 129.975 5.61942 132.845 10.0294C134.085 11.9294 134.895 14.0094 134.735 16.3694C134.675 17.2894 134.835 18.2294 134.875 18.8794C136.675 19.1594 138.335 19.2094 139.855 19.6994C142.265 20.4694 143.846 22.1194 143.936 24.8194C143.965 25.7994 144.405 25.7694 145.145 25.5694C147.905 24.8294 150.715 24.1594 153.555 24.7894C157.076 25.5694 160.436 26.8194 163.055 29.4594C164.235 30.6394 165.476 31.8394 166.316 33.2494C167.326 34.9294 167.825 36.8694 167.705 38.9094C167.635 40.1094 167.725 41.3194 167.785 42.5294C167.875 44.5194 167.425 46.4094 166.605 48.1794C165.895 49.6994 164.935 51.0994 164.105 52.5594C163.335 53.9194 162.626 55.3294 161.816 56.6694C161.396 57.3594 160.805 57.9594 160.186 58.7394C160.835 58.9394 161.415 59.0694 161.965 59.2894C165.186 60.5594 167.465 62.8394 168.915 65.9294C169.865 67.9494 169.055 71.0794 167.225 72.8494C165.595 74.4194 163.955 75.9994 162.285 77.5294C161.865 77.9094 161.346 78.2094 160.816 78.4094C159.136 79.0394 157.395 79.5394 155.745 80.2294C154.346 80.8094 152.995 80.5594 151.566 80.5394C150.156 80.5194 148.816 80.4394 147.465 80.0894C147.296 80.0494 147.085 80.1994 146.755 80.2994C147.455 81.1394 148.156 81.8394 148.686 82.6494C149.706 84.2094 149.306 86.8294 147.846 88.2294C146.416 89.5894 145.105 91.1294 143.505 92.2494C142.405 93.0194 141.065 93.5594 139.715 94.0394C138.205 94.5694 136.775 94.7594 135.355 94.4594C132.505 93.8594 129.545 93.5794 126.945 92.0794C126.365 91.7494 126.155 91.9094 126.105 92.6494C125.925 95.3694 124.785 98.1294 121.745 99.0194C120.825 99.2894 119.955 99.6894 119.035 99.9394C118.655 100.039 118.215 99.9294 117.805 99.8894C116.025 99.6894 114.185 99.7294 112.495 99.2294C109.965 98.4794 109.565 97.9794 107.075 95.1794C106.945 96.7494 106.825 98.1994 106.695 99.6594C106.565 101.139 106.385 102.609 106.325 104.089C106.255 105.719 106.275 107.349 106.265 108.979C106.255 111.089 106.175 113.199 106.275 115.299C106.365 117.179 106.635 119.049 106.865 120.909C107.035 122.279 107.195 123.649 107.485 124.989C107.675 125.859 108.095 126.689 108.425 127.529C109.365 129.969 110.175 132.479 111.295 134.829C113.425 139.279 116.195 143.349 119.675 146.859C122.615 149.829 125.805 152.539 128.795 155.459C131.025 157.629 133.125 159.929 135.245 162.209C136.145 163.169 137.005 164.169 137.765 165.239C137.955 165.509 137.815 166.209 137.585 166.549C137.225 167.069 136.905 166.649 136.555 166.309C133.765 163.579 130.975 160.859 128.135 158.189C126.445 156.599 124.615 155.159 122.945 153.539C121.305 151.959 119.885 150.139 118.205 148.599C115.695 146.299 113.755 143.549 111.925 140.749C110.645 138.789 109.605 136.639 108.655 134.489C107.625 132.149 106.675 129.759 105.965 127.319C104.855 123.509 104.116 119.619 104.065 115.609C104.006 109.729 103.955 103.859 104.625 98.0094C104.935 95.2894 105.075 92.5494 105.475 89.8494C106.015 86.1994 106.635 82.5594 107.425 78.9594C107.975 76.4494 108.855 74.0194 109.605 71.5594C109.685 71.2994 109.935 71.0994 110.115 70.8694C110.105 70.8994 110.205 70.9494 110.295 70.9894Z" />
            <path d="M5.76535 62.8696C5.30535 63.3496 5.06536 63.6496 4.77536 63.9096C3.12536 65.3596 2.46535 67.1796 2.18535 69.3496C1.91535 71.4096 2.34536 73.3396 2.70536 75.2696C3.05536 77.1196 4.66536 77.9496 6.42536 78.3996C8.66536 78.9796 10.8654 79.3596 13.1954 78.6996C14.4154 78.3496 15.7654 78.4496 17.2554 78.3296C17.1954 78.7596 17.2154 79.1396 17.0954 79.4696C15.9154 82.6096 16.7854 85.0996 19.6154 86.8996C22.2254 88.5596 25.0154 88.6996 27.9254 88.0296C29.2254 87.7296 30.8254 87.8996 30.9854 85.9296C30.9954 85.7596 31.2353 85.5396 31.4153 85.4596C31.8253 85.2596 32.2653 85.1296 32.6953 84.9796C32.5953 85.3596 32.6054 85.8096 32.3853 86.0896C31.2353 87.6196 32.1954 89.1796 33.8554 90.3996C36.1254 92.0696 38.8254 92.9196 41.5554 93.4696C42.7254 93.6996 44.0154 93.3796 45.2354 93.2296C46.5354 93.0696 47.8153 92.8096 49.1054 92.5896C49.0054 91.7996 48.8953 90.9296 48.7853 90.0596C48.8953 90.0096 48.9953 89.9596 49.1054 89.9096C49.4654 90.2296 49.8554 90.5296 50.1854 90.8696C51.9854 92.7196 54.0653 92.9396 56.2253 91.5196C56.8053 91.1396 57.3854 90.7396 58.0154 90.4796C58.4154 90.3096 58.9354 90.2896 59.3754 90.3596C60.0654 90.4696 60.3054 90.8396 59.8254 91.5096C59.3754 92.1396 58.8354 92.7696 58.6154 93.4896C57.8654 95.9296 59.1854 97.6796 60.9354 99.0496C62.7154 100.45 64.7153 100.66 66.7953 99.5396C67.6853 99.0596 68.6453 98.6896 69.6053 98.3496C70.0854 98.1796 70.6353 98.1596 71.3553 98.0496C70.9753 95.8896 70.6054 93.6396 70.1754 91.4096C69.8954 89.9796 69.5453 88.5596 69.1653 87.1496C68.6553 85.2096 68.0854 83.2896 67.5453 81.3596C67.5053 81.2196 67.3854 81.0796 67.3954 80.9496C67.4354 80.5396 67.5154 80.1396 67.5854 79.7396C67.9454 79.9296 68.4354 80.0296 68.6254 80.3296C69.2854 81.3796 69.9454 82.4496 70.3954 83.5896C70.8854 84.8196 71.1353 86.1496 71.4753 87.4396C71.8553 88.9096 72.2853 90.3796 72.5753 91.8696C72.9553 93.8196 73.2653 95.7896 73.5353 97.7596C73.9753 101.03 74.4254 104.31 74.7454 107.59C74.9954 110.18 75.1454 112.79 75.1454 115.39C75.1454 118.57 75.0453 121.75 74.7953 124.92C74.6654 126.54 74.0953 128.12 73.7253 129.72C73.6653 129.96 73.6254 130.21 73.5854 130.46C73.1654 132.75 72.9253 135.09 71.6953 137.15C71.6553 137.21 71.5953 137.28 71.6053 137.34C71.8053 138.82 70.6854 139.74 70.1154 140.88C69.3954 142.33 68.6053 143.75 67.8553 145.19C66.5253 147.74 65.2954 150.34 63.8654 152.83C62.3654 155.45 60.5953 157.94 58.1653 159.76C56.1953 161.23 54.2854 162.89 51.8454 163.61C51.3554 163.76 50.8154 163.74 50.3054 163.8C50.2354 163.69 50.1654 163.58 50.0954 163.48C50.4854 162.99 50.7854 162.4 51.2754 162.05C52.5454 161.13 53.9854 160.44 55.1754 159.44C56.8354 158.06 58.5654 156.66 59.8354 154.95C61.7054 152.42 63.2553 149.64 64.8253 146.9C65.5953 145.56 66.0654 144.04 66.7454 142.65C67.3554 141.39 68.1953 140.24 68.7253 138.95C69.5353 136.98 70.3254 134.98 70.8454 132.91C71.5754 130 72.2553 127.06 72.5753 124.09C72.8754 121.33 72.6854 118.51 72.7054 115.72C72.7154 114.05 72.7854 112.37 72.6854 110.71C72.5154 107.85 72.2454 104.99 71.9954 102.13C71.9554 101.71 71.7753 101.3 71.6653 100.88C71.5553 100.48 71.4554 99.7396 71.3354 99.7296C70.8654 99.7096 70.1754 99.7696 69.9354 100.09C68.8054 101.55 67.0353 101.54 65.5453 102.12C63.4153 102.94 61.4154 102.27 59.6154 100.97C57.1454 99.1796 56.1054 96.7996 56.7354 93.7496C55.8154 93.9796 54.8854 94.0796 54.0754 94.4496C52.8054 95.0296 51.7254 94.5496 50.7054 93.9996C50.1454 93.6896 49.8254 93.6796 49.3554 94.0296C48.3254 94.8096 47.1754 95.0196 45.8654 95.1596C44.8154 95.2696 43.7854 95.4796 42.6854 95.5096C40.9854 95.5496 39.4154 95.2696 37.8354 94.6896C35.7254 93.9296 33.6454 93.1696 32.0854 91.4696C31.6654 91.0096 31.1854 90.5796 30.9054 90.0396C30.5254 89.3196 30.1053 89.4296 29.4753 89.6496C28.1653 90.1096 26.8354 90.7696 25.4954 90.8096C23.9054 90.8596 22.2354 90.5396 20.7154 90.0196C19.3754 89.5596 18.1454 88.6796 16.9654 87.8496C14.8554 86.3796 14.1854 83.4196 14.9954 81.1096C15.0854 80.8596 15.0954 80.5896 15.1154 80.4996C14.1254 80.6196 13.2054 80.6996 12.3154 80.8696C11.7054 80.9796 11.1254 81.3096 10.5154 81.3796C8.08535 81.6696 5.92536 80.6396 3.75536 79.8296C2.38536 79.3196 1.39535 78.2496 0.85535 76.7496C-0.21465 73.7996 -0.20465 70.8596 0.46535 67.8596C0.91535 65.7896 3.61535 63.0496 5.76535 62.8696Z" />
            <path d="M74.6453 175.259C74.6053 174.789 74.4453 174.289 74.5353 173.849C75.4053 169.539 76.3153 165.249 77.1753 161.099C69.9953 162.159 62.5553 162.519 55.3753 164.159C54.8153 163.189 55.2653 162.759 55.8453 162.449C56.3253 162.189 56.8353 161.949 57.3653 161.839C58.8453 161.519 60.3453 161.229 61.8453 161.009C65.1153 160.519 68.3853 159.959 71.6753 159.669C73.6753 159.489 75.7853 158.599 77.8253 160.169C77.7153 158.769 77.5053 157.549 77.5453 156.339C77.7153 151.259 77.9453 146.189 78.1753 141.119C78.2953 138.439 78.4153 135.749 78.6253 133.069C78.7653 131.289 79.0453 129.519 79.3253 127.759C79.3753 127.459 79.7253 127.219 79.9353 126.939C80.1653 127.179 80.5253 127.389 80.6053 127.669C80.7353 128.169 80.7253 128.709 80.7153 129.229C80.6953 130.629 80.6253 132.019 80.5953 133.419C80.5553 135.329 80.5553 137.239 80.4953 139.149C80.4253 141.169 80.3053 143.179 80.2253 145.199C80.1353 147.529 80.1053 149.869 79.9653 152.199C79.9053 153.249 79.4053 154.309 79.5353 155.319C79.7953 157.279 79.0553 158.949 78.5553 160.749C78.0653 162.509 78.0753 164.389 77.7453 166.199C77.3053 168.699 76.8053 171.199 76.2153 173.659C76.0653 174.269 75.4753 174.779 75.0853 175.339C74.9353 175.319 74.7953 175.289 74.6453 175.259Z" />
            <path d="M44.0249 57.9293C42.6449 58.9493 40.9149 58.2593 40.6349 56.4393C40.1749 53.3793 40.6249 50.4593 42.7049 48.0193C43.0949 47.5593 43.9249 47.4493 44.5749 47.2593C44.9049 47.1593 45.2949 47.2393 45.6649 47.2393C46.5149 44.4093 48.3549 42.7293 51.3349 42.5693C52.0349 42.5293 52.875 42.7993 53.435 43.2193C54.315 43.8793 55.0749 43.9793 56.0549 43.5193C57.6249 42.7893 59.2949 42.6993 60.9849 42.9593C63.3749 43.3293 65.3249 45.3293 65.5849 47.7093C65.7049 48.8293 65.6949 49.9593 65.7349 51.0893C65.7449 51.2293 65.7449 51.4393 65.6649 51.4993C64.9949 52.0293 64.3049 52.5393 63.6149 53.0493C63.5049 53.0193 63.3849 52.9793 63.2749 52.9493C63.2749 52.3693 63.1149 51.7293 63.3049 51.2193C64.1449 48.9393 63.4949 47.1293 61.6749 45.6993C60.4049 44.6993 58.8749 44.9393 57.4549 45.2193C56.4749 45.4093 55.575 46.1093 54.595 46.2393C53.975 46.3193 53.1549 45.8893 52.6349 45.4493C51.4649 44.4393 49.8349 44.6493 48.9849 45.7093C47.8749 47.0893 47.9249 48.6993 47.4749 50.2093C46.9649 50.4093 46.425 50.7193 45.845 50.7893C45.605 50.8193 45.2449 50.3993 45.0249 50.1193C44.4949 49.4393 43.8949 49.3593 43.6049 50.0993C42.7949 52.1593 42.0649 54.2693 42.9849 56.4893C43.1949 56.9993 43.6349 57.4093 44.0249 57.9293Z" />
            <path d="M85.7158 174.23C87.2558 171.86 88.8158 169.5 90.3358 167.12C91.2158 165.73 91.9858 164.27 92.9158 162.91C93.8958 161.47 94.9258 160.04 96.1058 158.78C96.7258 158.12 97.6958 158.51 98.0558 159.41C99.8358 163.84 102.906 167.26 106.506 170.29C108.306 171.81 109.966 173.5 111.696 175.11C112.346 175.72 112.116 176.26 111.466 176.59C111.196 176.73 110.656 176.65 110.406 176.45C108.736 175.19 107.036 173.95 105.486 172.55C103.576 170.82 101.696 169.03 100.006 167.08C98.7858 165.67 97.8658 163.99 96.8758 162.39C96.4758 161.75 96.2658 161.52 95.7358 162.27C94.0658 164.66 92.4058 167.06 90.6458 169.39C89.4458 170.98 88.0958 172.47 86.7858 173.99C86.5958 174.22 86.2758 174.34 86.0258 174.52C85.9158 174.43 85.8158 174.33 85.7158 174.23Z" />
            <path d="M82.875 86.5194C83.315 85.4094 83.665 84.2694 84.205 83.2094C85.105 81.4394 86.175 79.7494 87.085 77.9794C88.015 76.1594 88.965 74.3294 89.685 72.4094C90.795 69.4694 91.745 66.4594 92.715 63.4594C93.565 60.8394 94.325 58.1894 95.235 55.5894C95.435 55.0194 96.055 54.5894 96.475 54.0894C96.595 54.6894 96.905 55.3194 96.805 55.8694C96.505 57.5094 96.035 59.1194 95.635 60.7394C95.355 61.8894 95.165 63.0494 94.825 64.1794C94.485 65.3194 94.005 66.4094 93.605 67.5294C93.205 68.6694 92.865 69.8194 92.445 70.9494C92.065 71.9694 91.705 73.0094 91.205 73.9794C90.045 76.2294 88.905 78.4994 87.595 80.6594C86.405 82.6094 84.995 84.4194 83.665 86.2794C83.555 86.4394 83.355 86.5394 83.195 86.6694C83.095 86.6194 82.985 86.5694 82.875 86.5194Z" />
            <path d="M118.005 163.479C118.255 165.229 119.695 166.629 119.285 168.479C119.175 168.549 119.065 168.609 118.965 168.679C118.625 168.189 118.235 167.729 117.945 167.219C116.825 165.259 115.975 163.119 114.105 161.689C113.995 161.609 113.865 161.449 113.875 161.329C113.905 159.219 112.095 158.169 111.165 156.619C110.755 155.929 110.455 155.179 110.105 154.449C111.525 153.809 112.395 154.249 113.365 155.829C114.045 156.949 114.795 158.029 115.405 159.189C116.245 160.779 117.745 161.079 119.285 161.489C122.455 162.349 125.595 163.329 128.735 164.269C129.155 164.399 129.615 164.549 129.915 164.839C130.265 165.169 130.455 165.669 130.715 166.099C130.185 166.329 129.665 166.739 129.135 166.759C128.545 166.779 127.935 166.469 127.355 166.259C125.255 165.499 123.175 164.669 121.045 163.969C120.085 163.669 119.065 163.649 118.005 163.479Z" />
            <path d="M9.93517 61.3192C9.02517 61.6092 8.06517 62.2292 7.21517 62.1092C5.03517 61.7892 3.68517 60.5092 3.87517 58.0692C4.01517 56.2492 4.46517 54.5592 5.82517 53.2492C3.69517 51.0592 5.15518 45.9592 7.61518 43.6792C9.76518 41.6892 12.3352 41.0092 13.6852 41.9592C13.4652 42.1092 13.2852 42.2992 13.0752 42.3492C10.8352 42.9392 8.98517 44.1392 7.76517 46.1092C6.81517 47.6292 6.37517 49.3292 7.04517 51.0992C7.18517 51.4692 7.68518 51.8292 8.08518 51.9492C9.72518 52.4392 11.3952 52.8192 13.0452 53.2592C13.4152 53.3592 13.7652 53.5292 14.3252 53.7392C13.0752 54.9292 11.8852 55.0992 10.4552 54.7092C9.16518 54.3492 7.81517 54.1892 6.40517 53.9292C5.60517 55.1492 5.36518 56.5692 5.67518 58.0892C5.88518 59.1492 6.44517 59.8592 7.57517 60.0792C8.34517 60.2292 9.09517 60.5092 9.85517 60.7392C9.87517 60.9392 9.90517 61.1292 9.93517 61.3192Z" />
            <path d="M117.925 59.9696C117.195 59.1796 117.255 58.5996 118.215 58.1596C119.835 57.4196 121.505 57.1696 123.215 57.7996C124.945 58.4296 125.575 59.8996 125.975 61.5296C126.185 62.3896 126.485 63.0996 127.395 63.5696C128.405 64.0796 128.505 65.3796 128.045 66.6596C127.725 67.5396 127.275 68.4396 127.825 69.4696C128.565 70.8496 127.855 72.1796 127.175 73.2696C126.585 74.2196 125.805 75.2296 124.375 75.2596C123.865 75.2696 123.375 75.7396 122.835 75.8696C122.535 75.9396 122.165 75.7496 121.825 75.6796C121.945 75.1396 121.455 74.4096 122.375 74.1096C123.095 73.8696 123.825 73.5896 124.485 73.2096C125.865 72.4096 126.235 71.3396 125.555 69.9196C124.955 68.6696 125.375 67.5596 125.855 66.4696C126.205 65.6796 126.155 65.3496 125.295 64.8996C124.765 64.6196 124.315 63.6796 124.305 63.0396C124.285 61.3696 123.535 60.1196 122.165 59.4896C120.965 58.9296 119.545 59.0196 118.315 59.7996C118.215 59.8496 118.115 59.8796 117.925 59.9696Z" />
            <path d="M68.2549 70.5796C68.7149 70.9096 69.0849 71.0596 69.2849 71.3296C69.8849 72.1496 70.5249 72.9696 70.9749 73.8696C72.8349 77.5696 75.3349 80.7496 78.3549 83.5896C79.7249 84.8696 80.8049 86.4696 81.9549 87.9696C82.1949 88.2796 82.2549 88.7896 82.2749 89.2096C82.2849 89.4796 82.1249 89.8496 81.9049 90.0096C81.7549 90.1196 81.3049 90.0496 81.1449 89.8896C80.2849 89.0696 79.4549 88.2196 78.6449 87.3496C77.1949 85.7796 75.7249 84.2296 74.3649 82.5696C71.6649 79.2696 69.4049 75.7096 68.3549 71.4996C68.3049 71.2996 68.3049 71.0796 68.2549 70.5796Z" />
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
