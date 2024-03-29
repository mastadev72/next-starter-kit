import { getPostBySlug } from '@/lib/posts'

const Page = async ({ params }) => {
    const { slug } = params

    const { content, frontmatter } = await getPostBySlug(slug)

    return (
        <section className='py-24'>
            <div className='container'>
                {/* {Post frontmatter} */}
                <header className='rounded bg-gray-100 p-8'>
                    <h1 className='font-serif text-3xl'>Learn Nextjs</h1>
                    <p className='tracking-width text-sm font-light uppercase leading-snug'>
                        MastaDEV
                    </p>
                </header>
                {/* {Post content} */}
                <main className='prose mt-12'>{content}</main>
            </div>
        </section>
    )
}

export default Page
