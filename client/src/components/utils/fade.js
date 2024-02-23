

export const FADE_IN = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.4 }
};

export const menuAnimation = {
    open: {
        opacity: 1,
        transition: { type: 'keyframes', duration: 0.2 }
    },
    closed: {
        opacity: 0,
        transition: { type: 'keyframes', duration: 0.2 }
    }
};