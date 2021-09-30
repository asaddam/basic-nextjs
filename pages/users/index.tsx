import router, { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

interface UsersProps {
  dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const route = useRouter();
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card} >
          <p>
            {user.name} | {user.email}
          </p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
