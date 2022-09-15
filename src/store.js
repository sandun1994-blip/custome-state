function createStore(inititalState) {
    let currentState = inititalState
    const listeners = new Set()



    return {
        getState: () => currentState,
        setState: (newState) => {
            currentState = newState
            console.log(listeners);
             listeners.forEach((listener) => listener(currentState))
        },
        subscribe: (listener) => {
            listeners.add(listener)
            console.log('subscribe',listeners);
            return () => listeners.delete(listener)
        }
    }
}

const store = createStore({
    value1: 0,
    value2: 0
})

export default store