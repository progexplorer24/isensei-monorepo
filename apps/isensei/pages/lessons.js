import { supabase } from "@/lib/auth/client";
import Link from "next/link";

export default function Lessons({ lessons }) {
  console.log({ lessons });
  return (
    <div className="mx-auto my-16 w-full max-w-3xl px-2">
      {lessons.map((lesson) => (
        <Link key={lesson.id} href={`/${lesson.id}`}>
          <a className="mb-4 flex h-40 rounded p-8 text-xl shadow">
            {lesson.title}
          </a>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("lesson").select("*");
  return {
    props: {
      lessons,
    },
  };
};
