import authenticate from "./authenticate"

const getNavigation = (loggedIn, user) => {

    const authLinks = [
        {
            title: "Новини",
            link: "/posts"
        },
        {
            title: "Добави новина",
            link: "/sharePost"
        },
        {
            title: "Животни",
            link: "/pets"
        },
        {
            title: "Добави животно",
            link: "/sharePet"
        },
        {
            title: "Профил",
            link: `/profile/${user && user.id}`
        },
        {
            title: "Изход",
            link: "/logout"
        }
    ]

    const guestLinks = [
        {
            title: "Новини",
            link: "/posts"
        },
        {
            title: "Вход",
            link: "/login"
        },
        {
            title: "Регистрация",
            link: "/register"
        }
    ]

    return loggedIn ? authLinks : guestLinks
}

export default getNavigation