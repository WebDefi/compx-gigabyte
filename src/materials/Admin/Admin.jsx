import { Admin, Resource } from "react-admin";
import { GroupCreate, GroupList } from "./components/groups";
import dashboard from "./dashboard";
import dataProvider from "./dataProvider";
import { SliderCreate, SliderList } from "./components/slider";
import { NewsCreate, NewsList } from "./components/news";
import { SalesList } from "./components/sales";
import { GamesList } from "./components/games";

const AdminPanel = () => {
  return (
    <Admin dataProvider={dataProvider} dashboard={dashboard}>
      <Resource name="groups" list={GroupList} create={GroupCreate} />
      <Resource name="slider" list={SliderList} create={SliderCreate} />
      <Resource name="news" list={NewsList} create={NewsCreate} />
      <Resource name="sales" list={SalesList} />
      {/* <Resource name="games" list={GamesList} /> */}

      {/* <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      /> */}
    </Admin>
  );
};

export default AdminPanel;
