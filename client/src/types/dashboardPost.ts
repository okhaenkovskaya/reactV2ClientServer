declare namespace dashboardPostContent {

    type Post = {
        _id: number | string;
        title: string;
        body: string;
        status: string;
        tag: [];
        categories: [];
        thumbnail: string;
        likes: number | string;
        views: number | string;
        createdAt: string;
        comments: []
    };
}