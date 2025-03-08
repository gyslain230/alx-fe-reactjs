import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const ReactQueryExample = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, isError, isLoading } = useQuery('fetchPosts', fetchPosts);

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return <div>Error loading data</div>;

    // Render the fetched data
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default ReactQueryExample;