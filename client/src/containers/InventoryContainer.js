// useEffect(() => {
//     let fetches = createFetches()
//     Promise.all(fetches)
//     .then(response => response.json())
//     .then(data => setInVENTORY(data))
//   }, [])
  
//   const createFetches = () => {
//     let fetches = [];
//     fetches.add(fetch('http://localhost:8080/api/tvs'));
//     fetches.add(fetch('http://localhost:8080/api/monitors'));
//     fetches.add(fetch('http://localhost:8080/api/laptops'));
//     return fetches;
  