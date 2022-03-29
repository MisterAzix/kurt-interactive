import styled from "@emotion/styled";
import Head from "next/head";
import { useEffect, useState } from "react";

const Galery = () => {
    const [artworks, setArtworks] = useState([]);
    const [podium, setPodium] = useState([]);
    const [showreel, setShowreel] = useState([]);

    useEffect(() => {
        fetchArtwork();
        let fetchInterval = setInterval(fetchArtwork, 10000);

        return () => {
            clearInterval(fetchInterval);
        };
    }, []);

    useEffect(() => {
        const tempPodium = [...artworks].splice(0, 3);
        const tempShowreel = [...artworks].splice(3, 4);

        setPodium(tempPodium);
        setShowreel(tempShowreel);
    }, [artworks]);

    const fetchArtwork = async () => {
        let res = await fetch("/api/artwork");
        let json = await res.json();
        let newJson = json.reverse();

        setArtworks(newJson);
    };

    return (
        <>
            <Head>
                <title>Kurt - Galerie</title>
                <meta
                    name="description"
                    content="Retrouvez les oeuvres de toutes les personnes ayant participées à l’aventure Kurt Interactive."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="kurt-interactive.vercel.app/galery" />
                <meta property="og:title" content="Kurt - Galerie" />
                <meta
                    property="og:description"
                    content="Retrouvez les oeuvres de toutes les personnes ayant participées à l’aventure Kurt Interactive."
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/hf10ee93o/image/upload/v1645299205/Meta_image_-_Galerie_zcoorm.jpg"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="kurt-interactive.vercel.app/galery" />
                <meta property="twitter:title" content="Kurt - Galerie" />
                <meta
                    property="twitter:description"
                    content="Retrouvez les oeuvres de toutes les personnes ayant participées à l’aventure Kurt Interactive."
                />
                <meta
                    property="twitter:image"
                    content="https://res.cloudinary.com/hf10ee93o/image/upload/v1645299205/Meta_image_-_Galerie_zcoorm.jpg"
                />
            </Head>
            <Container>
                <GaleryContainer>
                    <Title>Kurt - Galerie</Title>

                    <Podium>
                        {podium.map((element, key) => {
                            return (
                                <li key={key}>
                                    <ImgPodium>
                                        <img src={element.image_link} alt="" />
                                        <svg
                                            width="336"
                                            height="212"
                                            viewBox="0 0 336 212"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M76.5065 6.81524C80.1048 6.81524 83.6622 7.02199 87.281 6.88415C91.605 6.72334 95.9291 6.33283 100.243 5.97676C103.667 5.6896 107.082 5.29906 110.465 4.93149C111.856 4.79366 113.225 4.5754 114.554 4.4146C116.916 4.12744 119.267 3.78284 121.628 3.62203C125.462 3.34636 129.295 3.10517 133.139 3.03625C136.982 2.96734 141.133 3.03624 145.119 3.19704C150.098 3.39231 155.076 4.02405 160.034 3.94365C169.183 3.80581 178.332 4.64433 187.471 3.44975C192.408 2.79502 197.427 2.9788 202.344 2.2207C206.842 1.53152 211.32 2.0484 215.787 1.68084C216.686 1.60044 217.576 1.38222 218.465 1.34776C226.214 1.04912 233.962 0.738972 241.721 0.509245C247.354 0.33695 252.966 0.268033 258.619 0.187629C262.708 0.118711 266.797 0.0765756 270.885 0.0612605C275.864 0.0612605 280.842 -0.0765756 285.82 0.0612605C290.145 0.164638 294.479 0.394367 298.793 0.853821C304.926 1.52003 311.121 2.33558 317.346 2.59977C321.333 2.94928 325.286 3.67547 329.163 4.77067C332.772 5.62066 334.377 8.5382 334.694 12.501C334.857 14.603 335 16.705 335.113 18.8185C335.43 24.665 335.91 30.523 335.992 36.3926C336.064 41.883 335.634 47.3735 335.542 52.8755C335.42 59.5605 335.409 66.2571 335.368 72.9421C335.368 75.7678 335.491 78.5934 335.368 81.4191C335.246 84.2447 334.796 86.898 334.786 89.6318C334.786 95.9608 334.878 102.267 334.939 108.607C335.082 111.358 335.082 192.115 334.939 194.866C334.5 199.46 332.966 203.423 328.427 204.756C327.558 205.008 326.741 205.456 325.892 205.801C322.018 207.265 317.862 207.515 313.871 206.525C311.613 206.193 309.339 206.016 307.063 205.996C299.324 205.514 291.586 204.985 283.848 204.572C281.404 204.446 278.961 204.572 276.518 204.641C270.15 204.871 263.791 205.169 257.423 205.422C252.7 205.594 247.987 205.824 243.265 205.858C235.271 205.858 227.277 205.801 219.283 205.778C214.55 205.778 209.827 205.663 205.104 205.778C201.925 205.858 198.756 206.41 195.577 206.49C190.691 206.616 185.794 206.49 180.908 206.548C175.797 206.616 170.614 205.685 165.472 205.95C152.899 206.616 140.328 207.347 127.762 208.143C124.092 208.373 120.453 209.016 116.793 209.372C114.677 209.568 112.551 209.568 110.435 209.625C107.9 209.694 105.323 209.717 102.839 209.797C92.617 210.142 82.3946 210.234 72.2234 210.946C64.5259 211.474 56.8898 211.187 49.1821 211.199C47.3011 211.199 45.4304 211.509 43.5495 211.474C38.8983 211.371 34.2471 211.095 29.5959 211.026C26.8359 211.026 24.0554 211.13 21.2953 211.302C18.9237 211.44 16.5726 211.773 14.201 211.968C8.55824 212.439 5.00084 207.581 4.21371 202.067C3.80925 198.422 3.65547 194.747 3.75371 191.075C3.65148 182.54 3.52881 97.006 3.60037 88.4831C3.67193 80.9251 2.75191 73.459 2.24079 65.9584C1.91367 61.0193 1.99546 56.0457 1.71945 51.1066C1.36167 44.6972 0.809655 38.2993 0.390537 31.8899C0.196311 28.7771 -0.0592518 25.6528 0.0123051 22.54C0.0940843 18.6577 3.39592 13.9712 6.82043 13.0064C9.90735 12.1322 13.0473 11.5141 16.2148 11.1571C24.1883 10.2956 32.172 9.59493 40.1557 8.92872C48.3336 8.23954 56.6137 7.56186 64.853 7.07943C68.6762 6.86119 72.53 7.07943 76.3736 7.14835L76.5065 6.81524ZM6.77954 100.797H7.16799C7.16799 107.309 7.05554 190.834 7.0351 197.323C7.02961 198.795 7.12187 200.266 7.3111 201.723C7.92444 206.248 10.2552 208.614 14.3032 208.534C16.4269 208.459 18.544 208.228 20.6411 207.845C24.6852 207.142 28.7967 207.077 32.8569 207.65C35.5367 208.004 38.2346 208.157 40.9326 208.109C47.802 208.109 54.6715 208.109 61.5307 207.96C69.0442 207.776 76.5679 207.385 84.0813 207.121C89.1414 206.949 94.2117 206.8 99.2821 206.731C104.587 206.662 109.913 206.891 115.209 206.65C121.424 206.386 127.608 205.502 133.813 205.352C145.518 205.191 157.151 203.928 168.835 203.377C175.93 203.043 183.034 203.929 190.149 203.71C191.365 203.71 192.602 203.71 193.819 203.653C202.794 203.125 211.769 202.677 220.765 202.814C232.275 202.987 243.796 202.677 255.317 202.504C260.704 202.424 266.101 202.194 271.489 202.033C274.75 201.93 278.021 201.7 281.282 201.781C286.832 201.93 292.373 202.275 297.924 202.55C299.467 202.631 300.991 202.791 302.565 202.918C307.533 203.297 312.521 203.527 317.469 204.066C321.474 204.495 325.507 203.673 329.123 201.689C329.95 201.259 330.661 200.588 331.181 199.746C331.7 198.904 332.009 197.921 332.077 196.899C332.295 194.991 332.278 193.058 332.026 191.156C331.003 184.264 331.903 99.3722 331.474 92.5493C331.397 91.6363 331.397 90.7171 331.474 89.8041C332.311 82.4233 332.537 74.9712 332.148 67.5435C332.152 66.9941 332.186 66.4456 332.251 65.901C332.394 63.2362 332.588 60.5943 332.659 57.9295C332.792 53.2545 332.854 48.5681 332.946 43.8817C333.017 40.2175 333.15 36.5534 333.16 32.8892C333.493 27.4387 332.389 17.5157 331.525 11.7199C331.473 11.0292 331.277 10.3621 330.952 9.77312C330.627 9.18415 330.182 8.69009 329.654 8.33144C326.387 6.20638 322.703 5.02257 318.931 4.88554C316.426 4.71324 313.891 4.88553 311.397 4.6558C305.938 4.1504 300.51 3.40381 295.041 2.88693C283.214 1.73829 271.366 2.46194 259.528 2.46194C249.654 2.46194 239.779 2.71461 229.883 2.89839C224.496 3.01325 219.109 3.23151 213.722 3.41529C213.314 3.436 212.908 3.48588 212.505 3.56462C211.054 3.79434 209.612 4.13894 208.161 4.2538C202.13 4.73623 196.098 5.21864 190.057 5.56323C183.545 5.94228 177.085 7.0909 170.491 6.41321C165.799 5.93078 161.036 6.41321 156.292 6.34429C148.871 6.22943 141.439 5.86187 134.008 5.88485C127.965 5.77712 121.921 6.03785 115.904 6.66591C102.615 8.36589 89.3254 10.0429 75.8319 9.95102C67.2553 9.95102 58.6685 10.2497 50.1021 10.6287C43.6517 10.9159 37.2116 11.5247 30.7817 12.0415C27.3572 12.3172 23.9327 12.5699 20.5593 13.0523C16.9202 13.5692 13.2708 14.1321 9.69292 15.051C7.8746 15.5423 6.25443 16.7019 5.08954 18.3459C3.92466 19.9898 3.28181 22.0239 3.26303 24.1252C3.26303 27.2494 3.54926 30.3623 3.75371 33.4751C4.1626 39.7007 4.64305 45.9262 5.02128 52.1518C5.41996 58.5612 5.70618 64.9821 6.10486 71.403C6.3093 74.6076 6.8511 77.7894 6.89198 80.9941C6.98399 87.5757 6.83065 94.1919 6.77954 100.797Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </ImgPodium>
                                    <ImgBanner>
                                        <span>{element.username || "Anonyme"}</span>
                                        <span>#{artworks.length - key}</span>
                                    </ImgBanner>
                                </li>
                            );
                        })}
                    </Podium>
                    <Showreel>
                        {showreel.map((element, key) => {
                            return (
                                <li key={key}>
                                    <ImgPodium>
                                        <img src={element.image_link} alt="" />
                                        <svg
                                            width="336"
                                            height="212"
                                            viewBox="0 0 336 212"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M76.5065 6.81524C80.1048 6.81524 83.6622 7.02199 87.281 6.88415C91.605 6.72334 95.9291 6.33283 100.243 5.97676C103.667 5.6896 107.082 5.29906 110.465 4.93149C111.856 4.79366 113.225 4.5754 114.554 4.4146C116.916 4.12744 119.267 3.78284 121.628 3.62203C125.462 3.34636 129.295 3.10517 133.139 3.03625C136.982 2.96734 141.133 3.03624 145.119 3.19704C150.098 3.39231 155.076 4.02405 160.034 3.94365C169.183 3.80581 178.332 4.64433 187.471 3.44975C192.408 2.79502 197.427 2.9788 202.344 2.2207C206.842 1.53152 211.32 2.0484 215.787 1.68084C216.686 1.60044 217.576 1.38222 218.465 1.34776C226.214 1.04912 233.962 0.738972 241.721 0.509245C247.354 0.33695 252.966 0.268033 258.619 0.187629C262.708 0.118711 266.797 0.0765756 270.885 0.0612605C275.864 0.0612605 280.842 -0.0765756 285.82 0.0612605C290.145 0.164638 294.479 0.394367 298.793 0.853821C304.926 1.52003 311.121 2.33558 317.346 2.59977C321.333 2.94928 325.286 3.67547 329.163 4.77067C332.772 5.62066 334.377 8.5382 334.694 12.501C334.857 14.603 335 16.705 335.113 18.8185C335.43 24.665 335.91 30.523 335.992 36.3926C336.064 41.883 335.634 47.3735 335.542 52.8755C335.42 59.5605 335.409 66.2571 335.368 72.9421C335.368 75.7678 335.491 78.5934 335.368 81.4191C335.246 84.2447 334.796 86.898 334.786 89.6318C334.786 95.9608 334.878 102.267 334.939 108.607C335.082 111.358 335.082 192.115 334.939 194.866C334.5 199.46 332.966 203.423 328.427 204.756C327.558 205.008 326.741 205.456 325.892 205.801C322.018 207.265 317.862 207.515 313.871 206.525C311.613 206.193 309.339 206.016 307.063 205.996C299.324 205.514 291.586 204.985 283.848 204.572C281.404 204.446 278.961 204.572 276.518 204.641C270.15 204.871 263.791 205.169 257.423 205.422C252.7 205.594 247.987 205.824 243.265 205.858C235.271 205.858 227.277 205.801 219.283 205.778C214.55 205.778 209.827 205.663 205.104 205.778C201.925 205.858 198.756 206.41 195.577 206.49C190.691 206.616 185.794 206.49 180.908 206.548C175.797 206.616 170.614 205.685 165.472 205.95C152.899 206.616 140.328 207.347 127.762 208.143C124.092 208.373 120.453 209.016 116.793 209.372C114.677 209.568 112.551 209.568 110.435 209.625C107.9 209.694 105.323 209.717 102.839 209.797C92.617 210.142 82.3946 210.234 72.2234 210.946C64.5259 211.474 56.8898 211.187 49.1821 211.199C47.3011 211.199 45.4304 211.509 43.5495 211.474C38.8983 211.371 34.2471 211.095 29.5959 211.026C26.8359 211.026 24.0554 211.13 21.2953 211.302C18.9237 211.44 16.5726 211.773 14.201 211.968C8.55824 212.439 5.00084 207.581 4.21371 202.067C3.80925 198.422 3.65547 194.747 3.75371 191.075C3.65148 182.54 3.52881 97.006 3.60037 88.4831C3.67193 80.9251 2.75191 73.459 2.24079 65.9584C1.91367 61.0193 1.99546 56.0457 1.71945 51.1066C1.36167 44.6972 0.809655 38.2993 0.390537 31.8899C0.196311 28.7771 -0.0592518 25.6528 0.0123051 22.54C0.0940843 18.6577 3.39592 13.9712 6.82043 13.0064C9.90735 12.1322 13.0473 11.5141 16.2148 11.1571C24.1883 10.2956 32.172 9.59493 40.1557 8.92872C48.3336 8.23954 56.6137 7.56186 64.853 7.07943C68.6762 6.86119 72.53 7.07943 76.3736 7.14835L76.5065 6.81524ZM6.77954 100.797H7.16799C7.16799 107.309 7.05554 190.834 7.0351 197.323C7.02961 198.795 7.12187 200.266 7.3111 201.723C7.92444 206.248 10.2552 208.614 14.3032 208.534C16.4269 208.459 18.544 208.228 20.6411 207.845C24.6852 207.142 28.7967 207.077 32.8569 207.65C35.5367 208.004 38.2346 208.157 40.9326 208.109C47.802 208.109 54.6715 208.109 61.5307 207.96C69.0442 207.776 76.5679 207.385 84.0813 207.121C89.1414 206.949 94.2117 206.8 99.2821 206.731C104.587 206.662 109.913 206.891 115.209 206.65C121.424 206.386 127.608 205.502 133.813 205.352C145.518 205.191 157.151 203.928 168.835 203.377C175.93 203.043 183.034 203.929 190.149 203.71C191.365 203.71 192.602 203.71 193.819 203.653C202.794 203.125 211.769 202.677 220.765 202.814C232.275 202.987 243.796 202.677 255.317 202.504C260.704 202.424 266.101 202.194 271.489 202.033C274.75 201.93 278.021 201.7 281.282 201.781C286.832 201.93 292.373 202.275 297.924 202.55C299.467 202.631 300.991 202.791 302.565 202.918C307.533 203.297 312.521 203.527 317.469 204.066C321.474 204.495 325.507 203.673 329.123 201.689C329.95 201.259 330.661 200.588 331.181 199.746C331.7 198.904 332.009 197.921 332.077 196.899C332.295 194.991 332.278 193.058 332.026 191.156C331.003 184.264 331.903 99.3722 331.474 92.5493C331.397 91.6363 331.397 90.7171 331.474 89.8041C332.311 82.4233 332.537 74.9712 332.148 67.5435C332.152 66.9941 332.186 66.4456 332.251 65.901C332.394 63.2362 332.588 60.5943 332.659 57.9295C332.792 53.2545 332.854 48.5681 332.946 43.8817C333.017 40.2175 333.15 36.5534 333.16 32.8892C333.493 27.4387 332.389 17.5157 331.525 11.7199C331.473 11.0292 331.277 10.3621 330.952 9.77312C330.627 9.18415 330.182 8.69009 329.654 8.33144C326.387 6.20638 322.703 5.02257 318.931 4.88554C316.426 4.71324 313.891 4.88553 311.397 4.6558C305.938 4.1504 300.51 3.40381 295.041 2.88693C283.214 1.73829 271.366 2.46194 259.528 2.46194C249.654 2.46194 239.779 2.71461 229.883 2.89839C224.496 3.01325 219.109 3.23151 213.722 3.41529C213.314 3.436 212.908 3.48588 212.505 3.56462C211.054 3.79434 209.612 4.13894 208.161 4.2538C202.13 4.73623 196.098 5.21864 190.057 5.56323C183.545 5.94228 177.085 7.0909 170.491 6.41321C165.799 5.93078 161.036 6.41321 156.292 6.34429C148.871 6.22943 141.439 5.86187 134.008 5.88485C127.965 5.77712 121.921 6.03785 115.904 6.66591C102.615 8.36589 89.3254 10.0429 75.8319 9.95102C67.2553 9.95102 58.6685 10.2497 50.1021 10.6287C43.6517 10.9159 37.2116 11.5247 30.7817 12.0415C27.3572 12.3172 23.9327 12.5699 20.5593 13.0523C16.9202 13.5692 13.2708 14.1321 9.69292 15.051C7.8746 15.5423 6.25443 16.7019 5.08954 18.3459C3.92466 19.9898 3.28181 22.0239 3.26303 24.1252C3.26303 27.2494 3.54926 30.3623 3.75371 33.4751C4.1626 39.7007 4.64305 45.9262 5.02128 52.1518C5.41996 58.5612 5.70618 64.9821 6.10486 71.403C6.3093 74.6076 6.8511 77.7894 6.89198 80.9941C6.98399 87.5757 6.83065 94.1919 6.77954 100.797Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </ImgPodium>
                                    <ImgBanner>
                                        <span>{element.username || "Anonyme"}</span>
                                        <span>#{artworks.length - key - 3}</span>
                                    </ImgBanner>
                                </li>
                            );
                        })}
                    </Showreel>

                    <svg
                        width="1155"
                        height="670"
                        viewBox="0 0 1155 670"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M377.5 6.4394C280.409 6.4394 263.055 3.49657 165.938 3.49657C129.529 3.49657 92.9502 2 56.7006 2C48.9138 2 41.1269 2 33.3401 2C29.599 2 25.858 2 22.117 2C14.926 2 14.963 60.7535 14.3856 65.171C6.68992 124.049 -5.69878 184.763 8.48306 243.679C21.9555 299.647 8.48306 365.951 8.48306 423.516C8.48306 467.493 16.442 501.499 16.442 545.487C16.442 567.779 23.9241 588.279 23.9241 610.505C23.9241 620.232 23.9241 629.96 23.9241 639.688C23.9241 646.376 26.196 657.363 23.5915 663.55C21.5168 668.478 35.3265 668.36 39.7414 667.624C86.2411 659.873 131.857 659.06 178.99 659.06C217.116 659.06 254.741 662.863 292.801 664.132C347.146 665.943 401.624 665.046 455.992 665.046C548.954 665.046 641.946 665.74 734.906 665.046C765.678 664.817 796.304 660.889 826.769 656.815C873.516 650.563 919.682 648.584 966.849 648.584C991.176 648.584 1015.51 648.357 1039.84 648.584C1049.18 648.671 1057.6 651.734 1066.78 652.741C1085.51 654.798 1103.24 654.499 1121.64 659.808C1127.4 661.469 1135.72 663.223 1141.26 663.55C1143.49 663.681 1145.09 664.655 1147.25 664.963C1156.83 666.331 1151.57 640.385 1151.49 637.443C1150.36 595.466 1145.72 553.671 1144.59 511.731C1143.44 469.052 1143.44 426.044 1144.59 383.358C1145.46 351.099 1142.79 320.014 1141.6 287.911C1140.56 259.817 1140.13 231.847 1138.6 203.77C1136.46 164.438 1136.77 124.924 1136.77 85.541C1136.77 68.0952 1139.77 50.7922 1139.77 33.4936C1139.77 31.2538 1141.34 13.0416 1141.01 11.0954C1139.76 3.58122 1095.98 3.83833 1091.13 3.69569C1057.43 2.70421 1023.57 4.00966 989.96 6.4394C959.381 8.65016 928.739 8.01912 898.097 8.01912C831.46 8.01912 846.058 9.51569 779.5 9.51569"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                </GaleryContainer>
            </Container>
        </>
    );
};

