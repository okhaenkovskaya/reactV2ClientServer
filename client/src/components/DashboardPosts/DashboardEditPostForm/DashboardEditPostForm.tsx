import {useState} from "react";

import {FormButton, Form, Input, Textarea} from "../../Form";

type PropsNewPost = {
    _id: any;
    title: string;
    body: string;
    tag: string | [];
    categories: string | [];
    thumbnail: string
};
const DashboardEditPostForm = ({item, setShowEditForm, updatePost}) => {
    const [newPost, setNewPost] = useState<PropsNewPost>({
        _id: item._id,
        title: item.title,
        body: item.body,
        tag: item.tag.join(','),
        categories: item.categories.join(','),
        thumbnail: item.thumbnail,
    });

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        updatePost(newPost)
        setShowEditForm(false)
    };

    const handleChange = (event: Event & {
        target: HTMLButtonElement
    }) => {
        const { name, value } = event.target;
        setNewPost((prevState) =>({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangeArray = (event: Event & {
        target: HTMLButtonElement
    }) => {
        const { name, value } = event.target;
        setNewPost((prevState) =>({
            ...prevState,
            [name]: value.split(","),
        }));
    };


    return (
        <Form submitFunction={handleSubmit}>
            <Input
                changeFunction={handleChange}
                name="title"
                placeholder="title"
                value={newPost.title}
                isRequired
            />
            <Input
                changeFunction={handleChangeArray}
                name="categories"
                placeholder="categories"
                value={newPost.categories}
            />
            <Input
                changeFunction={handleChangeArray}
                name="tag"
                placeholder="tag"
                value={newPost.tag}
            />

            <Textarea
                changeFunction={handleChange}
                name="body"
                placeholder="body"
                value={newPost.body}
            />

            <FormButton>Submit</FormButton>
        </Form>
    );
};

export default DashboardEditPostForm;
