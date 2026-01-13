export default {
  name: 'project',
  title: 'Meus Projetos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título do Projeto',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'image',
      title: 'Capa do Projeto',
      type: 'image',
      options: { hotspot: true }, // Permite cortar a imagem
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Link do Projeto (Opcional)',
      type: 'url',
    }
  ],
}