export default function sitemap() {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/homepage`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/community`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/cursos`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
           url:`${process.env.NEXT_PUBLIC_BASE_URL}/cadastro`,
           lastModified:new Date().toISOString(),
           changeFrequency:'yearly',
           priority :1,
       }
   ];
}
