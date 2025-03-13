import Link from "next/link";
import React from "react";

const NewsArticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Read in language {lang}</p>
      <ul>
        <li>
          <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        </li>
        <li>
          <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        </li>
        <li>
          <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsArticle;
