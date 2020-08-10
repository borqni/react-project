const getNavigation = (user) => {

    const authLinks = [
        {
            title: "Статии",
            link: "/posts"
        },
        {
            title: "Добави статия",
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
            title: "Статии",
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

    const loggedIn = user && user.loggedIn
    return loggedIn ? authLinks : guestLinks
}

export default getNavigation