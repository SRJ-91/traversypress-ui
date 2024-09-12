import PostsTable from "@/components/components/posts/PostsTable";
import BackButton from "@/components/components/BackButton";

const PostsPage = () => {
    return ( 
    <>
    <BackButton text="Go Back" link="/" />
    <PostsTable />
    </>
);
}
 
export default PostsPage;