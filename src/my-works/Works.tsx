import React from 'react';
import style from './Works.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";
import Title from "../common/components/title/Title";
import social from './../assets/img/social.png'
import todo from './../assets/img/todo.png'


const Works = () => {
    const socialImg = {
        backgroundImage: `url(${social})`
    }
    const todolImg = {
        backgroundImage: `url(${todo})`
    }
    /*const projectWorks = [{
        title: "Todolist",
        description: "This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository. master. Todo List is very simple and intuitive, with its minimal and clean style. In fact, it has a very fast and lightweight interface, because we care about your battery life. Enjoy!",
        imgUrl: "https://i.pinimg.com/736x/31/36/cd/3136cd447c99783f59cd1a4c7d9ca9c1.jpg"
    },
        {
            title: "Social Network",
            description: "A social network is a social structure made up of a set of social actors (such as individuals or organizations), sets of dyadic ties, and other social interactions between actors.",
            imgUrl: "https://journal.syfer.ru/wp-content/uploads/2021/12/6-3-1024x878.jpg"
        }]*/
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.works}>
                   {/* {projectWorks.map((pr, index) => (
                        <Work key={index} title={pr.title} description={pr.description} image={pr.imgUrl}/>
                    ))}*/}
                    <Work style={todolImg} title={'Todolist'} description={'This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository. master. Todo List is very simple and intuitive, with its minimal and clean style. In fact, it has a very fast and lightweight interface, because we care about your battery life. Enjoy!'}/>
                <Work style={socialImg} title={'Social Network'} description={'A social network is a social structure made up of a set of social actors (such as individuals or organizations), sets of dyadic ties, and other social interactions between actors.'}/>
                </div>
            </div>
        </div>
    );
};

export default Works;