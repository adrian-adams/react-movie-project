// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// const Card = ({ title, rating }) => {
//   const [count, setCount] = useState(0);
//   const [hasLiked, setHasLiked] = useState(false);
  
//   useEffect(() => {
//     console.log(`${title} has been liked: ${hasLiked} `);
//   }, [hasLiked]);

//   useEffect(() => {
//     console.log('Card Rendered');
//   }, [])

//   return (
//     <div className="card" onClick={() => setCount(count + 1)}>
//       <h3>{title} <br /> {count || null}</h3>
//       <button type="button" className="card-like-button" onClick={() => setHasLiked(!hasLiked)}>
//         {hasLiked ? 'Liked': 'Like'}
//       </button>
//       <p>{rating}</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h2>Functional Arrow Component</h2>
//       <div className="card-container">
//         <Card title="Star Wars" rating="9/10" />
//         <Card title="Avatar" rating="8/10" />
//         <Card title="The Matrix" rating="7/10" />
//         <Card title="Pokemon" rating="5/10" />
//       </div>
//     </div>
//   )
// }