import todolist from 'assets/image/works/todolist.png'
import pizza from 'assets/image/works/pizza.png'
import sneakers from 'assets/image/works/sneakers.png'
import github from 'assets/image/works/searching.png'
import scroll from 'assets/image/works/scroll.png'
import hotels from 'assets/image/works/hotels.png'

export type WorkType = {
    title: string,
    img: string,
    link: string,
    tags: string[]
}

export const works: WorkType[] = [
    {
        title: 'Todolist',
        img: todolist,
        link: 'https://tsukimono13.github.io/To_do_list/#/',
        tags: ['React', 'Redux-Toolkit', 'TypeScript', 'Material-UI']
    },
    {
        title: 'Pizza Web Project',
        img: pizza,
        link: 'https://react-redux-pizza-blush.vercel.app/',
        tags: ['React', 'Redux-Toolkit', 'TypeScript', 'SCSS']
    },
    {
        title: 'Booking Hotels',
        img: hotels,
        link: 'https://tsukimono13.github.io/Hotels_webpage/',
        tags: ['React', 'TypeScript', 'Styled Components']
    },
    {
        title: 'Sneakers Website',
        img: sneakers,
        link: 'https://sneakers-project-wine.vercel.app/',
        tags: ['React', 'JavaScript', 'SCSS']
    },
    {
        title: 'Searching Users on Github',
        img: github,
        link: 'https://tsukimono13.github.io/Searching_username/',
        tags: ['React', 'Redux-Toolkit', 'TypeScript', 'RTK Query', 'Tailwind']
    },
    {
        title: 'Scroll WebPage',
        img: scroll,
        link: 'https://tsukimono13.github.io/Scroll_WebPage/',
        tags: ['JavaScript', 'Gsap', 'CSS', 'HTML']
    }
]