import Link from "next/link";

export default function Users({user}){
    return (
        <>
          <Link href="/">HEEEEEEy</Link>
          <h1>{user.name}</h1>
           <h1>{user.email}</h1>
            <h1>{user.username}</h1>
        </>
    )
}

export async function getStaticPaths(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(user=>{
    return {
        params: {
            users : user.id.toString()
        }
    }
  });
// console.log(paths);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
    const id = params.users;
    console.log(id);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    return {
        props : {
            user : data,
        }
    }
}