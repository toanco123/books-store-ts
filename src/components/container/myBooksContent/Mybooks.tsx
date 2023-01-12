import MybooksChild from "./MybooksChild";

const datas = [
  {
    title: "The black kiss",
    description: "Colleen Hoover",
    src: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80",
  },
  {
    title: "The Love Prescription",
    description: "John Gottman",
    src: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Defend the Drawn",
    description: "Colleen Hoover",
    src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

function Mybooks() {
  return (
    <div className="MY BOOKS">
      <h2 className="font-medium mt-10">My book</h2>
      <ul className="mt-5 flex justify-between">
        {datas.map((data) => {
          return <MybooksChild {...data} />;
        })}
      </ul>
    </div>
  );
}

export default Mybooks;
