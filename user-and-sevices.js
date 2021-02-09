const USERS_DATA = Object.freeze({
  settings: {},
  users: [
    {
      id: 1,
      name: 'Александрова Рэй Алексеевна',
      enabledServices: [
        6,
        3,
        4,
        5,
        1,
        2,
      ],
      servicesEnableDates: {
        '1': 1588765548479,
        '2': 1588765548479,
        '3': 1588165973112,
        '4': 1588165973112,
        '5': 1588165973112,
        '6': 1588122833128,
      },
    },
    {
      id: 2,
      name: 'Вадимова Женя Владимирович',
      enabledServices: [
        1,
        2,
        3,
      ],
      servicesEnableDates: {
        '1': 1588764468990,
        '2': 1588764468990,
        '3': 1588764494224,
      },
    },
  ],
  services: [
    {
      id: 1,
      title: 'Определитель номера',
      fee: 99,
    },
    {
      id: 2,
      title: 'Переадресация вызова (периодическая)',
      fee: 200,
    },
    {
      id: 3,
      title: 'Автоответчик',
      fee: 150,
    },
    {
      id: 4,
      title: 'Доставка счета по электронной почте',
      fee: 0,
    },
    {
      id: 5,
      title: 'Служба коротких сообщений',
      fee: 100,
    },
    {
      id: 6,
      title: 'Ежемесячная плата МТС Бизнес Smart',
      fee: 600,
    },
    {
      id: 7,
      title: '+ 10 ГБ',
      fee: 200,
    },
    {
      id: 8,
      title: 'Блокировка Интернета пользователям модемов',
      fee: 0,
    },
    {
      id: 9,
      title: 'Доступ без настроек',
      fee: 0,
    },
    {
      id: 10,
      title: 'Входящие в поездках по России',
      fee: 300,
    },
  ],
})

module.exports = USERS_DATA;