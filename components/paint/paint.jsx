import { Container } from "../../shared/styles"
import { useState } from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import { useInventoryContext } from "../../lib/context"

import PostIt from "../PostIt"
import Button from "../Button"
import Header from "../Header"
import PaintItem from "./PaintItem"
import Link from "next/link"

export default function Paint (props) {
    const [isPressed, setIsPressed] = useState(false)
    const [paintItem, setPaintItem] = useState(props.paintItem)
    const { inventory, setInventory } = useInventoryContext([])

    function PickItem (item) {
        setPaintItem(paintItem.filter((paint) => paint.src !== item.src))
        setInventory([...inventory, item.src])
    }

    function handleBagPress () {
        setIsPressed(true)
    }

    function handleBagRelease () {
        setIsPressed(false)
    }

    return (
        <Container>
            <Grid>
                <Item name="header">
                    <Header/>
                </Item>
                <Item name="postit">
                    <PostIt>Clique sur les éléments du tableau pour les mettre dans ton inventaire.</PostIt>
                </Item>
                <PaintImgArea>
                    <PaintImgContainer>
                        <PaintImg src={`/paints/${props.filename}`}/>
                        {paintItem.map((item) => {
                            return (
                                <PaintItem
                                    key={item.src}
                                    width={item.width}
                                    height={item.height}
                                    left={item.left}
                                    top={item.top}
                                    bottom={item.bottom}
                                    opacity={item.opacity}
                                    onClick={() => PickItem(item)}
                                />
                            )
                        })}
                    </PaintImgContainer>
                </PaintImgArea>
                {isPressed ? (
                    <ItemsModal>
                        {inventory.length
                            ? inventory.map((item) => {
                                return <InventoryItem key={item}>{item}</InventoryItem>
                            })
                            : "Aucun éléments dans l'inventaire"}
                    </ItemsModal>
                ) : null}
                <Interaction name="button">
                    <Link href={props.href}>
                        <Button>J'ai terminé</Button>
                    </Link>
                    <BagContainer
                        onMouseDown={handleBagPress}
                        onMouseUp={handleBagRelease}
                        onTouchStart={handleBagPress}
                        onTouchEnd={handleBagRelease}
                        key={inventory.length}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <b>{inventory.length}</b>
                        <BagSVG>
                            <path
                                d="M6.48945 50.8153H6.73857H6.80075C6.86292 50.8153 6.92553 50.8153 7.04988 50.8775V51.0023C7.04988 51.314 7.48639 51.314 7.54857 51.0023V50.9401C11.4754 51.501 15.5268 50.8153 19.5159 51.0023C24.4397 51.314 29.3639 51.501 34.288 51.4388C34.5371 51.4388 34.7245 51.314 34.7867 51.1897C34.7867 51.1897 34.7867 51.2519 34.7245 51.2519C34.3506 51.9997 35.4723 52.6853 35.8462 51.9375C35.9084 51.7505 35.971 51.5636 36.0332 51.4388C38.0279 51.0023 41.2065 49.8806 41.6426 47.8858C42.0165 46.3898 41.6426 44.2707 41.5804 42.7124C41.4556 40.3438 41.3313 38.0377 41.1439 35.6691V35.6069H41.2061C41.3309 35.6691 41.5178 35.6069 41.6426 35.4821L41.7048 35.42C41.8917 35.1708 41.8917 34.8591 41.7048 34.6095C41.5178 34.4226 41.3309 34.3604 41.0813 34.3604C40.8943 32.3656 40.4578 29.8105 38.9622 28.751C38.2766 28.2523 37.0301 28.0031 35.9705 28.1901C35.8457 24.5128 36.594 21.0224 35.7214 17.4072C34.9109 14.2907 34.4122 10.9872 32.2931 8.43162C32.1062 8.18249 31.8566 7.93292 31.6075 7.68379C31.6075 5.68902 31.5453 3.6947 31.3583 1.69993C31.2336 0.453448 31.1714 -0.107407 29.8001 0.0169187C28.9897 0.0790914 28.1171 0.1417 27.3071 0.328655C26.8084 0.453437 25.8737 0.453437 25.4371 0.765174C24.6893 1.26387 24.9384 3.00904 25.188 4.06864C22.0715 3.25822 18.706 3.44517 15.8386 4.75429C15.6516 3.50781 16.462 1.45082 15.2777 0.765196C14.8412 0.516067 14.156 0.765197 13.7195 0.889978C12.5978 1.20172 11.6004 1.20172 10.4782 1.3265C10.3534 1.3265 10.1665 1.51345 10.1665 1.63823C9.97952 2.63561 10.1043 3.75733 10.1665 4.81693C10.1665 6.06341 10.1665 7.24779 10.3534 8.49427C10.4156 8.7434 10.8521 8.7434 10.8521 8.49427C11.0391 7.18512 11.0391 5.87642 11.0391 4.56739C11.0391 4.13087 10.79 3.00915 10.9769 2.63529C11.2886 2.07442 11.6626 2.26137 12.2234 2.19877C12.7843 2.13659 13.3451 1.94964 13.9686 1.82486C14.966 1.6379 14.779 2.07398 14.779 3.00923C14.779 3.75705 14.5921 4.62969 14.779 5.37787C14.2803 5.627 13.8443 5.93873 13.4078 6.31263C7.42392 10.9874 6.7383 18.2176 6.30221 25.1362C6.24004 25.9466 6.24004 26.7566 6.17743 27.567C5.11788 27.3179 3.80879 27.567 3.06095 28.0657C1.50271 29.0631 1.06618 31.6808 0.87919 33.6752C0.630061 33.6752 0.442672 33.7373 0.255717 33.9243C0.0687616 34.1734 0.0687616 34.4852 0.255717 34.7347L0.317888 34.7969C0.380061 34.9217 0.567018 34.9217 0.754408 34.9217H0.816581V34.9838C0.629625 37.1029 0.629625 39.2847 0.442669 41.4038C0.317888 43.0242 -0.118197 45.5177 0.255714 47.0759C0.880056 49.382 4.49524 50.5037 6.48956 50.8154L6.48945 50.8153ZM40.4591 39.7829C40.5212 41.7777 40.9578 43.8967 40.646 45.8911C40.3343 48.2597 38.34 49.3193 36.2831 50.0672C36.2831 49.5685 36.2209 49.0698 36.2209 48.5711C36.1587 46.2651 36.2209 43.8964 36.2209 41.5903V36.1052C37.2183 36.043 38.153 35.9183 39.0883 35.8561C39.4622 35.8561 39.8361 35.8561 40.21 35.7939C40.3348 37.1652 40.3969 38.4743 40.4591 39.783L40.4591 39.7829ZM39.4621 31.3686C39.9608 32.3034 40.023 33.5504 40.1478 34.5473C40.023 34.6095 39.8987 34.6095 39.7739 34.6095C38.5895 34.6717 37.4678 34.9212 36.2835 35.046C36.2835 33.0512 36.2214 31.0569 36.0966 29.0621C37.4674 28.9378 39.1505 30.8074 39.4622 31.3687L39.4621 31.3686ZM26.1859 1.57506C26.3729 1.45028 27.3703 1.26332 27.5572 1.26332C27.8689 1.20115 29.6763 0.889411 29.9258 1.01419C30.3623 1.20115 30.1749 1.01419 30.2376 1.63767C30.2376 2.26114 30.3623 2.94681 30.3623 3.56977C30.3623 4.56715 30.3623 5.56454 30.3002 6.62403C28.991 5.56449 27.4328 4.8167 25.7502 4.31795C25.8124 3.94404 25.875 3.50753 25.9372 3.07147C25.9989 2.57191 25.812 1.94887 26.1859 1.575L26.1859 1.57506ZM7.11307 28.8754C7.3622 28.8754 7.61177 28.5637 7.42481 28.3146C7.36264 28.1898 7.23786 28.1276 7.17568 28.0654C7.23786 27.5667 7.23785 27.0681 7.30046 26.5694C7.73698 23.2659 7.6122 19.7756 8.36001 16.5343C8.98349 13.8544 11.1026 10.8 12.9725 8.80536C15.0294 6.56149 17.585 5.93797 20.5767 5.50189C24.3167 4.94102 27.9314 6.06276 30.4248 8.4936C30.487 8.68056 30.6118 8.80534 30.7365 8.86751C31.7339 9.98922 32.5439 11.2984 33.1052 12.9187C33.6039 14.5392 34.0399 16.2843 34.4143 17.9052C35.0378 20.4608 34.7261 22.7047 34.6635 25.2599C34.6635 26.5063 34.7256 27.7528 34.7256 28.9372C34.6635 28.9994 34.6635 28.9994 34.6008 29.062C34.4761 29.2489 34.5387 29.4985 34.7256 29.5607C34.8504 32.2406 35.0374 34.8589 34.8504 37.5389C34.6634 39.9697 34.8504 42.5253 34.8504 44.9562C34.8504 46.4522 35.3491 48.9453 34.9752 50.6283C34.913 50.6283 34.913 50.6905 34.8504 50.6905C34.7882 50.4413 34.6013 50.1918 34.2269 50.1918C25.7501 50.067 17.2109 50.254 8.67179 50.067C8.79657 50.0048 8.92092 49.9422 9.0457 49.88C9.10788 49.88 9.10788 49.7553 9.0457 49.7553C8.79657 49.7553 8.29788 49.9422 7.79922 50.0044H7.42531C7.79879 42.9623 6.61445 35.8567 7.11314 28.8758L7.11307 28.8754ZM1.87705 33.8619C1.93923 32.8645 2.00184 31.5558 2.5627 30.6832C3.12357 29.8106 4.80657 28.0654 6.17782 28.4393C6.11565 30.4341 6.11565 32.4284 6.17782 34.4232C4.86867 34.361 3.62219 34.0493 2.3135 33.9245C2.18871 33.9241 2.06437 33.8619 1.87698 33.8619H1.87705ZM1.56575 39.0353C1.56575 37.7261 1.69053 36.4174 1.81488 35.1084C2.18879 35.1706 2.5627 35.1084 2.93659 35.1706C4.0583 35.2953 5.11835 35.4197 6.24006 35.4197C6.42702 40.2192 6.73875 45.0182 7.05048 49.8802C6.9883 49.818 6.9257 49.818 6.86352 49.7554C4.37056 48.945 1.93971 47.8854 1.44096 45.2054C1.00444 43.2733 1.56574 40.9672 1.56574 39.035L1.56575 39.0353Z"/>
                            <path
                                d="M11.0404 33.924C10.5417 37.2275 11.0404 40.9048 11.2274 44.2082C11.3521 46.3273 11.2274 47.9482 13.596 48.2594C15.1542 48.4464 16.7747 47.9477 18.3329 47.8855C20.2029 47.8233 22.0729 48.1346 23.9424 48.0724C25.8124 48.0103 28.991 48.3216 30.6119 47.3246C32.2323 46.3272 31.7336 42.7747 31.6714 41.2787C31.5466 39.9074 31.5466 38.5987 31.4845 37.2274C31.6714 37.0405 31.6714 36.7288 31.4223 36.5418V36.4796C31.3601 35.607 31.6714 34.0488 30.9236 33.3631C29.5523 32.1167 25.3141 32.8023 23.6932 32.8023C19.642 32.8023 15.5282 32.1788 11.539 32.4284C11.2272 32.4284 10.9155 32.6153 10.8533 32.9892C10.8533 33.0514 10.8533 33.114 10.7911 33.1762C10.6664 33.4879 10.7911 33.7371 11.0403 33.924L11.0404 33.924ZM30.4249 39.5339C30.4871 41.2792 31.7962 45.9539 29.6771 47.0134C28.3679 47.699 25.3762 47.3251 23.9428 47.3251C21.4498 47.3251 18.9563 46.8886 16.4633 47.076C14.9051 47.1381 14.3442 47.5747 13.1598 46.3282C12.0381 45.2064 12.1625 44.1464 12.0381 42.6508C11.8512 40.7808 11.789 38.8487 11.7264 36.9787C12.9729 36.5422 15.3415 36.8539 16.4011 36.7918C18.3332 36.7296 20.2032 36.7918 22.1354 36.7918C24.9402 36.7918 27.6206 37.2283 30.4253 37.2904C30.4248 38.0378 30.4248 38.7857 30.4248 39.5339L30.4249 39.5339ZM12.1623 33.5501C12.1002 33.7992 17.8344 33.9866 18.7692 33.9866C21.7609 34.1114 24.6904 33.7996 27.6821 33.8618C29.6768 33.924 29.9882 34.1735 30.2377 35.9809C30.2377 36.1057 30.2377 36.2926 30.2999 36.4174C27.3704 36.3552 24.5655 35.7318 21.5739 35.6696C18.3327 35.6696 14.7801 35.2957 11.601 36.0435C11.5388 35.3578 11.5388 34.7344 11.4762 34.0487C11.7884 34.1109 12.1001 33.9239 12.1623 33.55L12.1623 33.5501Z"/>
                            <path
                                d="M11.476 19.2765C11.476 20.4609 11.6007 21.5826 11.6629 22.7669C11.7251 24.3251 11.5381 25.9456 11.7251 27.5038C11.7251 27.6908 11.8499 27.8156 12.099 27.8777C13.9063 28.0647 15.7141 27.5038 17.5216 27.566C18.0203 27.566 18.5811 27.753 18.955 27.3169C19.3289 26.8804 19.0798 25.9456 19.0172 25.4469C18.8303 23.7017 18.3316 22.0186 18.2068 20.2113C18.1446 19.5257 18.5185 18.2165 18.0198 17.5314C17.3964 16.7835 15.963 17.1574 15.2151 17.1574C13.5947 17.2196 10.8522 16.5966 11.226 18.9027C11.2265 19.1518 11.3512 19.214 11.476 19.2766L11.476 19.2765ZM17.958 23.0161C18.0828 23.7639 18.8928 25.8835 18.5189 26.5691C17.8954 27.5665 16.2128 27.0056 15.2154 27.0678C14.6546 27.0678 13.9063 27.3169 13.3454 27.2548C12.2237 27.13 12.4728 26.5069 12.535 25.5717C12.5972 24.3253 12.535 23.0788 12.4728 21.8944H12.535C12.8467 21.8944 13.1585 21.8322 13.4698 21.7696C13.6567 21.7075 13.9063 21.7075 14.0932 21.7075V22.5801C14.0932 22.8918 14.0932 23.2035 14.218 23.4526C14.5919 24.0135 15.6515 23.7644 16.2128 23.8266C16.3997 23.8266 16.5245 23.7018 16.5867 23.5148C16.7115 23.0783 16.7737 22.5174 16.7737 21.8944C16.8984 21.8944 16.9606 21.8322 17.0854 21.8322C17.3345 21.77 17.5219 21.77 17.7089 21.5831C17.771 22.0191 17.8337 22.5174 17.958 23.0161L17.958 23.0161ZM14.6546 20.5231H14.7793H15.278C15.7145 20.5231 15.7767 20.7723 15.8389 21.1466C15.9637 21.7701 15.9637 22.4558 15.9011 23.1414C15.6519 23.2036 15.3402 23.2036 15.1532 23.2036C14.7167 23.1414 14.7167 23.0166 14.7167 22.5801C14.6546 21.8323 14.6546 21.2088 14.6546 20.5232V20.5231ZM15.5898 17.9053C15.9015 17.9053 16.7115 17.7183 16.961 17.8431C17.8336 18.2796 17.5219 19.5261 17.5219 20.2118C17.5219 20.4609 17.584 20.7105 17.584 21.0222C17.3349 20.8352 16.9606 20.96 16.6493 21.0222C16.5871 20.7104 16.5245 20.3987 16.4001 20.1496C16.0262 19.4018 14.8419 19.3392 14.1563 19.7131C13.9072 19.8379 13.9072 20.087 13.9693 20.3365C13.9693 20.3987 14.0315 20.3987 14.0315 20.4613C14.0315 20.4613 14.0315 20.5235 14.0937 20.5235V20.96C13.595 20.8978 12.972 21.147 12.4732 21.2091H12.411C12.3489 20.3366 12.2863 19.5261 12.2241 18.6535V18.5913C12.7845 17.8427 15.0284 17.9674 15.5897 17.9053L15.5898 17.9053Z"/>
                            <path
                                d="M22.6957 19.2765C22.6957 20.4609 22.8205 21.5826 22.8826 22.7669C22.9448 24.3251 22.7579 25.9456 22.9448 27.5038C22.9448 27.6908 23.0696 27.8156 23.3187 27.8777C25.1261 28.0647 26.9338 27.5038 28.7413 27.566C29.24 27.566 29.8008 27.753 30.1748 27.3169C30.5487 26.8804 30.2995 25.9456 30.2369 25.4469C30.05 23.7017 29.5513 22.0186 29.4265 20.2113C29.3643 19.5257 29.7383 18.2165 29.2396 17.5314C28.6161 16.7835 27.1827 17.1574 26.4348 17.1574C24.8144 17.2196 22.0719 16.5966 22.4457 18.9027C22.4462 19.1518 22.571 19.214 22.6957 19.2766L22.6957 19.2765ZM29.1777 23.0161C29.3025 23.7639 30.1125 25.8835 29.7386 26.5691C29.1151 27.5665 27.4325 27.0056 26.4351 27.0678C25.8743 27.0678 25.126 27.3169 24.5651 27.2548C23.4434 27.13 23.6926 26.5069 23.7547 25.5717C23.8169 24.3253 23.7547 23.0788 23.6926 21.8944H23.7547C24.0665 21.8944 24.3782 21.8322 24.6895 21.7696C24.8764 21.7075 25.126 21.7075 25.313 21.7075V22.5801C25.313 22.8918 25.313 23.2035 25.4377 23.4526C25.8117 24.0135 26.8712 23.7644 27.4325 23.8266C27.6195 23.8266 27.7443 23.7018 27.8064 23.5148C27.9312 23.0783 27.9934 22.5174 27.9934 21.8944C28.1182 21.8944 28.1803 21.8322 28.3051 21.8322C28.5543 21.77 28.7416 21.77 28.9286 21.5831C28.9908 22.0191 29.0529 22.5174 29.1777 23.0161L29.1777 23.0161ZM25.8743 20.5231H25.9991H26.4978C26.9343 20.5231 26.9964 20.7723 27.0586 21.1466C27.1834 21.7701 27.1834 22.4558 27.1208 23.1414C26.8717 23.2036 26.5599 23.2036 26.373 23.2036C25.9364 23.1414 25.9365 23.0166 25.9365 22.5801C25.8743 21.8323 25.8743 21.2088 25.8743 20.5232V20.5231ZM26.809 17.9053C27.1208 17.9053 27.9308 17.7183 28.1803 17.8431C29.0529 18.2796 28.7412 19.5261 28.7412 20.2118C28.7412 20.4609 28.8033 20.7105 28.8033 21.0222C28.5542 20.8352 28.1799 20.96 27.8686 21.0222C27.8064 20.7104 27.7438 20.3987 27.6194 20.1496C27.2455 19.4018 26.0612 19.3392 25.3756 19.7131C25.1264 19.8379 25.1264 20.087 25.1886 20.3365C25.1886 20.3987 25.2508 20.3987 25.2508 20.4613C25.2508 20.4613 25.2508 20.5235 25.313 20.5235V20.96C24.8143 20.8978 24.1913 21.147 23.6925 21.2091H23.6303C23.5682 20.3366 23.5056 19.5261 23.4434 18.6535V18.5913C24.0042 17.8427 26.2481 17.9674 26.809 17.9053L26.809 17.9053Z"/>
                        </BagSVG>
                        <span>Mes éléments</span>
                    </BagContainer>
                </Interaction>
            </Grid>
        </Container>
    )
}

