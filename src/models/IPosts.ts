export interface IPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  export interface IPostsState {
    loading: boolean;
    posts: IPosts[];
    errorMsg: string;
  }
  