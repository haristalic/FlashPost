import { useState, useEffect } from "react";
import "./HomePage.css";
import Post from "../../components/post/Post";
import { IUsers, IUserState } from "../../models/IUsers";
import { UsersService } from "../../services/UsersService";
import { IPosts, IPostsState } from "../../models/IPosts";
import { PostsService } from "../../services/PostsService";
import { forkJoin } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ICombinedData } from "../../models/ICombinedData";

const HomePage = (props: any) => {
  const [combinedDataState, setCombinedData] = useState<ICombinedData[]>([]);

  const [usersState, setUsersState] = useState<IUserState>({
    loading: false,
    users: [] as IUsers[],
    errorMsg: "",
  });

  const [postsState, setPostsState] = useState<IPostsState>({
    loading: false,
    posts: [] as IPosts[],
    errorMsg: "",
  });

  const searchValue = props.input;

  useEffect(() => {
    const fetchCombinedData = (): void => {
      setUsersState({ ...usersState, loading: true });
      setPostsState({ ...postsState, loading: true });

      const users$ = UsersService.getAllUsers();
      const posts$ = PostsService.getAllPosts();

      const combined$ = forkJoin({
        users: users$,
        posts: posts$,
      }).pipe(
        map(({ users, posts }) =>
          posts.map((post: IPosts) => ({
            id: post.id,
            title: post.title,
            body: post.body,
            name: users.find((user: IUsers) => user.id === post.userId)!.name,
          }))
        ),
        catchError((error) => {
          setUsersState({
            ...usersState,
            loading: false,
            errorMsg: error.message,
          });
          setPostsState({
            ...postsState,
            loading: false,
            errorMsg: error.message,
          });
          return [];
        })
      );

      const subscription = combined$.subscribe((data) => {
        setCombinedData(data);
        setUsersState({ ...usersState, loading: false });
        setPostsState({ ...postsState, loading: false });
      });
    };
    fetchCombinedData();
  }, []);

  return (
    <div className="posts-container">
      {combinedDataState
        .filter((post) =>
          post.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        )
        .map((post) => (
          <Post
            id={post.id}
            key={post.id}
            name={post.name}
            title={post.title}
            body={post.body}
          />
        ))}
    </div>
  );
};

export default HomePage;
