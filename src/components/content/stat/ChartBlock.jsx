import React, { useEffect, useRef, useState } from 'react';
import Chart from './Chart';
import Prices from './Prices';
import { getStatisticAction, getStatisticsSinceDateAction } from '../../../redux/userActions';
import { useDispatch } from 'react-redux';
import { warningNotification } from '../../../redux/notificationActions';
import Times from './Times';
import { motion } from 'framer-motion';


const ChartBlock = ({ period }) => {
    const resizeHandler = () => {
        const { clientHeight, clientWidth } = ref.current || {};
        setSize({ clientHeight, clientWidth });
    };
    const [size, setSize] = useState({});
    const ref = useRef();
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);
    var lambdaArr = []
    const [timesCount, setTimesCount] = useState(12)
    useEffect(() => {
        if (size.clientWidth <= 800 && size.clientWidth > 700) {
            if (timesCount != 10) {
                setTimesCount(10)
                getStatisticsSinceDate()
            }
        } else if (size.clientWidth <= 700 && size.clientWidth > 600) {
            if (timesCount != 8) {
                setTimesCount(8)
                getStatisticsSinceDate()
            }
        } else if (size.clientWidth <= 600 && size.clientWidth > 500) {
            if (timesCount != 6) {
                setTimesCount(6)
                getStatisticsSinceDate()
            }
        } else if (size.clientWidth <= 500 && size.clientWidth > 400) {
            if (timesCount != 5) {
                setTimesCount(5)
                getStatisticsSinceDate()
            }
        } else if (size.clientWidth <= 400 && size.clientWidth > 340) {
            if (timesCount != 4) {
                setTimesCount(4)
                getStatisticsSinceDate()
            }
        } else if (size.clientWidth <= 340) {
            if (timesCount != 3) {
                setTimesCount(3)
                getStatisticsSinceDate()
            }
        } else {
            if (timesCount != 12) {
                setTimesCount(12)
                getStatisticsSinceDate()
            }
        }
    }, [size]);
    const [loading, setLoading] = useState(false)
    const [prices, setPrices] = useState([1, 2])
    const steps = 7
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7
    const mounth = day * 30
    const year = day * 365
    const now = new Date().getTime()
    const [times, setTimes] = useState([])

    const dispatch = useDispatch()
    const getStatisticsSinceDate = () => {
        setLoading(true)
        // Получаем дату по которую выполняем запрос
        // Запрос всегда шлём на 12 периодов, на случай если в момент загрузки произойдёт резайз окна
        const data = {
            date: Date.now() - 12 * period,
        }
        dispatch(getStatisticsSinceDateAction(data))
            .then((data) => {
                // Определение ширины графика в момент когда данные получены 
                const { clientHeight, clientWidth } = ref.current || {};
                var tk = 12;
                if (clientWidth <= 800 && clientWidth > 700) { tk = 10; }
                else if (clientWidth <= 700 && clientWidth > 600) { tk = 8; }
                else if (clientWidth <= 600 && clientWidth > 500) { tk = 6; }
                else if (clientWidth <= 500 && clientWidth > 400) { tk = 5; }
                else if (clientWidth <= 400 && clientWidth > 340) { tk = 4; }
                else if (clientWidth <= 340) { tk = 3; }
                var statistics = data.statistics
                // setStatistics(data.statistics)
                // var statistics = [
                //     {
                //         "_id": "64c96b8e062e924ac2d9005b",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 29191.9,
                //         "value": 817.3732000000001,
                //         "profit": 2,
                //         "percent": 0,
                //         "leverage": 30,
                //         "createdAt": "2023-08-01T20:31:10.869Z",
                //         "updatedAt": "2023-08-01T20:31:10.869Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c93114fd7417325cd90fee",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": -5,
                //         "percent": 0,
                //         "createdAt": "2023-07-29T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c93112fd7417325cd90fed",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": 2,
                //         "percent": 0,
                //         "createdAt": "2023-07-26T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c9310dfd7417325cd90fec",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": -2,
                //         "percent": 0,
                //         "createdAt": "2023-07-23T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c9310afd7417325cd90feb",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": 5,
                //         "percent": 0,
                //         "createdAt": "2023-07-21T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c93107fd7417325cd90fea",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": -2,
                //         "percent": 0,
                //         "createdAt": "2023-07-18T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c93104fd7417325cd90fe9",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": 2,
                //         "percent": 0,
                //         "createdAt": "2023-07-14T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c93101fd7417325cd90fe8",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": -2,
                //         "percent": 0,
                //         "createdAt": "2023-07-11T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c930fefd7417325cd90fe7",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": 1,
                //         "percent": 0,
                //         "createdAt": "2023-07-08T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c930fcfd7417325cd90fe6",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": 1.5,
                //         "percent": 0,
                //         "createdAt": "2023-07-05T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c930f8fd7417325cd90fe5",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": 2,
                //         "percent": 0,
                //         "createdAt": "2023-07-02T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     },
                //     {
                //         "leverage": 10,
                //         "_id": "64c930d1009eb22e46ff9f07",
                //         "user": "64b10551b1a65ae009f0734e",
                //         "type": "LONG",
                //         "amount": 0.028,
                //         "price": 28940.3,
                //         "value": 810.3284,
                //         "profit": -2,
                //         "percent": 0,
                //         "createdAt": "2023-06-29T16:20:33.908Z",
                //         "updatedAt": "2023-08-01T16:20:33.908Z",
                //         "__v": 0
                //     }
                // ]

                // Заполняем массив разности цен в зависимости от размера экрана
                lambdaArr = []
                for (let i = 0; i < tk; i++) {
                    lambdaArr.push(0)
                }
                for (let i = 0; i < statistics.length; i++) {
                    // Преобразуем даты в таймстемпы
                    const date = new Date(Date.parse(statistics[i].createdAt)).getTime();
                    statistics[i] = { ...statistics[i], createdAt: date }
                    // Проверяем подходит ли эта дата под наш экран (не находится за левой границей графика)
                    if (date > Date.now() - tk * period) {
                        // Вычисляем какому промежутку принадлежит операция
                        var periodNum = Math.round((now - date) / period)
                        // Добавляем в промежуток профит
                        if (periodNum < tk) {
                            lambdaArr[Math.round((now - date) / period)] += statistics[i].profit
                        }
                    }
                }
                // Переварачиваем массив
                var pricesArr = []
                for (let i = lambdaArr.length - 1; i >= 0; i--) {
                    if (i == lambdaArr.length - 1) {
                        pricesArr.push(lambdaArr[i])
                    } else {
                        pricesArr.push(pricesArr[pricesArr.length - 1] + lambdaArr[i])
                    }
                }
                setPrices(pricesArr)
                setLoading(false)
            })
            .catch(function (error) {
                setLoading(false)
            });

    }

    useEffect(() => {
        getStatisticsSinceDate()
    }, [period])


    return (
        <div className="section" id="chart">
            <div className="header">
                Detailed statistics
            </div>
            <div className="chart_wrapper">
                <div className="chart" ref={ref} >
                    {
                        !loading && !prices.every((price, index, array) => { return price == 0 }) &&
                        <Chart props={{ prices: prices, steps: steps, times: times, chartWidth: size.clientWidth }} />
                    }
                </div>
            </div>
            {
                !loading
                    ?
                    <Prices props={{ prices: prices, steps: steps }} />
                    : <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} className="loader nh" style={{ height: 50 * (steps) - 7 }}>
                        <img src='/img/pa/loader.svg' /></motion.div>
            }

            <Times period={period} timesCount={timesCount} times={times} setTimes={setTimes} />

        </div >
    )
}

export default ChartBlock