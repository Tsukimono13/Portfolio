import todolist from 'assets/image/works/todolist.png'
import pizza from 'assets/image/works/pizza.png'
import sneakers from 'assets/image/works/sneakers.png'
import github from 'assets/image/works/searching.png'
import scroll from 'assets/image/works/scroll.png'
import hotels from 'assets/image/works/hotels.png'
import news from 'assets/image/works/newsApp.png'
import luxus from 'assets/image/works/luxus.png'
import articles from 'assets/image/works/articles.png'
import social from 'assets/image/works/social.png'

export type WorkType = {
    title: string
    img: string
    link: string
    category: string
    tags: string[]
    hasVideo?: boolean
}

export const works: WorkType[] = [
    {
        title: 'Production Web site',
        img: luxus,
        link: 'https://luxusco.com/',
        category: 'web',
        tags: ['React', 'Redux', 'TypeScript', 'SCSS']
    },
    {
        title: 'Articles App',
        img: articles,
        link: 'https://github.com/Tsukimono13/Production_project',
        category: 'web',
        tags: ['React', 'Redux-Toolkit', 'RTK Query', 'TypeScript']
    },
    {
        title: 'Social App',
        img: social,
        link: 'https://github.com/Tsukimono13/Social-App',
        category: 'web',
        tags: ['React', 'Redux-Toolkit', 'RTK Query', 'TypeScript']
    },
    {
        title: 'Todolist',
        img: todolist,
        link: 'https://tsukimono13.github.io/To_do_list/#/',
        category: 'web',
        tags: ['React', 'Redux-Toolkit', 'TypeScript', 'Material-UI']
    },
    {
        title: 'Pizza Web Project',
        img: pizza,
        category: 'web',
        link: 'https://react-redux-pizza-blush.vercel.app/',
        tags: ['React', 'Redux-Toolkit', 'TypeScript', 'SCSS']
    },
    {
        title: 'Booking Hotels',
        img: hotels,
        category: 'web',
        link: 'https://tsukimono13.github.io/Hotels_webpage/',
        tags: ['React', 'TypeScript', 'Styled Components']
    },
    {
        title: 'Sneakers Website',
        img: sneakers,
        category: 'web',
        link: 'https://sneakers-project-wine.vercel.app/',
        tags: ['React', 'JavaScript', 'SCSS']
    },
    {
        title: 'Searching Users on Github',
        img: github,
        category: 'web',
        link: 'https://tsukimono13.github.io/Searching_username/',
        tags: ['React', 'Redux-Toolkit', 'TypeScript', 'RTK Query', 'Tailwind']
    },
    {
        title: 'Scroll WebPage',
        img: scroll,
        category: 'web',
        link: 'https://tsukimono13.github.io/Scroll_WebPage/',
        tags: ['JavaScript', 'Gsap', 'CSS', 'HTML']
    },
    {
        title: 'News App',
        img: news,
        category: 'mobile',
        link: 'https://github.com/Tsukimono13/News_app',
        tags: ['React Native', 'JavaScript', 'Styled Components'],
        hasVideo: true
    }
]