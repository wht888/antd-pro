export const menuFormat = (list: any[]) => {
  let menu: any[] = [];
  list.map((item) => {
    if (!item.parentId) {
      item.children = [];
      menu.push(item);
    }
  });
  list.map((item) => {
    if (item.parentId) {
      menu.map((item2, index2) => {
        if (item2.id == item.parentId) {
          menu[index2].children.push(item);
        }
      });
    }
  });
  return menu;
};
