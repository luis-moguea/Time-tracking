const DATA = {
    main_card: [
        {
        words_before: 'Report for',
        name: 'Jeremy Robson',
        main_svg: 'img/image-jeremy.png',
        color: 'smooth-blue',
        time_interval: [
            'Daily',
            'Weekly',
            'Monthly',
        ]
        }
    ],

    topic_cards: [
        {
            topic_name: 'Work',
            ellipis_svg: 'img/ellipsis-work.svg',
            topic_color: 'orange',
            topic_icon_svg: '/img/icon-work.svg',
            time_hours: '32hrs',
            last_session_hours: 'Last week - 36hrs',
        },
        {
            topic_name: 'Play',
            ellipis_svg: 'img/ellipsis-work.svg',
            topic_color: 'blue',
            topic_icon_svg: '/img/icon-play.svg',
            time_hours: '10hrs',
            last_session_hours: 'Last week - 8hrs',
        },
        {
            topic_name: 'Study',
            ellipis_svg: 'img/ellipsis-work.svg',
            topic_color: 'cherry',
            topic_icon_svg: '/img/icon-study.svg',
            time_hours: '4hrs',
            last_session_hours: 'Last week - 7hrs',
        },{
            topic_name: 'Exercise',
            ellipis_svg: 'img/ellipsis-work.svg',
            topic_color: 'green',
            topic_icon_svg: '/img/icon-exercise.svg',
            time_hours: '4hrs',
            last_session_hours: 'Last week - 5hrs',
        },{
            topic_name: 'Social',
            ellipis_svg: 'img/ellipsis-work.svg',
            topic_color: 'purple',
            topic_icon_svg: '/img/icon-social.svg',
            time_hours: '5hrs',
            last_session_hours: 'Last week - 10hrs',
        },
        {
            topic_name: 'Self Care',
            ellipis_svg: 'img/ellipsis-work.svg',
            topic_color: 'yellow',
            topic_icon_svg: '/img/icon-self-care.svg',
            time_hours: '2hrs',
            last_session_hours: 'Last week - 2hrs',
        },
    ]
}

const container = document.querySelector('#item-list')



const renderCards = () => {

    DATA.main_card.map(el => {
        const mainCard = `
        <div class="grid__item--1">
            <div class="grid__item--2 ${el.color}">
                <img src="${el.main_svg}">
                <p>${el.words_before}</p>
                <p>${el.name}</p>
            </div>
            <div class="grid__item--3">
                <ul>
                    <li>
                        <p class="interval__list>${el.time_interval[0]}</p><br>
                        <p class="interval__list>${el.time_interval[1]}</p><br>
                        <p class="interval__list>${el.time_interval[2]}</p>
                    </li>
                </ul>
            </div>
        </div>`;
        container.innerHTML += mainCard
    })


    DATA.topic_cards.map(el => {
        const element = `
        <div class="grid__item ${el.topic_color}">
            <div class="grid__item--top-container">
                <img src=${el.topic_icon_svg}>
            </div>
            <div class="grid__item--bottom-container">
                <div >
                    <p>${el.topic_name}</p>
                    <img src=${el.ellipis_svg}>
                </div>
            </div>
        </div>`;
        container.innerHTML += element
    })

}
renderCards()
