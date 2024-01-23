export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button className="active" onClick={onSelect}>
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
