import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

export default function Horse (props) {
    return (
        <Svg {...props} width="201" height="160" viewBox="0 0 201 160" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.3199 92.829C14.6499 94.549 14.05 96.289 13.3 97.969C12.38 100.029 11.35 102.029 10.35 104.049C9.86998 105.019 9.37996 105.999 8.82996 106.929C8.47996 107.519 8.00996 108.029 7.57996 108.569C6.48996 109.949 5.66 111.439 5.5 113.239C5.47 113.559 5.14997 113.849 4.83997 114.359C4.62997 113.709 4.51 113.329 4.31 112.719C3.78 113.859 3.31995 114.829 2.94995 115.619C1.94995 115.819 1.12 115.989 0 116.219C0.42 115.479 0.809946 114.919 1.06995 114.309C1.37995 113.599 1.75998 112.859 1.78998 112.119C1.87998 109.769 1.82995 107.409 1.81995 105.049C1.80995 102.639 1.74995 100.229 1.75995 97.819C1.76995 96.139 1.85996 94.459 1.89996 92.789C1.93996 91.349 1.87995 89.909 2.00995 88.489C2.20995 86.299 2.27996 84.089 3.07996 81.969C3.61996 80.559 3.88 79.039 4.31 77.579C5.13 74.819 6.45997 72.249 8.15997 69.969C10.33 67.059 12.82 64.379 16.08 62.569C17.24 61.929 18.29 61.069 19.48 60.499C20.35 60.079 21.3599 59.899 22.3199 59.729C22.6199 59.669 22.99 59.969 23.33 60.109C23.09 60.369 22.89 60.779 22.6 60.859C20.61 61.409 18.8799 62.479 17.1899 63.589C16.0499 64.339 14.96 65.209 14 66.169C12.52 67.649 11.1 69.199 9.78998 70.819C9.02998 71.759 8.48999 72.899 7.92999 73.989C7.44999 74.899 7.03998 75.849 6.66998 76.809C6.26998 77.839 5.91999 78.889 5.60999 79.949C5.25999 81.119 4.85998 82.289 4.66998 83.489C4.44998 84.909 4.42995 86.369 4.31995 87.809C4.19995 89.289 4.01996 90.769 3.95996 92.249C3.89996 93.719 3.95994 95.199 3.93994 96.669C3.92994 97.109 3.78999 97.539 3.79999 97.979C3.86999 100.269 3.98998 102.559 4.03998 104.849C4.06998 106.319 4.01 107.789 4 109.259C4 109.599 4.06999 109.939 4.10999 110.279C4.22999 110.299 4.35998 110.309 4.47998 110.329C4.72998 109.009 5.03996 107.699 5.20996 106.379C5.71996 102.179 6.14998 97.959 6.66998 93.759C7.03998 90.789 7.51999 87.829 7.98999 84.869C8.02999 84.619 8.36 84.409 8.56 84.189C8.68 84.409 8.91996 84.649 8.89996 84.859C8.77996 86.179 8.57994 87.479 8.43994 88.799C8.11994 91.839 7.84995 94.879 7.50995 97.919C7.22995 100.389 6.87 102.849 6.56 105.319C6.51 105.739 6.54999 106.169 6.54999 106.599C6.64999 106.629 6.75999 106.649 6.85999 106.679C7.19999 106.179 7.56 105.689 7.87 105.169C10.05 101.489 12.08 97.719 13.36 93.639C14.36 90.469 14.66 87.069 15.74 83.929C16.67 81.239 16.46 78.479 16.97 75.789C17.53 72.889 17.98 69.939 18.91 67.149C19.74 64.659 21.26 62.569 23.53 60.919C26.27 58.929 29.39 57.919 32.42 56.629C34.92 55.559 37.57 55.329 40.17 55.079C43.48 54.759 46.84 54.919 50.17 54.879C52.2 54.859 54.2299 54.929 56.2599 54.849C59.0299 54.729 61.79 54.439 64.56 54.319C67.63 54.189 70.6999 54.159 73.7599 54.129C77.4199 54.089 81.07 54.049 84.73 54.119C86.54 54.149 88.33 53.999 90.16 54.809C91.53 55.409 93.28 55.199 94.87 55.219C98.67 55.279 102.47 55.289 106.26 55.289C107.59 55.289 107.74 55.079 107.6 53.739C107.55 53.239 107.5 52.819 108.27 52.699C108.75 52.629 109.13 52.039 109.61 51.769C109.75 51.689 110.11 51.869 110.28 52.019C110.51 52.229 110.66 52.529 110.84 52.779C111.12 52.579 111.49 52.429 111.67 52.159C112.06 51.579 112.34 50.939 112.7 50.339C112.77 50.219 112.99 50.189 113.31 50.029C113.36 50.799 113.4 51.429 113.44 52.079C114.67 52.419 114.68 51.359 114.88 50.729C115.24 49.629 115.4 48.459 115.72 47.349C115.81 47.049 116.19 46.839 116.43 46.579C116.66 46.839 117.03 47.069 117.09 47.359C117.2 47.889 117.12 48.469 117.34 49.119C117.48 48.849 117.58 48.539 117.78 48.319C117.96 48.109 118.25 47.999 118.49 47.849C118.58 48.129 118.77 48.409 118.75 48.679C118.66 49.549 118.53 50.429 118.35 51.289C118.18 52.079 118.42 52.519 119.41 52.659C119.53 52.129 119.67 51.609 119.75 51.079C119.81 50.699 119.67 50.239 119.83 49.929C120.03 49.549 120.44 49.279 120.77 48.959C121 49.379 121.29 49.789 121.43 50.239C121.57 50.699 121.54 51.199 121.59 51.689C121.69 51.679 121.79 51.669 121.89 51.649C122.25 50.759 122.61 49.879 122.97 48.989C123.05 49.009 123.14 49.029 123.22 49.059C123.07 48.549 122.94 48.039 122.77 47.529C122.55 46.849 122.58 46.309 123.07 45.679C123.65 44.929 124.04 44.009 124.43 43.129C124.59 42.769 124.66 42.249 124.51 41.909C123.97 40.659 124.33 39.649 125.05 38.889C124.68 37.819 124.3 36.879 124.03 35.909C123.78 34.989 124.41 34.449 125.69 34.439C126.81 34.429 127.94 34.499 129.06 34.449C129.39 34.429 129.71 34.109 130.04 33.929C129.68 33.659 129.35 33.339 128.96 33.139C128.8 33.059 128.49 33.329 128.27 33.289C127.99 33.239 127.57 33.089 127.51 32.879C127.42 32.599 127.5 32.069 127.7 31.939C128.06 31.709 128.55 31.669 129 31.589C129.89 31.439 130.79 31.319 131.76 31.179C131.62 30.509 131.52 29.999 131.41 29.489C130.33 29.489 129.26 29.489 127.98 29.489C127.95 29.139 127.75 28.589 127.93 28.259C128.1 27.969 128.7 27.779 129.1 27.789C129.9 27.799 130.35 27.689 130.12 26.729C130.08 26.559 130.39 26.149 130.6 26.099C131.34 25.929 132.11 25.839 132.88 25.759C133.25 25.719 133.63 25.749 134.06 25.529C133.51 25.229 132.99 24.859 132.42 24.639C131.51 24.289 131.49 23.489 131.75 22.899C131.89 22.579 132.81 22.359 133.28 22.479C134.18 22.709 135 23.209 135.85 23.599C135.94 23.539 136.03 23.489 136.13 23.429C135.9 22.999 135.72 22.529 135.43 22.129C134.74 21.159 133.96 20.259 133.31 19.269C133.09 18.939 132.7 18.329 133.49 18.069C134.11 17.859 134.7 17.799 135.15 18.499C135.73 19.379 136.39 20.209 137.04 21.039C137.19 21.229 137.47 21.319 137.93 21.609C137.78 21.169 137.76 20.969 137.66 20.819C136.98 19.789 136.2 18.819 135.62 17.739C135.39 17.299 135.35 16.349 135.63 16.129C136.21 15.659 136.88 16.019 137.3 16.669C137.8 17.419 138.32 18.149 138.91 19.019C139.37 18.039 139.15 17.229 138.7 16.529C138.19 15.739 138.25 15.089 138.88 14.449C139.02 14.299 139.17 14.149 139.25 13.969C139.9 12.499 140.1 12.469 141.45 13.779C141.57 13.399 141.75 13.109 141.75 12.809C141.75 12.279 141.86 11.779 142.46 11.939C142.84 12.039 143.21 12.479 143.41 12.859C143.57 13.169 143.4 13.649 143.52 13.999C143.82 14.899 144.2 15.759 144.62 16.829C144.82 16.509 144.94 16.409 144.96 16.299C145.26 14.179 145.42 12.039 145.87 9.94896C146.43 7.35896 147.24 4.81896 147.94 2.24896C148 2.01896 147.96 1.74896 148.06 1.54896C148.29 1.05896 148.46 0.358955 148.86 0.158955C149.55 -0.171045 150.38 -0.00104463 150.75 0.798955C151.6 2.58896 152.4 4.40896 153.17 6.22896C154.05 8.28896 154.88 10.369 155.7 12.359C157.33 10.669 158.91 9.05896 160.45 7.40896C161.9 5.85896 163.44 6.71895 163.98 8.20895C165.31 11.859 166.44 15.589 167.64 19.289C167.73 19.579 167.61 19.949 167.74 20.219C167.96 20.699 168.21 21.399 168.6 21.529C170.95 22.269 172.78 23.829 174.73 25.209C178 27.529 181.26 29.879 184.55 32.179C188.27 34.779 192.03 37.319 195.74 39.929C196.38 40.379 196.85 41.059 197.4 41.629C197.35 41.759 197.3 41.889 197.25 42.019C196.8 41.949 196.34 41.919 195.9 41.809C193.41 41.179 191.54 39.409 189.36 38.209C187.58 37.229 185.96 35.959 184.27 34.829C182.5 33.639 180.71 32.469 178.97 31.249C177.76 30.409 176.54 29.559 175.43 28.589C173.28 26.699 170.97 25.129 168.32 24.029C166.93 23.449 165.65 22.619 164.25 22.079C161.62 21.069 159.12 19.679 156.15 19.559C155.13 19.519 154.05 19.599 153.03 19.349C152.51 19.219 152.06 18.829 151.56 18.549C152.11 16.499 153.88 17.569 155.14 17.069C153.32 12.559 151.51 8.04896 149.7 3.54896C149.58 3.54896 149.47 3.53896 149.35 3.53896C147.61 8.70896 146.42 14.029 145.23 19.689C147.1 18.979 148.7 18.459 150.66 19.249C149.71 19.839 149.01 20.399 148.21 20.749C146.39 21.529 144.7 22.429 143.33 23.909C142.65 24.639 141.62 25.089 141.05 25.879C140.14 27.139 139.46 28.569 138.71 29.939C138.21 30.839 137.7 31.739 137.29 32.679C136.61 34.209 136.05 35.779 135.36 37.299C135.03 38.019 134.53 38.659 134.12 39.329C134.06 39.419 133.98 39.509 133.97 39.609C133.87 41.339 132.49 42.499 131.99 44.049C131.34 46.099 130.75 48.169 130.01 50.189C129.61 51.289 128.97 52.299 128.46 53.359C128.3 53.689 128.15 54.049 128.06 54.409C127.71 55.829 126.13 56.639 124.69 56.309C124.18 56.189 123.49 56.449 123 56.739C122.49 57.039 122.14 57.129 121.69 56.719C121.18 56.259 120.73 56.389 120.17 56.759C119.63 57.109 119.06 57.739 118.26 57.259C117.35 58.159 116.71 57.069 115.94 56.989C114.82 56.879 113.66 57.109 112.52 57.169C110.94 57.259 109.35 57.329 107.77 57.389C106.46 57.439 105.15 57.479 103.84 57.519C103.54 57.529 103.24 57.509 102.94 57.479C102.81 57.469 102.66 57.319 102.57 57.359C100.59 58.059 98.59 57.519 96.6 57.469C95.08 57.429 93.56 57.279 92.04 57.199C91.81 57.189 91.54 57.279 91.34 57.409C90.42 57.979 89.46 57.699 88.55 57.469C87.58 57.229 86.68 56.689 85.71 56.499C84.72 56.309 83.68 56.369 82.66 56.339C81.09 56.289 79.52 56.239 77.95 56.239C76.2 56.239 74.45 56.309 72.7 56.309C68.82 56.319 64.94 56.239 61.06 56.329C59.59 56.369 58.01 56.149 56.7 57.239C56.39 57.499 55.84 57.609 55.41 57.579C53.7 57.459 52.01 57.209 50.3 57.099C48.98 57.009 47.64 57.029 46.31 57.049C45.6 57.059 44.89 57.189 44.17 57.219C43.27 57.259 42.37 57.249 41.47 57.269C40.18 57.289 38.86 57.149 37.61 57.369C35.84 57.669 34.12 58.229 32.37 58.689C31.5 58.919 30.61 59.129 29.77 59.439C26.67 60.569 23.9 62.279 21.33 64.319C20.28 65.159 20.3 66.499 19.97 67.629C19.6 68.929 19.54 70.309 19.36 71.659C19.11 73.549 18.84 75.449 18.65 77.349C18.49 78.909 18.43 80.489 18.3 82.049C18.21 83.179 18.03 84.299 17.96 85.429C17.9 86.499 17.95 87.569 17.92 88.639C17.85 91.049 17.79 93.449 17.66 95.859C17.56 97.619 17.34 99.369 17.2 101.119C17.15 101.739 17.18 102.359 17.12 102.979C16.99 104.349 16.83 105.719 16.65 107.079C16.6 107.429 16.44 107.769 16.29 108.089C15.7 109.379 15.0799 110.649 14.5099 111.939C14.1099 112.849 13.81 113.799 13.39 114.699C13.07 115.399 12.62 116.049 12.27 116.739C12.03 117.209 11.82 117.699 11.65 118.199C11.31 119.169 10.9899 120.149 10.6899 121.129C10.4599 121.869 10.22 122.619 10.05 123.379C9.62999 125.239 9.24997 127.109 8.83997 128.969C8.70997 129.559 8.51997 130.139 8.40997 130.729C7.99997 132.989 7.59999 135.239 7.23999 137.509C7.04999 138.699 7.04995 139.919 6.81995 141.089C6.44995 142.919 6.41998 144.759 6.47998 146.609C6.49998 147.159 6.41995 147.719 6.38995 148.269C6.93995 148.229 7.47997 148.149 8.02997 148.139C10.82 148.079 13.6 148.019 16.39 147.989C17.18 147.979 17.4499 147.839 17.3799 146.899C17.2099 144.529 17.04 142.129 17.95 139.809C18.36 138.769 18.5 137.639 18.81 136.559C18.94 136.109 19.1 135.769 19.79 135.679C20.37 135.599 20.94 134.949 21.39 134.449C22.88 132.769 24.34 131.069 25.75 129.329C26.77 128.069 27.69 126.729 28.66 125.429C29.28 124.599 29.98 123.819 30.54 122.939C32.36 120.099 34.68 117.569 35.85 114.309C36.4 112.759 37.32 111.349 37.85 109.799C38.14 108.939 37.9699 107.919 39.0699 107.479C40.7399 109.159 42.92 109.229 45.09 109.339C46.35 109.409 47.61 109.489 48.86 109.449C51.98 109.339 55.1 109.139 58.23 109.029C59.64 108.979 61.06 109.049 62.48 109.069C64.01 109.099 65.5399 109.119 67.0699 109.179C69.3999 109.259 71.72 109.379 74.05 109.459C75.79 109.519 77.54 109.559 79.28 109.609C81.5 109.669 83.7199 109.729 85.9399 109.769C87.2499 109.799 88.5499 109.799 89.8799 109.609C91.3599 109.399 92.91 109.609 94.42 109.709C98.36 109.969 102.28 109.779 106.11 108.779C108.95 108.039 111.73 107.079 114.54 106.229C116.37 105.679 118.21 105.149 120.06 104.649C121.34 104.299 122.62 103.949 123.92 103.729C124.87 103.569 125.85 103.619 126.97 103.569C127.05 103.439 127.25 103.129 127.54 102.669C127.69 103.029 127.85 103.229 127.85 103.439C127.93 105.419 127.99 107.399 128.06 109.389C128.12 110.999 128.23 112.609 128.29 114.219C128.35 115.929 128.33 117.649 128.41 119.349C128.47 120.549 128.69 121.749 128.79 122.949C128.94 124.729 128.99 126.509 129.18 128.289C129.44 130.629 129.81 132.949 130.11 135.289C130.42 137.749 130.66 140.209 130.98 142.659C131.17 144.179 131.45 145.689 131.7 147.249C133.32 147.109 135.02 146.829 136.73 146.839C138.38 146.849 140.11 146.679 141.69 147.499C140.91 148.009 140.38 148.629 139.21 148.429C137.82 148.189 136.31 148.619 134.85 148.759C134.5 148.789 134.15 148.879 133.81 148.859C132.94 148.799 132.29 148.979 131.86 149.869C131.62 150.369 131.07 150.719 130.67 151.129C130.38 150.759 130.08 150.379 129.77 149.979C128.96 150.089 128.07 150.199 127.21 150.319C126.71 149.259 127.34 148.639 128.47 148.329C129.76 147.979 129.67 148.029 129.45 146.659C129.04 144.049 128.75 141.419 128.42 138.799C128.14 136.539 127.85 134.269 127.59 131.999C127.35 129.899 127.08 127.809 126.93 125.699C126.74 122.939 126.6 120.169 126.53 117.409C126.48 115.479 126.54 113.539 126.59 111.609C126.62 109.999 126.72 108.389 126.74 106.769C126.75 106.369 126.61 105.959 126.54 105.539C124.93 105.759 123.44 105.959 121.95 106.179C121.64 106.229 121.26 106.299 121.07 106.509C120.25 107.409 119.08 107.069 118.11 107.439C116.59 108.019 115.05 108.519 113.51 109.039C113.03 109.199 112.53 109.309 112.03 109.439C111.69 109.529 111.29 109.509 111.02 109.689C109.74 110.549 108.29 110.769 106.82 110.969C105.84 111.099 104.87 111.299 103.91 111.519C102.85 111.759 101.81 112.049 100.76 112.299C100.51 112.359 100.22 112.329 99.96 112.299C99.08 112.219 98.21 112.069 97.33 112.059C96.19 112.049 95.05 112.209 93.91 112.179C91.31 112.119 88.72 111.949 86.12 111.889C82.26 111.799 78.39 111.759 74.53 111.729C71.71 111.709 68.9 111.809 66.08 111.749C63.17 111.689 60.26 111.469 57.35 111.359C56.74 111.339 56.12 111.509 55.5 111.569C54.16 111.699 52.81 111.869 51.47 111.919C50.43 111.959 49.36 111.959 48.34 111.809C46.13 111.469 43.82 111.839 41.71 110.789C41.08 110.479 40.3199 110.419 39.4399 110.199C38.9299 111.259 38.35 112.449 37.79 113.649C36.91 115.549 36.78 117.739 35.29 119.429C34.6 120.209 34.35 121.379 33.84 122.339C33.37 123.239 32.88 124.139 32.28 124.949C31.97 125.359 31.37 125.559 30.91 125.859C30.74 125.969 30.54 126.059 30.42 126.219C29.61 127.269 28.79 128.309 28.04 129.389C27.78 129.759 27.52 130.269 27.55 130.699C27.76 134.359 28.05 138.009 28.27 141.659C28.35 142.939 28.28 144.229 28.28 145.339C31.85 144.789 35.23 144.279 38.6 143.749C39.51 143.609 40.64 143.649 40.79 142.389C40.94 141.119 40.9 139.829 40.98 138.559C41.09 136.889 41.27 135.229 41.36 133.559C41.46 131.849 41.4199 130.129 41.5699 128.429C41.6899 127.029 42.02 125.639 42.2 124.249C42.3 123.539 42.27 122.809 42.33 122.079C42.52 119.599 42.73 117.109 42.93 114.629C42.98 114.029 43.08 113.259 43.85 113.439C44.28 113.539 44.86 114.279 44.86 114.719C44.82 117.149 44.66 119.589 44.46 122.009C44.28 124.249 43.91 126.479 43.77 128.719C43.62 130.959 43.69 133.209 43.58 135.449C43.53 136.559 43.24 137.669 43.14 138.779C43.08 139.499 43.2099 140.229 43.1899 140.959C43.1799 141.469 42.97 141.999 43.05 142.479C43.12 142.909 43.41 143.349 43.71 143.699C44.09 144.149 44.21 144.429 43.73 144.939C43.24 145.449 42.77 146.089 42.59 146.759C42.22 148.089 42 149.469 41.8 150.839C41.66 151.809 41.72 152.809 41.52 153.759C41.43 154.199 41.02 154.669 40.62 154.929C39.51 155.659 38.2899 155.849 36.9399 155.739C35.7699 155.639 34.5699 155.869 33.3799 155.999C31.4599 156.219 29.55 156.469 27.64 156.729C26.94 156.829 26.6599 156.539 26.6299 155.869C26.5799 154.299 26.49 152.729 26.46 151.159C26.39 148.309 26.31 145.469 26.31 142.619C26.31 139.799 26.3999 136.989 26.4399 134.169C26.4499 133.609 26.45 133.039 26.4 132.479C26.39 132.329 26.1799 132.139 26.0099 132.069C25.9099 132.029 25.71 132.179 25.59 132.289C24.46 133.339 23.34 134.389 22.23 135.449C21.39 136.249 20.5099 137.009 19.7599 137.889C19.5199 138.169 19.51 138.819 19.64 139.219C20.18 140.919 20.1 142.619 19.83 144.339C19.69 145.249 19.53 146.169 19.55 147.079C19.56 147.409 20.02 147.829 20.37 148.019C21.05 148.369 21.82 148.539 22.5 148.879C22.77 149.009 22.91 149.389 23.11 149.649C22.83 149.819 22.5599 150.029 22.2599 150.139C21.5399 150.399 20.8199 150.409 20.0699 150.139C19.3399 149.869 19.17 150.239 19.11 150.989C18.97 152.649 18.6 154.289 18.42 155.959C18.29 157.139 17.64 158.019 17 158.929C16.5 159.659 15.16 159.959 14.31 159.759C12.96 159.459 11.56 159.329 10.18 159.179C8.67999 159.009 7.16999 158.919 5.67999 158.729C4.97999 158.639 4.30997 158.399 3.27997 158.149C5.26997 157.079 4.29996 155.609 4.32996 154.389C4.36996 152.819 3.99997 151.249 4.02997 149.679C4.06997 147.629 4.46996 145.569 4.45996 143.519C4.44996 140.709 5.01998 137.999 5.41998 135.259C5.78998 132.749 6.22995 130.239 6.69995 127.739C6.95995 126.339 7.30997 124.959 7.65997 123.579C7.89997 122.629 8.18996 121.689 8.51996 120.769C8.97996 119.469 9.46995 118.189 10.0099 116.919C10.5099 115.749 11.08 114.609 11.62 113.449C12.35 111.889 13.2699 110.379 13.7599 108.749C14.3899 106.619 14.7999 104.409 15.0699 102.199C15.3199 100.189 15.25 98.129 15.33 96.099C15.35 95.649 15.48 95.199 15.5 94.749C15.53 94.109 15.5099 93.479 15.5099 92.839C15.4899 92.829 15.4099 92.829 15.3199 92.829ZM28.67 155.449C28.81 155.459 29.06 155.559 29.25 155.489C32.28 154.519 35.41 154.169 38.54 153.809C39.33 153.719 39.57 153.289 39.61 152.529C39.68 151.279 39.86 150.039 40.03 148.799C40.17 147.719 40.36 146.639 40.49 145.779C39.57 145.869 38.79 145.949 38.02 146.019C37.75 146.049 37.43 145.979 37.2 146.099C36.02 146.729 34.69 146.059 33.41 146.759C32.49 147.269 31.09 146.899 29.9 146.939C29.06 146.969 28.57 147.389 28.6 148.249C28.65 149.629 28.77 151.009 28.79 152.389C28.82 153.349 28.72 154.299 28.67 155.449ZM6.07996 157.239C8.53996 157.379 11.27 157.479 13.98 157.689C15.67 157.829 16.25 157.339 16.42 155.609C16.58 154.089 16.9 152.579 17.2 151.079C17.35 150.319 17.04 149.959 16.29 150.039C15.07 150.169 13.84 150.299 12.62 150.259C10.83 150.199 9.05996 149.959 7.26996 149.849C6.95996 149.829 6.62995 150.029 6.56995 150.049C6.39995 152.599 6.23996 154.949 6.07996 157.239ZM165.48 20.249C165.58 18.029 162.66 9.15895 161.56 8.45895C160.24 9.60895 158.91 10.799 157.54 11.929C156.59 12.719 155.63 13.439 156.84 14.749C156.92 14.839 156.76 15.119 156.83 15.259C157.23 16.029 156.94 17.409 158.04 17.529C160.74 17.809 162.98 19.209 165.48 20.249ZM128.86 38.979C129.1 38.569 129.31 38.199 129.53 37.829C129.47 37.729 129.41 37.639 129.35 37.539C128.83 37.709 128.3 37.879 127.55 38.129C128.14 38.509 128.48 38.729 128.86 38.979Z"
            />
            <path
                d="M193.23 55.8689C187.83 55.9689 183.58 53.2689 179.47 50.3089C179.07 50.0189 178.91 49.3789 178.64 48.9089C178.71 48.7889 178.78 48.6689 178.85 48.5489C179.5 48.7489 180.22 48.8389 180.8 49.1689C182.91 50.3689 184.88 51.8589 187.08 52.8489C189.18 53.7989 191.47 54.3389 193.71 54.9489C195.99 55.5789 198.46 53.3889 198.18 50.4489C197.99 48.4989 198.08 46.5189 198.1 44.5489C198.1 44.2289 198.39 43.9089 198.55 43.5889C198.79 43.8989 199.18 44.1889 199.24 44.5289C199.5 46.1189 199.66 47.7289 199.86 49.3289C199.92 49.8189 199.97 50.3089 200.08 50.7889C200.41 52.2689 199.68 54.0789 198.42 54.9289C197.96 55.2389 197.54 55.6289 197.14 56.0089C195.57 57.5089 193.47 57.8789 191.54 58.5789C190.9 58.8089 190.05 58.3889 189.3 58.3989C187.27 58.4289 185.22 58.3689 183.22 58.6389C181.13 58.9189 179.06 58.5989 177.03 58.7689C175.17 58.9289 173.35 58.5789 171.51 58.8489C170.97 58.9289 170.4 58.7089 169.84 58.6589C168.54 58.5489 167.23 58.4889 165.93 58.3689C164.33 58.2089 162.74 58.0089 161.15 57.8189C160.79 57.7789 160.44 57.6989 160.09 57.6389C159.47 57.5289 158.81 57.5089 158.23 57.2789C156.75 56.6789 156.19 56.9989 155.59 58.5089C154.67 60.8189 154.34 63.2389 154.01 65.6489C153.74 67.6089 153.71 69.6089 153.43 71.5689C153.13 73.6189 152.72 75.6589 152.23 77.6689C151.82 79.3589 151.73 81.0389 151.81 82.7489C151.88 84.4889 151.89 86.2389 151.92 87.9889C151.94 88.9189 151.97 89.8489 151.93 90.7789C151.88 92.1389 151.77 93.4889 151.69 94.8489C151.66 95.4689 151.72 96.0889 151.62 96.6989C151.39 98.0889 151.09 99.4589 150.83 100.839C150.58 102.159 150.39 103.489 150.11 104.809C149.98 105.409 149.7 105.979 149.49 106.559C149.61 106.519 149.72 106.469 149.84 106.429C150.15 106.769 150.68 107.069 150.73 107.439C150.94 108.989 151.01 110.549 151.14 112.109C151.21 112.909 151.35 113.709 151.36 114.509C151.39 116.759 151.38 118.999 151.36 121.249C151.34 123.419 151.3 125.599 151.27 127.769C151.24 130.849 151.21 133.929 151.2 137.009C151.2 137.789 151.26 138.579 151.39 139.349C151.43 139.579 151.82 139.749 152.04 139.959C152.39 140.309 152.72 140.679 153.06 141.039C152.66 141.319 152.26 141.599 151.74 141.969C151.51 144.089 152.37 146.549 151.18 148.739C148.84 148.739 146.67 148.739 144.5 148.739C144.49 148.829 144.49 148.919 144.48 149.009C144.24 148.779 144 148.549 143.6 148.169C143.44 149.189 143.31 150.029 143.18 150.879C143.04 150.889 142.9 150.899 142.76 150.909C142.63 150.509 142.39 150.119 142.38 149.719C142.29 146.139 142.21 142.559 142.17 138.979C142.14 135.789 142.21 132.609 142.16 129.419C142.12 126.229 141.99 123.049 141.9 119.859C141.83 117.649 141.72 115.439 141.69 113.239C141.68 112.659 141.88 112.059 142.08 111.509C142.15 111.319 142.54 111.089 142.73 111.129C142.99 111.179 143.34 111.449 143.39 111.679C143.53 112.349 143.56 113.049 143.61 113.739C143.83 116.899 144.09 120.059 144.25 123.229C144.33 124.849 144.19 126.489 144.19 128.119C144.19 129.069 144.35 130.019 144.3 130.959C144.17 133.369 143.96 135.789 143.8 138.199C143.76 138.809 143.74 139.429 143.82 140.029C143.84 140.199 144.29 140.459 144.51 140.429C146.07 140.259 147.62 140.019 149.16 139.809C149.16 137.789 149.15 135.809 149.16 133.829C149.17 132.399 149.18 130.959 149.22 129.529C149.28 127.299 149.37 125.059 149.44 122.829C149.52 120.189 149.62 117.539 149.67 114.899C149.72 112.449 149.71 109.989 149.71 107.539C149.71 107.369 149.5 107.189 149.26 106.839C148.65 108.709 148 110.309 146.68 111.639C146.05 109.669 147 108.129 147.4 106.509C147.68 105.379 148.09 104.279 148.34 103.139C148.85 100.789 149.39 98.4389 149.72 96.0589C149.97 94.2789 149.95 92.4689 150 90.6589C150.07 88.0789 150.1 85.4889 150.12 82.8989C150.14 79.5589 150.14 76.2189 150.13 72.8789C150.13 72.2289 150.01 71.5789 151 71.5189C151.17 71.5089 151.4 70.9189 151.45 70.5789C151.67 68.7689 151.71 66.9189 152.07 65.1289C152.48 63.0889 153.13 61.0989 153.73 59.0989C153.96 58.3389 154.31 57.6189 154.62 56.8689C153.99 56.5389 153.13 56.2989 152.58 55.7489C151.99 55.1589 151.36 54.2989 151.32 53.5189C151.16 50.8989 151.26 48.2689 151.26 45.5789C151.95 45.8589 152.21 46.4089 152.32 47.4889C152.43 48.6489 152.51 49.8089 152.72 50.9489C152.86 51.7389 153.08 52.5489 153.46 53.2389C153.69 53.6689 154.24 54.0689 154.72 54.1889C156.83 54.7189 158.96 55.1689 161.09 55.5789C162.54 55.8589 164 56.0989 165.47 56.2389C168.2 56.4989 170.94 56.7289 173.68 56.8789C176.1 57.0089 178.53 57.1089 180.95 57.0589C184.15 56.9989 187.34 56.8689 190.55 57.2889C191.41 57.3989 192.38 56.6389 193.31 56.2789C193.27 56.1589 193.25 56.0189 193.23 55.8689ZM143.62 147.749C144.92 147.569 146.08 147.369 147.25 147.269C147.76 147.229 148.29 147.449 148.81 147.469C150.02 147.509 150.17 147.309 150.02 146.119C149.86 144.899 149.67 143.679 149.54 142.459C149.46 141.689 148.93 141.799 148.45 141.849C147.26 141.959 146.07 142.199 144.88 142.209C144.11 142.219 143.68 142.509 143.65 143.179C143.57 144.729 143.62 146.289 143.62 147.749Z"
            />
            <path
                d="M130.74 152.519C131.77 154.749 133.2 154.349 134.8 153.899C137.38 153.169 140.02 152.599 142.65 152.049C143.58 151.859 144.55 151.969 145.33 152.899C144.25 153.829 143.31 154.699 141.68 154.589C140.71 154.519 139.7 155.069 138.69 155.309C137.46 155.599 136.23 155.919 134.98 156.099C134.15 156.219 133.28 156.229 132.45 156.109C130.85 155.879 130.4 155.209 130.55 153.549C130.57 153.339 130.62 153.139 130.74 152.519Z"
            />
            <path
                d="M166.24 32.3691C166.8 31.3091 167.21 30.2191 167.91 29.3691C168.16 29.0591 169.21 29.1091 169.71 29.3591C171.03 29.9991 171.43 31.5591 171.24 33.0491C171.03 34.6891 169.94 35.1691 168.64 35.4591C168.33 35.5291 167.78 35.3591 167.63 35.1291C167.13 34.2991 166.75 33.3991 166.24 32.3691Z"
            />
            <path
                d="M191.24 46.8288C191.36 46.2788 191.14 45.2788 192.35 45.2388C193.76 45.1988 194.52 45.9688 194.52 47.3488C194.52 48.2488 193.38 49.3288 192.45 49.3088C191.71 49.2988 191.21 48.3688 191.24 46.8288Z"
            />
            <path
                d="M8.20996 83.4089C8.50996 82.0489 8.79998 80.6788 9.09998 79.3188C9.24998 79.3488 9.4 79.3889 9.56 79.4189C8.92 80.7189 9.73999 82.3289 8.73999 83.5489C8.55999 83.5089 8.37996 83.4589 8.20996 83.4089Z"
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
