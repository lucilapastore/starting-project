export default function TabButton({ children, onSelect }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

/* Another way: with object destructuring
export default function TabButton ({children}) {
  return (
    <li>
      <button>{children}</button>
    </li>
  )
}
*/
