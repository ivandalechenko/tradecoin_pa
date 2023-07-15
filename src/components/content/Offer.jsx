import React from 'react';
import api from "../../api/api";
import { useSelector } from "react-redux";

const Offer = ({ offer }) => {

    const { user } = useSelector(state => state.userReducer)

    const handleClick = (e) => {
        e.preventDefault()
        console.log(offer.tariff)

        if (offer.tariff == 'ai_premium') {
            alert("You can't use this tarif")
        } else {
            api.post('/payment/create-invoice', { tariff: offer.tariff }).then((res) => {
                console.log(res.data.response.result.url)
                window.open(res.data.response.result.url, '_blank');
            })
        }
    }


    return (
        <div className="offers_offers_list_offer">
            <div className="offers_offers_list_offer_header">
                <div className="offers_offers_list_offer_header_name">
                    <div className="offers_offers_list_offer_header_name_h4 h4">
                        {offer.title}
                    </div>
                    <div className="offers_offers_list_offer_header_name_verified">

                        <img src="img/pa/verified.svg" alt="verified"
                            className="lozad offers_offers_list_offer_header_name_verified_img"
                            width="20" height="20" />
                    </div>
                </div>
                <div className="offers_offers_list_offer_header_light14 light14">
                    Recomended deposit <b className="medium14">{offer.budget}</b>
                </div>
                <div className="offers_offers_list_offer_header_tags">
                    <div
                        className="offers_offers_list_offer_header_tags_tag offers_offers_list_offer_header_tags_medium15 medium15">
                        High
                    </div>
                    <div
                        className="offers_offers_list_offer_header_tags_tag offers_offers_list_offer_header_tags_medium15 medium15">
                        Risk management: 1:3
                    </div>
                </div>
            </div>
            <div className="offers_offers_list_offer_chart">
                <div className="offers_offers_list_offer_chart_price_wrapper">
                    <div
                        className="offers_offers_list_offer_chart_price_wrapper_price offers_offers_list_offer_chart_price_wrapper_medium14 medium14">
                        {offer.medium_profit}
                    </div>
                </div>

                <img src="img/pa/offer_chart1.svg" alt="offer chart"
                    className="lozad offers_offers_list_offer_chart_img" width="345" height="130" />
            </div>
            <div className="offers_offers_list_offer_content">
                <div className="offers_offers_list_offer_content_pnl">
                    <div className="offers_offers_list_offer_content_pnl_medium15 medium15">
                        Средняя прибыль
                    </div>
                    <div className="offers_offers_list_offer_content_pnl_num">
                        <div className="offers_offers_list_offer_content_pnl_num_h4 h4">
                            {offer.medium_profit}
                        </div>
                        <div
                            className="offers_offers_list_offer_content_pnl_num_percent offers_offers_list_offer_content_pnl_num_percent_medium15 medium15">
                            {offer.percent_profit}
                        </div>
                    </div>
                </div>
                <div className="offers_offers_list_offer_content_info">
                    <div className="offers_offers_list_offer_content_info_info_element">
                        <div
                            className="offers_offers_list_offer_content_info_info_element_name offers_offers_list_offer_content_info_info_element_regular14 regular14">
                            Средний win rate
                        </div>
                        <div
                            className="offers_offers_list_offer_content_info_info_element_value offers_offers_list_offer_content_info_info_element_medium14 medium14">
                            {offer.medium_winrate}
                        </div>
                    </div>
                    <div className="offers_offers_list_offer_content_info_info_element">
                        <div
                            className="offers_offers_list_offer_content_info_info_element_name offers_offers_list_offer_content_info_info_element_regular14 regular14">
                            Среднее время открытой
                        </div>
                        <div
                            className="offers_offers_list_offer_content_info_info_element_value offers_offers_list_offer_content_info_info_element_medium14 medium14">
                            {offer.medium_open_time}
                        </div>
                    </div>
                    <div className="offers_offers_list_offer_content_info_info_element">
                        <div
                            className="offers_offers_list_offer_content_info_info_element_name offers_offers_list_offer_content_info_info_element_regular14 regular14">
                            Среднее позиций в месяц
                        </div>
                        <div
                            className="offers_offers_list_offer_content_info_info_element_value offers_offers_list_offer_content_info_info_element_medium14 medium14">
                            {offer.medium_position_time}
                        </div>
                    </div>
                    <div className="offers_offers_list_offer_content_info_info_element">
                        <div
                            className="offers_offers_list_offer_content_info_info_element_name offers_offers_list_offer_content_info_info_element_regular14 regular14">
                            Подписалось
                        </div>
                        <div
                            className="offers_offers_list_offer_content_info_info_element_value offers_offers_list_offer_content_info_info_element_medium14 medium14">
                            {offer.subscribers}
                        </div>
                    </div>
                </div>
                <div className="offers_offers_list_offer_content_price">
                    <div className="offers_offers_list_offer_content_price_medium15 medium15">
                        Цена
                    </div>
                    <div className="offers_offers_list_offer_content_price_price_value">
                        <div className="offers_offers_list_offer_content_price_price_value_h6 h6">
                            {offer.price} <s
                                className="offers_offers_list_offer_content_price_price_value_h6_s light18">
                                {offer.price_old}</s>
                        </div>
                        <div
                            className="offers_offers_list_offer_content_price_price_value_add_info_type_2">
                            Individual 🔥
                        </div>
                    </div>
                </div>
                <div className="offers_offers_list_offer_content_buttons">
                    {user.tariff === offer.tariff ? (
                        <button className="btn offers_offers_list_offer_content_buttons_button_selected">
                            Connected
                        </button>
                    ) : (
                        <>
                            <button className="btn offers_offers_list_offer_content_buttons_button" onClick={handleClick}>
                                Connecting
                            </button>

                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Offer