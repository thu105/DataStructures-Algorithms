/** Example file/folder data. */
export const files = [
  {
    name: 'Array',
    access: 'O(1)',
    search: 'O(n)',
    insert: 'O(n)',
    delete: 'O(n)',
    children: [
      {
        name: 'Content',
        access: 'O(1)',
        search: 'O(n)',
        insert: 'O(n)',
        delete: 'O(n)',
      },
    ]
  },
  {
    name: 'Stack',
    access: 'O(n)',
    search: 'O(n)',
    insert: 'O(1)',
    delete: 'O(1)',
  }
];
