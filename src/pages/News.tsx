import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Newspaper, ArrowLeft } from 'lucide-react';
import { articlesData } from '../data/articles';

interface PageProps {
  isDark: boolean;
}

const News: React.FC<PageProps> = ({ isDark }) => {
  const articleEntries = Object.entries(articlesData);

  return (
    <div className={`min-h-screen pt-36 pb-24 transition-colors duration-500 ${isDark ? 'bg-[#0D0D0D]' : 'bg-[#F9F9F9]'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl mb-20">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'}`}>
            <Newspaper className="w-4 h-4 text-[#FF9F00]" />
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Press Room
            </span>
          </div>
          <h1 className={`text-5xl lg:text-7xl font-black leading-[1.1] mb-8 uppercase italic tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            Latest <span className="text-[#FF9F00]">News.</span>
          </h1>
          <p className={`${isDark ? 'text-neutral-400' : 'text-neutral-600'} text-lg leading-relaxed`}>
            Stay up to date with the latest from Road Alertness Promotion Initiative, including campaign updates, partnership announcements, press coverage and stories from the communities we serve.
          </p>
        </div>

        <hr className={isDark ? 'border-neutral-900 mb-20' : 'border-neutral-200 mb-20'} />

        <div className="flex flex-col gap-6 max-w-4xl">
          {articleEntries.map(([slug, article]) => {
            const preview = article.content[0] || 'Read the full article to learn more.';

            return (
              <Link key={slug} to={`/news/${slug}`} className="block group">
                <div className={`border rounded-xl p-8 transition-all duration-300 group flex flex-col md:flex-row items-start md:items-center gap-6 justify-between ${
                  isDark ? 'bg-[#141414] border-neutral-800 hover:border-[#FF9F00]' : 'bg-white border-neutral-200 hover:border-[#FF9F00] shadow-sm'
                }`}>
                  <div className="flex items-start gap-6 max-w-2xl">
                    <div className={`p-3 border rounded-lg group-hover:text-[#FF9F00] group-hover:border-[#FF9F00]/30 transition-colors hidden sm:block ${
                      isDark ? 'bg-[#0D0D0D] border-neutral-800 text-neutral-500' : 'bg-neutral-50 border-neutral-200 text-neutral-400'
                    }`}>
                      <Newspaper className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF9F00] bg-[#FF9F00]/5 border border-[#FF9F00]/20 px-2.5 py-0.5 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">{article.date}</span>
                      </div>
                      <h3 className={`text-xl font-bold uppercase tracking-wide mb-2 group-hover:text-[#FF9F00] transition-colors ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                        {article.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        {preview}
                      </p>
                      <div className="mt-6 flex items-center text-sm font-medium text-[#FF9F00] group-hover:underline">
                        Read Full Article
                        <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ArticleDetail: React.FC<PageProps> = ({ isDark }) => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesData[slug] : undefined;

  if (!article) {
    return (
      <div className={`min-h-screen pt-36 pb-24 transition-colors duration-500 ${isDark ? 'bg-[#0D0D0D]' : 'bg-[#F9F9F9]'}`}>
        <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24">
          <Link to="/news" className={`inline-flex items-center gap-2 mb-8 text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-neutral-400 hover:text-[#FF9F00]' : 'text-neutral-600 hover:text-[#FF9F00]'}`}>
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
          <div className={`rounded-3xl border p-10 ${isDark ? 'bg-[#141414] border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}>
            <h1 className={`text-3xl font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              Article Not Found
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-36 pb-24 transition-colors duration-500 ${isDark ? 'bg-[#0D0D0D]' : 'bg-[#F9F9F9]'}`}>
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24">
        <Link to="/news" className={`inline-flex items-center gap-2 mb-8 text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-neutral-400 hover:text-[#FF9F00]' : 'text-neutral-600 hover:text-[#FF9F00]'}`}>
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>

        <div className={`rounded-3xl border p-10 ${isDark ? 'bg-[#141414] border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF9F00]">
            {article.category}
          </span>
          <h1 className={`text-4xl lg:text-5xl font-black leading-tight mt-4 mb-3 uppercase italic tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            {article.title}
          </h1>
          <div className={`flex flex-wrap gap-4 text-sm mb-8 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;