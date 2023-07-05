export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats"> Start adding items to your packing list 🚀 </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `You have ${numItems} items on your list, and you packed ${numPackedItems}
          (${percentage}%)`
          : "You got everything! Ready to go ✈️"}
      </em>
    </footer>
  );
}
