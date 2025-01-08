
const today = new Date();
let dayToday = new Date(today);
let fdayToday = dayToday.toISOString().split('T')[0];

new DataTable('#moviesTable', {
  ajax: {
    url: `data/${fdayToday}.json`,
    dataSrc: '',
  },
  paging: false,
  info: false,
  order: [[ 5, "desc" ]],
  layout: {
    topStart: 'buttons',
    topEnd: {
        search: {
            text: '',
            placeholder: 'Szukaj'
        }
    }
  },
  buttons: [
    {
      text: '-3',
      action: function (e, dt) {
        let day = new Date(today);
        day.setDate(today.getDate() - 3);
        let fday = day.toISOString().split('T')[0];
        dt.ajax.url(`data/${fday}.json`).load();
      }
    },
    {
      text: '-2',
      action: function (e, dt) {
        let day = new Date(today);
        day.setDate(today.getDate() - 2);
        let fday = day.toISOString().split('T')[0];
        dt.ajax.url(`data/${fday}.json`).load();
      }
    },
    {
      text: '-1',
      action: function (e, dt) {
        let day = new Date(today);
        day.setDate(today.getDate() - 1);
        let fday = day.toISOString().split('T')[0];
        dt.ajax.url(`data/${fday}.json`).load();
      }
    },
    {
      text: 'Dziś',
      action: function (e, dt) {
        let day = new Date(today);
        let fday = day.toISOString().split('T')[0];
        dt.ajax.url(`data/${fday}.json`).load();
      }
    },
    {
      text: '+1',
      action: function (e, dt) {
        let day = new Date(today);
        day.setDate(today.getDate() + 1);
        let fday = day.toISOString().split('T')[0];
        dt.ajax.url(`data/${fday}.json`).load();
      }
    },
    {
      text: '+2',
      action: function (e, dt) {
        let day = new Date(today);
        day.setDate(today.getDate() + 2);
        let fday = day.toISOString().split('T')[0];
        dt.ajax.url(`data/${fday}.json`).load();
      }
    },
    {
      text: '+3',
      action: function (e, dt) {
        let day = new Date(today);
        day.setDate(today.getDate() + 3);
        let fday = day.toISOString().split('T')[0];
        dt.ajax.url(`data/${fday}.json`).load();
      }
    }
  ],
  columns: [
    { data: 'h' },
    { data: 'c' },
    { data: 't' },
    { data: 'g' },
    { data: 'i' },
    { data: 'r' }
  ]
});