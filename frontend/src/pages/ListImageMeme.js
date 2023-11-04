import CartImage from "../components/CartImage";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
export default function ListImageMeme() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        {arr.map(ele => (
          <CartImage />
        ))}

      </div>
    </div>
  )
}
