declare namespace dashboardPostContent {

    type Post = {
        _id: number | string;
        title: string;
        body: string;
        status: string;
        tag: [];
        categories: [];
        thumbnail: string;
        likes: number;
        views: number;
        createdAt: string;
        comments: []
    };
}