'use client'
 
import dynamic from 'next/dynamic'
 
const ImputCMS = dynamic(() => import('imput-cms'), {
  ssr: false,
})
 
const CMS = () => (
    <ImputCMS
      {...{
        settings: {
          backend: {
            name: 'github',
            repo: 'brrock/imputest',
            branch: 'main', // the branch you want to edit, usually main or master
            base_url: 'http://localhost:3000', // the root address of your site
            auth_endpoint: 'api/authorize', // where your auth endpoint is located
              },
              media_folder: '/public/images',
              public_folder: '/images',
              collections: [
                {
                  name: 'page',
                  label: 'Page',
                  folder: '/content/pages',
                  create: true,
                  slug: '{{title}}',
                  extension: 'mdx',
                  fields: [
                    { label: 'Title', name: 'title', widget: 'string' },
                    { label: 'Content', name: 'body', widget: 'markdown' },
                  ],
                },
              ],
        },
      }}
    />
  )
 
export default CMS