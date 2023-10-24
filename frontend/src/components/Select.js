

export default function Select({ name, defaultValue, className, handleChange, children }) {
    return (
        <select name={name} defaultValue={defaultValue} className={className} onChange={handleChange} >
            {children}
        </select>
    )
}
