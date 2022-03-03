function updateStates (setStates, statesToBeUpdated) {
    setStates (
        prevState => ({
            ...prevState,
            ...statesToBeUpdated
        })
    )
}

export default updateStates