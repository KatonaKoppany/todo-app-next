import { PageWrapper } from "@/components/shared/PageWrapper";
import CompletedTodos from "@/components/todos/completed/CompletedTodos";

export default function CompletedTodosPage() {
  return <PageWrapper component={<CompletedTodos />} />;
}
