import React from 'react'
import styles from './index.module.css'

const Post = ({ description, image, title, author }) => {

    return (
        <div>
            {/* <h1>Posts</h1> */}
            <h4>За да добавите статия трябва да имате регистрация и да сте влезли в профила си</h4>

            <span className={styles.post}>
                <h3 className={styles.title}>Какво ви е необходимо за да отглеждате фретка?</h3>
                {/* <img className={styles.image} src="https://i.pik.bg/news/650/660_dec7d92ef99704d6780098e6abf6125d.jpg" /> */}
                <p>Най – важното е да сте сигурни, че те са подходящия любимец за вас и вашето семейство!

                Наистина тези животинки не са за всеки. Изискват определени грижи и внимание. Трябва да сте сигурни, че ще можете да отделяте достатъчно време за игра с тях извън „къщата“ им, да се занимавате с обучението им. Те са игриви и палави и не стоят на едно място, така че ако искате да гушкате любимеца си по-добре се ориентирайте към котка или куче. Имат склонност да хапят на игра, когато са малки, но иначе не са агресивни повече от което и да е застрашено по някакъв начин домашно животно.

                Тяхното любопитство ги прави безстрашни, но може да ги забърка в какви ли не опасни за тях ситуации. Трябва да се наблюдават от близо, за да не се наранят или да не направят някоя беля.:) Тъй като живеят в дупки, склонността им да се провират през тесни пространства може да им навлече неприятности, за това преди да си вземете такова животинче трябва да обезопасите дома си или първоначално стаята в която то ще си играе.

                Също така домашните растения трябва да се отстранят или да се вдигнат на недостъпно място, защото ще пострадат от изравяне или ще бъдат погълнати, а това не е добре за вашата фретка, тъй като някои от декоративните растения са отровни.

Трябва да предвидите средства за клетка, гранули за тоалетна, храна, витамини и ветеринарни грижи.</p>
                <p className={styles.author}>Автор: Pesho{author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h3 className={styles.title}>{title}</h3>
                <img className={styles.image} src={image} />
                <p>description</p>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h3 className={styles.title}>title</h3>
                <img className={styles.image} src={image} />
                <p>{description}</p>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h3 className={styles.title}>title</h3>
                {/* <img className={styles.image} src={image} /> */}
                <p>description</p>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h3 className={styles.title}>title</h3>
                {/* <img className={styles.image} src={image} /> */}
                <p>description</p>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
            <span className={styles.post}>
                <h3 className={styles.title}>title</h3>
                {/* <img className={styles.image} src={image} /> */}
                <p>description</p>
                <p className={styles.author}>Автор: {author}</p>
                {/* <button className={styles.button}> Like </button> */}
                {/* <a href="#"><button className={styles.button}>Details</button></a> */}
                {/* <a href="#"><className={styles.button}>Delete</button></a> */}
            </span>
        </div>
    )
}

export default Post