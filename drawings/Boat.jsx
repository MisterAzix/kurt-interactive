import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

export default function Boat (props) {
    return (
        <Svg {...props} width="179" height="170" viewBox="0 0 179 170" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M167.309 130.652C165.949 132.272 164.489 133.822 163.249 135.532C162.369 136.752 161.739 138.172 161.069 139.542C159.529 142.702 159.659 146.202 159.099 149.552C158.859 150.952 158.949 152.412 158.789 153.832C158.729 154.412 158.389 154.952 158.199 155.512C157.889 156.442 157.769 157.492 157.249 158.302C156.009 160.232 154.789 162.242 153.199 163.872C151.509 165.612 149.239 166.522 146.749 166.812C142.939 167.262 139.149 167.882 135.339 168.302C132.709 168.592 130.069 168.682 127.429 168.832C125.399 168.942 123.359 169.052 121.319 169.082C118.889 169.122 116.449 169.082 114.019 169.072C110.279 169.052 106.539 169.032 102.799 169.012C100.199 169.002 97.5891 168.962 94.9891 168.992C91.4491 169.032 87.9091 169.122 84.3691 169.192C81.7391 169.242 79.0991 169.352 76.4691 169.362C72.6391 169.382 68.8091 169.412 64.9891 169.302C62.7991 169.242 60.6191 168.932 58.4291 168.692C56.3491 168.462 54.2791 168.212 52.2091 167.932C50.2491 167.662 48.2891 167.402 46.3591 167.022C43.4591 166.452 40.5791 165.822 37.6991 165.152C36.0091 164.762 34.3191 164.352 32.6891 163.782C29.4191 162.652 26.1291 161.532 22.9491 160.162C21.2391 159.422 19.7691 158.142 18.1591 157.142C17.0991 156.472 16.0091 155.832 14.8891 155.272C14.6091 155.132 14.1591 155.322 13.5991 155.622C11.1391 152.942 8.3891 150.452 6.2891 147.512C3.9691 144.272 1.7591 140.842 1.0991 136.742C0.789103 134.842 0.159103 132.972 0.059103 131.062C-0.050897 128.932 -0.100897 126.762 0.789103 124.682C1.2091 123.702 1.2291 122.522 1.2891 121.422C1.4891 117.822 1.6491 114.222 1.7591 110.622C1.8591 107.462 1.8991 104.302 1.9291 101.142C1.9491 99.3117 2.6891 98.3517 4.5191 98.0517C8.1191 97.4717 11.7091 97.2217 15.3491 97.8717C17.2391 98.2117 19.1991 98.1617 21.1191 98.3117C22.8291 98.4417 22.9191 98.5917 23.2391 100.342C23.5391 101.992 23.9291 103.622 24.2491 105.262C24.5991 107.082 24.3891 107.562 22.6591 108.252C20.4191 109.152 18.0991 109.622 15.6391 109.282C14.4691 109.122 13.2491 109.382 12.0491 109.392C10.5991 109.402 9.1391 109.252 7.6891 109.322C6.4791 109.382 5.2791 109.622 4.0891 109.852C3.8691 109.892 3.5691 110.262 3.5591 110.492C3.3091 114.162 3.0991 117.842 2.8891 121.512C2.8691 121.902 2.8891 122.292 2.8891 122.662C4.9591 122.312 6.9091 121.872 8.8891 121.672C12.1091 121.342 15.3391 121.122 18.5691 120.932C23.6191 120.642 28.6691 120.442 33.7191 120.152C35.0991 120.072 36.4591 119.762 37.8291 119.662C40.9191 119.432 44.0191 119.262 47.1091 119.092C50.4891 118.892 53.8691 118.662 57.2591 118.542C60.1991 118.442 63.1391 118.492 66.0791 118.432C68.1491 118.392 70.2191 118.262 72.2891 118.212C72.8691 118.202 73.4591 118.272 74.0291 118.392C75.1991 118.652 75.5791 118.262 75.4991 117.062C75.3091 114.362 75.1791 111.662 75.0491 108.962C74.9391 106.752 74.8791 104.542 74.7791 102.332C74.7291 101.212 74.5791 100.092 74.5691 98.9717C74.5291 95.5517 76.5291 93.9817 79.9091 93.8417C84.5491 93.6517 89.1991 93.7617 93.8391 93.7117C95.1291 93.6917 96.4091 93.5517 97.5791 93.4717C96.9491 88.4117 97.1891 83.4717 97.2691 78.5317C97.3091 76.2517 97.0491 73.9617 97.0291 71.6717C96.9991 68.8817 97.0191 66.1017 97.1291 63.3117C97.1891 61.7417 99.0091 60.1017 100.599 60.0917C102.189 60.0917 103.779 60.2617 105.379 60.2717C106.229 60.2717 107.139 60.2517 107.919 59.9717C110.589 59.0317 113.169 59.8417 115.749 60.2717C117.609 60.5817 117.689 60.6517 118.579 58.8217C120.069 55.7517 120.949 55.2417 124.319 55.7317C125.229 55.8617 125.539 55.3617 125.819 54.7617C126.179 53.9817 126.429 53.1617 126.729 52.3617C127.059 51.4717 127.719 51.1517 128.609 51.4017C129.629 51.6917 130.659 51.9717 131.629 52.4017C133.589 53.2717 135.009 52.8517 136.089 50.9317C136.489 50.2217 136.789 49.4517 137.229 48.7717C138.609 46.6417 141.009 45.9117 143.539 46.4117C146.049 46.9017 148.649 47.1917 151.149 46.4617C151.859 46.2517 152.449 45.3117 152.909 44.5817C153.769 43.2017 154.459 41.7217 155.279 40.3217C156.109 38.9017 157.619 38.6817 159.009 38.6817C160.849 38.6817 162.699 38.9617 164.519 39.2617C166.899 39.6517 168.129 39.1317 168.929 36.8517C169.579 35.0117 170.539 34.0117 172.629 34.3617C173.469 34.5017 173.909 33.6817 173.709 32.7117C173.439 31.4117 173.229 30.1117 172.959 28.8117C172.659 27.3417 174.049 26.5217 174.299 25.2617C174.539 24.0717 174.899 22.9117 175.169 21.7217C175.469 20.4117 175.739 19.0917 176.009 17.7717C176.239 16.6417 176.049 15.7617 174.939 15.0417C173.859 14.3517 172.889 13.4317 172.039 12.4617C170.969 11.2417 170.789 9.64172 170.899 8.11172C171.009 6.60172 171.439 5.11172 171.669 3.61172C171.709 3.32172 171.579 2.81172 171.369 2.70172C170.209 2.09172 169.049 1.82172 167.629 1.94172C165.229 2.14172 163.799 3.73172 162.089 4.99172C160.299 6.31172 158.299 7.11172 156.059 7.01172C155.019 6.96172 153.999 6.58172 152.979 6.29172C152.129 6.05172 151.729 6.43172 151.319 7.14172C150.729 8.15172 150.069 9.15172 149.279 10.0217C148.129 11.2817 146.449 11.3717 144.909 11.5017C143.279 11.6417 142.009 12.0017 141.409 13.7217C140.989 14.9117 140.389 16.0317 139.869 17.1817C139.669 17.6217 137.289 18.6717 136.759 18.5817C135.849 18.4117 134.929 18.2317 134.009 18.1017C132.869 17.9317 132.039 18.2917 131.629 19.4817C131.019 21.2117 130.459 22.9917 129.609 24.6017C129.189 25.3917 128.239 25.9917 127.399 26.4617C125.949 27.2717 125.479 28.6717 124.769 30.0117C124.029 31.3917 123.209 32.7917 121.509 33.4017C120.409 33.8017 120.029 34.9617 119.599 36.0217C119.149 37.1217 118.679 38.3017 117.889 39.1417C117.009 40.0817 115.839 40.8117 114.669 41.3817C112.759 42.3017 111.869 43.8917 111.329 45.7717C110.639 48.1617 110.179 50.6517 108.759 52.7417C107.959 53.9217 106.789 54.8317 105.859 55.9417C105.289 56.6117 104.879 57.4217 104.409 58.1717C104.139 58.6017 103.879 59.0517 103.459 59.4317C102.849 58.2617 103.189 57.1317 103.749 56.2317C104.749 54.6117 106.069 53.1817 107.069 51.5617C107.699 50.5317 107.999 49.3017 108.409 48.1417C109.239 45.7717 109.579 43.1817 111.299 41.2317C111.949 40.4917 112.899 39.8717 113.839 39.5717C116.429 38.7617 117.349 36.6217 118.079 34.4317C118.589 32.9117 119.639 32.0917 120.839 31.2717C121.459 30.8517 122.089 30.3617 122.539 29.7717C123.039 29.1217 123.239 28.2317 123.759 27.6117C124.659 26.5517 125.779 25.6717 126.689 24.6117C127.329 23.8717 127.999 23.0417 128.269 22.1317C128.709 20.6317 129.169 19.2317 130.199 17.9917C131.839 16.0117 133.829 15.7517 136.119 16.4217C137.529 16.8317 137.529 16.7217 138.209 15.4217C139.089 13.7417 139.979 11.9517 141.299 10.6417C142.129 9.82172 143.769 9.43172 145.009 9.50172C147.199 9.62172 148.209 8.35172 149.229 6.86172C149.669 6.22172 150.089 5.57172 150.599 5.00172C151.709 3.74172 153.149 3.97172 154.409 4.54172C157.609 5.98172 160.059 4.54172 162.199 2.50172C164.619 0.191716 169.119 -0.778284 172.089 0.711716C173.449 1.39172 174.019 2.68172 173.679 4.16172C173.329 5.65172 172.729 7.17172 172.799 8.65172C172.859 10.1717 173.869 11.5017 175.079 12.5317C175.709 13.0717 176.359 13.5717 177.019 14.0817C177.939 14.7817 178.199 15.8317 178.089 16.8317C177.849 19.0317 177.519 21.2317 177.009 23.3717C176.719 24.6017 175.979 25.7217 175.469 26.8917C174.639 28.7917 175.179 30.6117 175.769 32.4517C176.309 34.1317 175.779 35.1317 174.129 35.6617C173.409 35.8917 172.629 35.9617 171.889 36.1517C170.649 36.4817 170.429 37.7117 170.139 38.6317C169.699 40.0417 168.579 40.6117 167.499 41.0117C165.569 41.7317 163.569 41.1617 161.589 40.8717C160.439 40.7017 159.259 40.6617 158.089 40.6717C157.779 40.6717 157.349 40.9817 157.169 41.2717C156.449 42.4117 155.799 43.5917 155.139 44.7617C153.949 46.8917 151.499 48.9917 148.659 48.7817C146.109 48.5917 143.559 48.3917 141.009 48.3417C140.439 48.3317 139.719 48.8117 139.319 49.2817C138.769 49.9317 138.469 50.7817 138.059 51.5517C137.899 51.8517 137.789 52.2017 137.559 52.4517C136.379 53.7217 134.919 54.6817 133.209 54.7817C132.129 54.8417 131.009 54.2617 129.909 53.9717C129.379 53.8317 128.839 53.7017 128.329 53.5717C127.919 54.7617 127.589 55.7417 127.239 56.7117C127.189 56.8517 127.069 57.0917 126.999 57.0817C125.899 56.9917 125.129 58.1417 123.819 57.6817C121.929 57.0217 120.459 57.9217 120.339 60.7717C121.189 60.7717 122.049 60.7417 122.899 60.7817C123.709 60.8217 124.289 61.2217 124.309 62.0717C124.349 63.6617 124.349 65.2417 124.329 66.8317C124.289 69.6117 124.249 72.3917 124.179 75.1717C124.139 76.5617 123.939 77.9517 123.959 79.3317C123.999 81.0517 124.269 82.7617 124.309 84.4817C124.369 87.4217 124.329 90.3717 124.329 93.4817C125.779 93.5717 127.169 93.7017 128.559 93.7317C131.939 93.7917 135.329 93.6417 138.699 93.9117C139.799 94.0017 140.829 95.1117 141.859 95.7917C142.999 96.5517 143.209 97.6217 143.159 98.9717C143.099 100.562 143.479 102.152 143.579 103.752C143.699 105.582 143.679 107.422 143.799 109.252C144.039 113.042 144.289 116.832 144.629 120.622C144.759 122.092 145.259 122.272 146.779 122.202C147.979 122.142 149.189 122.342 150.399 122.432C152.149 122.562 153.899 122.702 155.659 122.822C157.389 122.942 159.119 123.052 160.849 123.132C162.749 123.222 164.649 123.332 166.559 123.332C167.729 123.332 168.679 123.692 168.899 124.852C169.129 126.052 169.079 127.312 169.079 128.542C169.079 128.752 168.729 128.972 168.549 129.182C168.359 128.932 168.159 128.682 167.969 128.422C167.949 128.392 167.959 128.342 167.959 128.302C167.429 125.012 167.489 125.522 164.469 125.362C162.519 125.262 160.559 125.142 158.609 125.012C157.159 124.922 155.709 124.822 154.259 124.702C151.519 124.472 148.789 124.192 146.059 123.982C142.939 123.742 139.809 123.582 136.679 123.352C134.219 123.172 131.769 122.852 129.299 122.712C125.499 122.502 121.689 122.402 117.879 122.262C115.419 122.172 112.959 122.102 110.509 122.012C106.629 121.882 102.759 121.792 98.8791 121.592C95.6191 121.422 92.3791 121.082 89.1191 120.912C86.3691 120.762 83.6091 120.782 80.8591 120.672C78.8191 120.592 76.7791 120.392 74.7391 120.342C72.3091 120.282 69.8791 120.272 67.4491 120.352C62.8191 120.512 58.1891 120.772 53.5591 120.962C49.1191 121.142 44.6691 121.232 40.2391 121.462C37.9991 121.582 35.7791 121.992 33.5291 122.142C29.2791 122.422 25.0291 122.582 20.7891 122.842C18.7991 122.962 16.8191 123.252 14.8291 123.382C12.4691 123.532 10.0891 123.542 7.7291 123.692C6.2791 123.782 4.7991 123.912 3.3991 124.262C2.1591 124.572 2.6791 125.832 2.5191 126.682C2.3491 127.582 2.5991 128.602 2.2591 129.402C1.4891 131.192 2.1891 132.792 2.5591 134.442C2.8891 135.932 3.3091 137.412 3.7391 138.882C3.8791 139.362 4.1091 139.832 4.3791 140.242C6.0591 142.812 7.7591 145.362 9.4491 147.932C9.9291 148.662 10.6191 148.652 11.4091 148.682C13.0691 148.742 14.7491 149.222 16.3891 149.092C18.0091 148.962 19.5291 149.372 21.0891 149.432C21.8691 149.462 22.6391 149.602 23.4191 149.682C26.2891 149.952 29.1591 150.212 32.0391 150.472C33.9291 150.652 35.8191 150.892 37.7191 150.982C39.2491 151.052 40.7891 150.852 42.3191 150.932C44.7891 151.062 47.2391 151.342 49.7091 151.532C51.4791 151.662 53.2491 151.672 55.0091 151.872C59.1891 152.332 63.3591 152.802 67.5291 153.372C71.5391 153.922 75.5691 154.162 79.6091 154.332C82.5591 154.462 85.4991 154.562 88.4491 154.622C90.5391 154.662 92.6391 154.552 94.7391 154.612C99.2691 154.742 103.789 155.042 108.319 155.062C111.409 155.072 114.489 154.712 117.579 154.522C118.009 154.492 118.449 154.542 118.879 154.492C122.069 154.152 125.259 153.802 128.449 153.452C131.139 153.162 133.849 152.992 136.499 152.532C139.239 152.062 141.969 151.452 144.619 150.642C147.849 149.652 150.999 148.402 154.169 147.252C155.089 146.922 156.039 146.612 156.859 146.102C157.249 145.862 157.459 145.212 157.599 144.702C158.039 143.192 158.339 141.632 158.839 140.132C160.109 136.342 162.099 133.082 165.729 131.082C166.199 130.822 166.629 130.522 167.079 130.232C167.109 130.382 167.209 130.512 167.309 130.652ZM11.9391 150.072C11.8791 150.192 11.8191 150.302 11.7591 150.422C12.3491 151.012 12.8591 151.722 13.5391 152.182C14.8291 153.052 16.2191 153.782 17.5591 154.592C19.3691 155.672 21.1491 156.832 22.9991 157.842C24.3791 158.592 25.8591 159.162 27.2991 159.792C28.5091 160.312 29.7091 160.902 30.9791 161.252C33.1491 161.852 35.3491 162.312 37.5491 162.812C40.2691 163.432 42.9891 164.092 45.7291 164.632C48.7091 165.222 51.7091 165.722 54.7091 166.222C56.4391 166.512 58.1791 166.812 59.9291 166.942C62.0891 167.102 64.2591 167.102 66.4191 167.152C67.7091 167.182 68.9891 167.152 70.2791 167.192C71.9491 167.242 73.6191 167.402 75.2891 167.402C77.2291 167.402 79.1791 167.242 81.1191 167.202C83.7091 167.162 86.2991 167.212 88.8791 167.152C90.9291 167.112 92.9691 166.922 95.0191 166.882C96.8591 166.842 98.7091 166.942 100.559 166.942C102.889 166.942 105.219 166.852 107.549 166.882C111.389 166.932 115.239 167.092 119.079 167.122C121.419 167.142 123.759 167.082 126.089 166.902C130.199 166.572 134.289 166.142 138.389 165.702C140.769 165.452 143.129 165.102 145.499 164.782C147.979 164.442 150.269 163.742 152.089 161.832C154.149 159.672 155.959 157.382 156.529 154.382C156.829 152.822 156.969 151.222 157.119 149.642C157.149 149.292 156.929 148.922 156.799 148.452C156.289 148.672 155.899 148.832 155.509 149.002C154.439 149.462 153.369 149.942 152.279 150.362C150.629 151.002 148.979 151.652 147.289 152.192C145.239 152.852 143.169 153.512 141.059 153.962C139.349 154.332 137.569 154.352 135.819 154.592C132.029 155.112 128.259 155.752 124.459 156.182C121.689 156.502 118.899 156.582 116.119 156.742C113.039 156.912 109.959 157.162 106.889 157.182C102.839 157.202 98.7891 157.042 94.7291 156.952C92.1291 156.892 89.5191 156.812 86.9191 156.722C83.8891 156.622 80.8591 156.562 77.8391 156.362C74.8191 156.162 71.8091 155.822 68.7991 155.512C64.7691 155.102 60.7391 154.662 56.7091 154.242C55.0291 154.062 53.3391 153.892 51.6591 153.742C50.4791 153.632 49.2991 153.562 48.1191 153.492C45.6991 153.342 43.2791 153.212 40.8491 153.052C37.1891 152.812 33.5191 152.582 29.8591 152.282C27.9391 152.122 26.0191 151.852 24.1091 151.592C21.7491 151.272 19.3891 150.872 17.0291 150.582C15.3591 150.322 13.6491 150.222 11.9391 150.072ZM77.3291 118.392C77.8891 118.392 78.5491 118.372 79.2091 118.392C82.2291 118.522 85.2491 118.672 88.2691 118.802C89.2091 118.842 90.1491 118.792 91.0891 118.852C94.2191 119.062 97.3491 119.302 100.469 119.562C101.279 119.632 102.069 119.892 102.879 119.922C104.389 119.972 105.899 119.872 107.409 119.902C109.669 119.942 111.929 120.042 114.189 120.112C117.289 120.212 120.389 120.282 123.499 120.412C124.969 120.472 126.429 120.672 127.889 120.762C129.789 120.882 131.699 120.942 133.599 121.042C134.199 121.072 134.799 121.172 135.409 121.212C136.449 121.282 137.489 121.322 138.529 121.392C139.769 121.482 141.009 121.602 142.329 121.722C142.379 121.142 142.469 120.752 142.439 120.372C142.219 117.402 141.899 114.432 141.759 111.462C141.589 107.802 141.649 104.132 141.429 100.482C141.349 99.1617 141.689 97.6217 139.929 96.6717C139.059 96.2017 138.449 95.5017 137.359 95.7817C137.199 95.8217 136.989 95.7117 136.809 95.6717C135.909 95.4617 135.009 95.0717 134.099 95.0617C129.759 95.0117 125.429 95.0417 121.089 95.0817C117.789 95.1117 114.479 95.1217 111.189 95.3217C108.769 95.4717 106.359 95.2217 103.919 95.4917C100.969 95.8217 97.9591 95.5017 94.9691 95.5517C92.2791 95.5917 89.5891 95.7617 86.8991 95.8617C84.4191 95.9617 81.9391 96.0417 79.4691 96.1417C78.0591 96.1917 77.2691 96.8717 76.8491 98.2217C76.3091 99.9717 76.4891 101.702 76.6691 103.492C77.0091 106.872 77.1691 110.272 77.3391 113.672C77.3891 115.132 77.3291 116.632 77.3291 118.392ZM99.2591 73.6117C99.3791 74.3217 99.5491 74.8117 99.5291 75.3017C99.4691 76.6617 99.2891 78.0117 99.2291 79.3717C99.1791 80.6717 99.7591 81.3817 100.899 81.4517C103.599 81.6217 106.299 81.8017 108.999 81.9117C112.229 82.0417 115.459 82.0717 118.689 82.1817C119.779 82.2217 120.869 82.3617 122.049 82.4617C122.049 81.8817 122.039 81.3817 122.049 80.8917C122.219 75.2617 122.399 69.6317 122.569 64.0017C122.609 62.6117 122.139 62.1117 120.789 62.3917C118.299 62.9217 115.949 62.2917 113.559 61.7917C112.379 61.5417 111.179 61.2817 109.979 61.2417C109.089 61.2117 108.179 61.5717 107.279 61.6417C105.859 61.7517 104.399 61.9317 102.999 61.7617C100.859 61.5017 99.1391 62.6417 99.0991 64.7117C99.0491 66.9217 99.0891 69.1317 99.0891 71.5217C103.119 71.7017 106.879 71.9117 110.649 72.0117C113.169 72.0817 115.689 71.9617 118.199 71.9817C119.109 71.9917 120.009 72.1317 120.909 72.2717C121.119 72.3017 121.279 72.5817 121.469 72.7517C121.279 72.9117 121.119 73.1517 120.899 73.2217C120.339 73.4017 119.769 73.5817 119.189 73.6217C117.119 73.7417 115.049 73.8217 112.979 73.8917C110.649 73.9617 108.319 74.0717 105.989 74.0217C103.779 73.9817 101.579 73.7617 99.2591 73.6117ZM122.119 83.8517C120.349 83.8517 118.759 83.9617 117.199 83.8217C114.999 83.6317 112.819 84.1117 110.589 83.7317C108.689 83.4117 106.669 83.8717 104.699 83.8517C103.659 83.8417 102.599 84.1517 101.549 83.3617C100.569 82.6317 99.1391 83.6917 99.1091 84.8617C99.0491 87.3917 98.8991 89.9217 98.7591 92.4517C98.7191 93.1217 98.7991 93.4617 99.6291 93.4517C103.519 93.3817 107.419 93.3617 111.309 93.3517C114.609 93.3417 117.919 93.3517 121.219 93.3917C122.219 93.4017 122.519 93.0217 122.459 92.0417C122.289 89.2617 122.219 86.4717 122.119 83.8517ZM3.4991 107.772C4.6691 108.762 5.9891 108.522 6.9391 107.172C5.6891 107.392 4.7491 107.552 3.4991 107.772ZM6.0191 100.342C4.4491 99.8117 4.3491 99.8917 4.3391 101.592C5.4991 101.942 5.4391 100.782 6.0191 100.342ZM13.8791 105.842C13.7691 105.702 13.6691 105.572 13.5591 105.432C12.9491 105.842 12.3291 106.262 11.7191 106.672C11.8491 106.842 11.9691 107.002 12.0991 107.172C12.6791 106.732 13.2791 106.292 13.8791 105.842ZM13.6091 100.132C12.7091 100.132 11.9691 100.132 11.1691 100.132C11.6091 101.232 11.6091 101.232 13.6091 100.132Z"
            />
            <path
                d="M46.389 135.762C44.349 134.392 45.469 132.672 45.629 131.142C45.719 130.232 47.899 129.482 49.129 129.792C50.139 130.042 50.569 131.062 50.399 132.322C50.139 134.262 49.249 135.422 47.159 135.462C46.879 135.442 46.589 135.672 46.389 135.762Z"
            />
            <path
                d="M83.6494 134.502C83.6894 132.472 85.2594 130.732 87.2594 130.622C88.1894 130.572 89.0694 130.832 89.5694 131.762C90.1194 132.792 89.2594 133.452 88.9294 134.252C88.1394 136.182 86.1894 135.792 84.7094 136.162C83.9094 136.362 83.6494 135.302 83.6494 134.502Z"
            />
            <path
                d="M70.5086 131.572C69.8386 132.522 69.3386 133.702 68.4486 134.372C67.4286 135.142 66.3186 134.662 65.3686 133.732C64.6086 132.992 63.9686 132.372 64.4586 131.232C64.8686 130.282 66.6786 129.042 67.6486 129.122C68.6586 129.202 70.0786 130.262 70.2886 131.092C70.3186 131.202 70.3086 131.332 70.3086 131.442C70.3786 131.482 70.4386 131.522 70.5086 131.572Z"
            />
            <path
                d="M127.229 132.582C127.079 131.322 127.969 130.532 129.019 129.962C129.939 129.462 130.819 129.782 131.619 130.452C132.629 131.292 132.819 131.882 132.289 133.162C131.819 134.312 129.919 135.582 128.749 135.522C127.799 135.482 127.189 134.342 127.229 132.582Z"
            />
            <path
                d="M160.829 33.3516C159.689 33.4116 159.139 32.5516 159.749 31.4616C160.379 30.3516 161.139 29.3016 161.949 28.3116C162.499 27.6416 163.259 26.8116 164.209 27.4216C165.199 28.0516 165.049 29.2616 164.849 30.2316C164.559 31.7116 162.399 33.2616 160.829 33.3516Z"
            />
            <path
                d="M135.979 44.7818C135.419 44.4118 134.739 44.2018 134.499 43.7518C134.059 42.9318 134.329 42.2118 135.269 41.7318C136.059 41.3318 136.729 40.6918 137.519 40.2618C138.609 39.6618 139.559 39.9518 140.089 40.9418C140.589 41.8818 140.309 43.0818 139.329 43.5518C138.329 44.0318 137.239 44.3318 135.979 44.7818Z"
            />
            <path
                d="M34.1592 132.692C33.4492 133.642 33.0392 134.732 32.2792 135.092C31.1692 135.612 29.8092 135.642 28.5492 135.792C28.4292 135.802 28.0292 135.082 28.1292 134.912C28.7992 133.722 29.4292 132.472 30.3492 131.492C30.8092 131.012 31.9092 130.832 32.6092 130.992C33.1492 131.112 33.5392 131.972 34.1592 132.692Z"
            />
            <path
                d="M107.369 134.282C107.369 132.912 108.379 131.452 109.319 131.452C110.629 131.452 112.519 132.782 112.579 133.742C112.659 134.992 110.679 136.412 108.919 136.352C107.889 136.332 107.369 135.622 107.369 134.282Z"
            />
            <path
                d="M125.579 48.2517C125.829 47.5417 126.069 46.8217 126.369 45.9517C125.769 45.1617 126.099 43.7717 127.269 43.0817C127.739 42.8017 128.179 42.2717 128.659 42.2417C129.269 42.1917 129.999 42.4017 130.509 42.7417C131.149 43.1817 130.999 43.7617 130.479 44.3917C129.789 45.2217 129.419 46.3317 128.659 47.0617C127.939 47.7417 126.879 48.0717 125.979 48.5617C125.849 48.4617 125.709 48.3617 125.579 48.2517Z"
            />
            <path
                d="M160.629 16.5318C160.529 16.0818 160.259 15.6218 160.369 15.2918C160.999 13.5418 161.189 11.6018 162.589 10.1418C163.149 9.5618 163.809 9.1118 164.419 9.5418C164.789 9.8018 164.899 10.7218 164.799 11.2918C164.429 13.5418 163.439 14.7918 160.629 16.5318Z"
            />
            <path
                d="M129.219 34.2818C129.489 33.3518 129.729 32.4918 129.999 31.6318C130.289 30.7018 130.939 30.1618 131.929 30.2218C132.539 30.2618 133.639 31.8718 133.469 32.5518C133.229 33.5118 133.089 34.5718 131.879 34.9718C131.259 35.1718 130.739 35.5318 130.319 34.6718C130.229 34.4818 129.759 34.4618 129.219 34.2818Z"
            />
            <path
                d="M144.029 36.4315C143.749 35.4715 143.879 34.8615 144.719 34.3415C146.249 33.4015 149.739 33.3215 150.889 34.3215C150.089 35.5215 149.079 36.0615 147.559 35.7915C146.929 35.6815 146.209 36.1115 145.519 36.2515C145.039 36.3515 144.539 36.3715 144.029 36.4315Z"
            />
            <path
                d="M114.729 47.2416C114.719 47.2016 114.689 47.1616 114.709 47.1316C115.219 45.8816 115.559 44.5116 116.309 43.4416C116.809 42.7416 117.729 43.2816 118.389 43.8216C119.189 44.4816 118.749 45.2116 118.379 45.7016C117.749 46.5416 116.919 47.2416 116.129 47.9416C115.839 48.1916 115.409 48.2716 115.039 48.4216C114.899 48.0416 114.759 47.6616 114.619 47.2816C114.649 47.2716 114.689 47.2616 114.729 47.2416Z"
            />
            <path
                d="M164.839 22.7619C164.919 21.6119 164.819 20.4919 165.109 19.4719C165.329 18.7019 165.969 18.0019 166.559 17.4219C166.729 17.2619 167.629 17.4619 167.769 17.7219C168.029 18.2019 168.139 18.8819 168.019 19.4219C167.849 20.2019 167.379 20.9219 167.109 21.6919C166.759 22.6819 166.289 22.9519 164.839 22.7619Z"
            />
            <path
                d="M113.319 54.2016C113.299 55.9716 111.939 57.5816 110.599 57.7016C110.399 57.7216 110.089 57.5016 109.979 57.3116C109.379 56.2416 109.889 53.9016 110.949 53.3216C111.379 53.0816 112.099 53.0616 112.549 53.2516C112.959 53.4116 113.179 54.0116 113.319 54.2016Z"
            />
            <path
                d="M148.759 23.7719C149.249 23.3019 149.639 22.8119 150.139 22.4719C150.819 22.0219 151.539 21.5619 152.319 21.3519C152.789 21.2219 153.389 21.5619 153.939 21.6919C153.809 22.1119 153.809 22.6519 153.529 22.9319C152.769 23.7019 151.939 24.4219 151.049 25.0419C150.679 25.3019 149.999 25.4319 149.629 25.2619C149.279 25.0919 149.139 24.4619 148.759 23.7719Z"
            />
            <path
                d="M157.089 24.8619C156.359 23.6219 156.789 22.6919 157.519 22.1219C158.199 21.5919 159.159 21.3919 160.029 21.1719C160.229 21.1219 160.809 21.6319 160.779 21.8119C160.659 22.6719 161.179 23.8619 159.979 24.2819C159.039 24.6219 157.999 24.6919 157.089 24.8619Z"
            />
            <path
                d="M117.789 55.1016C117.649 55.0216 117.079 54.8816 117.059 54.6716C117.009 54.2016 117.149 53.6616 117.379 53.2416C117.709 52.6416 118.099 52.0116 118.639 51.6116C119.059 51.2916 119.749 51.1316 120.289 51.1916C121.029 51.2616 121.109 51.8816 120.969 52.5516C120.739 53.6416 119.139 55.0616 117.789 55.1016Z"
            />
            <path
                d="M139.879 26.6918C140.309 25.5618 141.319 24.9018 142.419 24.5418C142.889 24.3918 143.579 24.8918 144.169 25.0918C143.819 25.7818 143.619 26.6318 143.079 27.1318C142.049 28.1018 140.909 27.9818 139.879 26.6918Z"
            />
            <path
                d="M137.239 21.4115C138.039 20.3215 138.809 19.2015 139.679 18.1715C139.819 18.0015 140.489 18.1415 140.819 18.3215C141.059 18.4515 141.339 19.0415 141.259 19.1415C140.379 20.2115 139.519 21.3315 138.459 22.2215C137.859 22.7315 137.399 22.3515 137.239 21.4115Z"
            />
            <path
                d="M151.239 14.3616C151.119 14.2116 150.629 13.9016 150.599 13.5516C150.519 12.6416 152.009 10.8116 152.709 10.8716C153.479 10.9416 154.079 11.2816 154.029 12.2016C153.989 13.0316 152.449 14.3916 151.239 14.3616Z"
            />
            <path
                d="M123.949 101.432C126.219 101.582 128.219 102.452 130.019 103.792C131.469 104.872 131.689 106.452 131.509 108.112C131.479 108.402 131.159 108.652 130.979 108.922C129.499 111.032 127.459 112.502 124.979 112.902C122.749 113.262 119.279 111.912 119.129 108.582C119.079 107.512 118.969 106.402 119.169 105.372C119.569 103.232 121.759 101.272 123.949 101.432Z"
            />
            <path
                d="M92.9091 108.512C93.2491 110.552 90.239 113.762 87.739 113.572C84.289 113.312 81.3091 111.642 81.4691 107.992C81.6191 104.642 83.879 102.842 88.109 102.912C90.409 102.952 93.0591 105.592 92.9091 108.512Z"
            />
            <path
                d="M105.229 101.771C109.029 102.201 111.249 104.071 111.349 106.421C111.419 107.871 111.479 109.731 109.949 110.811C109.069 111.431 108.109 112.361 107.179 112.381C102.139 112.491 100.269 110.341 100.129 107.061C100.049 105.091 101.949 104.191 102.809 102.711C103.139 102.141 104.389 102.071 105.229 101.771Z"
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