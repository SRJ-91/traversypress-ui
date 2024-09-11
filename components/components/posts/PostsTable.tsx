import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption} from '@/components/ui/table';
import Link from 'next/link';
import posts from '@/data/posts';
import { Post } from '@/types/posts';

interface PostsTablelProps {
    limit?: number;
    title?: string;
}

const PostsTable = ({ limit, title }: PostsTablelProps) => {
    return ( 
    <div className='mt-10'>
        <h3 className='text-2x1 mb-4 font-semibold'>
        {title ? title: 'Posts'}
        </h3>
        <Table>
            <TableCaption>A list of recent posts</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className='hidden md:table-cell'>Author</TableHead>
                    <TableHead className='hidden md:table-cell text-right'>Date</TableHead>
                    <TableHead>View</TableHead>
                </TableRow>
            </TableHeader>        
            <TableBody>
                {posts.map((post) => (
                    <TableRow key={post.id}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell className='hidden md:table-cell'>{post.author}</TableCell>
                        <TableCell className='hidden md:table-cell hidden md:table-cell'>{post.date}</TableCell>
                        <TableCell>
                            <Link href={'/posts/edit/${post.id}'}>
                                <button className='bg-blue-500 hover:bg0blue-700 text-white font-bold py-2 px-4 rounted text-xs'>
                                    Edit
                                </button>
                            </Link>
                        </TableCell>
                    </TableRow>   
                ))}
                </TableBody>
        </Table>
    </div> );
}
 
export default PostsTable;