import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from "next/link";


export default function Home({users}) {
  return (
    <>
    {
      users.map((user)=>(
        <div>
        <Link href={`/users/${user.id}`} key={user.id}>
          {user.name}
          </Link>
          </div>
      ))
    }
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return{
    props: {
      users : data,
    }
  }
}