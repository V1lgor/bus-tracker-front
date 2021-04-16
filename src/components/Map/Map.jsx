import React from 'react';

import styles from './Map.module.css';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import DummyMap from '../../assets/images/dummy_map.png';

const coords = [51.477591, 45.887158]

class Maps extends React.Component {
    state = {
        stops: []
    }

    componentDidMount() {
        /*Пришли данные*/
        let stops = [
            {
                id: 1,
                title: "пос. Комсомольский",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.477591,
                y_pos: 45.887158
            },
            {
                id: 2,
                title: "Парковая",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.479250,
                y_pos: 45.891287
            },
            {
                id: 3,
                title: "Байкальская",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.478536,
                y_pos: 45.895171
            },
            {
                id: 4,
                title: "Магазин Тульской",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.478493,
                y_pos: 45.899531
            },
            {
                id: 5,
                title: "Тульская",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.478991,
                y_pos: 45.903162
            },
            {
                id: 6,
                title: "8-й Крекингский проезд",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.475989,
                y_pos: 45.905397
            },
            {
                id: 7,
                title: "1-й Тульский",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.473057,
                y_pos: 45.904386
            },
            {
                id: 8,
                title: "рынок Комсомольский",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.472185,
                y_pos: 45.902896
            },
            {
                id: 9,
                title: "20-й квартал (Заводской)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.469573,
                y_pos: 45.911432
            },
            {
                id: 10,
                title: "16-й квартал",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.472691,
                y_pos: 45.917294
            },
            {
                id: 11,
                title: "8-й квартал",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.474336,
                y_pos: 45.920408
            },
            {
                id: 12,
                title: "ДК Строитель",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.476329,
                y_pos: 45.924211
            },
            {
                id: 13,
                title: "Васильковская",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.477998,
                y_pos: 45.930548
            },
            {
                id: 14,
                title: "СПЗ",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.480764,
                y_pos: 45.930548
            },
            {
                id: 15,
                title: "Крымская",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.488077,
                y_pos: 45.930663
            },
            {
                id: 16,
                title: "4-й Жилучасток",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.494809,
                y_pos: 45.930769
            },
            {
                id: 17,
                title: "Кавказкая",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.496608,
                y_pos: 45.933255
            },
            {
                id: 18,
                title: "Пензенская",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.500635,
                y_pos: 45.940877
            },
            {
                id: 19,
                title: "Авиастроителей",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.503269,
                y_pos: 45.945854
            },
            {
                id: 20,
                title: "пл. Орджоникидзе",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.500735,
                y_pos: 45.953183
            },
            {
                id: 21,
                title: "1-й Жилучасток",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.502851,
                y_pos: 45.958779
            },
            {
                id: 22,
                title: "Мебельная фабрика Мария",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.505118,
                y_pos: 45.969467
            },
            {
                id: 23,
                title: "Горгаз",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.508587,
                y_pos: 45.972167
            },
            {
                id: 24,
                title: "Заводская",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.507674,
                y_pos: 45.977742
            },
            {
                id: 25,
                title: "Микрорайон Улеши",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.508933,
                y_pos: 45.981622
            },
            {
                id: 26,
                title: "Мельничный проезд",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.511394,
                y_pos: 45.989640
            },
            {
                id: 27,
                title: "Гостиница Олимпия",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.513064,
                y_pos: 45.995388
            },
            {
                id: 28,
                title: "Дворец Спорта",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.513893,
                y_pos: 45.998819
            },
            {
                id: 29,
                title: "Городской парк",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.515107,
                y_pos: 46.003115
            },
            {
                id: 30,
                title: "2-я Садовая (ул. Чернышевского)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.516518,
                y_pos: 46.008389
            },
            {
                id: 31,
                title: "Ильинская пл.",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.520759,
                y_pos: 46.014269
            },
            {
                id: 32,
                title: "Белоглинская",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.523995,
                y_pos: 46.016051
            },
            {
                id: 33,
                title: "Рабочая (ул. Чапаева)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.525953,
                y_pos: 46.017195
            },
            {
                id: 34,
                title: "Мичурина",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.527695,
                y_pos: 46.018206
            },
            {
                id: 35,
                title: "Советская (ул. Чапаева)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.529255,
                y_pos: 46.019123
            },
            {
                id: 36,
                title: "Крытый Рынок",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.532565,
                y_pos: 46.021105
            },
            {
                id: 37,
                title: "Чапаева (Главпочтамт)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.536208,
                y_pos: 46.023341
            },
            {
                id: 38,
                title: "ТК Москва",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.536821,
                y_pos: 46.021910
            },
            {
                id: 39,
                title: "Рахова (ул. Московская)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.537534,
                y_pos: 46.018372
            },
            {
                id: 40,
                title: "Астраханская (ул. Московская)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.538932,
                y_pos: 46.012282
            },
            {
                id: 41,
                title: "Зарубина",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.542797,
                y_pos: 46.014182
            },
            {
                id: 42,
                title: "ЦКР",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.545193,
                y_pos: 46.015658
            },
            {
                id: 43,
                title: "ТК Форум",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.546910,
                y_pos: 46.013796
            },
            {
                id: 44,
                title: "Университетская",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.547781,
                y_pos: 46.010072
            },
            {
                id: 45,
                title: "ДЦ Навигатор",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.549135,
                y_pos: 46.007527
            },
            {
                id: 46,
                title: "Стрелка",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.559065,
                y_pos: 45.996750
            },
            {
                id: 47,
                title: "1-я Дачная",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.562316,
                y_pos: 45.992939
            },
            {
                id: 48,
                title: "Вишневая",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.566287,
                y_pos: 45.987818
            },
            {
                id: 49,
                title: "2-я Дачная",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.569269,
                y_pos: 45.984396
            },
            {
                id: 50,
                title: "Саперная",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.573067,
                y_pos: 45.980098
            },
            {
                id: 51,
                title: "Торговый Центр",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.577301,
                y_pos: 45.974681
            },
            {
                id: 52,
                title: "пл. Ленина",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.579257,
                y_pos: 45.972084
            },
            {
                id: 53,
                title: "Международная (проспект 50 лет Октября)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.584101,
                y_pos: 45.965091
            },
            {
                id: 54,
                title: "Школа №108 (проспект 50 лет Октября)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.585744,
                y_pos: 45.961723
            },
            {
                id: 55,
                title: "Молодёжный проезд (проспект 50 лет Октября)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.588298,
                y_pos: 45.956546
            },
            {
                id: 56,
                title: "Завод РМК",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.590722,
                y_pos: 45.950084
            },
            {
                id: 57,
                title: "Трофимовский мост",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.593516,
                y_pos: 45.950177
            },
            {
                id: 58,
                title: "20-й квартал (Ленинский)",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.596742,
                y_pos: 45.956329
            },
            {
                id: 59,
                title: "Измайлова",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.597812,
                y_pos: 45.959190
            },
            {
                id: 60,
                title: "Загороднева",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.597887,
                y_pos: 45.962800
            },
            {
                id: 61,
                title: "Дворец Пионеров",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.595732,
                y_pos: 45.966055
            },
            {
                id: 62,
                title: "СНИИМ",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.586030,
                y_pos: 45.968103
            },
            {
                id: 63,
                title: "Школа №75",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.589909,
                y_pos: 45.968011
            },
            {
                id: 64,
                title: "Дворец Пионеров",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.595630,
                y_pos: 45.968520
            },
            {
                id: 65,
                title: "Техучилище",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.600758,
                y_pos: 45.968941
            },
            {
                id: 66,
                title: "Антонова",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.604253,
                y_pos: 45.969300
            },
            {
                id: 67,
                title: "Чемодурова",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.608063,
                y_pos: 45.969952
            },
            {
                id: 68,
                title: "Транспортная",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.610912,
                y_pos: 45.970417
            },
            {
                id: 69,
                title: "Тархова",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.614423,
                y_pos: 45.972292
            },
            {
                id: 70,
                title: "Happy Молл 2",
                //time: "17:10", // Потенциальное поле времени прибытия
                x_pos: 51.622843,
                y_pos: 45.975564
            }
        ];
        this.setState({stops})
    }

    pointAndBalloon(element, color) {
        return element.map(point => <Placemark
                key={point.id}
                geometry={[point.x_pos, point.y_pos]}
                properties={{
                    hintContent: point.title,
                    balloonContentHeader: point.title,
                }}
                modules={[
                    "geoObject.addon.hint",
                    'geoObject.addon.balloon',
                    "layout.ImageWithContent"
                ]}

                options={{
                    /*iconLayout:'default#image',*/
                    preset: color,
                    /*iconImageHref: 'boat.jpg',*/
                    iconContentLayout: point.title,
                    iconContentSize: [100, 100],
                    iconContentOffset: [10, 10],
                }}
            />
        )
    }
    render() {
        return (
            <div className={styles.MapContent}>
                <YMaps>
                    <div>
                        <Map defaultState={{
                            center: [51.517366, 46.070179],
                            zoom: 13
                        }} className={styles.Map}>
                            {this.pointAndBalloon(this.state.stops, 'islands#redDotIcon')}
                        </Map>
                    </div>
                </YMaps>
            </div>
        )
    }
}

export default Maps;