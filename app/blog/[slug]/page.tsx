import { redirect } from "next/navigation";

export default function BlogPostRedirect({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/insights/${params.slug}`);
}
