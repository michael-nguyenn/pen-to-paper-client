import "./User.scss";

import UserNav from "../../components/UserComponents/UserNav/UserNav";
import UserHeader from "../../components/UserComponents/UserHeader/UserHeader";
import UserMain from "../../components/UserComponents/UserMain/UserMain";

const User = () => {
  return (
    <>
      <UserHeader />
      <section className="user">
        <UserNav />
        <UserMain />
      </section>
    </>
  );
};

export default User;
