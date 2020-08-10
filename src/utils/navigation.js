const getNavigation = (userId) => {

    const links = [
        {
            title: "Новини",
            link: "/news"
        },

        {
            title: "Добави новина",
            link: "/shareNew"
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
            link: `/profile/${userId}`
        },

        {
            title: "Изход",
            link: "/logout"
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

    return links
}

export default getNavigation