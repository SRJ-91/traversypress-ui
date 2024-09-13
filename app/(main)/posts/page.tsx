import PostsTable from "@/components/components/posts/PostsTable";
import BackButton from "@/components/components/BackButton";
import PostsPagination from "@/components/components/posts/PostsPagination";

const PostsPage = () => {
    return ( 
    <>
    <BackButton text="Go Back" link="/" />
    <PostsTable />
    <PostsPagination />
    </>
);
}
 
export default PostsPage;