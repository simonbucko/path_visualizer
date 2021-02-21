export const slideLeftAnimation = {
    hidden: {
        x: "100vw",
        opacity: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            mass: 0.5
        },
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};

export const slideRighttAnimation = {
    hidden: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            mass: 0.5
        },
    },
    exit: {
        x: "100vw",
        opacity: 0,
    },

};