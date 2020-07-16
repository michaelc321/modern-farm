const potatoObject = [
    {
        type: "potato",
        height: 32,
        output: 2
    }
]

export const createPotato = () => {
    return potatoObject.slice()
}