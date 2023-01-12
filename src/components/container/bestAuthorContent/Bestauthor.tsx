import Bestauthorchild from "./child/BestauthorChild";

const datas = [
  {
    title: "George Martin",
    src: "https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwb2xkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    number: 8,
  },
  {
    title: "Stephen Edwin King",
    src: "https://images.unsplash.com/photo-1544819576-82e8d26e7d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    number: 68,
  },
  {
    title: "Adam Siltvera",
    src: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    number: 16,
  },
  {
    title: "J.K.Rowling",
    src: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    number: 13,
  },
  {
    title: "Colleen Hoover",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    number: 8,
  },
  {
    title: "Tailor Jenkins Reid",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    number: 13,
  },
];

const Bestauthor = () => {
  return (
    <div className="BEST AUTHOR">
      <h2 className="font-semibold my-5">Best author</h2>
      <ul className="grid grid-cols-3 gap-6">
        {datas.map((data) => {
          return <Bestauthorchild {...data} />;
        })}
      </ul>
    </div>
  );
};

export default Bestauthor;
