let commonStyle = {
    padding: 0,
    margin: 0
}
export let textColor = {
    color: '#f08080',
}

export let textStyles = {
    emphasis: {
        fontSize: 34,
        fontWeight: 600,
        ...commonStyle
    },

    smallEmpasis: {
        fontSize: 22,
        fontWeight: 400,
        ...commonStyle
    },

    small: {
        fontSize: 14,
        opacity: 0.6,
        ...commonStyle,
        ...textColor
    }
}