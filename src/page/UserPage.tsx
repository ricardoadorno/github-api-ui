import { FaArrowLeft } from "react-icons/fa";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

const UserDataListItem = ({ label, value }: { label: string; value: any }) => {
  if (!value) return null;
  return (
    <div>
      <b>{label}:</b> {value}
    </div>
  );
};

export default function UserPage() {
  const { login } = useParams();

  const getUsers = async () => {
    const res = await fetch(`https://api.github.com/users/${login}`).then(
      (res) => res.json()
    );

    console.log(res);

    return res;
  };

  const { data: userData, isLoading } = useQuery("user", getUsers);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="w-1/2 flex flex-row  bg-violet-800 shadow-xl rounded-lg m-auto relative">
      <Link to="/" className="absolute top-4 left-4 cursor-pointer">
        <FaArrowLeft className="text-lg text-white " />
      </Link>

      <div className="avatar w-1/2 m-auto p-8">
        <div className="rounded-full shadow ">
          <img src={userData?.avatar_url} alt="Profile" />
        </div>
      </div>

      <div className="w-1/2 m-auto p-4">
        <h3 className="text-2xl font-bold text-white my-4">
          {userData?.login}
        </h3>
        <div>
          <UserDataListItem label="Name" value={userData?.name} />
          <UserDataListItem label="Location " value={userData?.location} />
          <UserDataListItem label="Repos " value={userData?.public_repos} />
          <UserDataListItem label="Followers " value={userData?.followers} />
          <UserDataListItem label="Following " value={userData?.following} />
          <UserDataListItem label="Created At " value={userData?.created_at} />
        </div>
      </div>
    </div>
  );
}
