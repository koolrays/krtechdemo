export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec0c93a9a08505bc0e50b9d',
                  title: 'Sanity Studio',
                  name: 'krtechdemo-studio',
                  apiId: '7095633b-56b1-48bc-b023-f97a9062ff22'
                },
                {
                  buildHookId: '5ec0c93a9a085075d2e50b29',
                  title: 'Landing pages Website',
                  name: 'krtechdemo',
                  apiId: '72f115be-4360-410f-8cac-b05b07f74f96'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koolrays/krtechdemo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://krtechdemo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
