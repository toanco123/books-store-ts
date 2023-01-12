import MostpopularChild from "./MostpopularChild";

const datas = [
  {
    id: 1,
    title: "EL gran regreso de carrie soto",
    description: "Taylor Jenkins Reid",
    coust: "$16",
    src: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80",
  },
  {
    id: 2,
    title: "The Love Prescription",
    description: "John Gottman",
    coust: "$17",
    src: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    title: "Defend the Drawn",
    description: "Colleen Hoover",
    coust: "$15",
    src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 4,
    title: "Defend the Drawn",
    description: "Colleen Hoover",
    coust: "$25",
    src: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    id: 5,
    title: "Defend the Drawn",
    description: "Colleen Hoover",
    coust: "$45",
    src: "https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  },
  {
    id: 6,
    title: "Defend the Drawn",
    description: "Colleen Hoover",
    coust: "$35",
    src: "https://images.unsplash.com/photo-1555252586-d77e8c828e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    id: 7,
    title: "Defend the Drawn",
    description: "Colleen Hoover",
    coust: "$25",
    src: "https://images.unsplash.com/photo-1633580969859-ee2aa7fd2648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 8,
    title: "Defend the Drawn",
    description: "Colleen Hoover",
    coust: "$45",
    src: "https://images.unsplash.com/photo-1612969308146-066d55f37ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 9,
    title: "Defend the Drawn",
    description: "Colleen Hoover",
    coust: "$35",
    src: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80",
  },
];

const Mostpopular = () => {
  return (
    <div className="MOST POPULAR THIS WEEK">
      <h2 className="font-semibold my-5">Most popular this week</h2>
      <ul className="grid grid-cols-3 gap-4">
        {datas.map((data) => {
          return <MostpopularChild {...data} />;
        })}
      </ul>
    </div>
  );
};

export default Mostpopular;