const PaintImgArea = styled.div`
    grid-area: postit/1/paint/1;
    min-width: 100%;
    margin-top: 2rem;
    overflow-y: auto;
    position: relative;
`

const PaintImgContainer = styled.div`
    position: relative;
    height: 100%;
    width: min-content;
    overflow: hidden;
`

const PaintImg = styled.img`
    object-fit: cover;
    height: 100%;
`

const Item = styled.div`
    grid-area: ${(props) => props.name};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    span {
        font-weight: 500;
    }
`

const Interaction = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    grid-area: button;
    width: 100%;
    justify-content: center;
    margin: 2rem 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-rows: min-content min-content 1fr min-content;
    grid-template-areas:
        "header"
        "postit"
        "paint"
        "button";
    grid-gap: 1rem;
    height: 100%;
`

const BagContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    position: absolute;
    right: 5%;
    user-select:none;

    span {
        font-size: 0.875rem;
    }

    b {
        position: absolute;
        top: 0;
        left: 14px;
    }
`

const ItemsModal = styled.div`
    position: absolute;
    bottom: 15%;
    display: flex;
    width: 90%;
    background-color: #fefef2;
    border-radius: 4px;
    padding: 1rem;
    gap: 1rem;
    margin: auto;
    right: 0;
    left: 0;
    grid-area: paint;
    flex-wrap: wrap;
`

const InventoryItem = styled.div`
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: #141516;
    color: #fff;
`

const BagSVG = styled.svg`
    width: 42px;
    height: 53px;
`
