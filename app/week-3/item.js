export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between py-2">
      <span>{name}</span>
      <span>{quantity}</span>
      <span>{category}</span>
    </li>
  );
}
