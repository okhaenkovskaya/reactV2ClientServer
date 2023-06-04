import {useState} from "react";
import axios from "axios";

import {BASE_URL_POSTS} from "../../../data/constans.ts";
import {FormButton, Form, Input, Textarea} from "../../Form";

type PropsNewPost = {
    title: string;
    body: string;
    name: string;
    tag: string;
    categories: string;
    thumbnail: string | null;
};
const DashboardNewPostForm = ({getPosts}) => {
    const [hiddenForm, setHiddenForm] = useState<boolean>(false);
    const [newPost, setNewPost] = useState<PropsNewPost>({
        title: "",
        body: "",
        tag: "",
        categories: "",
        thumbnail: null,
        name: "",
    });

    const handleSubmit = async (e: Event) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            Object.entries(newPost).forEach(([key, value]) => {
                if(Array.isArray(value)) {
                    value.forEach((item) =>{
                        formData.append(key, item);
                    })
                } else {
                    formData.append(key, value);
                }
            })

            const res = await axios.post(BASE_URL_POSTS, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setHiddenForm(!hiddenForm);
            getPosts();

        } catch (error) {
            console.log("Error", error);
        }
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

    const handleFileChange = (e: any) => {
        const { name, files } = e.target;
        setNewPost((prevState) => ({
            ...prevState,
            [name]: files[0],
        }));
    };

    return (
        <div>
            {hiddenForm ? (
                <span>New Post added</span>
            ) : (
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
                    <Input
                        changeFunction={handleFileChange}
                        name="thumbnail"
                        type="file"
                        isRequired
                    />
                    <Textarea
                        changeFunction={handleChange}
                        name="body"
                        placeholder="body"
                        value={newPost.body}
                    />

                    <FormButton>Submit</FormButton>
                </Form>
            )}
        </div>
    );
};

export default DashboardNewPostForm;