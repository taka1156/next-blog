import { ClassificationListItem } from '../ClassificationListItem/ClassificationListItem';

type ClassificationList = {
  items: CommonClassificationItems | [];
  routePath: string;
};

const ClassificationList = ({ items, routePath }: ClassificationList) => {
  if (items.length !== 0) {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ClassificationListItem item={item} routePath={routePath} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>{routePath}がありません。</p>;
  }
};

export { ClassificationList };
