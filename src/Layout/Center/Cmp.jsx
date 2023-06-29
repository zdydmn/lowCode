export default function Cmp({ cmp }) {
    const { value, style } = cmp
    return <div style={style}>
        {value}
    </div>
}