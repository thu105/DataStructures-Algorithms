interface DataStructureNode {
    name: string;
    access: string;
    search: string;
    insert: string;
    delete: string;
    children?: DataStructureNode[];
}
  
export const TREE_DATA: DataStructureNode[] = [
  {
    name: 'Array',
    access: 'O(1)',
    search: 'O(n)',
    insert: 'O(n)',
    delete: 'O(n)',
  }, {
    name: 'Stack',
    access: 'O(n)',
    search: 'O(n)',
    insert: 'O(1)',
    delete: 'O(1)',  
  },
];