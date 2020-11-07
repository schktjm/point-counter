
export const Parent = () => {
    return <Children>{() => 'bar'}</Children>
}

const Children = (_, { slots }) => {
    return <div onClick={() => console.log('hello')}>{slots.default()}</div>
}