export default Galery;

const Container = styled.div`
    position: relative;
    height: 100%;
    min-height: 100vh;
    width: 100vw;
    padding: 2rem;
    overflow-x: hidden;
    /* background: center / cover no-repeat url("/paper_texture_background.webp"), #fefef2; */
    background-color: #fefef2;
`;

const GaleryContainer = styled.div`
    position: relative;
    display: grid;
    align-content: center;
    gap: 4rem;
    width: 100%;
    height: 100%;
    color: #000000;
    padding: 4rem;

    & > svg {
        user-select: none;
        pointer-events: none;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1100px) {
        padding: 4rem 0;

        & > svg {
            display: none;
        }
    }
`;

const Podium = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    list-style: none;

    & > * {
        flex: 33%;

        img {
            width: 100%;
        }
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        flex-wrap: nowrap;

        & > * {
            width: min(480px, 60vw);
        }
    }
`;

const ImgPodium = styled.div`
    position: relative;
    background-color: #ffffff;
    padding-bottom: 56.25%;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
        transform: translate(-50%, -50%);
    }

    svg {
        user-select: none;
        pointer-events: none;
        position: absolute;
        inset: -0.5rem;
        width: calc(100% + 1rem);
        height: calc(100% + 1rem);
    }
`;

const Showreel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    list-style: none;

    & > * {
        flex: 25%;

        img {
            width: 100%;
        }
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        flex-wrap: nowrap;

        & > * {
            width: min(480px, 60vw);
        }
    }
`;

const Title = styled.h1`
    position: absolute;
    top: 0;
    left: 50%;
    font-family: "Heart Vibes", sans-serif;
    font-size: 3rem;
    white-space: nowrap;
    margin: 0;
    text-align: center;
    transform: translate(-50%, -25%);
`;

const ImgBanner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.2rem 0;
    font-size: clamp(0.9rem, 2vw, 1.3rem);
    font-weight: bold;
`;
