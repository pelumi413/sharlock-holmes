import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesData } from '../data/articles';

export const ArticleDetail: React.FC = () => {
  // Grab the article name from the URL bar
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData[slug || ''];

  // Scroll to the top of the page when an article opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/" className="text-[#FF9F00] hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#0D0D0D] text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Navigation */}
        <Link to="/" className="inline-flex items-center text-sm text-neutral-400 hover:text-[#FF9F00] mb-8 transition-colors">
          ← Back to Campaigns
        </Link>

        {/* Article Meta */}
        <div className="flex items-center gap-4 text-xs font-semibold text-[#FF9F00] mb-4 tracking-wider uppercase">
          <span>{article.category}</span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400">{article.date}</span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
          {article.title}
        </h1>

        <div className="w-full h-px bg-neutral-800 my-8"></div>

        {/* Body Content */}
        <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
};