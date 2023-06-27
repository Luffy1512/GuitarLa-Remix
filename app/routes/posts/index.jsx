import { useLoaderData } from '@remix-run/react'
import Blog from '~/components/blog'
import { getBlogs } from '~/models/blogs.server'

export async function loader(){
    const blogs = await getBlogs()
    // console.log(blogs)
    return blogs.data
}

const Index = () => {
  const blogs = useLoaderData()
  // console.log(blogs)
  return (
    <main className="contenedor">
      <div className="blogs_grid">
        {blogs.map(blog => (
          <Blog 
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </main>
  )
}

export default Index