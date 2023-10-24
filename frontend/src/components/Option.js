
export default function Option({ value, text, children }) {
    return (
        <option value={value}>{text}{children}</option>
    )
}
