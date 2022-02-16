import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export default function Tiger(props) {
    return (
        <Svg {...props} width="218" height="116" viewBox="0 0 218 116" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M115.85 74.9107C116.09 75.2907 116.41 75.6507 116.57 76.0707C117.99 79.8707 119.42 83.6707 120.78 87.4907C121.34 89.0507 121.26 89.0407 122.91 88.8507C124.08 88.7207 125.27 88.7707 126.45 88.6307C126.82 88.5907 127.46 88.1807 127.44 88.0107C127.37 87.4607 127.19 86.7907 126.8 86.4507C123.3 83.4207 121.02 79.7507 120.7 75.0507C120.66 74.4907 120.94 73.9007 121.08 73.3207C121.21 73.3207 121.35 73.3107 121.48 73.3107C122.34 75.4707 123.2 77.6307 124.1 79.9007C124.51 79.6207 124.65 79.5607 124.75 79.4507C125.53 78.6007 126.22 77.6407 127.1 76.9007C128.43 75.7907 129.94 74.8907 131.29 73.8007C131.83 73.3607 132.14 72.6507 132.59 72.0907C132.84 71.7807 133.18 71.5407 133.48 71.2707C133.61 71.3407 133.73 71.4107 133.86 71.4907C133.75 72.1707 133.68 72.8707 133.51 73.5407C132.91 75.8507 132.31 78.1607 131.64 80.4607C131.17 82.0907 130.59 83.6807 130.09 85.3007C130.01 85.5407 129.99 85.9707 130.13 86.0907C131.37 87.1807 132.64 88.2907 134.45 88.0607C134.88 88.0107 135.42 87.6107 135.63 87.2207C136.48 85.6607 137.21 84.0407 137.99 82.4507C138.41 81.6007 138.97 81.4807 139.39 82.3107C140 83.5207 140.35 84.8507 140.77 86.1407C141.17 87.3607 141.4 88.6507 141.92 89.8207C142.63 91.4207 143.19 91.6107 144.9 91.2907C145.97 91.0907 147.03 90.8407 148.1 90.6607C148.8 90.5407 149.13 90.2307 149.25 89.4907C149.54 87.7807 149.93 86.0807 150.31 84.3807C150.48 83.6007 150.91 83.3307 151.61 83.9007C151.96 84.1907 152.37 84.4507 152.62 84.8107C153.41 85.9607 154.14 87.1607 154.98 88.4807C155.41 88.3407 155.85 88.0907 156.3 88.0907C156.81 88.0907 157.31 88.3207 157.82 88.4507C157.53 88.8107 157.31 89.2907 156.94 89.5107C155.88 90.1307 154.78 90.6807 153.66 91.1707C152.88 91.5107 152.04 91.7207 151.21 91.9907C151.8 94.3707 152.44 96.7807 152.99 99.2107C153.61 101.921 154.15 104.641 154.73 107.361C154.88 108.071 154.9 108.871 155.27 109.461C155.47 109.781 156.27 109.901 156.77 109.841C158.84 109.601 160.92 109.331 162.97 108.951C165.49 108.491 168 107.911 170.66 107.341C170.12 105.591 169.62 103.881 169.07 102.201C168.08 99.1607 167.22 96.0707 166.01 93.1207C164.45 89.3407 162.62 85.6707 160.86 81.9807C160.57 81.3707 160.08 80.8607 159.66 80.3207C159.31 79.8807 158.95 79.7107 158.42 80.1907C158.05 80.5207 157.51 80.6607 156.76 81.0207C156.42 78.1407 156.1 75.4407 155.74 72.4407C155.2 72.9207 154.91 73.1807 154.61 73.4407C154.32 73.6807 154.05 73.9507 153.73 74.1407C152.56 74.8407 151.38 75.5007 150.21 76.1807C149.98 76.3107 149.78 76.5607 149.54 76.6007C149.08 76.6707 148.55 76.7407 148.15 76.5807C147.98 76.5107 147.89 75.7907 148.03 75.4807C148.49 74.3907 149 73.3107 149.61 72.2907C150.61 70.6007 151.7 68.9707 152.75 67.3107C153.13 66.7107 153.68 66.1307 153.82 65.4707C153.98 64.7107 153.91 63.8407 153.72 63.0707C153.15 60.6807 152.44 58.3107 151.85 55.9207C151.53 54.6407 151.34 53.3207 151.13 52.0207C151.09 51.7507 151.22 51.4407 151.32 50.9407C151.99 51.7007 152.53 52.3207 153.14 53.0207C157.61 51.9407 161.84 50.0607 165.88 47.6807C167.25 46.8707 168.68 46.1707 170.05 45.3707C171.84 44.3307 173.58 43.1807 175.4 42.2007C177.37 41.1507 179.41 40.2307 181.45 39.3107C183.31 38.4707 185.19 37.6807 187.09 36.9407C188 36.5807 188.98 36.3707 189.94 36.1407C192.62 35.5107 195.29 34.7907 198 34.3307C199.81 34.0207 201.68 34.1407 203.52 33.9807C206.85 33.7007 210.18 33.4007 213.5 33.0007C214.15 32.9207 214.74 32.3507 215.35 31.9907C215.77 31.7407 216.17 31.4707 216.69 31.1407C217.02 32.2607 216.53 32.7507 215.95 33.2207C213.88 34.9007 211.46 35.3807 208.86 35.4707C207.54 35.5107 206.24 35.9407 204.92 36.0407C203.72 36.1307 202.5 35.9107 201.31 36.0107C200.15 36.1107 199.01 36.4507 197.87 36.6907C197.69 36.7307 197.52 36.8407 197.34 36.8607C196.16 36.9607 194.96 36.9307 193.81 37.1707C192.21 37.5107 190.64 38.0307 189.07 38.5307C187.74 38.9507 186.42 39.4007 185.13 39.9307C183.87 40.4507 182.64 41.0607 181.41 41.6507C179.55 42.5607 177.66 43.4207 175.85 44.4207C173.73 45.5807 171.72 46.9407 169.59 48.0807C166.67 49.6507 163.72 51.1507 160.73 52.5607C159.2 53.2807 157.56 53.7607 155.96 54.3307C155.24 54.5907 154.5 54.8007 153.54 55.1107C153.79 55.9507 154.11 56.9307 154.38 57.9307C154.99 60.1707 155.57 62.4207 156.18 64.6607C156.65 66.4007 157.29 68.1107 157.61 69.8807C157.99 71.9807 158.1 74.1207 158.38 76.2407C158.43 76.6207 158.63 77.1807 158.91 77.2907C161.28 78.2207 162.31 80.4107 163.51 82.3307C164.79 84.3807 165.85 86.6107 166.76 88.8607C168.19 92.4207 169.41 96.0707 170.7 99.6907C171.26 101.261 171.77 102.841 172.29 104.421C172.37 104.661 172.3 104.951 172.4 105.161C172.72 105.821 172.29 106.831 173.51 107.091C174.23 107.241 174 107.941 173.51 108.191C172.66 108.641 171.73 108.951 170.82 109.281C170.25 109.481 169.64 109.561 169.08 109.781C168.17 110.131 167.31 110.651 166.37 110.911C164.55 111.401 162.71 111.821 160.86 112.161C158.76 112.541 156.65 112.841 154.53 113.111C153.75 113.211 152.95 113.111 152.16 113.151C151.27 113.201 150.38 113.361 149.48 113.361C148.71 113.361 147.92 113.271 147.19 113.061C147.06 113.021 146.96 112.071 147.18 111.771C148.32 110.191 149.58 108.711 150.75 107.161C151.86 105.701 151.98 104.051 151.56 102.311C150.99 99.9107 150.43 97.5007 149.93 95.0807C149.74 94.1807 149.74 93.2507 149.67 92.5207C147.96 92.8707 146.44 93.2507 144.89 93.4707C143.98 93.6007 143.12 93.6307 142.42 94.3707C142.25 94.5507 141.47 94.5107 141.42 94.3807C140.84 92.9907 139.47 93.2707 138.42 92.8707C138.04 92.7307 137.59 92.7607 137.23 92.5907C136.36 92.1807 135.54 91.7507 134.65 92.5707C134.53 92.6807 134.22 92.5907 134.01 92.5907C133.47 90.5007 132.92 90.1807 130.77 90.5007C129.96 90.6207 129.13 90.5807 128.32 90.6407C127.02 90.7407 125.73 90.8707 124.27 91.0007C124.67 92.1107 125.03 93.2107 125.47 94.2807C126.83 97.5707 128.23 100.841 129.59 104.131C129.7 104.401 129.66 104.731 129.73 105.021C130.01 106.171 130.42 107.181 131.84 107.371C134.17 107.691 136.47 108.151 138.8 108.461C140.18 108.641 140.51 108.221 140.21 106.851C139.5 103.581 138.75 100.321 138.08 97.0407C137.89 96.0907 137.93 95.0907 137.86 94.1107C137.97 94.0507 138.08 93.9807 138.19 93.9207C138.43 94.1607 138.8 94.3707 138.88 94.6607C139.47 96.8407 139.96 99.0407 140.56 101.221C141.03 102.921 141.61 104.581 142.15 106.251C142.5 107.351 142.86 108.451 143.29 109.771C142.69 110.471 141.68 110.981 140.43 110.941C138.31 110.881 136.2 110.751 134.08 110.731C133.43 110.721 132.79 111.081 132.14 111.081C130.24 111.091 128.32 110.841 126.45 111.051C125.51 111.161 124.66 111.061 123.76 111.021C122.72 110.981 121.86 109.641 122.48 108.791C123.6 107.261 124.78 105.771 126.04 104.361C126.55 103.791 126.73 103.341 126.44 102.641C125.46 100.251 124.5 97.8507 123.53 95.4507C123.02 94.1907 122.53 92.9207 121.98 91.6707C121.8 91.2507 121.53 90.7707 121 91.4207C120.9 91.5407 120.65 91.6507 120.5 91.6107C118.91 91.2107 117.42 91.9007 115.92 92.1207C112.96 92.5707 110.04 93.3507 107.11 94.0107C106.4 94.1707 106.22 94.5507 106.31 95.3407C106.59 97.7407 106.75 100.151 106.9 102.561C107.06 105.011 107.13 107.461 107.28 109.911C107.37 111.441 106.82 112.021 105.27 112.241C104.41 112.361 103.59 112.781 102.76 113.101C101.89 113.441 101.07 113.941 100.17 114.141C98.64 114.491 97.08 114.701 95.53 114.871C94.96 114.931 94.35 114.681 93.76 114.681C92.58 114.681 91.42 114.721 90.26 115.191C88.66 115.851 87.16 114.831 85.62 114.551C83.99 114.261 82.44 113.591 80.86 113.061C80.51 112.941 80.21 112.681 79.86 112.551C79.48 112.401 79.01 112.141 78.7 112.251C77.3 112.761 75.87 112.801 74.43 112.741C72.65 112.661 70.89 112.581 69.15 113.181C68.28 113.481 67.44 112.481 67.8 111.531C68.13 110.661 68.56 109.771 69.16 109.081C71.2 106.721 73.33 104.441 75.45 102.151C75.7 101.881 76.11 101.751 76.72 101.401C76.57 98.5407 76.42 95.4107 76.22 92.2807C75.98 88.4907 75.57 84.7107 75.5 80.9207C75.45 78.6407 75.13 76.2407 76.53 73.7207C76.82 74.3007 77.1 74.6207 77.14 74.9707C77.34 76.8507 77.48 78.7307 77.64 80.6107C77.72 81.5507 77.74 82.4907 77.88 83.4107C77.94 83.7707 78.19 84.2807 78.48 84.3807C80.97 85.2807 83.49 86.1107 86.11 86.9907C86.12 85.2207 85.96 83.7107 84.77 82.3507C80.4 77.3907 76.14 72.3307 71.78 67.3507C70.27 65.6207 68.55 64.0707 67.03 62.3507C66.24 61.4607 65.37 61.6507 64.61 62.0107C63.13 62.7107 61.65 62.9607 60.05 62.7307C59.84 62.7007 59.62 62.8307 59.42 62.8807C58.48 61.5807 58.54 61.6207 57.5 62.7807C56.03 64.4207 54.5 66.0307 52.31 66.7207C50.98 67.1407 50.62 68.2307 50.58 69.3907C50.52 70.9107 50.54 72.4607 50.78 73.9507C50.91 74.8007 50.5 75.0307 50 75.3607C49.64 75.6107 49.27 75.8507 48.82 76.1507C49.35 76.8907 49.81 77.5407 50.29 78.1707C50.81 78.8407 51.08 79.4407 50.21 80.0607C49.98 80.2207 49.87 80.5407 49.55 81.0207C46.18 79.6207 42.78 78.2007 39.31 76.7607C39.45 77.2007 39.64 77.7407 39.8 78.2907C40.12 79.3807 39.73 79.7207 38.72 80.1907C37.12 80.9407 36.15 80.0507 35.02 79.2307C33.95 78.4507 32.76 77.8407 31.62 77.1407C31.26 78.3107 30.2 78.9607 29.47 78.3607C26.53 75.9307 23.8 73.2807 22.26 69.7007C21.99 69.0807 22.23 68.2407 22.23 67.5007C22.81 67.9807 23.47 68.3807 23.94 68.9407C25.32 70.6007 26.59 72.3407 27.96 74.0107C28.39 74.5307 28.97 75.1607 29.46 73.9507C29.52 73.7907 30.19 73.7007 30.45 73.8307C31.59 74.4107 32.71 75.0607 33.8 75.7307C34.78 76.3407 35.72 77.0207 36.68 77.6707C36.77 77.6007 36.85 77.5407 36.94 77.4707C36.89 77.0007 36.73 76.5007 36.83 76.0507C37 75.2607 37.17 74.3807 37.65 73.7907C37.86 73.5307 38.9 73.7307 39.44 73.9707C41.2 74.7807 42.89 75.7207 44.63 76.5807C45.16 76.8407 45.73 77.0207 46.55 77.3507C46.09 76.4207 45.67 75.7907 45.46 75.0907C45.29 74.5007 45.3 73.8307 45.38 73.2107C45.4 73.0207 45.92 72.7807 46.22 72.7707C46.77 72.7507 47.33 72.8907 48.1 72.9907C48.16 72.4607 48.25 71.9007 48.28 71.3207C48.3 70.8407 48.19 70.3407 48.23 69.8607C48.33 68.5607 47.67 67.7007 46.43 67.9307C45.29 68.1407 44.34 68.0207 43.25 67.6207C41.58 67.0007 39.75 66.8307 38.09 66.1907C36.72 65.6607 35.33 65.2707 33.92 64.9607C32.42 64.6207 30.86 64.4307 29.32 64.4207C28.61 64.4107 27.9 65.0007 27.17 65.2807C25.77 65.8307 24.39 66.4607 22.94 66.8407C21.91 67.1107 20.76 67.1807 19.7 67.0807C18.09 66.9207 16.83 65.9007 15.68 64.8507C13.48 62.8407 12.46 60.1707 11.77 57.3607C11.6 56.6607 11.42 55.9707 11.2 55.1407C9.20001 56.5407 8.19 59.0807 5.13 59.5007C5.52 58.7907 5.67998 58.2407 6.03998 57.8707C7.51998 56.3507 9.15997 54.9707 10.53 53.3707C10.93 52.9107 10.78 51.8407 10.61 51.1207C10.56 50.9107 9.51001 50.7407 9.01001 50.8707C7.33001 51.3307 5.70998 51.9807 4.03998 52.4807C3.54998 52.6207 2.66996 52.7007 2.51996 52.4607C2.05996 51.7407 2.61001 51.1607 3.26001 50.8307C5.36001 49.7707 7.53001 48.8907 9.95001 48.9507C10.84 48.9707 11.14 48.6107 10.95 47.8907C9.99001 47.6107 9.1 47.3007 8.19 47.1107C7.59 46.9907 6.95001 47.0407 6.32001 47.0207C6.25001 47.0207 6.16998 47.0907 6.09998 47.0707C4.55998 46.7107 3.00997 46.3607 1.46997 45.9907C1.21997 45.9307 0.94 45.8707 0.75 45.7107C0.46 45.4707 0.25 45.1507 0 44.8607C0.36 44.6007 0.759998 44.0807 1.06 44.1307C3.88 44.6507 6.7 45.2307 9.5 45.8807C11.1 46.2507 11.75 45.8807 11.96 44.1807C12.09 43.1207 12.23 42.0707 12.3 41.0107C12.41 39.4107 13.53 38.6007 14.66 37.7407C16.53 36.3207 18.65 35.6307 20.96 35.4007C21.1 35.3907 21.24 35.3107 21.42 35.2407C21.48 32.6707 21.81 30.1907 22.83 27.8007C23.39 26.4907 23.7 25.0707 24.05 23.6807C24.1 23.4707 23.83 23.0507 23.59 22.9207C22.59 22.3507 21.42 22.0107 20.56 21.3007C19.44 20.3607 18.49 19.1907 17.59 18.0307C16.94 17.1907 16.55 16.1607 15.94 15.2907C14.86 13.7707 14.92 12.1307 15.44 10.5007C15.65 9.8307 16.14 9.13069 16.7 8.70069C18.71 7.12069 20.9 6.1707 23.62 6.3707C27.53 6.6607 30.78 8.48068 34.22 10.1607C35.37 9.40068 36.68 8.59069 37.94 7.70069C39.61 6.52069 41.6 6.47069 43.48 6.24069C46.19 5.91069 48.94 5.86068 51.67 5.82068C55.2 5.78068 58.59 6.68068 61.94 7.73068C63.5 8.22068 65.06 8.7407 66.63 9.2107C66.84 9.2707 67.22 9.24068 67.33 9.10068C67.95 8.30068 68.49 7.4207 69.11 6.6207C69.57 6.0307 70.11 5.51068 70.64 4.97067C71.98 3.59067 73.2 2.0707 74.69 0.900698C76.48 -0.509302 78.05 -0.199321 79.67 1.38068C81.36 3.03068 82.24 5.1107 83.02 7.2807C83.8 9.4307 84.2 11.6907 83.79 13.8807C83.37 16.1207 83 18.4807 80.97 20.1507C79.84 21.0907 79.11 22.5007 77.26 22.9307C79.16 25.2807 79.88 28.2607 82.5 29.8607C84.73 31.2307 87.03 32.5107 89.25 33.9007C91.06 35.0407 91.54 34.9507 90.14 36.7407C89.17 36.9007 88.43 37.0707 87.68 37.1307C87.1 37.1807 86.5 37.1007 85.91 37.0507C84.73 36.9507 84.35 37.4707 84.73 38.5607C85.9 41.8607 87.06 45.1707 88.14 48.5007C88.48 49.5307 88.71 50.6407 88.33 51.7707C88.14 52.3307 87.1 52.9607 86.63 52.5907C85.27 51.5507 83.94 50.4807 82.66 49.3507C82.31 49.0407 82.16 48.4907 81.92 48.0607C81.73 48.1907 81.55 48.3107 81.36 48.4407C81.19 49.4907 81.03 50.5507 80.86 51.6007C80.63 53.0507 80.45 54.5207 80.15 55.9607C79.82 57.5507 79.43 59.1307 78.97 60.6907C78.47 62.4107 78.1 64.2507 77.22 65.7707C76.41 67.1607 75.03 66.7007 74.47 65.1807C73.73 63.1507 72.88 61.1507 72.01 59.1707C71.89 58.9107 71.24 58.6107 71.01 58.7107C69.92 59.1807 68.89 59.7907 67.81 60.3707C74.52 65.8007 79.27 72.8707 85.27 78.9307C85.27 77.3107 85.27 75.6907 85.27 73.7407C85.69 74.1107 85.98 74.2307 86.01 74.4007C86.5 76.8407 86.89 79.3007 87.46 81.7207C87.63 82.4507 88.3 83.0507 88.7 83.7307C89.23 84.6207 89.72 85.5207 90.35 86.6207C89.45 86.6207 88.94 86.6207 88.35 86.6207C89.52 95.0707 90 103.531 89.7 112.011C92.24 112.691 94.82 112.821 97.35 112.351C99.81 111.891 102.21 111.111 104.49 110.511C104.49 107.841 104.49 105.441 104.49 103.231C102.89 103.231 101.5 103.091 100.15 103.271C98.74 103.461 97.38 103.971 95.95 104.351C95.48 103.021 96.06 102.221 97 101.591C99.22 100.091 101.45 98.6007 103.66 97.0907C103.85 96.9607 104.09 96.7007 104.09 96.5107C104.05 95.3807 103.98 94.2407 103.83 93.1107C103.76 92.5707 102.5 92.3407 102.01 92.7107C101.82 92.8507 101.61 93.0107 101.39 93.0507C99.89 93.3107 98.39 93.6307 96.88 93.7507C96.19 93.8107 95.43 93.5507 94.78 93.2507C94.34 93.0407 94.94 91.6307 95.53 91.3107C97.93 90.0107 100.33 88.7207 102.68 87.3507C103.05 87.1307 103.39 86.5107 103.4 86.0607C103.43 84.9307 103.25 83.7907 103.19 82.6507C103.16 82.0907 103.2 81.5207 103.21 80.9607C103.23 80.2407 103.07 79.8007 102.17 80.0107C100.09 80.4907 98.01 80.9407 95.91 81.2907C95.44 81.3707 94.89 80.9707 94.21 80.7407C94.52 80.2807 94.66 79.8207 94.94 79.7107C97.34 78.7207 98.58 76.5907 100.03 74.6707C100.42 74.1607 100.82 73.6507 101.24 73.1607C101.97 72.3107 102.77 71.5207 102.58 70.2307C102.53 69.8807 102.73 69.4807 102.88 68.8307C103.82 69.9907 104.53 70.7307 104.45 72.1907C104.35 73.9507 104.8 75.7507 105.09 77.5207C105.13 77.7607 105.61 78.0807 105.91 78.1107C108.1 78.3607 110.3 78.5007 112.49 78.7807C113.17 78.8707 113.43 78.6707 113.71 78.1007C113.88 77.7707 114.32 77.5807 114.64 77.3307C114.73 77.7007 114.93 78.0707 114.91 78.4307C114.68 81.6207 114.44 84.8107 114.13 87.9907C114.05 88.7907 113.68 89.5607 113.41 90.4307C115.17 90.0907 116.83 89.7607 118.49 89.4407C119.27 89.2907 119.41 88.9607 119.13 88.1607C118.08 85.2007 117.08 82.2207 116.18 79.2207C115.77 77.8607 115.62 76.4307 115.35 75.0307C115.54 75.0407 115.69 74.9707 115.85 74.9107ZM77.04 21.3007C77.46 20.8107 77.97 20.0507 78.64 19.4807C81.23 17.2707 81.95 14.4107 81.48 11.2107C81.05 8.3207 80.15 5.58069 78.2 3.30069C77.61 2.60069 76.25 2.1507 75.82 2.5607C75.3 3.0407 74.83 3.58068 74.32 4.07068C72.75 5.58068 71.15 7.07069 69.59 8.61069C69.17 9.03069 68.54 9.60069 68.58 10.0507C68.71 11.6207 67.64 11.7007 66.71 11.5707C65.56 11.4007 64.48 10.7407 63.33 10.5307C60.89 10.0907 58.68 8.74069 56.12 8.74069C55.57 8.74069 55.02 8.55069 54.46 8.49069C53.34 8.39069 52.23 8.2807 51.11 8.2507C49.86 8.2207 48.6 8.27068 47.34 8.29068C46.38 8.31068 45.42 8.2707 44.47 8.3707C43.57 8.4707 42.69 8.8907 41.81 8.8407C40 8.7507 38.66 9.65069 37.37 10.6707C36.23 11.5707 35.14 12.5407 34.07 13.5307C33.23 14.3107 32.4 15.1307 31.66 16.0207C30.91 16.9107 30.44 18.0807 29.58 18.8207C27.48 20.6407 26.8 23.2207 25.7 25.5607C25.17 26.6907 24.89 27.9307 24.47 29.1107C23.72 31.2207 22.94 33.3207 22.14 35.5007C22.55 35.5407 22.88 35.6107 23.21 35.6007C25.57 35.5507 27.93 35.3907 30.29 35.4307C33.16 35.4807 36.1 34.9807 38.84 36.2707C39.24 36.4607 39.52 36.9107 39.85 37.2407C39.33 37.5807 38.82 38.2107 38.3 38.2107C37.18 38.2207 36.05 37.9207 34.58 37.6907C35.23 38.2307 35.59 38.7207 36.07 38.8907C37.19 39.3007 38.36 39.5607 39.67 39.9207C39.97 39.2507 40.37 38.4507 40.7 37.6107C40.99 36.8507 41.44 36.5607 42.27 36.7007C43.24 36.8707 44.23 36.9207 45.22 37.0107C48.85 37.3507 52.35 38.1007 55.41 40.2707C55.58 40.3907 56.03 40.3007 56.23 40.1507C57.4 39.3107 58.51 38.3907 59.7 37.5907C59.97 37.4107 60.49 37.5907 60.9 37.6007C60.79 37.9907 60.79 38.4907 60.55 38.7607C59.84 39.5307 58.98 40.1507 58.28 40.9307C57.79 41.4707 57.4 42.1507 57.95 42.9107C58.46 43.6107 58.99 44.2807 59.49 44.9307C60.03 44.7207 60.45 44.5107 60.89 44.4107C61.15 44.3607 61.46 44.4907 61.75 44.5507C61.67 44.8507 61.63 45.1807 61.5 45.4607C61.41 45.6607 61.23 45.8507 61.05 45.9707C60.36 46.4507 60.32 46.9407 60.69 47.7107C61.67 49.7407 62.13 51.8907 61.68 54.1207C62.78 54.6007 63.82 55.0707 64.87 55.5007C65.13 55.6007 65.51 55.6507 65.74 55.5407C66.92 54.9607 68.12 54.3907 69.21 53.6607C70.4 52.8707 71.27 52.9407 72.14 54.0807C72.75 54.8707 73.41 55.6207 74.03 56.3807C73.82 58.6607 75.75 60.2807 76.06 62.4307C77.76 58.0407 78.48 53.4907 79.04 48.9307C77.56 48.7007 76.21 48.4907 74.63 48.2407C75.63 50.1907 76.52 51.9107 77.41 53.6307C77.29 53.7307 77.16 53.8207 77.04 53.9207C76.64 53.6807 76.11 53.5307 75.88 53.1707C75.11 52.0007 74.23 50.8207 73.83 49.5107C73.55 48.6007 73.25 47.9607 72.48 47.4307C72.25 47.2707 72.22 46.6207 72.32 46.2507C72.36 46.0707 72.93 45.8907 73.22 45.9407C73.77 46.0307 74.3 46.2907 74.83 46.4807C76.21 46.9707 77.58 47.4707 78.94 47.9507C79.15 46.5607 79.34 45.3007 79.58 43.7707C82.68 45.0307 83.66 48.1007 86.24 49.6107C85.13 46.3407 84.1 43.2107 82.99 40.1007C82.9 39.8407 82.35 39.6007 82.01 39.6107C79.77 39.6607 77.51 40.1107 75.31 39.3207C74.94 39.1907 74.6 38.9907 74.25 38.8307C74.5 38.3107 74.62 37.5407 75.03 37.3207C77.25 36.1207 79.54 35.0407 81.82 33.9507C82.08 33.8207 82.44 33.9007 82.76 33.8807C82.78 33.9707 82.8 34.0607 82.82 34.1607C81.04 35.3207 79.27 36.4807 77.19 37.8307C78.86 37.9507 80.21 38.0507 81.7 38.1507C81.54 35.2207 84.09 35.6007 85.81 34.7807C84.59 33.9007 83.48 33.0507 82.32 32.2907C81.9 32.0107 81.24 31.6807 80.87 31.8207C80.16 32.1107 79.98 31.7307 79.73 31.3007C79.23 30.4707 78.73 29.6307 78.36 29.0007C77.3 29.3407 76.43 29.5307 75.63 29.8807C74.61 30.3207 73.64 30.8707 72.66 31.4007C71.19 32.1907 69.74 33.0207 68.27 33.8007C67.89 34.0007 67.44 34.0807 67.02 34.2107C66.98 33.5607 66.65 32.6707 66.96 32.3007C68.2 30.8007 69.6 29.4307 71 28.0807C72.25 26.8807 73.55 25.7207 74.89 24.6107C75.44 24.1507 75.43 23.7907 75.21 23.1607C75.02 22.6007 75.06 21.8907 75.24 21.3307C75.28 21.1707 76.21 21.3007 77.04 21.3007ZM28.35 62.7707C28.18 61.6207 27.98 60.5807 27.89 59.5207C27.87 59.2307 28.18 58.9107 28.33 58.6007C28.64 58.7907 29 58.9307 29.24 59.1807C29.4 59.3507 29.37 59.6807 29.45 59.9307C29.82 61.1807 30.34 62.0607 31.9 62.3607C34.38 62.8307 36.78 63.7707 39.23 64.4307C42.75 65.3807 46.26 66.6007 49.99 65.4507C54.39 64.0907 57 60.9807 58.53 56.8107C58.86 55.9107 58.39 55.5007 57.47 55.3807C56.13 55.2107 54.82 54.8007 53.49 54.5507C52.78 54.4207 52.66 53.9707 52.88 53.4907C53 53.2307 53.52 53.0007 53.85 53.0207C55.21 53.1207 56.57 53.3107 57.93 53.4907C59.16 53.6507 59.62 53.2207 59.4 51.9707C59.25 51.1107 59.02 50.2707 58.77 49.4407C58.36 48.0207 58.27 48.0707 56.95 48.8307C55.71 49.5507 54.36 50.0907 53.07 50.7107C52.97 50.5907 52.87 50.4707 52.77 50.3507C52.89 50.0207 52.9 49.5707 53.13 49.3907C54.19 48.5407 55.33 47.7807 56.41 46.9507C56.7 46.7307 57.13 46.3507 57.1 46.1007C56.86 44.2207 55.3 43.6207 53.82 44.7807C53.4 45.1107 53 45.4707 52.55 45.7507C52.06 46.0507 51.53 46.2807 51.02 46.5407C50.91 46.4407 50.8 46.3407 50.69 46.2407C50.94 45.7407 51.1 45.1707 51.45 44.7707C52.02 44.1207 52.71 43.5607 53.36 42.9807C53.9 42.5007 54.06 42.1007 53.26 41.7007C52.48 41.3207 51.75 40.8407 50.97 40.4607C48.36 39.2007 45.45 39.4307 42.71 38.8007C42.52 38.7607 42.2 38.9507 42.05 39.1207C41.74 39.5007 41.49 39.9207 41.24 40.3507C40.21 42.1407 39.19 43.9307 38.18 45.7307C38.07 45.9207 37.91 46.2107 37.98 46.3607C38.56 47.6407 37.55 48.2707 36.92 49.1107C36.61 49.0007 36.31 48.8907 36.29 48.8907C34.66 50.4607 33.2 51.9207 31.68 53.3007C31.19 53.7407 30.44 53.9007 29.95 54.3407C28.98 55.2207 27.96 55.6407 26.66 55.2207C25.57 54.8707 24.49 54.4807 23.37 54.2607C19.22 53.4407 16.68 50.2907 13.76 47.7007C13.37 47.3507 13.15 46.8207 12.85 46.3707C12.74 46.4107 12.64 46.4407 12.53 46.4807C12.71 48.5107 12.98 50.5407 13.04 52.5807C13.11 55.1307 14 57.4307 14.92 59.7307C15.29 60.6607 15.78 61.6307 16.45 62.3507C18.27 64.3207 20.37 65.5807 23.23 64.4507C24.84 63.8207 26.53 63.3607 28.35 62.7707ZM86.24 88.6807C83.61 89.8007 81.17 90.8407 78.69 91.8907C78.69 94.0007 78.69 96.3507 78.69 98.6907C78.81 98.7407 78.93 98.7907 79.06 98.8307C79.82 98.0107 80.58 97.2007 81.54 96.1707C80.9 96.1207 80.45 96.1707 80.08 96.0207C79.72 95.8707 79.44 95.5207 79.12 95.2507C79.18 95.1407 79.24 95.0407 79.3 94.9307C80.57 94.9307 81.85 94.8107 83.1 94.9707C84.1 95.0907 84.47 95.9907 83.86 96.7307C83 97.7807 82.02 98.7407 81.01 99.6407C79.89 100.641 78.6 101.471 79.17 103.321C79.27 103.651 79.07 104.061 79.06 104.431C79.03 105.731 78.95 107.031 79.05 108.321C79.1 109.011 78.94 109.291 78.3 109.461C77.62 109.641 77.11 109.501 77.01 108.781C76.88 107.891 76.87 106.981 76.81 106.091C76.75 105.251 76.69 104.411 76.61 103.281C74.53 105.821 72.67 108.091 70.64 110.561C73.52 110.561 76.02 110.561 78.52 110.561C78.6 110.561 78.69 110.591 78.75 110.551C78.95 110.411 79.17 110.271 79.32 110.091C80.38 108.761 81.34 107.331 82.5 106.101C83.6 104.921 84.92 103.951 86.12 102.861C86.63 102.391 87.46 101.891 87.49 101.361C87.59 99.8407 87.37 98.2907 87.25 96.7607C87.06 94.3907 86.88 92.0107 86.65 89.6407C86.58 89.2307 86.31 88.8607 86.24 88.6807ZM26.1 19.5907C25.39 19.0807 24.73 18.8407 24.45 18.3707C23.26 16.3907 24.61 13.8707 26.9 13.7907C27.45 13.7707 28.01 14.2007 28.56 14.4207C28.09 14.7307 27.67 15.1707 27.16 15.3307C25.91 15.7307 25.61 16.1207 25.94 17.4207C26.06 17.8907 26.28 18.3307 26.53 18.9707C28.62 16.5107 30.62 14.1707 32.69 11.7507C32.62 11.7107 32.43 11.5607 32.22 11.4707C31.51 11.1507 30.8 10.8507 30.09 10.5307C29.82 10.4107 29.57 10.2107 29.29 10.1307C28.13 9.80068 26.9 9.65069 25.8 9.17069C23.48 8.16069 21.24 8.22069 19.18 9.61069C18.32 10.1907 17.19 10.8707 17.36 12.2307C17.45 12.9307 17.66 13.6407 17.95 14.2907C19.01 16.6407 20.65 18.5807 22.41 20.4207C23.01 21.0507 23.86 21.9707 24.49 21.9007C25.56 21.7807 25.84 20.5207 26.08 19.5107C26.09 19.4607 26.06 19.4207 26.1 19.5907ZM106.31 92.3707C108.46 91.7807 110.45 91.2307 112.33 90.7107C112.61 87.2107 112.87 83.8607 113.15 80.2207C110.5 80.2207 107.88 80.2207 105.27 80.2207C105.63 84.3007 105.96 88.2507 106.31 92.3707ZM81.22 110.901C83.5 111.491 85.5 112.001 87.55 112.521C87.55 109.581 87.55 106.821 87.55 104.071C87.44 104.021 87.33 103.971 87.23 103.921C85.3 106.151 83.39 108.371 81.22 110.901ZM20.14 49.5207C20.1 49.6107 20.06 49.7107 20.02 49.8007C20.13 49.9507 20.21 50.1307 20.35 50.2507C22.34 52.0007 24.91 52.4107 27.3 53.2607C27.43 53.3107 27.61 53.2807 27.74 53.2207C29.66 52.4307 31.35 51.3107 32.6 49.6107C32.72 49.4407 32.76 49.0607 32.65 48.9307C32.54 48.7907 32.19 48.7407 31.97 48.7907C31.53 48.8807 31.11 49.2007 30.69 49.1907C29.34 49.1807 28.43 49.8507 27.76 50.9007C26.73 50.5307 25.35 51.1407 24.98 49.4907C24.28 49.9107 23.72 50.2507 23.21 50.5707C22.15 50.2107 21.14 49.8607 20.14 49.5207ZM127.9 84.4507C128.04 84.3907 128.18 84.3407 128.32 84.2807C129.28 81.3007 130.23 78.3207 131.26 75.1107C130.11 76.1407 129.14 77.0807 128.11 77.9407C127.05 78.8207 125.93 79.6107 124.62 80.6107C125.61 81.7707 126.75 83.1107 127.9 84.4507ZM59.15 61.1307C59.26 61.2807 59.37 61.4307 59.47 61.5707C61.27 60.9507 63.11 60.4407 64.85 59.6807C66.68 58.8807 68.42 57.8607 70.18 56.8907C70.39 56.7707 70.45 56.3807 70.59 56.1107C70.29 56.0507 69.93 55.8507 69.69 55.9407C68.57 56.4007 67.49 56.9407 66.39 57.4407C65.39 57.9007 64.41 58.4707 63.35 58.7307C62.67 58.9007 61.87 58.5907 60.86 58.4607C61.67 57.6107 62.18 57.0607 62.69 56.5207C62.59 56.3907 62.49 56.2607 62.4 56.1207C61.82 56.4507 60.98 56.6407 60.71 57.1407C60.06 58.4107 59.66 59.8007 59.15 61.1307ZM23.29 38.2807C23.28 38.1407 23.28 38.0007 23.27 37.8607C22.19 37.8107 21.11 37.6807 20.04 37.7307C19.28 37.7707 18.46 37.9107 17.81 38.2607C16.9 38.7407 16.1 39.4407 15.29 40.0907C15.11 40.2307 14.92 40.6207 14.99 40.7407C15.15 41.0007 15.45 41.2107 15.74 41.3407C15.83 41.3807 16.06 41.0707 16.24 40.9507C16.65 40.6907 17.11 40.2007 17.49 40.2407C18.23 40.3207 18.53 39.9507 18.66 39.4407C18.9 38.5007 19.5 38.6507 20.23 38.6507C21.25 38.6407 22.27 38.4107 23.29 38.2807ZM154.76 67.3007C154.65 67.2807 154.53 67.2607 154.42 67.2407C153.64 68.7807 152.86 70.3307 152.07 71.8707C152.17 71.9907 152.26 72.1107 152.36 72.2407C153.32 71.9507 154.29 71.6807 155.24 71.3607C155.34 71.3307 155.41 71.0207 155.38 70.8607C155.19 69.6707 154.97 68.4807 154.76 67.3007ZM139.59 90.8407C139.69 90.7707 139.8 90.6907 139.9 90.6207C139.39 89.0207 138.87 87.4307 138.28 85.5807C137.63 87.1407 137.1 88.4107 136.49 89.8407C137.61 90.2007 138.6 90.5207 139.59 90.8407ZM78.42 89.7707C79.76 89.1607 80.88 88.6607 82.09 88.1107C81.01 87.3707 80.07 86.6507 79.06 86.0807C78.88 85.9807 78.07 86.4607 78.07 86.6707C78.09 87.6607 78.28 88.6407 78.42 89.7707ZM128.58 108.991C128.05 107.501 127.65 106.351 127.24 105.211C127.13 105.191 127.01 105.171 126.9 105.161C126.25 106.231 125.59 107.291 124.98 108.391C124.93 108.491 125.24 108.971 125.39 108.981C126.39 109.011 127.39 108.991 128.58 108.991ZM152.6 107.401C151.51 108.891 150.59 110.141 149.53 111.601C150.98 111.431 152.23 111.291 153.51 111.151C153.2 109.861 152.92 108.711 152.6 107.401ZM102.72 78.3307C102.72 77.0407 102.72 75.9007 102.72 74.7607C102.61 74.7307 102.49 74.7107 102.38 74.6807C101.48 75.9807 100.58 77.2907 99.55 78.7707C100.8 78.6007 101.8 78.4607 102.72 78.3307ZM14.17 41.1707C13.3 43.5707 16.96 48.7107 19.47 49.1607C18.87 48.3207 18.3 47.5307 17.72 46.7507C17.61 46.6107 17.39 46.4007 17.29 46.4307C16.1 46.8407 16.08 45.8307 15.8 45.2107C15.27 43.9707 14.79 42.7207 14.17 41.1707ZM72.73 28.6807C74.42 28.2407 75.78 27.8807 77.29 27.4907C77.04 26.8707 76.83 26.2807 76.58 25.7007C76.33 25.1407 75.94 25.0707 75.52 25.5207C74.64 26.5007 73.77 27.4907 72.73 28.6807ZM29.29 38.6907C29.32 37.5907 29.32 37.6007 28.12 37.6907C27.68 37.7207 27.23 37.6307 26.78 37.6307C25.91 37.6207 25.05 37.6307 23.95 37.6307C24.57 38.1807 24.89 38.5907 25.3 38.7907C25.8 39.0407 26.4 39.2607 26.94 39.2307C27.69 39.2007 28.42 38.9107 29.29 38.6907ZM101.39 100.811C101.43 100.891 101.47 100.971 101.5 101.051C102.4 101.051 103.3 101.051 104.28 101.051C104.28 100.151 104.28 99.3407 104.28 98.3107C103.21 99.2407 102.3 100.031 101.39 100.811ZM151.71 86.8307C151.57 86.8507 151.43 86.8707 151.29 86.8807C151.29 87.5007 151.25 88.1207 151.31 88.7307C151.34 89.0107 151.57 89.5107 151.71 89.5107C152.06 89.5207 152.47 89.3607 152.73 89.1307C152.86 89.0207 152.81 88.5507 152.68 88.3207C152.41 87.7907 152.04 87.3207 151.71 86.8307ZM103.7 90.2207C103.7 89.7007 103.7 89.2607 103.7 88.7107C102.67 89.4207 101.73 90.0607 100.79 90.7107C100.83 90.7907 100.88 90.8607 100.92 90.9407C101.82 90.7107 102.72 90.4807 103.7 90.2207Z" />
            <path d="M101.17 40.8109C101.05 41.9309 100.95 42.9109 100.82 43.8909C100.64 45.2709 100.45 46.6509 100.23 48.0209C100.03 49.3309 99.7801 50.6309 99.5801 51.9409C99.3401 53.4709 99.3802 55.0909 98.8602 56.5109C98.2102 58.2909 98.4901 60.4709 96.6501 61.7909C95.8701 62.3509 95.3902 62.3309 95.2202 61.3609C94.9002 59.5709 94.6602 57.7709 94.4502 55.9609C94.1002 52.9409 93.8102 49.9209 93.5002 46.9009C93.4302 46.2009 93.4002 45.4909 93.3502 44.7909C93.4902 44.7309 93.6202 44.6709 93.7602 44.6109C94.0102 45.0009 94.4102 45.3709 94.5002 45.8009C94.8702 47.5009 95.1402 49.2209 95.4502 50.9309C95.7102 52.3609 95.9802 53.8009 96.2302 55.2309C96.3002 55.6209 96.3202 56.0209 96.5302 56.4509C97.7202 51.5809 98.2101 46.5909 98.9601 41.7209C97.3401 41.8709 95.6402 42.0009 93.9502 42.1909C93.1802 42.2809 92.4201 42.5309 91.6501 42.6309C90.5101 42.7809 89.3601 42.9209 88.2101 42.9209C87.8501 42.9209 87.5001 42.4409 87.1401 42.1809C87.4401 41.9209 87.7002 41.5009 88.0402 41.4109C89.2202 41.1009 90.4202 40.9109 91.6102 40.6709C94.5602 40.0709 97.5102 39.4409 100.47 38.8809C104.56 38.1109 108.64 37.2209 112.76 36.7009C117.72 36.0709 122.72 35.8409 127.69 35.3109C130.49 35.0109 133.26 34.7709 136.04 35.3509C139.21 36.0209 141.93 37.5409 144.32 39.7009C145.5 40.7709 146.69 41.8309 148.04 43.0509C151.32 40.8509 154.94 38.5209 158.45 36.0609C161.92 33.6209 165.24 30.9609 168.74 28.5409C172.04 26.2509 175.37 23.9609 179.19 22.5609C181.88 21.5709 184.49 20.3309 187.23 19.5409C189.09 19.0009 191.12 19.0109 193.08 18.8009C194.07 18.7009 195.06 18.5809 196.05 18.5909C202.2 18.6709 207.95 20.1009 212.92 23.9109C214.27 24.9509 215.54 26.1109 216.75 27.3209C217.95 28.5109 217.89 28.7209 216.58 30.0009C216 29.5309 215.33 29.1009 214.79 28.5509C211.65 25.3809 207.95 23.1509 203.64 22.0009C201.62 21.4609 199.56 20.8909 197.49 20.7209C195.74 20.5809 193.95 21.0109 192.17 21.1909C190.92 21.3109 189.66 21.4209 188.41 21.5509C188.04 21.5909 187.63 21.5809 187.32 21.7509C186.64 22.1109 186.09 22.4409 185.19 22.3209C184.4 22.2209 183.51 22.8509 182.68 23.2009C181.16 23.8509 179.64 24.5109 178.15 25.2309C176.98 25.7909 175.81 26.3809 174.73 27.0809C172.24 28.6909 169.79 30.3609 167.35 32.0609C166.53 32.6309 165.82 33.3409 165.06 33.9909C164.97 34.0609 164.92 34.1809 164.83 34.2409C162.63 35.6709 160.42 37.0909 158.23 38.5409C157.13 39.2709 156.1 40.1009 154.97 40.7709C153.36 41.7309 151.68 42.5909 150.04 43.5009C149.51 43.7909 148.96 44.0709 148.49 44.4509C147.13 45.5709 146.74 45.6009 145.55 44.2809C143.44 41.9409 141.06 39.9409 138.31 38.4209C137.61 38.0309 136.69 38.0709 135.97 37.7109C134.27 36.8709 132.44 37.6109 130.7 37.1109C130.05 36.9209 129.27 37.1709 128.55 37.2509C126.94 37.4209 125.33 37.6109 123.72 37.7909C122.21 37.9609 120.7 38.1309 119.19 38.2609C118.31 38.3409 118.32 39.0209 118.31 39.5809C118.28 42.0809 118.38 44.5909 118.31 47.0909C118.23 49.9109 118.01 52.7209 117.84 55.5409C117.78 56.5309 116.87 56.5409 116.24 56.6509C115.85 56.7209 115.13 56.4009 114.97 56.0609C113.44 52.9209 111.98 49.7509 110.55 46.5709C109.81 44.9109 109.14 43.2209 108.5 41.5309C108.4 41.2609 108.6 40.8709 108.65 40.5409C108.97 40.6709 109.44 40.7109 109.58 40.9409C110.83 43.1309 112.03 45.3509 113.23 47.5609C113.83 48.6609 114.39 49.7909 115.01 50.8809C115.1 51.0309 115.36 51.0909 115.54 51.1909C115.65 50.9709 115.86 50.7509 115.86 50.5209C115.93 48.6609 115.98 46.8109 116.01 44.9509C116.04 43.2109 116.02 41.4609 116.07 39.7209C116.09 39.0409 115.93 38.5309 115.18 38.5809C113.61 38.6909 112.04 38.8109 110.49 39.0409C109.01 39.2609 107.55 39.6609 106.08 39.9409C104.59 40.2209 103.08 40.4509 101.58 40.7109C101.35 40.7609 101.14 40.8109 101.17 40.8109Z" />
            <path d="M128.75 39.7007C129.16 39.9207 129.69 40.0507 129.97 40.3807C131.61 42.2707 133.19 44.2107 134.78 46.1407C134.99 46.4007 135.14 46.7107 135.32 47.0007C135.45 46.9207 135.59 46.8407 135.72 46.7607C135.51 44.7707 135.29 42.7707 135.11 40.7807C135.07 40.2907 135.06 39.7807 135.18 39.3107C135.28 38.9307 135.58 38.5907 135.79 38.2407C136.24 38.5907 136.96 38.8507 137.09 39.2907C137.41 40.3707 137.5 41.5207 137.61 42.6507C137.8 44.6707 137.92 46.7007 138.09 48.7207C138.16 49.5407 137.4 51.3507 136.69 51.5807C136.42 51.6707 135.87 51.2907 135.62 50.9907C134.92 50.1007 134.33 49.1207 133.66 48.2007C132.05 45.9907 130.4 43.8207 128.83 41.5907C128.52 41.1507 128.49 40.5107 128.33 39.9707C128.48 39.8607 128.62 39.7807 128.75 39.7007Z" />
            <path d="M70.25 13.2705C70.64 12.7005 70.98 12.0905 71.44 11.5805C72.34 10.5605 73.21 9.47051 74.27 8.65051C75 8.09051 75.95 8.6105 76.27 9.3605C76.78 10.5605 77.2 11.8505 77.34 13.1305C77.48 14.4105 77.21 15.7305 77.13 17.0305C77.06 18.2905 76.53 19.1205 75.02 19.9305C74.98 16.8605 74.95 13.9305 74.92 11.0605C72.94 11.3805 72.47 13.6405 70.58 13.5905C70.47 13.4805 70.36 13.3705 70.25 13.2705Z" />
            <path d="M43.6602 27.0909C43.8402 26.3709 44.0201 25.4809 44.2701 24.6109C44.5001 23.8109 45.1002 23.4609 45.9102 23.4609C46.7702 23.4609 47.5002 23.8509 47.6002 24.7009C47.7602 26.1409 48.0001 27.6809 47.6401 29.0209C47.4101 29.8609 46.1702 30.4709 45.3102 31.0609C45.2302 31.1209 44.3902 30.4109 44.2202 29.9409C43.9102 29.0909 43.8502 28.1609 43.6602 27.0909Z" />
            <path d="M43.6699 20.0506C43.0699 18.3606 43.1798 18.1306 44.9598 18.0706C47.3798 17.9906 49.7999 18.0106 52.2199 18.0506C52.5899 18.0606 52.9499 18.4606 53.3199 18.6906C53.0399 18.9906 52.7199 19.2706 52.4699 19.6006C51.9099 20.3306 51.2498 20.1106 50.4598 20.0306C49.2098 19.9106 47.9199 20.1606 46.6499 20.1806C45.6899 20.1906 44.7199 20.1006 43.6699 20.0506Z" />
            <path d="M29.5598 26.0204C28.9398 24.7704 29.0798 24.2004 30.4398 23.2604C32.0298 22.1604 33.6898 21.1704 35.2798 20.0804C35.9498 19.6204 36.5598 19.7004 36.9298 20.2904C37.0398 20.4704 36.4998 21.1804 36.1298 21.5004C34.8698 22.5904 33.5898 23.6704 32.2398 24.6304C31.4298 25.2104 30.4598 25.5704 29.5598 26.0204Z" />
            <path d="M34.23 27.5805C34.39 26.5705 34.79 25.8305 35.78 25.6105C36.61 25.4305 37.45 26.0705 37.72 26.9905C38.35 29.1405 37.91 30.2905 36 31.2105C35.75 31.3305 35.08 31.1605 35.04 31.0005C34.7 29.8605 34.48 28.6805 34.23 27.5805Z" />
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