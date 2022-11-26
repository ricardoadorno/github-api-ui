import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

type UserInfo = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  html_url: string;
  blog: string;
  location: string;
  company: string;
};

type UserRepos = [
  repo: {
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
  }
];

function UserPage() {
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);
  const [userRepos, setUserRepos] = React.useState<UserRepos | []>([]);

  const params = useParams();

  const getUser = async (login: string) => {
    const res = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/users/${login}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    setUserInfo(data);
  };

  const getUserRepos = async (login: string) => {
    const res = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/users/${login}/repos`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    setUserRepos(data);

    console.log(data);
  };

  useEffect(() => {
    getUser(params.login as string);
    getUserRepos(params.login as string);
  }, []);

  if (userInfo) {
    return (
      <div>
        <div>
          <div>{userInfo.name}</div>
          <div>{userInfo.bio}</div>
          <div>{userInfo.followers}</div>
          <div>{userInfo.following}</div>
          <div>{userInfo.public_repos}</div>
          <div>{userInfo.public_gists}</div>
          <div>{userInfo.html_url}</div>
          <div>{userInfo.blog}</div>
          <div>{userInfo.location}</div>
          <div>{userInfo.company}</div>
        </div>
        <div>
          {userRepos.map((repo) => (
            <div key={repo.name}>
              <div>{repo.name}</div>
              <div>{repo.description}</div>
              <div>{repo.html_url}</div>
              <div>{repo.language}</div>
              <div>{repo.stargazers_count}</div>
              <div>{repo.forks_count}</div>
              <div>{repo.open_issues_count}</div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserPage;
