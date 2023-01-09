import Userinfo from "../component/userinfo/Userinfo";
import Usercardinfo from "../component/userinfo/Usercardinfo";
import AllChart from "../component/chart/AllChart";
import { GithubContext } from "../context/context";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

export default function UserInfoDetails() {
  const { getSingleUserData, getSingleUserDataRepo } =
    useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getSingleUserData(params.login);
    getSingleUserDataRepo(params.login);
  }, []);
  return (
    <div>
      <Userinfo />
      <Usercardinfo />
      <AllChart />
    </div>
  );
}
