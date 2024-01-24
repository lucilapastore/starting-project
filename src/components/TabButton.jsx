export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
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
