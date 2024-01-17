export interface IComments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  export interface ICommentsState {
    loading: boolean;
    comments: IComments[];
    errorMsg: string;
  }