const DATA = {
    main_card: [
        {
        words_before: 'Report for',
        name: 'Jeremy Robson',
        main_svg: '/IMAGES/image-jeremy.png',
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
            ellipis_svg: '/IMAGES/icon-ellipsis.svg',
            topic_color: 'orange',
            topic_icon_svg: '/IMAGES/icon-work.svg',
            time_hours: '32hrs',
            last_session_hours: 'Last week - 36hrs',
        },
        {
            topic_name: 'Play',
            ellipis_svg: '/IMAGES/icon-ellipsis.svg',
            topic_color: 'blue',
            topic_icon_svg: '/IMAGES/icon-play.svg',
            time_hours: '10hrs',
            last_session_hours: 'Last week - 8hrs',
        },
        {
            topic_name: 'Study',
            ellipis_svg: '/IMAGES/icon-ellipsis.svg',
            topic_color: 'cherry',
            topic_icon_svg: '/IMAGES/icon-study.svg',
            time_hours: '4hrs',
            last_session_hours: 'Last week - 7hrs',
        },{
            topic_name: 'Exercise',
            ellipis_svg: '/IMAGES/icon-ellipsis.svg',
            topic_color: 'green',
            topic_icon_svg: '/IMAGES/icon-exercise.svg',
            time_hours: '4hrs',
            last_session_hours: 'Last week - 5hrs',
        },{
            topic_name: 'Social',
            ellipis_svg: '/IMAGES/icon-ellipsis.svg',
            topic_color: 'purple',
            topic_icon_svg: '/IMAGES/icon-social.svg',
            time_hours: '5hrs',
            last_session_hours: 'Last week - 10hrs',
        },
        {
            topic_name: 'Self Care',
            ellipis_svg: '/IMAGES/icon-ellipsis.svg',
            topic_color: 'yellow',
            topic_icon_svg: '/IMAGES/icon-self-care.svg',
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
                <img class="grid__main-png" src="${el.main_svg}">
                    <div class="grid__item--4">  
                        <p class="grid__item--4-1">${el.words_before}</p>
                        <h1 class="grid__item--4-2">${el.name}</h1>
                    </div>
                </div>    
            <div class="grid__item--3">
                <p class="interval__list>Daily</p>
                <p class="interval__list>Weekly</p>
                <p class="interval__list>Monthly</p>
            </div>
        </div>`;
        container.innerHTML += mainCard
    })


    DATA.topic_cards.map(el => {
        const element = `
        <div class="grid__item">
            <div class="grid__item--top-container ${el.topic_color}">
                <img class="grid__item--svg" src=${el.topic_icon_svg}>
            </div>
            <div class="grid__item--bottom-container">
                <div class="grid__item--bottom-1">
                    <p class="grid__item--bottom-name"> ${el.topic_name}</p>
                    <img class="grid__item--ellipsis" src=${el.ellipis_svg}>
                </div>
                <div "grid__item--bottom-2">
                    <h1 class="grid__item--hrs">${el.time_hours}</h1>
                    <p class="grid__item--last">${el.last_session_hours}</p>
                </div>
            </div>
        </div>`;
        container.innerHTML += element
    })

}
renderCards()
