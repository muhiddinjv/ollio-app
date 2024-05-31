import { Card } from "react-native-paper";

export const CardElevated = ({ title, children }) => {
    return (
      <Card className="px-2 py-4 mb-4 bg-white dark:bg-slate-700 rounded-none">
        {title && <Card.Title title={title} titleVariant="titleLarge" />}
        <Card.Content>{children}</Card.Content>
      </Card>
    );
  };