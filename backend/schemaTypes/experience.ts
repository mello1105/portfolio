export default {
  name: 'experience',
  title: 'Experiência Profissional',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Empresa',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Cargo',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descrição das Atividades',
      type: 'text',
    },
    {
      name: 'startDate',
      title: 'Data de Início',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Hoje'
      }
    },
    {
      name: 'endDate',
      title: 'Data de Término',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Hoje'
      },
      hidden: ({document}: any) => document?.isCurrent // Hide if current is true
    },
    {
      name: 'isCurrent',
      title: 'Trabalho Atual?',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'role'
    }
  }
}
