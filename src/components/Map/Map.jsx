import React from 'react';

import styles from './Map.module.css';
import {YMaps, Map, Placemark, GeoObject, ZoomControl} from "react-yandex-maps";
import axios from "axios";

const myStates = {
    center: [51.517366, 46.070179],
    controls: [],
    zoom: 13
};

class Maps extends React.Component {
    state = {
        stops: [],
        routeForward: [],
        routeBackward: [],
        lines: []
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
        let routeForward = [
            46.21906120112592, 51.51353207451523,
            46.218353097946, 51.51047936999272,
            46.210778539687944, 51.509595653990125,
            46.201188894779335, 51.50854246846086,
            46.19848522809232, 51.50828805626476,
            46.197681562004846, 51.50828428996127,
            46.186716691551965, 51.50899396258596,
            46.18623380155916, 51.50894762489274,
            46.18011836500523, 51.50679179032425,
            46.166222303679085, 51.501708965072886,
            46.167509764006205, 51.500275988075195,
            46.16541764097462, 51.499425555077686,
            46.16914445334199, 51.495842181522875,
            46.16427356177092, 51.49376609039548,
            46.16069013052697, 51.4917032992781,
            46.1604469846128, 51.491499265044474,
            46.16017876371132, 51.49124810599061,
            46.16001783117043, 51.49101703843261,
            46.159819347703326, 51.49061852784925,
            46.15795771358807, 51.486775001132024,
            46.15781823871926, 51.48652046677232,
            46.157131593211446, 51.48607837738197,
            46.15669171093295, 51.485797045528045,
            46.15617672680209, 51.48599129866224,
            46.14615062950441, 51.492910186728096,
            46.143584879725196, 51.49151564644525,
            46.140933299257426, 51.49022822730717,
            46.13119376461137, 51.48537506387298,
            46.1306118029205, 51.485167494449946,
            46.130166556224026, 51.48503687368264,
            46.1296944874374, 51.4850335244287,
            46.127856955785845, 51.485245631752065,
            46.12609742667207, 51.48608963234468,
            46.124891188143124, 51.487112071154236,
            46.11887011950984, 51.49281188468701,
            46.11450567483745, 51.49714487113248,
            46.12002857759651, 51.502679487904125,
            46.117668233663416, 51.503884734788755,
            46.11402042940315, 51.50383116894238,
            46.11365564897713, 51.503737428556455,
            46.112368188649974, 51.503241940439274,
            46.111466966420984, 51.50281340581093,
            46.1106086595362, 51.5022777318255,
            46.10897787645516, 51.5011527958535,
            46.10533007219489, 51.50229112375296,
            46.10511013105568, 51.50230116769686,
            46.10486068561725, 51.50226266590668,
            46.10468097761326, 51.50218064024166,
            46.10196606988602, 51.50087491875381,
            46.10139258936105, 51.500617102251105,
            46.10109390813549, 51.5004935336,
            46.10080422956188, 51.500396438190144,
            46.099033971612, 51.4999645285102,
            46.098067758722664, 51.499689529817346,
            46.09786927525556, 51.49961252176698,
            46.09766542737043, 51.49951542447181,
            46.097161172075644, 51.49918730103912,
            46.09528630797415, 51.49774922186749,
            46.09412759367976, 51.496870280238696,
            46.09282333625122, 51.49615351898001,
            46.092115233071276, 51.496173609582186,
            46.09172363055512, 51.49621713919114,
            46.09137494338312, 51.49630754670398,
            46.08931500685974, 51.49778752554537,
            46.088647136815, 51.49820271455514,
            46.08787197840967, 51.498577720713,
            46.08554918540279, 51.49978307664269,
            46.082695315010945, 51.50132320703466,
            46.080817768700484, 51.50240796312595,
            46.080104301102516, 51.502980462821824,
            46.07945520652091, 51.50357973838129,
            46.07897240889823, 51.5041890495459,
            46.062374899514, 51.52925409824274,
            46.06235883775103, 51.53020048640964,
            46.06214426102984, 51.53056519019172,
            46.055095345040776, 51.53872495475654,
            46.05470910694267, 51.538885528387766,
            46.05214518488841, 51.53953249087159,
            46.03159990691494, 51.54452372799092,
            46.02753752278262, 51.53745812010329,
            46.0219714196921, 51.538748613377535,
            46.00462289178381, 51.542640466513625,
            46.002566685581186, 51.53910252635969,
            46.0005711220741, 51.53959762243136,
            46.00044347239543, 51.53980035777253,
            46.000454201231506, 51.54009473533576,
            46.00096918536237, 51.540897573508325
        ];
        let routeBackward = [
            46.0009451644513, 51.54087939514941,
            46.0012348430249, 51.54134436592918,
            46.008081739063364, 51.53977467070297,
            46.023252313251554, 51.53643314798262,
            46.03196412813184, 51.53451580220256,
            46.03979617845527, 51.53280472161924,
            46.048334481740135, 51.53100825493028,
            46.04907125722868, 51.53087200914733,
            46.052450840587454, 51.529185659219,
            46.05952726482614, 51.53192314016086,
            46.0613287843444, 51.529856623223935,
            46.06151718937448, 51.52967391165563,
            46.06176395260385, 51.52954676504965,
            46.06234330975108, 51.52929916273998,
            46.078123609614565, 51.50542817014656,
            46.079094840064755, 51.503976308312204,
            46.07951326467107, 51.50349421437735,
            46.0799853334577, 51.50305229043327,
            46.080682707801564, 51.50251661927085,
            46.081338026168694, 51.502087012064,
            46.08186459850317, 51.50177792963094,
            46.08349087653369, 51.50089307563683,
            46.08552173844173, 51.499765681467316,
            46.08793460029245, 51.49854529893286,
            46.088835259390066, 51.49809350717558,
            46.09001246758195, 51.49728823117579,
            46.092063107952555, 51.495833705642845,
            46.09218530044143, 51.49582752280972,
            46.092303317638084, 51.49584426509917,
            46.09242133483474, 51.49591123419519,
            46.0928987680394, 51.49619250331847,
            46.094223779292754, 51.49691575876855,
            46.09719566688121, 51.49919929516786,
            46.097479981036784, 51.49939683909936,
            46.097882312389025, 51.49961781942653,
            46.09870843276562, 51.49986558396857,
            46.09961501941259, 51.50009325830006,
            46.10081128463324, 51.50039124209288,
            46.10115997180513, 51.500505078083876,
            46.101460379214764, 51.500632306202945,
            46.104710328125876, 51.50218475308549,
            46.10496782019132, 51.50227514870263,
            46.10524140551082, 51.502298584573204,
            46.109018866090956, 51.501130882836456,
            46.11091250565547, 51.5024566979347,
            46.11141139653221, 51.50275131824814,
            46.11203366902365, 51.503052632495894,
            46.11375564721122, 51.50374899554063,
            46.1141472497274, 51.50381595296329,
            46.11490899708763, 51.50385612736855,
            46.11763948586477, 51.503852779504214,
            46.11797744420067, 51.50363181981978,
            46.12004810956015, 51.50267431540675,
            46.118181881360115, 51.500813510120196,
            46.11679512472319, 51.499474254211755,
            46.11429981700708, 51.49694964925751,
            46.11646746040667, 51.49482862064562,
            46.119129552868, 51.49223557371389,
            46.12157877671742, 51.489892821029414,
            46.12372280932836, 51.48791730130165,
            46.12503307820099, 51.48671134095701,
            46.12648282194249, 51.48557233291074,
            46.12651309887157, 51.48545128748447,
            46.12667939583049, 51.48536085832829,
            46.12828077620159, 51.48516223039369,
            46.12947843332132, 51.48504630562547,
            46.13062244626077, 51.48490358644663,
            46.13079410763775, 51.48487009378611,
            46.13094967576059, 51.48491028497924,
            46.13102477761301, 51.485017461320226,
            46.13105696412119, 51.48518827309028,
            46.13112938376455, 51.48529712339472,
            46.13123398991614, 51.48537917960304,
            46.13531264755197, 51.48745518808849,
            46.13757643196051, 51.488551371763336,
            46.13973292800844, 51.48958641505109,
            46.1411652276223, 51.49027066214791,
            46.141881377429314, 51.49061613066725,
            46.14256534072811, 51.49097499182149,
            46.14615644016848, 51.4929123540965,
            46.15020356799327, 51.490115209318816,
            46.15192865444441, 51.488902151559586,
            46.15481667706171, 51.48694889851159,
            46.156226802511874, 51.4859628759571,
            46.15649645639666, 51.48565837754214,
            46.15647499872453, 51.485507662869736,
            46.156609109175264, 51.48541053537108,
            46.15683977915055, 51.48538039231196,
            46.156981936228355, 51.485398813074866,
            46.15711336447008, 51.48544402763695,
            46.158154061567814, 51.48675355578961,
            46.1587226330466, 51.48801971754972,
            46.159729338558066, 51.49003076850594,
            46.16013889623875, 51.49084935504493,
            46.16030661746909, 51.49114874386318,
            46.16062890316394, 51.49147493009091,
            46.16115461613088, 51.491833248125694,
            46.16283904339219, 51.49281107359339,
            46.16447519089126, 51.49375539187531,
            46.17050863452025, 51.496282533544694,
            46.170741986704556, 51.49646669654368,
            46.171020936442105, 51.49657719398375,
            46.169832086532615, 51.49781273791831,
            46.169012876474504, 51.498721795493964,
            46.16756345385135, 51.500307161682265,
            46.16679237634482, 51.50108392065523,
            46.16620368905135, 51.50172674560013,
            46.1738668652629, 51.5044902615972,
            46.17569881402009, 51.505160093404264,
            46.177192804441276, 51.50570882761073,
            46.178437349424115, 51.506164895412205,
            46.1801620098207, 51.506787961613476,
            46.18191349230741, 51.50741907038746,
            46.18293657312825, 51.50779259596573,
            46.18370971987679, 51.50807092612668,
            46.18418111811106, 51.50823192373088,
            46.18567225250758, 51.50874807839087,
            46.185919264105216, 51.50883166512676,
            46.1861555468668, 51.50889851424269,
            46.18635303686075, 51.508952323997335,
            46.18671513507777, 51.50899082010875,
            46.18707186887675, 51.50899416759504,
            46.187466153601946, 51.50896738769785,
            46.191105642338684, 51.50870839734879,
            46.196201839466944, 51.50835443581087,
            46.19718352796636, 51.508301478979845,
            46.1981652164658, 51.50827530240604,
            46.19872646870214, 51.50829533027541,
            46.19941646697121, 51.508355528550894,
            46.20298246385646, 51.508742455978314,
            46.20844880582879, 51.509345484892506,
            46.21255258562153, 51.50978762657966,
            46.21629267166854, 51.51019992791623,
            46.21834817419018, 51.510460990064374,
            46.21874864470997, 51.512226623484096,
            46.21895785701305, 51.51314376000016,
            46.21933823399265, 51.513306335586215,
            46.219348962828754, 51.51343687493592,
            46.21928995423041, 51.51348373512408,
            46.21908610634528, 51.51349712374037
        ];

        axios.get('http://localhost:8080/routes/1/path')
            .then(response => response.data)
            .then(roadNodeList => {
                console.log(roadNodeList);
                const coords = roadNodeList.map(roadNode => [roadNode.xPos, roadNode.yPos]);
                console.log(coords);
                this.setState({stops, routeForward: coords, routeBackward});
            })
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
                    preset: color,
                    iconContentLayout: point.title,
                    iconContentSize: [0, 10],
                    iconContentOffset: [0, 0],
                }}
            />
        )
    }

    drawRoute(element, color) {
        let lines = []
        for (let i = 0; i < element.length - 1; i++) {
            let x_pos_1 = element[i][0];
            let y_pos_1 = element[i][1];
            let x_pos_2 = element[i + 1][0];
            let y_pos_2 = element[i + 1][1];
            let line = {
                id: i,
                xPosStart: x_pos_1,
                yPosStart: y_pos_1,
                xPosFinish: x_pos_2,
                yPosFinish: y_pos_2,
            }
            lines.push(line);
        }

        console.log(lines);
        return lines.map(line => <GeoObject
            key={line.id}
            geometry={{
                type: 'LineString',
                coordinates: [
                    [line.xPosStart, line.yPosStart],
                    [line.xPosFinish, line.yPosFinish],
                ],
            }}
            properties={{
                hintContent: 'Маршрут 284',
                balloonContent: 'Маршрут 284',
            }}
            options={{
                geodesic: true,
                strokeWidth: 4,
                strokeColor: color,
            }}
        />)
    }

    render() {
        return (
            <div className={styles.Map}>
                <YMaps>
                    <div>
                        <Map defaultState={myStates} className={styles.Map}>
                            {this.pointAndBalloon(this.state.stops, 'islands#blueDotIcon')}
                            {this.drawRoute(this.state.routeForward, '#2ed496')}
                            <ZoomControl options={{ float: 'right', position: {top: 300, right: 20} }} />
                        </Map>
                    </div>
                </YMaps>
            </div>
        )
    }
}

export default Maps;